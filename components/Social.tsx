import { Container } from "@nextui-org/react"
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillMail,
	AiFillLinkedin,
} from "react-icons/ai"
import { socialLinks } from "../src/db/socialLinks"

interface Props {
	fontsize: number
	color?: string
}

const Social = ({ fontsize, color = "#e45858" }: Props) => {
	return (
		<Container
			display='flex'
			justify='space-evenly'
			css={{
				margin: "10px 0",
			}}>
			<a href={socialLinks.github} target='_blank' rel='noreferrer'>
				<AiFillGithub fontSize={fontsize} color={color} />
			</a>

			<a href={socialLinks.twitter} target='_blank' rel='noreferrer'>
				<AiFillTwitterCircle fontSize={fontsize} color={color} />
			</a>

			<a href={socialLinks.linkedin} target='_blank' rel='noreferrer'>
				<AiFillLinkedin fontSize={fontsize} color={color} />
			</a>

			<a href={`mailto:${socialLinks.email}`}>
				<AiFillMail fontSize={fontsize} color={color} />
			</a>
		</Container>
	)
}

export default Social
