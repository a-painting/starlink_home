import type { SidebarConfig } from 'vuepress'

export const sidebarEn: SidebarConfig = {
    '/en/guide/': [
        {
          text: 'Guide',
          children: [
            '/en/guide/README.md',
          ],
        },
      ],
}