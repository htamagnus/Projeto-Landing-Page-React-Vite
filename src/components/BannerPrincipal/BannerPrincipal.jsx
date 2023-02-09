import React from "react";
import styles from "./BannerPrincipal.module.scss";
import Banner1 from "../../assets/Banner1.png";

export default function BannerPrincipal() {
  return (
    <div className={styles.banner}>
      <nav className={styles.banner__principal}>
        <h1 className={styles.banner__titulo}>
          Crie e gerencie seu fluxo de trabalho no home office com o WorkUs
        </h1>
        <button className={styles.banner__botao}>Crie sua conta grátis</button>
      </nav>
      <nav>
        <img className={styles.imagem} src={Banner1} alt="" />
      </nav>
    </div>
  );
}
