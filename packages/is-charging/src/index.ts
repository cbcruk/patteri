import si from 'systeminformation'

export type Options = {
  readonly timeout?: number
  readonly signal?: AbortSignal
}

export default async function isCharging(
  options: Options = {}
): Promise<boolean> {
  const { timeout = 5000, signal } = options

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  if (signal) {
    signal.addEventListener('abort', () => controller.abort())
  }

  try {
    const battery = await si.battery()
    return battery.isCharging
  } finally {
    clearTimeout(timeoutId)
  }
}
