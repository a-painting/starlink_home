import type { NavbarConfig } from 'vuepress'
export const navbarEn: NavbarConfig = [
    {
        text: 'Guide',
        link: '/en/guide/',
      },
      {
        text: 'Designer',
        children: [
          {
            text:"a painting",
            link:"https://github.com/a-painting"
          }
        ],
      },
]