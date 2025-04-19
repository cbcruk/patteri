'use client'

import { motion } from 'motion/react'
import useSWR, { Fetcher } from 'swr'
import { Systeminformation } from 'systeminformation'

type BatteryProps = {
  fetcher: Fetcher<Systeminformation.BatteryData>
}

export function Battery({ fetcher }: BatteryProps) {
  const { data } = useSWR('battery', fetcher, {
    refreshInterval: 1000,
  })

  if (!data) {
    return null
  }

  console.log(data)

  return (
    <>
      <motion.div
        key={`${data.acConnected}`}
        className="text-9xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <>{data.acConnected ? '🔌' : '🔋'}</>
      </motion.div>
    </>
  )
}
