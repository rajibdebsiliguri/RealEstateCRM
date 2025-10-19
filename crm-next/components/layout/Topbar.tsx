'use client';

import { useState } from 'react';
import { CalendarClock } from 'lucide-react';
import { MeetingsPanel } from '@/components/meetings/MeetingsPanel';

export function Topbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-12 bg-white border-b flex items-center justify-between px-4">
      <div className="font-semibold">Real Estate CRM</div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md bg-brand-600 text-white hover:bg-brand-700"
        >
          <CalendarClock className="h-4 w-4" />
          Meetings
        </button>
      </div>
      <MeetingsPanel open={open} onClose={() => setOpen(false)} />
    </header>
  );
}