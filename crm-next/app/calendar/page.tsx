import { PageHeader } from '@/components/layout/PageHeader';
import { UpcomingMeetingsCard } from '@/components/meetings/UpcomingMeetingsCard';

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Calendar" subtitle="Visualize meetings and schedule." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-4 rounded-md bg-white shadow-sm">
          <div className="text-sm text-gray-600">Calendar component coming soon…</div>
        </div>
        <UpcomingMeetingsCard />
      </div>
    </div>
  );
}