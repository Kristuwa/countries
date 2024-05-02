import { CountryItem } from "../CountryItem/CountryItem";
import { List } from "./CountriesList.styled";

export const CountriesList = ({ countries }) => {
	console.log(countries)
  return (
    <List>
      {countries.map((country) => {
        const commonName = country.name["common"];
        return <CountryItem key={commonName} country={commonName} />;
      })}
    </List>
  );
};
