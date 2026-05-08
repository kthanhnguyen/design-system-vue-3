import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/design-system/typography',
  },
  {
    path: '/design-system',
    name: 'design-system',
    component: () => import('@/views/design-system/DesignSystemLayout.vue'),
    children: [
      {
        path: 'typography',
        name: 'typography',
        component: () => import('@/views/design-system/TypographyView.vue'),
        meta: { title: 'Typography' },
      },
    ],
  },
]
