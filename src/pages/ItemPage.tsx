import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICardData } from "../types/CardData";
import CardDAta from "../CardData/CardDAta";
import GoBack from "../GoBack/GoBack";

const ItemPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<ICardData>();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [setData]);

  return (
    <div className="container">
      <GoBack href="/"></GoBack>
      {data && (
        <CardDAta
          image={data?.image}
          description={data?.description}
          title={data?.title}
          category={data?.category}
          price={data?.price}
        ></CardDAta>
      )}
    </div>
  );
};

export default ItemPage;
