import { PageHeader } from '@/components/layout/PageHeader';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" subtitle="Profile, notifications, and team." />
      <div className="p-4 rounded-md bg-white shadow-sm">
        <div className="text-sm text-gray-600">Settings coming soon…</div>
      </div>
    </div>
  );
}