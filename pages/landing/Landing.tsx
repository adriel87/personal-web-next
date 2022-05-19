import { Card, Container, Spacer, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import RoundedAvatar from "../../components/RoundedAvatar"
import ShortInfo from "../../components/shortInfo/ShortInfo"
import Social from "../../components/Social"

import "../../styles/prueba.module.css"

const Landing = () => {
	const router = useRouter()

	const handlePortfolioButton = async () => {
		await setTimeout(() => {
			router.push("/portfolio/main")
		}, 350)
	}

	const handleBlogButton = async () => {
		await setTimeout(() => {
			router.push("/about/MyPersonalInfo", "About me")
			console.log("aqui va la ruta del blog")
		}, 350)
	}
	return (
		<Container
			display='flex'
			justify='space-evenly'
			alignItems='center'
			direction='column'
			css={{
				height: "100vh",
				margin: "2rem auto 1rem auto",
				backgroundColor: "$main",
			}}>
			<Container display='flex' direction='column'>
				<Text h1 color='$tertiary' size={80}>
					Adriel
				</Text>
				<Text h1 color='$tertiary' size={80}>
					Oronoz
				</Text>
			</Container>
			<RoundedAvatar />
			<ShortInfo />

			<Spacer y={2} />
			<Container
				className='buttons'
				xs
				display='flex'
				justify='space-between'
				alignItems='center'
				direction='column'>
				<Card
					onClick={handlePortfolioButton}
					clickable
					bordered
					css={{
						backgroundColor: "$button",
						maxWidth: "400px",
					}}>
					<Text
						h3
						css={{
							color: "$main",
							alignSelf: "center",
						}}>
						💼 Portfolio 💼
					</Text>
				</Card>

				<Card
					onClick={handleBlogButton}
					clickable
					bordered
					css={{
						backgroundColor: "$button",
						maxWidth: "400px",
					}}>
					<Text
						h3
						css={{
							color: "$main",
							alignSelf: "center",
						}}>
						📒 Blog 📒
					</Text>
				</Card>
			</Container>
			<Spacer y={3} />
			<Container xs>
				<Social fontsize={40} />
			</Container>
		</Container>
	)
}

export default Landing
