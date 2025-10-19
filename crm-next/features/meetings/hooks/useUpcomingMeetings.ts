'use client';

import { useQuery } from '@tanstack/react-query';
import type { Meeting } from '@/types/meeting';

export function useUpcomingMeetings({ limit = 10 }: { limit?: number }) {
  return useQuery<Meeting[]>({
    queryKey: ['meetings', 'upcoming', limit],
    queryFn: async () => {
      const res = await fetch(`/api/meetings/upcoming?limit=${limit}`, { credentials: 'include' });
      const data = await res.json();
      return data;
    },
    staleTime: 60_000,
  });
}