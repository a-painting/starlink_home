import type { NavbarConfig } from 'vuepress'
export const navbarZh: NavbarConfig =[
    {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '项目开发者',
        children: [
          {
            text:"一幅画",
            link:"https://github.com/a-painting"
          }
        ],
      },
]