import { IncomingMessage, ServerResponse } from 'http';
import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';

export default async function handler(_req: IncomingMessage, res: ServerResponse) {
  const response = await fetch(
    'https://leancoders.webhook.office.com/webhookb2/e944687a-900c-476e-9671-b4e795ac3efe@0235e639-85cb-4255-89c5-a6cc79d111c4/IncomingWebhook/bb21083ebed2449099f5e4efd923055f/7e937ce2-4a66-4d9c-8d64-cc40f5ee4039',
    {
      method: 'POST',
      body: JSON.stringify({
        text: `Usage Alert: ${new Date().toLocaleString('de-DE', {
          timeStyle: 'short',
          dateStyle: 'medium',
        })}`,
      }),
      headers: { 'Content-Type': 'application/json' },
    },
  );
  response.body?.pipe(res);
}
