import React from "react";
import styles from "./Banner2.module.scss";
import Banner2BG from "../../assets/Banner2BG.png";
import { Fade } from 'react-reveal'

export default function Banner2() {
  return (
    <Fade>
    <div className={styles.banner}>
      <nav>
        <img className={styles.banner__imagem} src={Banner2BG} alt="" />
      </nav>
      <nav className={styles.banner__principal}>
        <h2 className={styles.banner__titulo}>
          Trabalho organizado é trabalho otimizado!
        </h2>
        <hr size="6" width="100" color="#DA5F17" />
        <p className={styles.banner__paragrafo}>
          A nova jorganda de trabalho exige novos hábitos e um controle melhor
          na disciplina de horários e demandas. Com a gente você cria, gerencia
          e executa todo o seu fluxo de trabalho junto ao de toda a sua equipe,
          principalmente em home office
        </p>
      </nav>
    </div>
    </Fade>
  );
}
