import { Button, Col, Container, Row } from "@nextui-org/react"
import Link from "next/link"

import style from "./navBar.module.css"
import { useRouter } from "next/router"

import { AiFillHome, AiFillFolderOpen, AiFillInfoCircle } from "react-icons/ai"
import { FaBlog } from "react-icons/fa"

const NavBar = () => {
	const router = useRouter()

	const handlerRouter = (path: string) => router.push(path)

	return (
		<Container
			fluid
			display='flex'
			justify='center'
			alignContent='center'
			alignItems='center'
			className={style.container}>
			<Container md>
				<Row align='center' justify='center'>
					<Col className={style.col}>
						<Link href={"/"}>
							<a className={style.anchor}>home</a>
						</Link>
						<AiFillHome
							onClick={() => {
								handlerRouter("/landing/Landing")
							}}
							className={style.icon}
						/>
					</Col>
					<Col className={style.col}>
						<Link href={"/portfolio/main"}>
							<a className={style.anchor}>PORTFOLIO</a>
						</Link>

						<AiFillFolderOpen
							onClick={() => {
								handlerRouter("/portfolio/main")
							}}
							className={style.icon}
						/>
					</Col>
					<Col className={style.col}>
						<Link href={"/about/MyPersonalInfo"} as={"me"}>
							<a className={style.anchor}>SOBRE</a>
						</Link>

						<AiFillInfoCircle
							onClick={() => {
								handlerRouter("/about/MyPersonalInfo")
							}}
							className={style.icon}
						/>
					</Col>
					<Col className={style.col}>
						<Link href={"/blog/Index"}>
							<a className={style.anchor}>BLOG</a>
						</Link>

						<FaBlog
							onClick={() => {
								handlerRouter("/blog/Index")
							}}
							className={style.icon}
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default NavBar
