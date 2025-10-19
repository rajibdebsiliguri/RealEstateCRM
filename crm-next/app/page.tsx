import { PageHeader } from '@/components/layout/PageHeader';
import { UpcomingMeetingsCard } from '@/components/meetings/UpcomingMeetingsCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" subtitle="Overview of your pipeline, tasks, and meetings." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <UpcomingMeetingsCard />
        <div className="p-4 rounded-md bg-white shadow-sm">
          <h3 className="text-sm font-semibold mb-2">Stats</h3>
          <div className="text-sm text-gray-600">Leads, deals, tasks coming here…</div>
        </div>
        <div className="p-4 rounded-md bg-white shadow-sm">
          <h3 className="text-sm font-semibold mb-2">Activity</h3>
          <div className="text-sm text-gray-600">Recent activity feed…</div>
        </div>
      </div>
    </div>
  );
}