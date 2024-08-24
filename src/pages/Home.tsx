import { FC, useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import CardItem from "../CardList/CardItem";
import { ICardData } from "../types/CardData";
interface IDatProps {
  data: ICardData[];
}
const Home: FC<IDatProps> = ({ data }) => {
  const [allData, setAllData] = useState([...data]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const handleChangeLikedData = () => {
    if (!isFiltered) {
      const likedData = data.filter((dat) => dat.liked === true);
      if (likedData.length > 0) {
        setAllData(likedData);
      } else {
        setAllData([]);
      }
    } else {
      setAllData(data);
    }
    setIsFiltered((prev) => !prev);
  };
  useEffect(() => {
    setAllData(data);
  }, [data]);
  return (
    <div className="container">
      <button onClick={handleChangeLikedData}>
        {isFiltered ? "Показать все" : "Фильтр по лайкам"}
      </button>
      {isFiltered && allData.length === 0 && <h1>Нечего показывать</h1>}
      <CardList>
        {allData?.map((dat) => (
          <CardItem key={dat.id} data={dat}></CardItem>
        ))}
      </CardList>
    </div>
  );
};

export default Home;
