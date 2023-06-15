import React, { useEffect } from "react";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";

function FavoriteList() {
  const dispatch = useDispatch();

  const favoriteList = useSelector((store) => store.favoriteList);

  useEffect(() => {
    dispatch({ type: "GET_FAV" });
  }, []);

  return (
    <Router>
    <h2>Welcome to Your Favorites Page!</h2>
        <Link to="/">Go Back to Homepage</Link>
    <div>
      {favoriteList.map((item) => {
        return <FavoriteItem key={item.id} item={item} />;
      })}
    </div>
    </Router>
  );
}

export default FavoriteList;
