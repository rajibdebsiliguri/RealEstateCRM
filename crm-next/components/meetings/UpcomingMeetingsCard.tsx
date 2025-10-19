'use client';

import Link from 'next/link';
import { useUpcomingMeetings } from '@/features/meetings/hooks/useUpcomingMeetings';
import { formatRelative, parseISO } from 'date-fns';

export function UpcomingMeetingsCard({ limit = 5 }: { limit?: number }) {
  const { data, isLoading } = useUpcomingMeetings({ limit });

  if (isLoading) return <div className="p-4 rounded-md bg-white shadow-sm">Loading meetings...</div>;
  if (!data || data.length === 0)
    return <div className="p-4 rounded-md bg-white shadow-sm">No upcoming meetings</div>;

  return (
    <div className="p-4 rounded-md bg-white shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Upcoming meetings</h3>
        <Link href="/meetings" className="text-xs text-brand-700 hover:underline">View all</Link>
      </div>
      <ul className="space-y-3">
        {data.slice(0, limit).map((m) => (
          <li key={m.id} className="flex items-start justify-between">
            <div>
              <div className="text-sm font-medium">{m.title}</div>
              <div className="text-xs text-gray-600">
                {formatRelative(parseISO(m.startAt), new Date())}
                {m.location ? ` • ${m.location}` : ''}
              </div>
              {m.relatedEntity ? (
                <div className="text-xs text-gray-500">
                  Linked to {m.relatedEntity.type} • {m.relatedEntity.id}
                </div>
              ) : null}
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/meetings/${m.id}`} className="text-xs text-brand-700 hover:underline">
                Open
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}