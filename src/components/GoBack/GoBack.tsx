import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./GoBack.module.scss";
interface IGoBack {
  href: string;
}
const GoBack: FC<IGoBack> = ({ href }) => {
  return (
    <Link to={href} className={styles.back}>
      Назад
    </Link>
  );
};

export default GoBack;
