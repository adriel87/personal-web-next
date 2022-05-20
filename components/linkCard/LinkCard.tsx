import { Card, Text } from "@nextui-org/react"

interface Props {
	routerFunction: () => void
	text: string
}

const voidazo = () => {}

const LinkCard = ({ routerFunction, text }) => {
	return (
		<Card
			onClick={routerFunction}
			clickable
			bordered
			css={{
				backgroundColor: "$button",
				maxWidth: "400px",
				margin: "0 auto",
			}}>
			<Text
				h3
				css={{
					color: "$main",
					alignSelf: "center",
				}}>
				{text}
			</Text>
		</Card>
	)
}

export default LinkCard
