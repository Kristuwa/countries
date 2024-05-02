import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CountryItem } from "../CountryItem/CountryItem";
import { List } from "./CountriesList.styled";

export const CountriesList = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const fetchCountries = async () => {
try {
const listOfCountries = await axios.get("https://restcountries.com/v3.1/all");
const {data} = listOfCountries
setCountries(data);
} catch(err) {

}

		};
		fetchCountries();

	}, [])
	return <List>{countries.map((country)=>{
		const {name} = country;
		const commonName = name.common;
		return <CountryItem key={commonName} country={commonName} />
	})}</List>
}