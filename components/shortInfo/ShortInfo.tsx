import { Container, Text } from "@nextui-org/react"
import styles from "./shorInfo.module.css"

const ShortInfo = () => {
	return (
		<Container
			display='flex'
			direction='column'
			css={{
				maxW: "600px",
			}}>
			<Text color='$tertiary' className={styles.text} h2>
				Desarrollador 📱 🖥
			</Text>
			<Text className={styles.underText} color='$paragraph'>
				cuando me dejan
			</Text>
			<Text color='$tertiary' className={styles.text} h2>
				Escalador 🧗‍♀️
			</Text>
			<Text className={styles.underText} color='$paragraph'>
				siempre que puedo
			</Text>
		</Container>
	)
}

export default ShortInfo
