import { Col, Container, Row, Text } from "@nextui-org/react"
import { getAllPostId, getAllpostIDs } from "../../utils/posts"
import { useRouter } from "next/router"
import Link from "next/link"
import style from "./blog.module.css"

interface Props {
	posts: string[]
}

const Index = ({ posts }: Props) => {
	console.log(posts)

	const route = useRouter()

	const handleRouter = (url: string) => route.push(`/posts/${url}`)

	return (
		<Container display='flex' css={{ backgroundColor: "$tertiary" }}>
			<Container xs display='flex' css={{ backgroundColor: "$secondary" }}>
				<Row>
					<Col>
						<Text h1>El blog Oronoz</Text>
						<Text>Para todo hay una primera vez, hasta para un blog. </Text>
					</Col>
				</Row>

				<Row justify='space-around'>
					<Text size={30}>👇👇</Text>
					<Text size={30}>👀</Text>
					<Text size={30}>👇👇</Text>
				</Row>

				{posts.map((post, index) => {
					return (
						<Row
							justify='center'
							className={index % 2 === 0 ? style.odd : style.even}
							key={post}>
							<Link href={`/posts/${post}`}>{post}</Link>
						</Row>
					)
				})}
			</Container>
		</Container>
	)
}

export default Index

export async function getStaticProps() {
	const posts = getAllpostIDs()

	return {
		props: {
			posts,
		},
	}
}
