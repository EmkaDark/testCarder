import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/DataState/DataSlice";
import { AppDispatch, RootState } from "./redux/Store";
function App() {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.cardsArr.cards);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/:id" element={<ItemPage />} />
    </Routes>
  );
}

export default App;
