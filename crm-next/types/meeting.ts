export type Meeting = {
  id: string;
  title: string;
  description?: string;
  attendees: { id: string; name: string; email?: string }[];
  startAt: string; // ISO
  endAt: string;   // ISO
  location?: string;
  relatedEntity?: { type: 'lead' | 'contact' | 'deal' | 'property' | 'task'; id: string };
  createdBy: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  reminders?: { minutesBefore: number }[];
};