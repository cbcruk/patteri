# is-charging

> Check if the device battery is charging

Works in Node.js and browsers.

## Install

```sh
npm install is-charging
```

## Usage

```js
import isCharging from 'is-charging'

console.log(await isCharging())
//=> true
```

## API

### isCharging(options?)

Returns a `Promise<boolean>` that resolves to `true` if the battery is charging, otherwise `false`.

#### options

Type: `object`

##### timeout

Type: `number`\
Default: `5000`

The time in milliseconds to wait for a response.

##### signal

Type: [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)

You can abort the request using an `AbortSignal`.

```js
import isCharging from 'is-charging'

const controller = new AbortController()

setTimeout(() => controller.abort(), 3000)

console.log(await isCharging({ signal: controller.signal }))
```

## How it works

### Node.js

Uses [systeminformation](https://github.com/sebhildebrandt/systeminformation) to get battery status.

### Browser

Uses the [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API) (`navigator.getBattery()`).

> **Note:** The Battery Status API has limited browser support and may not be available in all browsers.

## License

MIT
