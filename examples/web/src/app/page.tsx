import { Battery } from './components/Battery'
import isCharging from 'is-charging'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Battery
        fetcher={async () => {
          'use server'

          const charging = await isCharging()
          return { charging }
        }}
      />
    </div>
  )
}
