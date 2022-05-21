import { Container, Row, Col, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import LinkCard from "../../components/linkCard/LinkCard"
import RoundedAvatar from "../../components/roundedAvatar/RoundedAvatar"
import ShortInfo from "../../components/shortInfo/ShortInfo"
import Social from "../../components/Social"
import style from "./landing.module.css"

const Landing = () => {
	const router = useRouter()

	const handleLinkRouter = (route: string) => router.push(route)
	return (
		<Container
			xs
			display='flex'
			css={{
				backgroundColor: "$main",
				height: "100vh",
			}}>
			<Row
				justify='center'
				align='center'
				css={{
					marginBottom: "10px",
				}}>
				<Col>
					<Text className={style.name} h1 color='$tertiary'>
						Adriel <span>Oronoz</span>
					</Text>
					<Text className={style.lastName} h1 color='$tertiary'>
						Oronoz
					</Text>
				</Col>
			</Row>
			<Row>
				<Col>
					<RoundedAvatar info />
					<ShortInfo />
					<LinkCard
						routerFunction={() => {
							handleLinkRouter("/portfolio/main")
						}}
						text={"💼 Portfolio 💼"}
					/>
					<LinkCard
						routerFunction={() => {
							handleLinkRouter("/blog/Index")
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
