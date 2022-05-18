import { Container } from "@nextui-org/react"
import { FaNodeJs } from "react-icons/fa"
import {
	SiFirebase,
	SiJavascript,
	SiMongodb,
	SiMysql,
	SiNestjs,
	SiTypescript,
} from "react-icons/si"
import { ICON_COLOR, ICON_SIZE } from "./iconProps"
import style from "./index.module.css"

const BackendSkills = () => {
	return (
		<Container className={style.icon_container}>
			<SiJavascript
				className={style.icon}
				size={ICON_SIZE}
				color={ICON_COLOR}
			/>
			<SiTypescript
				className={style.icon}
				size={ICON_SIZE}
				color={ICON_COLOR}
			/>
			<FaNodeJs className={style.icon} size={ICON_SIZE} color={ICON_COLOR} />
			<SiNestjs className={style.icon} size={ICON_SIZE} color={ICON_COLOR} />
			<SiFirebase className={style.icon} size={ICON_SIZE} color={ICON_COLOR} />
			<SiMysql className={style.icon} size={ICON_SIZE} color={ICON_COLOR} />
			<SiMongodb className={style.icon} size={ICON_SIZE} color={ICON_COLOR} />
		</Container>
	)
}

export default BackendSkills
