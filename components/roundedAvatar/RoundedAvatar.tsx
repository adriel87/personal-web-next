import { Button, Container, Image, Popover, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { AiOutlineInfoCircle, AiFillInfoCircle } from "react-icons/ai"
import style from "./avatar.module.css"

interface Props {
	info?: boolean
	size?: number
}

const RoundedAvatar = ({ info = false, size = 200 }: Props) => {
	const route = useRouter()

	const handleOctopus = () => route.push("/about/MyPersonalInfo")
	return (
		<Container>
			<Image
				showSkeleton
				width={size}
				height={size}
				src={"/images/profile-pic.jpg"}
				alt={"imagen de perfil"}
				css={{
					border: "4px solid $tertiary",
					borderRadius: "100%",
				}}
			/>
			{info && (
				<Popover>
					<Popover.Trigger>
						<Button ripple={false} light className={style.info}>
							<AiFillInfoCircle className={style.icon} />
						</Button>
					</Popover.Trigger>
					<Popover.Content>
						<Text css={{ p: "$10" }}>
							Quieres saber algo más de mi pincha el pulpo
						</Text>
						<Text className={style.octopus} onClick={handleOctopus} size={50}>
							🐙
						</Text>
					</Popover.Content>
				</Popover>
			)}
		</Container>
	)
}

export default RoundedAvatar
