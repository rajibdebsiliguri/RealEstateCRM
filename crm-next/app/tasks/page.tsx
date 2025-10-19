import { PageHeader } from '@/components/layout/PageHeader';
import { UpcomingMeetingsCard } from '@/components/meetings/UpcomingMeetingsCard';

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Tasks" subtitle="Plan and track action items." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-4 rounded-md bg-white shadow-sm">
          <div className="text-sm text-gray-600">Tasks list coming soon…</div>
        </div>
        <UpcomingMeetingsCard />
      </div>
    </div>
  );
}