import React, { useEffect, useState } from "react";
import ItemList from "./ItemList" //-> import por default
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import {collection, getDocs,query,where} from "firebase/firestore";
import { dataBase } from "../../services/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading]= useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const coleccionProductos = collection(dataBase, "items");

    const referencia = categoryName
      ? query(coleccionProductos, where("category", "==", categoryName))
      : coleccionProductos;

    getDocs(referencia)
      .then((res) => {
        const productos = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(productos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => setLoading(true);
  }, [categoryName]);

  if (loading) {
    return (
      <div className='loading'>
        <PuffLoader color='#05adce' />;
      </div>
    );
  }

  return (
    <div className='container-fluid'>
      <ItemList item={items} />
    </div>
  );
};

export default ItemListContainer;