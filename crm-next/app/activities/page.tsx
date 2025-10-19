import { PageHeader } from '@/components/layout/PageHeader';

export default function ActivitiesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Activities" subtitle="Global timeline of CRM events." />
      <div className="p-4 rounded-md bg-white shadow-sm">
        <div className="text-sm text-gray-600">Activity feed coming soon…</div>
      </div>
    </div>
  );
}