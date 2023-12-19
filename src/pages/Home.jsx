import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const URL = "https://fakestoreapi.com/products";
      await fetch(URL)
        .then((data) => data.json())
        .then((data) => setItems(data))
        .catch((err) => {
          console.log(err);
          setItems([]);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center w-[1060px] gap-3">
        {items.length > 0 ? (
          items.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col gap-3">
            <p className="custom-loader"></p>
            <p className="font-bold ">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
