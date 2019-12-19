import General from './components/General';
import Domains from './components/Domains';
import Languages from './components/Languages';
import Approvals from './components/Approvals';
import Assets from './components/Assets';
import Security from './components/Security';

export const ROUTES = [
  {
    name: 'General',
    path: '/',
    component: General,
  },
  {
    name: 'Domains',
    path: '/domains',
    component: Domains,
  },
  {
    name: 'Languages',
    path: '/languages',
    component: Languages,
  },
  {
    name: 'Approvals',
    path: '/approvals',
    component: Approvals,
  },
  {
    name: 'Assets',
    path: '/assets',
    component: Assets,
  },
  {
    name: 'Security',
    path: '/security',
    component: Security,
  },
];
