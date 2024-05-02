import { useEffect } from "react";
import { CountriesList } from "../components/CountriesList/CountriesList";
import { Container, Main, MainTitle, Text } from "./Pages.styled";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { Loader } from "../components/Loader/Loader";

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const listOfCountries = await axios.get(
          "https://restcountries.com/v3.1/all"
        );
        const { data } = listOfCountries;
        setCountries(data);
        setLoading(false);
      } catch (err) {
        toast.error("Error! Please, reload page or go to HomePage");
        console.log(err.message);
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);
  return (
    <Main>
      <Container>
        <MainTitle>List of Countries</MainTitle>
        <Text>
          You can choose any country and view all the information about it.
        </Text>
        {countries.length > 0 && !loading && (
          <CountriesList countries={countries} />
        )}
        {countries.length === 0 && !loading && <p>Not found any country</p>}
        {loading && <Loader />}
      </Container>
    </Main>
  );
};
