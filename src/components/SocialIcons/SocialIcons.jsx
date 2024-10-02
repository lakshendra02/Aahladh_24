import React from "react";

import "./SocialIcons.css";

const SocialIcons = ({ socialIcons = [] }) => {
  return (
    <div className="social-icons">
      <ul className="social-icons-links">
        {socialIcons.map((item, itemIndex) => (
          <li className="social-icons" key={itemIndex}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
