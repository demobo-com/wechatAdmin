/**
*
* SocialLink
*
*/

import React from 'react';
import Button from 'components/Button';
import { capitalize } from 'lodash';
import PropTypes from 'prop-types';
import {
  STRAPI_BASE,
} from 'utils/constants';

import './styles.scss';

function SocialLink({ provider }) {
  return (
    <a href={`${STRAPI_BASE}/connect/${provider}`} className="link">
      <Button type="button" social={provider} style={{ width: '100%' }}>
        <i className={`fa fa-${provider}`} />
        {capitalize(provider)}
      </Button>
    </a>
  );
}

SocialLink.propTypes = {
  provider: PropTypes.string.isRequired,
};

export default SocialLink;
