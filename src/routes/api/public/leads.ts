import { createFileRoute } from '@tanstack/react-router';
import { sendLovableEmail } from '@lovable.dev/email-js';
import { z } from 'zod';
import { absoluteUrl, getSiteUrl } from '@/lib/site';

// Unified lead-capture endpoint used by the Contact form and the Book SEO Audit form.
// 1. Validates + spam-protects input
// 2. Stores the lead in the `leads` table
// 3. Sends an instant Telegram notification
// 4. Sends a branded email notification to the BrainBox World inbox

const NOTIFY_EMAIL = 'hellobrainboxworld@gmail.com';
const SITE_URL = getSiteUrl();
const LOGO_URL = absoluteUrl('/email-logo.png');

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  company: z.string().trim().max(200).optional().or(z.literal('')),
  website: z.string().trim().max(255).optional().or(z.literal('')),
  service: z.string().trim().max(120).optional().or(z.literal('')),
  message: z.string().trim().max(4000).optional().or(z.literal('')),
  source_page: z.string().trim().max(120).default('Website'),
  // Honeypot — must stay empty. Bots fill every field.
  company_url: z.string().max(0).optional().or(z.literal('')),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

type Lead = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  service?: string;
  message?: string;
  source_page: string;
  created_at: string;
};

async function sendTelegram(lead: Lead) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.warn('Telegram credentials not configured — skipping Telegram notification');
    return;
  }
  const line = (label: string, value?: string) => (value ? `${label}: ${value}\n` : '');
  const text =
    `🚀 New Website Lead\n\n` +
    line('Name', lead.name) +
    line('Email', lead.email) +
    line('Phone', lead.phone) +
    line('Company', lead.company) +
    line('Website', lead.website) +
    line('Service', lead.service) +
    (lead.message ? `\nMessage:\n${lead.message}\n` : '') +
    `\nSource:\n${lead.source_page}\n` +
    `\nSubmitted:\n${lead.created_at}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
    if (!res.ok) {
      console.error('Telegram notification failed', res.status, await res.text());
    }
  } catch (err) {
    console.error('Telegram notification error', err);
  }
}

function brandedEmailHtml(lead: Lead): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:10px 0;border-bottom:1px solid #eef2f7;">
           <div style="font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;margin-bottom:2px;">${escapeHtml(label)}</div>
           <div style="font-size:15px;color:#0f172a;font-weight:600;">${escapeHtml(value)}</div>
         </td></tr>`
      : '';

  return `<!doctype html><html><body style="margin:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 0;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(15,23,42,.06);">
        <tr><td style="background:linear-gradient(135deg,#1e3a8a,#2563eb);padding:24px 28px;" align="left">
          <img src="${LOGO_URL}" width="44" height="44" alt="BrainBox World" style="vertical-align:middle;border-radius:50%;background:#ffffff;padding:4px;" />
          <span style="color:#ffffff;font-size:18px;font-weight:700;vertical-align:middle;margin-left:12px;">BrainBox World</span>
        </td></tr>
        <tr><td style="padding:28px 28px 8px;">
          <h1 style="margin:0 0 4px;font-size:20px;color:#0f172a;">🚀 New Lead Received</h1>
          <p style="margin:0 0 4px;font-size:14px;color:#64748b;">A new enquiry just came in from your website.</p>
          <a href="${SITE_URL}" style="font-size:13px;color:#2563eb;text-decoration:none;">${SITE_URL.replace('https://', '')}</a>
        </td></tr>
        <tr><td style="padding:8px 28px 4px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row('Name', lead.name)}
            ${row('Email', lead.email)}
            ${row('Phone', lead.phone || '')}
            ${row('Company', lead.company || '')}
            ${row('Website', lead.website || '')}
            ${row('Service', lead.service || '')}
          </table>
        </td></tr>
        ${
          lead.message
            ? `<tr><td style="padding:8px 28px 4px;">
                 <div style="font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;margin-bottom:6px;">Message</div>
                 <div style="background:#f8fafc;border:1px solid #eef2f7;border-radius:10px;padding:14px 16px;font-size:14px;color:#334155;line-height:1.6;">${escapeHtml(lead.message).replace(/\n/g, '<br/>')}</div>
               </td></tr>`
            : ''
        }
        <tr><td style="padding:18px 28px 4px;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;margin-bottom:2px;">Page Submitted From</div>
          <div style="font-size:14px;color:#0f172a;font-weight:600;">${escapeHtml(lead.source_page)}</div>
        </td></tr>
        <tr><td style="padding:10px 28px 8px;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#94a3b8;margin-bottom:2px;">Submitted</div>
          <div style="font-size:14px;color:#0f172a;font-weight:600;">${escapeHtml(lead.created_at)}</div>
        </td></tr>
        <tr><td style="padding:18px 28px 28px;">
          <a href="mailto:${escapeHtml(lead.email)}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 22px;border-radius:8px;">Reply to ${escapeHtml(lead.name)}</a>
        </td></tr>
        <tr><td style="padding:18px 28px;background:#0f172a;" align="center">
          <p style="margin:0;font-size:12px;color:#94a3b8;">Powered by BrainBox World — Digital Solutions, AI &amp; Automation</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  </body></html>`;
}

