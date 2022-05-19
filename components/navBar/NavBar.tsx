import { Col, Container, Row } from "@nextui-org/react"
import Link from "next/link"

import style from "./navBar.module.css"
import { useRouter } from "next/router"

const NavBar = () => {
	const router = useRouter()

	//TODO change links for other components, and use the next function
	const handlerRouter = (path: string, optionalPathName: string = "") => {
		router.push(path, optionalPathName)
	}

	return (
		<Container
			fluid
			display='flex'
			justify='center'
			alignContent='center'
			alignItems='center'
			className={style.container}>
			<Row align='center' justify='center' css={{}}>
				<Col>
					<Link href={"/"}>
						<a className={style.anchor_home}>home</a>
					</Link>
				</Col>
				<Col>
					<Link href={"/portfolio/main"}>
						<a className={style.anchor_portfolio}>PORTOFOLIO</a>
					</Link>
				</Col>
				<Col>
					<Link href={"/about/MyPersonalInfo"} as={"me"}>
						<a className={style.anchor_about}>SOBRE</a>
					</Link>
				</Col>
				<Col>
					<a className={style.anchor_blog}>BLOG</a>
				</Col>
			</Row>
		</Container>
	)
}

export default NavBar
