import { PageHeader } from '@/components/layout/PageHeader';
import { UpcomingMeetingsCard } from '@/components/meetings/UpcomingMeetingsCard';

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Leads" subtitle="Track and qualify potential clients." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-4 rounded-md bg-white shadow-sm">
          <div className="text-sm text-gray-600">Leads board coming soon…</div>
        </div>
        <UpcomingMeetingsCard />
      </div>
    </div>
  );
}