import { Battery } from './components/Battery'
import { battery } from '@/lib/battery'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Battery
        fetcher={async () => {
          'use server'

          return battery()
        }}
      />
    </div>
  )
}
