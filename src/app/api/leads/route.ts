import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const required = ['interiorType', 'location', 'area', 'budget', 'timeline', 'name', 'whatsapp']
    if (required.some((key) => !data[key])) return NextResponse.json({ error: 'Lengkapi semua field wajib.' }, { status: 400 })
    await sql`CREATE TABLE IF NOT EXISTS interior_leads (id BIGSERIAL PRIMARY KEY, interior_type TEXT NOT NULL, location TEXT NOT NULL, area TEXT NOT NULL, budget TEXT NOT NULL, timeline TEXT NOT NULL, name TEXT NOT NULL, whatsapp TEXT NOT NULL, notes TEXT, created_at TIMESTAMPTZ DEFAULT NOW())`
    await sql`INSERT INTO interior_leads (interior_type, location, area, budget, timeline, name, whatsapp, notes) VALUES (${data.interiorType}, ${data.location}, ${data.area}, ${data.budget}, ${data.timeline}, ${data.name}, ${data.whatsapp}, ${data.notes || ''})`
    return NextResponse.json({ ok: true })
  } catch { return NextResponse.json({ error: 'Form belum tersimpan. Silakan coba lagi.' }, { status: 500 }) }
}
