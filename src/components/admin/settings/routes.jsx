import { lazy } from 'react';

export const ROUTES = [
  {
    name: 'General',
    path: '/general',
    component: lazy(() => import('./components/General')),
  },
  {
    name: 'Domains',
    path: '/domains',
    component: lazy(() => import('./components/Domains')),
  },
  {
    name: 'Languages',
    path: '/languages',
    component: lazy(() => import('./components/Languages')),
  },
  {
    name: 'Approvals',
    path: '/approvals',
    component: lazy(() => import('./components/Approvals')),
  },
  {
    name: 'Assets',
    path: '/assets',
    component: lazy(() => import('./components/Assets')),
  },
  {
    name: 'Security',
    path: '/security',
    component: lazy(() => import('./components/Security')),
  },
];
