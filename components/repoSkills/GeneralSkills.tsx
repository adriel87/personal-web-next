import { Container } from "@nextui-org/react"
import { FaGitAlt, FaGithubAlt, FaMarkdown } from "react-icons/fa"
import { SiVisualstudiocode } from "react-icons/si"
import { ICON_COLOR, ICON_SIZE } from "./iconProps"
import style from "./index.module.css"

const GeneralSkills = () => {
	return (
		<Container
			className={style.icon_container}
			display='flex'
			justify='space-evenly'>
			<FaGitAlt size={ICON_SIZE} color={ICON_COLOR} />
			<FaGithubAlt size={ICON_SIZE} color={ICON_COLOR} />
			<FaMarkdown size={ICON_SIZE} color={ICON_COLOR} />
			<SiVisualstudiocode size={ICON_SIZE} color={ICON_COLOR} />
		</Container>
	)
}

export default GeneralSkills
