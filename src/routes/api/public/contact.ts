import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(200).optional().or(z.literal('')),
  service: z.string().trim().max(120).optional().or(z.literal('')),
  budget: z.string().trim().max(60).optional().or(z.literal('')),
  message: z.string().trim().min(1).max(4000),
  source: z.string().trim().max(40).default('contact'),
});

export const Route = createFileRoute('/api/public/contact')({
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
          const { error } = await supabaseAdmin.from('contact_submissions').insert({
            name: parsed.data.name,
            email: parsed.data.email,
            company: parsed.data.company || null,
            service: parsed.data.service || null,
            budget: parsed.data.budget || null,
            message: parsed.data.message,
            source: parsed.data.source,
          });
          if (error) {
            console.error('contact insert error', error);
            return new Response(JSON.stringify({ error: 'Failed to save submission' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
          }
          return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        } catch (err) {
          console.error('contact route error', err);
          return new Response(JSON.stringify({ error: 'Unexpected error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }
      },
    },
  },
});
