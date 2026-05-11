import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE ?? '/'

export default defineConfig({
  base,
  title: 'AI Agent Status Light',
  description: 'Planning docs for the ESP32 traffic light and desktop companion app.',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Plans', link: '/plans/' }
    ],
    sidebar: [
      {
        text: 'Plans',
        items: [
          { text: 'Overview', link: '/plans/' },
          { text: 'Device', link: '/plans/device' },
          { text: 'ESP32 Pinout', link: '/plans/esp32-pinout' },
          { text: 'PCBA Guide', link: '/plans/pcba' },
          { text: 'Desktop Client', link: '/plans/desktopClient' },
          { text: 'Manufacturing', link: '/plans/manufacturing' },
          { text: 'Manufacturer Longlist', link: '/plans/manufacturer-longlist' },
          { text: 'Distribution', link: '/plans/distribution' },
          { text: 'Marketing', link: '/plans/marketing' }
        ]
      }
    ],
    socialLinks: []
  }
})
