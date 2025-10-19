'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { Home, Users, FileUser, Building, KanbanSquare, CheckSquare, CalendarDays, CalendarClock, ActivitySquare, Settings } from 'lucide-react';

const nav = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/contacts', label: 'Contacts', icon: Users },
  { href: '/leads', label: 'Leads', icon: FileUser },
  { href: '/properties', label: 'Properties', icon: Building },
  { href: '/deals', label: 'Deals', icon: KanbanSquare },
  { href: '/tasks', label: 'Tasks', icon: CheckSquare },
  { href: '/calendar', label: 'Calendar', icon: CalendarDays },
  { href: '/meetings', label: 'Meetings', icon: CalendarClock },
  { href: '/activities', label: 'Activities', icon: ActivitySquare },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="p-3 space-y-1">
      {nav.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            'flex items-center gap-2 px-3 py-2 rounded-md text-sm',
            pathname === href ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-100'
          )}
        >
          <Icon className="h-4 w-4" />
          {label}
        </Link>
      ))}
    </nav>
  );
}