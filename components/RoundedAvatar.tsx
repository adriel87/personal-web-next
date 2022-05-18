import { Image } from "@nextui-org/react"

const RoundedAvatar = () => {
	return (
		<Image
			showSkeleton
			width={200}
			height={200}
			src={"/images/profile-pic.jpg"}
			alt={"imagen de perfil"}
			css={{
				border: "2px solid $tertiary",
				borderRadius: "100%",
			}}
		/>
	)
}

export default RoundedAvatar
