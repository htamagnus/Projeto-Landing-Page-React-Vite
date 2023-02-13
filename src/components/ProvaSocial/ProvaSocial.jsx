import React from "react";
import styles from "./ProvaSocial.module.scss";
import Banner1 from "../../assets/Banner1.png";
import Pessoa from "../../assets/Pessoa.png";

export default function ProvaSocial() {
  return (
    <section className={styles.secao}>
      <img src={Banner1} />
      <div>
        <h2 className={styles.secao__titulosecao}>O que falam da WorkUs</h2>
        <hr size="6" width="100" color="#DA5F17" />
        <div className={styles.secao__card}>
          <img className={styles.secao__imagem} src={Pessoa} />
          <h1 className={styles.secao__titulo}>Luiz Lima</h1>
          <p className={styles.secao__paragrafo}>
            Ótimo, sempre precisei me organizar melhor e a workUs facilitou
            bastante!
          </p>
        </div>
      </div>
    </section>
  );
}