function brandedEmailText(lead: Lead): string {
  const line = (label: string, value?: string) => (value ? `${label}: ${value}\n` : '');
  return (
    `BRAINBOX WORLD\n\n` +
    `You have received a new lead from your website.\n\n` +
    `Lead Details\n` +
    line('Name', lead.name) +
    line('Email', lead.email) +
    line('Phone', lead.phone) +
    line('Company', lead.company) +
    line('Website', lead.website) +
    line('Service', lead.service) +
    (lead.message ? `\nMessage:\n${lead.message}\n` : '') +
    `\nPage Submitted From: ${lead.source_page}\n` +
    `Submitted: ${lead.created_at}\n\n` +
    `Powered by BrainBox World`
  );
}

async function sendEmail(lead: Lead) {
  const apiKey = process.env.LOVABLE_API_KEY;
  // FROM_EMAIL must be on the verified sender domain; SENDER_DOMAIN is that
  // verified subdomain FQDN. Both are set once the email domain is configured.
  const fromEmail = process.env.LEADS_FROM_EMAIL;
  const senderDomain = process.env.LEADS_SENDER_DOMAIN;
  if (!apiKey || !fromEmail || !senderDomain) {
    console.warn('Email sender not configured (LEADS_FROM_EMAIL / LEADS_SENDER_DOMAIN) — skipping email notification');
    return;
  }
  try {
    await sendLovableEmail(
      {
        to: NOTIFY_EMAIL,
        from: fromEmail,
        sender_domain: senderDomain,
        reply_to: lead.email,
        subject: `🚀 New Website Lead - ${lead.name}`,
        html: brandedEmailHtml(lead),
        text: brandedEmailText(lead),
        purpose: 'transactional',
      },
      { apiKey },
    );
  } catch (err) {
    console.error('Email notification error', err);
  }
}

export const Route = createFileRoute('/api/public/leads')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = schema.safeParse(json);
          if (!parsed.success) {
            return new Response(
              JSON.stringify({ error: 'Invalid input', details: parsed.error.flatten() }),
              { status: 400, headers: { 'Content-Type': 'application/json' } },
            );
          }

          // Spam protection — honeypot field must be empty.
          if (parsed.data.company_url) {
            // Pretend success so bots don't learn the trap exists.
            return new Response(JSON.stringify({ ok: true }), {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            });
          }

          const createdAt = new Date().toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
            timeZone: 'UTC',
          }) + ' UTC';

          const lead: Lead = {
            name: parsed.data.name,
            email: parsed.data.email,
            phone: parsed.data.phone || undefined,
            company: parsed.data.company || undefined,
            website: parsed.data.website || undefined,
            service: parsed.data.service || undefined,
            message: parsed.data.message || undefined,
            source_page: parsed.data.source_page,
            created_at: createdAt,
          };

          const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
          const { error } = await supabaseAdmin.from('leads').insert({
            name: lead.name,
            email: lead.email,
            phone: lead.phone ?? null,
            company: lead.company ?? null,
            website: lead.website ?? null,
            service: lead.service ?? null,
            message: lead.message ?? null,
            source_page: lead.source_page,
          });
          if (error) {
            console.error('lead insert error', error);
            return new Response(JSON.stringify({ error: 'Failed to save submission' }), {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            });
          }

          // Fire notifications in parallel; never block the success response on them.
          await Promise.allSettled([sendTelegram(lead), sendEmail(lead)]);

          return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        } catch (err) {
          console.error('leads route error', err);
          return new Response(JSON.stringify({ error: 'Unexpected error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      },
    },
  },
});
