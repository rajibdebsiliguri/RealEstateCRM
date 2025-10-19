'use client';

import { useUpcomingMeetings } from '@/features/meetings/hooks/useUpcomingMeetings';
import { format } from 'date-fns';

export function MeetingsPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { data } = useUpcomingMeetings({ limit: 20 });

  return (
    <div
      className={`fixed inset-0 z-50 transition ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-[28rem] bg-white shadow-xl transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-sm font-semibold">Upcoming meetings</h2>
          <button className="text-sm text-gray-600 hover:text-gray-900" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="p-4 space-y-3 overflow-y-auto h-full">
          {!data || data.length === 0 ? (
            <div className="text-sm text-gray-600">No upcoming meetings</div>
          ) : (
            data.map((m) => (
              <div key={m.id} className="p-3 rounded-md border">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm font-medium">{m.title}</div>
                    <div className="text-xs text-gray-600">
                      {format(new Date(m.startAt), 'EEE, MMM d • h:mma')}
                    </div>
                    {m.location ? (
                      <div className="text-xs text-gray-600">{m.location}</div>
                    ) : null}
                  </div>
                  <div className="text-xs text-gray-500">{m.status}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  );
}