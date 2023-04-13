import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logovlad"
            className="w-[90px] h-[90px] object-contain rounded-full "
          />
          <span className="text-white text-[18px] font-bold cursor-pointer">
            vladian95
          </span>
        </Link>
        <ul className="link-box list-none hidden sm:flex flex-row gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a className="nav-links" href={`#${link.id}`}>
                {t(`navLinks.${link.id}.title`)}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{t(`navLinks.${link.id}.title`)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="text-black w-[30px] h-[30px] ml-[10px] bg-white rounded-full text-xs transition ease-in delay-100  hover:scale-150"
            onClick={() => changeLanguage('en')}
          >
            Eng
          </button>
          <button
            className="text-black w-[30px] h-[30px] ml-[10px] bg-white rounded-full text-xs transition ease-in delay-100 hover:scale-150"
            onClick={() => changeLanguage('ru')}
          >
            Rus
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
