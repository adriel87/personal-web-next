import { Text } from "@nextui-org/react"
import { tagsEmoji } from "../../src/db/tagsEmoji"

import style from "./blogTag.module.css"

interface Props {
	tag: tags
}

export type tags = "personal" | "games" | "dev" | "undefined"

const BlogTag = ({ tag }: Props) => {
	return (
		<Text className={style.tag}>
			{tag} {tagsEmoji[tag]}
		</Text>
	)
}

export default BlogTag
