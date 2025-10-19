import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get('limit') ?? '10');

  const now = new Date();
  const meetings = Array.from({ length: 12 }).map((_, i) => {
    const start = new Date(now.getTime() + (i + 1) * 60 * 60 * 1000);
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    return {
      id: `m_${i + 1}`,
      title: `Client Meeting ${i + 1}`,
      attendees: [{ id: 'u_1', name: 'Agent Smith' }],
      startAt: start.toISOString(),
      endAt: end.toISOString(),
      location: i % 2 === 0 ? 'Zoom' : 'Office - 12 Baker St',
      relatedEntity: i % 3 === 0 ? { type: 'lead', id: `L-${i + 10}` } : undefined,
      createdBy: 'u_1',
      status: 'scheduled',
      reminders: [{ minutesBefore: 15 }],
    };
  });

  return Response.json(meetings.slice(0, limit));
}