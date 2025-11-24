'use client'

import { motion } from 'motion/react'
import useSWR, { Fetcher } from 'swr'

type PluggedInData = {
  pluggedIn: boolean
}

type BatteryProps = {
  fetcher: Fetcher<PluggedInData>
}

export function Battery({ fetcher }: BatteryProps) {
  const { data } = useSWR('battery', fetcher, {
    refreshInterval: 1000,
  })

  if (!data) {
    return null
  }

  return (
    <motion.div
      key={`${data.pluggedIn}`}
      className="text-9xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {data.pluggedIn ? '🔌' : '🔋'}
    </motion.div>
  )
}
