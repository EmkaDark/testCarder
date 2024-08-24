import { FC } from "react";
import { ICardData } from "../types/CardData";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import styles from "./CardList.module.scss";
import { AppDispatch } from "../redux/Store";
import { useDispatch } from "react-redux";
import { deleteItem, toogleLike } from "../redux/DataState/DataSlice";
interface iItemProps {
  data: ICardData;
}
const CardItem: FC<iItemProps> = ({ data }) => {
  const dispatch: AppDispatch = useDispatch();
  const handleToogleClick = () => {
    dispatch(toogleLike(data.id!));
    console.log("ttodg");
  };
  const handleDeleteItem = () => {
    dispatch(deleteItem(data.id!));
  };
  return (
    <li className={styles.list_item}>
      <LikeButton onClick={handleToogleClick} liked={data.liked!} />
      <DeleteButton onClick={handleDeleteItem} />
      <a href={`/${data.id}`} className={styles.link}>
        <img src={data.image} alt={data.title} className={styles.img} />

        <b className={styles.title}>{data.title}</b>
        <p className={styles.desc}>{data.description}</p>
      </a>
    </li>
  );
};

export default CardItem;
