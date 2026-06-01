import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 1000,          // 15s → data considered fresh
      gcTime: 5 * 60 * 1000,         // cache persists 5 mins
      refetchOnWindowFocus: false,   // 🔥 your requirement
      refetchOnReconnect: true,
      retry: 2,
    },
  },
})