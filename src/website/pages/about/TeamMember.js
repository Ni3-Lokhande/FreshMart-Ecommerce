

import React from 'react';

const TeamMember = ({ name, post, imageSrc, description }) => (
  <div className="col-sm-6 col-lg-3">
    <div className="hover-team">
      <div className="our-team">
        <img src={imageSrc} alt={name} />
        <div className="team-content">
          <h3 className="title">{name}</h3>
          <span className="post">{post}</span>
        </div>
        <ul className="social">
          {/* ... Social media links */}
          <li>
            <a href="#" className="fab fa-facebook" />
          </li>
          <li>
            <a href="#" className="fab fa-twitter" />
          </li>
          <li>
            <a href="#" className="fab fa-google-plus" />
          </li>
          <li>
            <a href="#" className="fab fa-youtube" />
          </li>
        </ul>
        <div className="icon">
          <i className="fa fa-plus" aria-hidden="true" />
        </div>
      </div>
      <div className="team-description">
        <p>{description}</p>
      </div>
      <hr className="my-0" />
    </div>
  </div>
);

export default TeamMember;
