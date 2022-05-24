import { Col, Container, Link, Row, Text } from "@nextui-org/react"
import { getSortedPostsData } from "../../utils/posts"
import { useRouter } from "next/router"
import style from "./blog.module.css"
import NavBar from "../../components/navBar/NavBar"
import BlogTag from "../../components/blogTag/BlogTag"
import { tags } from "../../components/blogTag/BlogTag"

interface Props {
	posts: post[]
}

interface post {
	id: string
	title: string
	date: string
	tags: tags
}

const Index = ({ posts }: Props) => {
	// console.log(posts)

	// TODO hacer validacion de tipo con los tags

	const route = useRouter()

	const handleRouter = (url: string) => route.push(`/posts/${url}`)

	return (
		<>
			<NavBar />
			<Container className={style.container} display='flex'>
				<Container xs display='flex'>
					<Row>
						<Col>
							<Text h1>El blog Oronoz</Text>
							<Text size={25}>
								Para todo hay una primera vez, hasta para un blog.{" "}
							</Text>
						</Col>
					</Row>

					<Row justify='space-around'>
						<Text size={30}>👇👇</Text>
						<Text size={30}>👀</Text>
						<Text size={30}>👇👇</Text>
					</Row>

					{posts.map((post, index) => {
						return (
							<Container
								display='flex'
								direction='column'
								justify='space-between'
								className={index % 2 === 0 ? style.odd : style.even}
								key={post.id}>
								<Row>
									<Link css={{ margin: "$3" }} href={`/posts/${post.id}`}>
										{post.title}
									</Link>
									<BlogTag tag={post.tags} />
								</Row>
								<Row css={{ margin: "$2" }}>
									<Text>{post.date}</Text>
								</Row>
							</Container>
						)
					})}
				</Container>
			</Container>
		</>
	)
}

export default Index

export async function getStaticProps() {
	const posts = getSortedPostsData()

	return {
		props: {
			posts,
		},
	}
}
