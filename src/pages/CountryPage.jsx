import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../components/Loader/Loader";

export const CountryPage = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  const [country, setCountry] = useState(null);
  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const nameCountry = id.toLowerCase();
        const searchCountry = await axios.get(
          `https://restcountries.com/v3.1/name/${nameCountry}`
        );
        setCountry(searchCountry);
        console.log(searchCountry);
        setLoading(false);
      } catch (err) {
        toast.error("Error! Try again or go to Home page");
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchCountry();
  }, [id]);
  
  return <>
  {loading && <Loader />}
  {!loading && country && <div>{id}</div>}
  {!loading && country===null && <p>Not found any country</p>}
  </>;
};
