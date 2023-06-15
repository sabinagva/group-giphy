import React, { useEffect } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { useDispatch, useSelector } from "react-redux";

function FavoriteList() {
  const dispatch = useDispatch();

  const favoriteList = useSelector((store) => store.favoriteList);

  useEffect(() => {
    dispatch({ type: "GET_FAV" });
  }, []);

  return (
    <div>
      {favoriteList.map((item) => {
        return <FavoriteItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FavoriteList;
