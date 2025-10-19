import '@/styles/globals.css';
import { Sidebar } from '@/components/layout/Sidebar';
import { Topbar } from '@/components/layout/Topbar';
import { QueryProvider } from '@/lib/query/QueryProvider';
import { UpcomingMeetingsCard } from '@/components/meetings/UpcomingMeetingsCard';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-50 text-gray-900">
        <QueryProvider>
          <div className="flex h-full">
            <aside className="w-64 border-r bg-white flex flex-col">
              <Sidebar />
              <div className="p-3 border-t">
                <UpcomingMeetingsCard limit={3} />
              </div>
            </aside>
            <main className="flex-1 flex flex-col">
              <Topbar />
              <div className="p-6 overflow-y-auto">{children}</div>
            </main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}