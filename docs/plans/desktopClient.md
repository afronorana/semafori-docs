# Desktop Client Plan

This document tracks the Electron + Vue desktop companion app for the AI Agent Status Light.

The desktop app is the bridge between AI coding tools and the ESP32 device:

```text
AI coding tool -> localhost desktop bridge -> ESP32 traffic light
```

## Current Goal

Make the app feel plug-and-play for a developer using Codex:

1. Find the ESP32 light on the local network.
2. Save the working device IP.
3. Run a local bridge server.
4. Install Codex integration automatically.
5. Receive Codex status events through localhost.
6. Forward those events to the ESP32.
7. Let the user test and repair the connection from the UI.

## What Has Been Done

### App Foundation

- Created an Electron + Vue + Tailwind desktop app.
- Added a shared type layer for app state, device state, light states, and bridge API contracts.
- Added a preload bridge so the Vue renderer can safely call main-process APIs.
- Added production build configuration through `electron-vite`.

### Local Bridge Server

- Added a localhost HTTP server.
- Default bridge address:

```http
http://127.0.0.1:48247
```

- Added bridge endpoints:

```http
GET /health
GET /app/status
GET /status/idle
GET /status/waiting
GET /status/thinking
GET /status/busy
GET /status/error
GET /status/off
POST /device/discover
GET /device
POST /device
DELETE /device
GET /integrations/codex
POST /integrations/codex/install
POST /integrations/codex/remove
```

- Status endpoints return quickly and forward the requested state to the ESP32.

### ESP32 Discovery

- Added discovery using:
  - cached IP
  - `ai-light.local`
  - mDNS
  - local subnet scan
  - manual IP
- Added device verification through `GET /info`.
- Added IP caching once a valid device is found.
- Added recovery behavior when the cached IP stops responding.

### Manual IP Support

- Added a manual IP flow in the UI.
- User can enter an ESP32 IP address directly.
- App verifies the IP by calling `/info`.
- If valid, the app saves the IP and connects.
- Once connected, the app sends idle state so the light becomes green solid.

### Codex Integration

- Added automatic Codex hook installation.
- App edits the user's Codex config with a marked block.
- Added install and remove support.
- Hooks send Codex events to the local desktop bridge instead of calling the ESP32 directly.
- Intended mapping:
  - user submits prompt -> waiting
  - Codex uses tools/files/terminal -> busy
  - Codex finishes -> idle
  - error/failure -> error

### Desktop UI

- Added device status display:
  - connected / disconnected
  - current device IP
  - firmware version
  - current light state
- Added Codex integration status.
- Added manual light test buttons.
- Added action buttons:
  - Find Light
  - Manual IP
  - Connect to Codex
  - Remove Codex Integration
- Added a visual traffic-light preview.

### Documentation

- Added ESP32 API documentation.
- Added rendered UI screenshot.
- Added device behavior plan in `plan/device.md`.

### Verification Completed

- TypeScript typecheck passes.
- Production build passes.
- Browser preview was tested.
- Manual IP panel opens and renders without console errors.

## Future Features

### Styling And UX Polish

- Improve the visual design so the app feels like a finished desk-gadget companion instead of a developer utility.
- Refine spacing, color, typography, and component hierarchy.
- Improve empty states and disconnected states.
- Add clearer status labels for discovery, connecting, connected, retrying, and failed.
- Improve manual IP entry validation and inline error messages.
- Add subtle motion for connection changes and manual light testing.
- Add better responsive behavior for smaller desktop windows.

### Run In Background

- Add a tray/menu-bar mode.
- Allow the app to keep running after the main window is closed.
- Add tray actions:
  - show window
  - find light
  - set idle
  - turn off light
  - quit app
- Add a visible indicator when the bridge server is running.
- Decide whether close button should hide to tray or fully quit.

### Launch At Login

- Add an option to start the app automatically when the user logs in.
- Keep this opt-in from the settings UI.
- Show whether launch-at-login is currently enabled.

### Device Health And Recovery

- Add periodic health checks against the connected ESP32.
- If the device stops responding, mark it disconnected and retry discovery.
- If the IP changes, rediscover and update the cached IP.
- After rediscovery, send `/status?state=idle` so the ESP32 knows the desktop app found it.
- Add a reconnect history or last-seen timestamp.

### App-To-Device Heartbeat

- Add a heartbeat from desktop app to ESP32.
- Let the ESP32 return to green blinking if the desktop app disappears for too long.
- This would make green blinking mean:
  "Wi-Fi connected, but desktop app is not currently attached."

### Firmware Setup Assistance

- Add a setup screen explaining the `AI-Light-Setup` hotspot flow.
- Detect when no device is found and guide the user through Wi-Fi setup.
- Add a checklist:
  - plug in the light
  - connect to `AI-Light-Setup`
  - enter Wi-Fi details
  - return to the desktop app
  - click Find Light

### Multiple Device Support

- Allow more than one AI Agent Status Light on the network.
- Show discovered devices in a list.
- Allow naming devices.
- Let the user choose the active light.

### More Integrations

- Add integrations beyond Codex.
- Possible future integrations:
  - Cursor
  - Claude Code
  - GitHub Actions
  - local scripts
  - custom webhooks
- Keep all tools sending events to the desktop bridge, not directly to the ESP32.

### Settings

- Add a settings view.
- Settings to consider:
  - bridge port
  - launch at login
  - run in background
  - selected device
  - discovery retry interval
  - default idle behavior
  - automatic reconnect
  - Codex integration enabled/disabled

### Notifications

- Add optional desktop notifications for:
  - device found
  - device disconnected
  - Codex integration installed
  - Codex integration removed
  - bridge server failed to start

### Packaging

- Add distributable builds for macOS and Windows.
- Add app icons.
- Add signing/notarization plan for macOS.
- Add installer/update strategy.

### Diagnostics

- Add a diagnostics screen.
- Show:
  - bridge URL
  - active port
  - cached device IP
  - last `/info` response
  - last status sent
  - last error
  - Codex config path
  - whether hooks are installed
- Add a "Copy diagnostics" button for support.

## Open Product Decisions

- Should closing the window hide the app to tray by default?
- Should the app start at login automatically after Codex integration is installed?
- Should the ESP32 stay on the last Codex state when the app exits, or return to green blinking?
- Should manual IP accept hostnames like `ai-light.local`, or only numeric IPv4 addresses?
- Should setup mode be all three LEDs blinking, or red + yellow only for compatibility with the first docs?
- Should the app support multiple lights in v1 or keep only one active device?
