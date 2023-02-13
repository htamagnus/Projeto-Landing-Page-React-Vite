import React from "react";
import styles from "./Cards.module.scss";
import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.png";
import Card3 from "../../assets/Card3.png";
import Card4 from "../../assets/Card4.png";

export default function Cards() {
  const dadosCards = [
    {
      id: "1",
      image: Card1,
      titulo: "Pacotes do tamanho da sua equipe!",
      texto: "Pague apenas pelo número de usuários dentro da sua necessidade",
    },
    {
      id: "2",
      image: Card2,
      titulo: "Integração com o Google Business",
      texto: "Tudo salvo na nuvem do seu email corporativo",
    },
    {
      id: "3",
      image: Card3,
      titulo: "Suporte 24h com atendentes reais",
      texto: "Pintou uma dúvida? Chama a gente! Não somos robôs",
    },
    {
      id: "4",
      image: Card4,
      titulo: "Ilimitado para todos os públicos!",
      texto:
        "Tem 2.200 pessoas na sua equipe? Nosso sistema suporta qualquer número!",
    },
  ];

  return (
    <div id="vantagens" className={styles.cards}>
      {dadosCards.map((data) => (
          <section key={data.id} className={styles.cards__card}>
            <img className={styles.cards__imagem} src={data.image}/>
            <h3 className={styles.cards__titulo}>{data.titulo}</h3>
            <hr size="6" width="100" color="#DA5F17" />
            <p className={styles.cards__paragrafo}>{data.texto}</p>
          </section>
      ))}
    </div>
  );
}
