import { Battery } from './components/Battery'
import isPluggedIn from 'is-plugged-in'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Battery
        fetcher={async () => {
          'use server'

          const pluggedIn = await isPluggedIn()
          return { pluggedIn }
        }}
      />
    </div>
  )
}
