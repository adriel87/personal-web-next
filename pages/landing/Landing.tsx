import { Card, Container, Image, Spacer, Text } from "@nextui-org/react"
import Link from "next/link"
import {} from "react-icons"
import Social from "../../components/Social"
const Landing = () => {
	return (
		<Container
			display='flex'
			justify='center'
			direction='column'
			css={{
				margin: "1rem auto",
				backgroundColor: "$main",
			}}>
			<Image
				showSkeleton
				width={200}
				height={200}
				src={"/images/profile-pic.jpg"}
				alt={"imagen de perfil"}
				css={{
					border: "2px solid $tertiary",
					borderRadius: "100%",
				}}
			/>
			<Text>Desarrollo comoo un bollo</Text>
			<Text>y escalo como un lagarto</Text>

			<Spacer y={3} />
			<Container display='flex' direction='column'>
				<Link href={"/"}>
					<Card
						clickable
						bordered
						css={{
							backgroundColor: "$button",
						}}>
						<Text
							h3
							css={{
								color: "$main",
								alignSelf: "center",
							}}>
							Portfolio
						</Text>
					</Card>
				</Link>

				<Card
					clickable
					bordered
					css={{
						backgroundColor: "$button",
					}}>
					<Text
						h3
						css={{
							color: "$main",
							alignSelf: "center",
						}}>
						Blog
					</Text>
				</Card>
			</Container>
			<Spacer y={3} />
			<Social fontsize={40} />
		</Container>
	)
}

export default Landing
