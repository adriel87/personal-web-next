import { Card, Container, Row, Text, Col, Spacer } from "@nextui-org/react"
import { getSortedPostsData } from "../../utils/posts"
import { PostInfo } from "../posts/[id]"

import style from "./main.module.css"
import {
	backRepositories,
	frontRepositories,
	mobileRepositories,
} from "../../src/db/repos"
import RepoGrid from "../../components/repoGrid/RepoGrid"
import BackendSkills from "../../components/repoSkills/BackendSkills"
import GeneralSkills from "../../components/repoSkills/GeneralSkills"
import FrontendSkills from "../../components/repoSkills/FrontendSkills"
import NavBar from "../../components/navBar/NavBar"

interface AllPostsData {
	allPostsData: PostInfo[]
}

const TEXT_SIZE = 17

const main = ({ allPostsData }: AllPostsData) => {
	// console.log(allPostsData);

	return (
		<>
			<NavBar />
			<Container
				className={style.container}
				xs
				css={{
					backgroundColor: "$secondary",
				}}>
				<Row wrap='wrap' justify='space-evenly' align='center'>
					<Col>
						<Card
							className={style.card}
							css={{
								backgroundColor: "$background",
							}}>
							<Text h2 color='$headline'>
								General
							</Text>
							<Text size={TEXT_SIZE}>
								Siempre que me pongo a programar intento ser bastante claro con
								lo que quiero hacer, mi ideal seria aplicar siempre de manera
								perfecta los principios SOLID en todos y cada uno de mis
								proyectos
							</Text>
							<GeneralSkills />
						</Card>
					</Col>
					<Col>
						<Card className={style.card}>
							<Text h2 color='$headline'>
								Backend ⚙️🗄️👨‍💻
							</Text>
							<Text size={TEXT_SIZE}>Diseño - Arquitectura - Performance</Text>
							<Text size={TEXT_SIZE}>
								Podría decir que el back me da dolores de cabeza y también que
								es lo que mas me divierte
							</Text>
							<BackendSkills />
							<RepoGrid repositories={backRepositories} />
						</Card>
					</Col>
					<Col>
						<Card className={style.card}>
							<Text h2 color='$headline'>
								Frontend 🖥️ 💅
							</Text>
							<Text size={TEXT_SIZE}>
								Que la comida 🍜 entra por los ojos es verdad, pues una app
								también
							</Text>
							<FrontendSkills />
							<RepoGrid repositories={frontRepositories} />
						</Card>
					</Col>
					<Col>
						<Card className={style.card}>
							<Text h2 color='$headline'>
								Mobile 📱
							</Text>
							<Text size={TEXT_SIZE}>
								Siempre lo tienes en la palma de tu mano
							</Text>
							<RepoGrid repositories={mobileRepositories} />
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default main
