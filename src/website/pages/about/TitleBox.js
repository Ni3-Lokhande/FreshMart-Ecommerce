
import React from 'react';

const TitleBox = ({ title, breadcrumb }) => (
  <div className="all-title-box ">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>{title}</h2>
          <ul className="breadcrumb">
            {breadcrumb.map((item, index) => (
              <li key={index} className={index === breadcrumb.length - 1 ? 'breadcrumb-item active' : 'breadcrumb-item'}>
                {index === breadcrumb.length - 1 ? item : <a href="#">{item}</a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default TitleBox;
