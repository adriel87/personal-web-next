import { Card, Text } from "@nextui-org/react"

interface Props {
	routerFunction: () => void
	text: string
}

const LinkCard = ({ routerFunction, text }: Props) => {
	return (
		<Card
			onClick={routerFunction}
			clickable
			bordered
			css={{
				backgroundColor: "$button",
				maxWidth: "400px",
				margin: "3px auto",
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
