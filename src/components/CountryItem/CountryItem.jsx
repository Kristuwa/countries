import { Link } from "./CountryItem.styled"


export const CountryItem = ({country}) => {
	return <li><Link to={`${country}`}>{country}</Link></li>
}