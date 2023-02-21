'use client'
import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/components/Header.module.css';
import { Menu } from '../Menu';
import { AppContext } from '@/context/AppContex';


const Header = () => {
    const { menuState, toggleMenu } = useContext(AppContext);
    return (
        <header className={styles.Header}>
            {menuState.menuIsOpen ? <Menu /> : null}
            {!menuState.menuIsOpen
                ? <FontAwesomeIcon icon={faBars} onClick={() => toggleMenu()} width={35} />
                : null}
            <FontAwesomeIcon icon={faUserCircle} width={35} />
        </header>
    )
}

export { Header } 