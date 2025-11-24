import { describe, it, expect, vi, beforeEach } from 'vitest'
import isCharging from './index.js'

vi.mock('systeminformation', () => ({
  default: {
    battery: vi.fn(),
  },
}))

import si from 'systeminformation'

describe('isCharging', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns true when battery is charging', async () => {
    vi.mocked(si.battery).mockResolvedValue({
      isCharging: true,
    } as Awaited<ReturnType<typeof si.battery>>)

    const result = await isCharging()

    expect(result).toBe(true)
  })

  it('returns false when battery is not charging', async () => {
    vi.mocked(si.battery).mockResolvedValue({
      isCharging: false,
    } as Awaited<ReturnType<typeof si.battery>>)

    const result = await isCharging()

    expect(result).toBe(false)
  })

  it('accepts timeout option', async () => {
    vi.mocked(si.battery).mockResolvedValue({
      isCharging: true,
    } as Awaited<ReturnType<typeof si.battery>>)

    const result = await isCharging({ timeout: 1000 })

    expect(result).toBe(true)
  })

  it('accepts signal option', async () => {
    vi.mocked(si.battery).mockResolvedValue({
      isCharging: true,
    } as Awaited<ReturnType<typeof si.battery>>)

    const controller = new AbortController()
    const result = await isCharging({ signal: controller.signal })

    expect(result).toBe(true)
  })
})
