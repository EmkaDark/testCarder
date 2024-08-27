import { FC, useEffect, useState } from "react";
import CardList from "../components/CardList/CardList";
import CardItem from "../components/CardList/CardItem";
import { ICardData } from "../types/CardData";
interface IDatProps {
  data: ICardData[];
}
const Home: FC<IDatProps> = ({ data }) => {
  const [allData, setAllData] = useState([...data]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  useEffect(() => {
    if (isFiltered) {
      setAllData(data.filter((dat) => dat.liked === true));
    } else {
      setAllData(data);
    }
  }, [data, isFiltered]);

  const handleChangeLikedData = () => {
    setIsFiltered((prev) => !prev);
  };
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
