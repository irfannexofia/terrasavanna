import { NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    if (password !== 'akan010101') return NextResponse.json({ error: 'Password salah.' }, { status: 401 })
    const leads = await sql`SELECT id, interior_type, location, area, budget, timeline, name, whatsapp, notes, created_at FROM interior_leads ORDER BY created_at DESC`
    return NextResponse.json({ leads })
  } catch (error) {
    console.error('Admin leads query failed', error)
    return NextResponse.json({ error: 'Data lead belum tersedia atau database tidak dapat diakses.' }, { status: 500 })
  }
}
