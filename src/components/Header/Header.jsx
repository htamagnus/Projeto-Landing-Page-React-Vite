import React from 'react'
import Logo from '../../assets/Logo.png'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.cabecalho}>
        <img className={styles.cabecalho__logo} src={Logo}/>
        <ul className={styles.cabecalho__lista}>
            <a href="#about" className={styles.cabecalho__li}>Sobre</a>
            <a id="esconder" href="#vantagens"className={styles.cabecalho__li}>Vantagens do WorkUs</a>
            <a className={styles.cabecalho__esconder}>Contatos</a>
        </ul>
    </header>
  )
}
