import { FC, ReactNode } from "react";
import styles from "./CardList.module.scss";
interface ICardList {
  children: ReactNode;
}

const CardList: FC<ICardList> = ({ children }) => {
  return <ul className={styles.ul}>{children}</ul>;
};

export default CardList;
