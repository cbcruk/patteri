export type Options = {
  readonly timeout?: number
  readonly signal?: AbortSignal
}

export default async function isCharging(
  options: Options = {}
): Promise<boolean> {
  const { timeout = 5000, signal } = options

  if (!('getBattery' in navigator)) {
    throw new Error('Battery Status API is not supported in this browser')
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  if (signal) {
    signal.addEventListener('abort', () => controller.abort())
  }

  try {
    const battery = await (
      navigator as Navigator & {
        getBattery: () => Promise<{ charging: boolean }>
      }
    ).getBattery()

    return battery.charging
  } finally {
    clearTimeout(timeoutId)
  }
}
