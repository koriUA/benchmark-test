import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { TreeNavigation, TreeNavigationItem } from '@decibel/components';

import { ROUTES } from './routes';

const Navigation = ({ parentPath }) => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  return (
    <TreeNavigation>
      {ROUTES.map(({ name, path }) => {
        const currentPath = `${parentPath}${path}`;
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

Navigation.propTypes = {
  parentPath: PropTypes.string,
};

Navigation.defaultProps = {
  parentPath: '',
};

export default Navigation;
