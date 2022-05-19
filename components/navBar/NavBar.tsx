import { Col, Container, Row, Text } from "@nextui-org/react"

import style from "./navBar.module.css"

const NavBar = () => {
	return (
		<Container
			display='flex'
			justify='center'
			alignContent='center'
			alignItems='center'
			className={style.container}>
			<Row align='center' justify='center' css={{}}>
				<Col>
					<Text color='$main' className={style.text}>
						HOME
					</Text>
				</Col>
				<Col>
					<Text color='$main' className={style.text}>
						PORTOFOLIO
					</Text>
				</Col>
				<Col>
					<Text color='$main' className={style.text}>
						SOBRE
					</Text>
				</Col>
				<Col>
					<Text color='$main' className={style.text}>
						BLOG
					</Text>
				</Col>
			</Row>
		</Container>
	)
}

export default NavBar
