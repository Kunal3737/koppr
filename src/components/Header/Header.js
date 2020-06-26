import React, { Component } from 'react';
import styles from '../Header/Header.module.css';
import logo from '../../images/logo.png';

class Header extends Component {
    render() {
        return (
            <div className={styles.outerHeader}>
                <img src={logo} alt="Koppr-Logo" />
            </div>
        )
    }
}

export default Header;