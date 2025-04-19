import si from 'systeminformation'

export function battery() {
  const data = si.battery()

  return data
}
