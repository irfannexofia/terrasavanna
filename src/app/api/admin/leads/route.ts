import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function POST(request: Request) {
  try {
    if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'DATABASE_URL belum diset di environment server.' }, { status: 500 })
    const { password } = await request.json()
    if (password !== 'akan010101') return NextResponse.json({ error: 'Password salah.' }, { status: 401 })
    await sql`CREATE TABLE IF NOT EXISTS interior_leads (id BIGSERIAL PRIMARY KEY, interior_type TEXT NOT NULL, location TEXT NOT NULL, area TEXT NOT NULL, budget TEXT NOT NULL, timeline TEXT NOT NULL, name TEXT NOT NULL, whatsapp TEXT NOT NULL, notes TEXT, created_at TIMESTAMPTZ DEFAULT NOW())`
    const leads = await sql`SELECT id, interior_type, location, area, budget, timeline, name, whatsapp, notes, created_at FROM interior_leads ORDER BY created_at DESC`
    return NextResponse.json({ leads })
  } catch (error) {
    console.error('Admin leads query failed', error)
    return NextResponse.json({ error: 'Data lead belum tersedia atau database tidak dapat diakses.' }, { status: 500 })
  }
}
