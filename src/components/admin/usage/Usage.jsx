import React from 'react';
import { FullPageTemplate } from '@decibel/components';
// eslint-disable-next-line camelcase
import { Network_116, IbmSecurity16 } from '@carbon/icons-react';

const buildClass = (suffix = '') => `admin--usage${suffix}`;

const ActionBar = () => (
  <div>
    <button aria-label="search" className={buildClass('__button')} onClick={() => {}} type="button">
      <Network_116 />
    </button>
    <button aria-label="search" className={buildClass('__button')} onClick={() => {}} type="button">
      <IbmSecurity16 />
    </button>
  </div>
);

const Usage = () => {
  return (
    <FullPageTemplate actionBar={<ActionBar />} className={buildClass()} header="Usage">
      <div>content</div>
    </FullPageTemplate>
  );
};

Usage.propTypes = {};

Usage.defaultProps = {};

export default Usage;
