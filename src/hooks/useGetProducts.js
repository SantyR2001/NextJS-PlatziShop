import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
        const response = await axios(API, {params: {
          limit: 25
        }});	  
        setProducts(response.data);
    })();
  }, []);

  return products;
};

export { useGetProducts };
