import React from "react";
import styles from "./Banner3.module.scss";
import Imagem1 from "../../assets/Imagem1.png";
import Imagem2 from "../../assets/Imagem2.png";
import { Fade } from "react-reveal";

export default function Banner3() {
  return (
    <Fade>
    <main id="about" className={styles.banner}>
      <img src={Imagem1} alt="" className={styles.banner__imagens}/>
      <nav className={styles.banner__principal}>
        <h2 className={styles.banner__titulo}>O que é o WorkUs?</h2>
        <p className={styles.banner__paragrafo}>
          Somos uma plataforma 100% online de gerenciamento de demandas, gestão
          de fluxo de trabalho, processos e tempo. Não precisa mais marcar uma
          reunião que poderia ser um email com a sua equipe. Basta subir uma
          demanda, linkar aos responsáveis e colocar o prazo de entrega. Depois,
          é só dar o feedback na plataforma mesmo. Simples, né? Nós queremos
          simplificar a sua rotina de home office!
        </p>
        <button className={styles.banner__botao}>Faça um teste grátis!</button>
      </nav>
      <img src={Imagem2} alt="" className={styles.banner__imagens}/>
    </main>
    </Fade>
  );
}
