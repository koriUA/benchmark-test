import React from 'react';

const General = () => <div>1</div>;
const Domains = () => <div>2</div>;
const Languages = () => <div>3</div>;
const Approvals = () => <div>4</div>;
const Assets = () => <div>5</div>;
const Security = () => <div>6</div>;

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
