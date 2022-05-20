import { Container, Row, Col, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import LinkCard from "../../components/linkCard/LinkCard"
import RoundedAvatar from "../../components/RoundedAvatar"
import ShortInfo from "../../components/shortInfo/ShortInfo"
import Social from "../../components/Social"

const Landing = () => {
	const router = useRouter()

	const handleLinkRouter = (route: string) => router.push(route)
	return (
		<Container
			xs
			display='flex'
			justify='space-evenly'
			alignItems='center'
			direction='column'
			css={{
				height: "100vh",
				backgroundColor: "$main",
			}}>
			<Row justify='center' align='center'>
				<Col>
					<Text css={{ textAlign: "center" }} h1 color='$tertiary' size={80}>
						Adriel
					</Text>
					<Text css={{ textAlign: "center" }} h1 color='$tertiary' size={80}>
						Oronoz
					</Text>
				</Col>
			</Row>
			<Row>
				<Col>
					<RoundedAvatar />
					<ShortInfo />
					<LinkCard
						routerFunction={() => {
							handleLinkRouter("/portfolio/main")
						}}
						text={"💼 Portfolio 💼"}
					/>
					<LinkCard
						routerFunction={() => {
							handleLinkRouter("/about/MyPersonalInfo")
						}}
						text={"📒 Blog 📒"}
					/>
				</Col>
			</Row>
			<Row justify='center'>
				<Col>
					<Social fontsize={40} />
				</Col>
			</Row>
		</Container>
	)
}

export default Landing
