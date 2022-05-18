import { Container } from "@nextui-org/react"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { FaReact } from "react-icons/fa"
import { SiJavascript, SiNextdotjs, SiTypescript } from "react-icons/si"
import { ICON_COLOR, ICON_SIZE } from "./iconProps"
import style from "./index.module.css"

const FrontendSkills = () => {
	return (
		<Container
			className={style.icon_container}
			display='flex'
			justify='space-evenly'>
			<AiFillHtml5 size={ICON_SIZE} color={ICON_COLOR} />
			<DiCss3 size={ICON_SIZE} color={ICON_COLOR} />
			<SiJavascript size={ICON_SIZE} color={ICON_COLOR} />
			<SiTypescript size={ICON_SIZE} color={ICON_COLOR} />
			<FaReact size={ICON_SIZE} color={ICON_COLOR} />
			<SiNextdotjs size={ICON_SIZE} color={ICON_COLOR} />
		</Container>
	)
}

export default FrontendSkills
