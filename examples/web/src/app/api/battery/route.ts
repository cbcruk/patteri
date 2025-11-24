import isPluggedIn from 'is-plugged-in'

export async function GET() {
  const pluggedIn = await isPluggedIn()

  return Response.json({ pluggedIn })
}
