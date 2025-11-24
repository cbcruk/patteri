import isCharging from 'is-charging'

export async function GET() {
  const charging = await isCharging()

  return Response.json({ charging })
}
