import { CountryItem } from "../CountryItem/CountryItem";
import { List } from "./CountriesList.styled";

export const CountriesList = ({ countries }) => {
  return (
    <List>
      {countries.map((country) => {
        const { name } = country;
        const commonName = name.official;
        return <CountryItem key={commonName} country={commonName} />;
      })}
    </List>
  );
};
