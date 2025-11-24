import { describe, it, expect, vi, beforeEach } from 'vitest'
import isPluggedIn from './index.js'

vi.mock('systeminformation', () => ({
  default: {
    battery: vi.fn(),
  },
}))

import si from 'systeminformation'

describe('isPluggedIn', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns true when plugged in', async () => {
    vi.mocked(si.battery).mockResolvedValue({
      isCharging: true,
    } as Awaited<ReturnType<typeof si.battery>>)

    const result = await isPluggedIn()

    expect(result).toBe(true)
  })

  it('returns false when not plugged in', async () => {
    vi.mocked(si.battery).mockResolvedValue({
      isCharging: false,
    } as Awaited<ReturnType<typeof si.battery>>)

    const result = await isPluggedIn()

    expect(result).toBe(false)
  })

  it('accepts timeout option', async () => {
    vi.mocked(si.battery).mockResolvedValue({
      isCharging: true,
    } as Awaited<ReturnType<typeof si.battery>>)

    const result = await isPluggedIn({ timeout: 1000 })

    expect(result).toBe(true)
  })

  it('accepts signal option', async () => {
    vi.mocked(si.battery).mockResolvedValue({
      isCharging: true,
    } as Awaited<ReturnType<typeof si.battery>>)

    const controller = new AbortController()
    const result = await isPluggedIn({ signal: controller.signal })

    expect(result).toBe(true)
  })
})
