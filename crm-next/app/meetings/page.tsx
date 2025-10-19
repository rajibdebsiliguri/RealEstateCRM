import { PageHeader } from '@/components/layout/PageHeader';
import { UpcomingMeetingsCard } from '@/components/meetings/UpcomingMeetingsCard';

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Meetings" subtitle="Manage and view upcoming meetings across the CRM." />
      <UpcomingMeetingsCard limit={20} />
    </div>
  );
}