import React from 'react';
// import PropTypes from 'prop-types';

import './surface.css';

export const NBosSurface = ({ ...props }) => {
  return <div className="nbosSurface">{props.children}</div>;
};
