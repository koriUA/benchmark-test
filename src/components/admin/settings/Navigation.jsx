import React from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { TreeNavigation, TreeNavigationItem } from '@decibel/components';

import { ROUTES } from './routes';

const Navigation = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const match = useRouteMatch();

  return (
    <TreeNavigation>
      {ROUTES.map(({ name, path }) => {
        const currentPath = `${match.path}${path}`;
        return (
          <TreeNavigationItem
            key={name}
            handleHeadingClick={() => push(currentPath)}
            label={name}
            selected={pathname === currentPath}
          />
        );
      })}
    </TreeNavigation>
  );
};

export default Navigation;
