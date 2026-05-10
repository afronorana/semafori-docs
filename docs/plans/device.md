# AI Agent Status Light Device Plan

This document defines the ESP32 device behavior for the AI Agent Status Light.

Hardware pin layout is documented separately in [ESP32-C3 Super Mini Pinout](./esp32-pinout.md).

## LED State Model

| Situation | LED pattern |
| --- | --- |
| Power-on startup | Red, yellow, green, red, yellow, green |
| Connecting to Wi-Fi | Yellow blinking |
| No Wi-Fi saved / setup hotspot active | Red + yellow + green blinking together |
| Wi-Fi connected, waiting for desktop app | Green blinking |
| Desktop app found the device | Green solid |
| Codex waiting | Yellow blinking |
| Codex thinking | Yellow solid |
| Codex busy/tools running | Red solid |
| Codex error | Red blinking |
| Off | All LEDs off |
| Success pulse | Green blinking briefly, then idle |

## Startup Flow

1. ESP32 powers on.
2. It immediately plays the startup pattern:
   `red -> yellow -> green -> red -> yellow -> green`.
3. It checks whether Wi-Fi credentials are saved.

## No Saved Wi-Fi Credentials

1. ESP32 starts the setup hotspot:
   `AI-Light-Setup`.
2. All three LEDs blink together repeatedly.
3. User connects to the hotspot and enters Wi-Fi credentials.
4. Once credentials are submitted, ESP32 switches to yellow blinking while it tries to connect.
5. If Wi-Fi connects successfully:
   - hotspot turns off
   - credentials stay saved
   - HTTP server starts
   - mDNS starts as `ai-light.local`
   - LEDs switch to green blinking
6. If Wi-Fi connection fails:
   - ESP32 stays in setup mode
   - hotspot remains active
   - all three LEDs keep blinking
   - user can retry Wi-Fi setup

## Saved Wi-Fi Credentials Exist

1. ESP32 tries to connect to the saved Wi-Fi.
2. During connection attempt it shows yellow blinking after the startup animation.
3. If Wi-Fi connects:
   - HTTP server starts
   - mDNS starts
   - LEDs switch to green blinking
4. If Wi-Fi does not connect after a timeout:
   - ESP32 starts `AI-Light-Setup`
   - all three LEDs blink
   - user can enter new Wi-Fi credentials

## Desktop App Discovery Handshake

The ESP32 cannot know by itself that the desktop app has found its IP.

The desktop app should:

1. Discover ESP32 by `/info`, mDNS, cached IP, subnet scan, or manual IP.
2. Verify that the response looks like an AI Agent Status Light.
3. Save the real IP address.
4. Immediately call:

```http
GET /status?state=idle
```

That changes the ESP32 from green blinking to green solid.

Meaning:

- Green blinking = connected to Wi-Fi, waiting for desktop app
- Green solid = desktop app found it and normal operation is active

## Runtime HTTP States

Once the app has discovered the device, it controls the light through:

```http
GET /status?state=idle
GET /status?state=waiting
GET /status?state=thinking
GET /status?state=busy
GET /status?state=error
GET /status?state=off
GET /status?state=setup
GET /status?state=success
```

State behavior:

| State | LED behavior |
| --- | --- |
| `idle` | Green solid |
| `waiting` | Yellow blinking |
| `thinking` | Yellow solid |
| `busy` | Red solid |
| `error` | Red blinking |
| `off` | All LEDs off |
| `setup` | Red + yellow + green blinking together |
| `success` | Green blinking briefly, then idle |

The ESP32 should return `204 No Content` for successful status changes.

## Required Device Endpoints

```http
GET /info
GET /status?state=idle
GET /status?state=waiting
GET /status?state=thinking
GET /status?state=busy
GET /status?state=error
GET /status?state=off
GET /status?state=setup
GET /status?state=success
```

Optional short endpoints:

```http
GET /idle
GET /waiting
GET /thinking
GET /busy
GET /error
GET /off
```

## `/info` Response

```json
{
  "id": "ai-light-8421",
  "name": "AI Agent Status Light",
  "version": "1.0.0",
  "ip": "192.168.0.47",
  "mac": "A1:B2:C3:D4:E5:F6"
}
```

## Edge Cases

If saved Wi-Fi credentials are wrong, ESP32 tries for a fixed timeout, then returns to setup hotspot mode with all three LEDs blinking.

If Wi-Fi drops after it was connected, ESP32 should switch back to yellow blinking while reconnecting. If reconnect fails after a timeout, it should start the setup hotspot and blink all three LEDs.

If the desktop app closes, ESP32 stays on the last state for v1. Later, a heartbeat can return the device to green blinking if the app disappears.

If the desktop app starts before ESP32 is online, the app keeps showing disconnected and retries discovery. ESP32 shows yellow blinking or setup blinking depending on Wi-Fi state.

If the ESP32 IP changes, the desktop app retries cached IP, then mDNS/subnet discovery, then updates the cached IP. Once rediscovered, it sends `/status?state=idle`.

If the user enters a manual IP, the desktop app calls `/info` on that IP. If valid, it saves the IP and sends `/status?state=idle`.

If `/status` receives an invalid state, ESP32 should return `400 Bad Request` and keep the current LED state unchanged.

If `/info` is requested while the device is connected, ESP32 returns device info so the desktop app can confirm it found the right device.
