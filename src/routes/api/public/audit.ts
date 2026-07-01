import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  website: z.string().trim().min(1).max(255),
  goals: z.string().trim().max(4000).optional().or(z.literal('')),
});

export const Route = createFileRoute('/api/public/audit')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = schema.safeParse(json);
          if (!parsed.success) {
            return new Response(JSON.stringify({ error: 'Invalid input', details: parsed.error.flatten() }), { status: 400, headers: { 'Content-Type': 'application/json' } });
          }
          const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
          const { error } = await supabaseAdmin.from('audit_submissions').insert({
            name: parsed.data.name,
            email: parsed.data.email,
            website: parsed.data.website,
            goals: parsed.data.goals || null,
          });
          if (error) {
            console.error('audit insert error', error);
            return new Response(JSON.stringify({ error: 'Failed to save submission' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
          }
          return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        } catch (err) {
          console.error('audit route error', err);
          return new Response(JSON.stringify({ error: 'Unexpected error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }
      },
    },
  },
});
