import { Card, Col, Row, Button, Text } from "@nextui-org/react"
import Link from "next/link"

import style from "./repoCard.module.css"

export interface IRepository {
	header: Header
	body: Body
	footer: Footer
	url: string
}

interface Header {
	text: string
}

interface Body {
	altTextImg: string
	urlImg: string
}

interface Footer {
	description: string
}

const RepoCard = ({ header, body, footer, url }: IRepository) => (
	<a href={url} target='_blank' rel='noreferrer' className={style.alink}>
		<Card cover css={{ w: "100%" }} className={style.card}>
			<Card.Header
				css={{
					position: "absolute",
					bgBlur: "#ffffff",
					zIndex: 1,
					top: 0,
				}}>
				<Col>
					<Text
						className={style.header}
						h5
						transform='uppercase'
						color='$headline'>
						{header.text}
					</Text>
				</Col>
			</Card.Header>
			<Card.Body>
				<Card.Image
					src={body.urlImg}
					height={200}
					width='100%'
					alt={body.altTextImg}
				/>
			</Card.Body>
			<Card.Footer
				blur
				css={{
					position: "absolute",
					bgBlur: "#ffffff",
					borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
					bottom: 0,
					zIndex: 1,
				}}>
				<Row>
					<Col>
						<Row justify='center'>
							<Text
								css={{ color: "$headline" }}
								size={10}
								weight='bold'
								transform='uppercase'>
								{footer.description}
							</Text>
						</Row>
					</Col>
				</Row>
			</Card.Footer>
		</Card>
	</a>
)

export default RepoCard
