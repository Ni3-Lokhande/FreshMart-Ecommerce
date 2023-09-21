

import React from 'react';

const ServiceBlock = ({ title, description }) => (
  <div className="col-sm-6 col-lg-4">
    <div className="service-block-inner">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ServiceBlock;
