import { useEffect, useState } from "react";
import RenderList from "./RenderList";
const GetProduct = () => {
  const API_URL = "https://api.npoint.io/6177ac82e6129908c171";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Oops and Error occured.Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {error ? (
        <p>Oops! An Error Occured: {error}</p>
      ) : (
        <RenderList data={data} />
      )}
    </div>
  );
};

export default GetProduct;
