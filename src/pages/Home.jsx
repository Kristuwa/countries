import { CountriesList } from "../components/CountriesList/CountriesList"
import { Container, Main, MainTitle, Text } from "./Pages.styled"

export const Home = ()=> {
	return <Main>
		<Container>
		<MainTitle>List of Countries</MainTitle>
		<Text>You can choose any country and view all the information about it.</Text>
		<CountriesList />
		</Container>
		</Main>
}