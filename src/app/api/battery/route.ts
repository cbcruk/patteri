import { battery } from '@/lib/battery'

export async function GET() {
  const data = await battery()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
