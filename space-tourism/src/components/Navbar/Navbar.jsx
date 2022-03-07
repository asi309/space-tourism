import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import data from '../../constants/data.json';
import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar app__flex">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="app__navbar-contents">
        <div className="app__navbar-line" />
        <div className="app__navbar-links">
          {data.common.navbar.map((item, idx) => (
            <NavLink
              key={item + idx}
              to={`/${item === 'home' ? '' : item}`}
              className={({ isActive }) =>
                `app__navbar-link nav-text${
                  isActive ? ' app__navbar-link-active' : ''
                }`
              }
            >
              <span>
                {idx.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
              </span>
              {` ${item.toUpperCase()}`}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="app__navbar-small">
        <div className="app__navbar-menu" onClick={() => setToggle(true)}>
          <img src={images.menu} alt="menu" />
        </div>
        {toggle && (
          <motion.div
            className="app__navbar-small-contents"
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div
              className="app__navbar-menu-close"
              onClick={() => setToggle(false)}
            >
              <img src={images.close} alt="close" />
            </div>
            <div className="app__navbar-small-links">
              {data.common.navbar.map((item, idx) => (
                <NavLink
                  key={item + idx}
                  to={`/${item === 'home' ? '' : item}`}
                  className={({ isActive }) =>
                    `app__navbar-small-link nav-text${
                      isActive ? ' app__navbar-link-active' : ''
                    }`
                  }
                  onClick={() => setToggle(false)}
                >
                  <span>
                    {idx.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
                  </span>
                  {` ${item.toUpperCase()}`}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
