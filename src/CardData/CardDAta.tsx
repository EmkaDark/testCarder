import { FC } from "react";
import { ICardData } from "../types/CardData";
import styles from "./CardData.module.scss";
const CardDAta: FC<ICardData> = ({
  image,
  title,
  description,
  category,
  price,
}) => {
  return (
    <>
      <div className={styles.aside}>
        <div className={styles.card_info}>
          <h1 className={styles.header}>{title}</h1>
          <b className={styles.category}>{category}</b>
          <p className={styles.price}>Цена: ${price}</p>
          <button className={styles.order_button}>Купить</button>
        </div>
        <img className={styles.img} src={image} alt="" />
      </div>
      <b className={styles.description_header}>Описание</b>
      <p className={styles.description}>{description}</p>
    </>
  );
};

export default CardDAta;
