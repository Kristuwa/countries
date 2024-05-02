import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loader } from "../components/Loader/Loader";
import { Container, CountryTitle, Error, Main, Image, CapitalText } from "./Pages.styled";

export const CountryPage = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const [country, setCountry] = useState(null);
  console.log(country)
  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const nameCountry = id.toLowerCase();
        const searchCountry = await axios.get(
          `https://restcountries.com/v3.1/name/${nameCountry}`
        );
		
        setCountry(searchCountry.data[0]);
        setLoading(false);
      } catch (err) {
        toast.error("Error! Try again or go to Home page");
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchCountry();
  }, [id]);

  return (
    <Main>
      <Container>
        {loading && <Loader />}
        {!loading && country && (
          <div>
            <CountryTitle>{country?.name["common"]}</CountryTitle>
            <Image
              src={country?.flags["svg"]}
              alt="flag"
              width={100}
              height={100}
            />
            <CapitalText>Capital: {country?.capital[0]}</CapitalText>
          </div>
        )}
        {!loading && country === null && <Error>Not found any country</Error>}
      </Container>
    </Main>
  );
};
