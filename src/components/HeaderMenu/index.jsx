import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from "../../image/logo.png";

import classes from "./HeaderMenu.module.scss";
import Container from '../../layout/Container';
import classNames from 'classnames';

const HeaderMenu = () => {
  return (
    <div className={classes.header__wrapper}>
      <Container>
        <header className={classes.header}>
          <a href="#!">
            <img className={classes["header__logo"]} src={logo} alt="Logos" />
          </a>

          <div className={classes["header__menu-block"]}>

            <div className={classes.header__contact}>
              <a href="#!" className={classes["header__contact-prays"]}>Prays list</a>
              <a href="#!" className={classNames(classes["header__contact-instagram"], classes["header__contact-social"] )}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#!" className={classNames(classes["header__contact-telegram"], classes["header__contact-social"] )}>
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a href="#!" className={classNames(classes["header__contact-facebook"], classes["header__contact-social"] )}>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>

            <div className={classes.header__menu}>
              <div className={classes["header__menu-bars"]}>
                <span></span>
              </div>
              <div className={classes["header__menu-text"]}>
                Menu
              </div>
            </div>

          </div>
        </header>
      </Container>
    </div>
  )
}

export default HeaderMenu