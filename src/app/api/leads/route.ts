import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

const budgetBands: Record<string, { min: number; max: number | null; value: number; className: string }> = {
  'Di bawah Rp 100 Juta': { min: 0, max: 100_000_000, value: 50_000_000, className: 'entry' },
  'Rp 100juta - 300juta': { min: 100_000_000, max: 300_000_000, value: 200_000_000, className: 'growth' },
  'Rp300juta - 800juta': { min: 300_000_000, max: 800_000_000, value: 550_000_000, className: 'growth' },
  'Rp800 juta – Rp1,5 miliar': { min: 800_000_000, max: 1_500_000_000, value: 1_150_000_000, className: 'premium' },
  'Rp1,5 – 3 miliar': { min: 1_500_000_000, max: 3_000_000_000, value: 2_250_000_000, className: 'premium' },
  'Rp3 – 5 miliar': { min: 3_000_000_000, max: 5_000_000_000, value: 4_000_000_000, className: 'high_value' },
  'Rp5 – 10 miliar': { min: 5_000_000_000, max: 10_000_000_000, value: 7_500_000_000, className: 'high_value' },
  'Di atas Rp10 miliar': { min: 10_000_000_000, max: null, value: 10_000_000_000, className: 'high_value' },
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const required = ['interiorType', 'location', 'area', 'budget', 'timeline', 'name', 'whatsapp']
    if (required.some((key) => !data[key])) return NextResponse.json({ error: 'Lengkapi semua field wajib.' }, { status: 400 })
    const band = budgetBands[data.budget]
    if (!band) return NextResponse.json({ error: 'Pilihan anggaran tidak valid.' }, { status: 400 })
    await sql`CREATE TABLE IF NOT EXISTS interior_leads (id BIGSERIAL PRIMARY KEY, interior_type TEXT NOT NULL, location TEXT NOT NULL, area TEXT NOT NULL, budget TEXT NOT NULL, timeline TEXT NOT NULL, name TEXT NOT NULL, whatsapp TEXT NOT NULL, notes TEXT, budget_min BIGINT, budget_max BIGINT, budget_value BIGINT, lead_class TEXT, created_at TIMESTAMPTZ DEFAULT NOW())`
    await sql`ALTER TABLE interior_leads ADD COLUMN IF NOT EXISTS budget_min BIGINT, ADD COLUMN IF NOT EXISTS budget_max BIGINT, ADD COLUMN IF NOT EXISTS budget_value BIGINT, ADD COLUMN IF NOT EXISTS lead_class TEXT`
    await sql`INSERT INTO interior_leads (interior_type, location, area, budget, timeline, name, whatsapp, notes, budget_min, budget_max, budget_value, lead_class) VALUES (${data.interiorType}, ${data.location}, ${data.area}, ${data.budget}, ${data.timeline}, ${data.name}, ${data.whatsapp}, ${data.notes || ''}, ${band.min}, ${band.max}, ${band.value}, ${band.className})`
    return NextResponse.json({ ok: true, budget: data.budget, budgetValue: band.value, leadClass: band.className })
  } catch { return NextResponse.json({ error: 'Form belum tersimpan. Silakan coba lagi.' }, { status: 500 }) }
}
