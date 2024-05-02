import { useLocation } from "react-router-dom";
export const CountryPage = ()=> {
	const location = useLocation();
	const {pathname} = location;
	return <div>{pathname}</div>
}