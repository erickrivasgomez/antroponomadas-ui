import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock supabase client if environment variables are missing
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    })
  : {
      // Mock implementation that won't throw errors when Supabase is not available
      auth: {
        signInWithOAuth: () => Promise.resolve({ error: 'Supabase not configured' }),
        signOut: () => Promise.resolve({ error: 'Supabase not configured' }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        user: () => ({ data: { user: null } })
      },
      // Add other Supabase methods your app uses here
      from: () => ({
        select: () => ({
          data: [],
          error: 'Supabase not configured'
        }),
        insert: () => ({
          data: null,
          error: 'Supabase not configured'
        }),
        update: () => ({
          data: null,
          error: 'Supabase not configured'
        }),
        delete: () => ({
          data: null,
          error: 'Supabase not configured'
        })
      })
    };
