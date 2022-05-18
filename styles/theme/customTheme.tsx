// 1. Import `createTheme`
import { createTheme } from "@nextui-org/react"

// 2. Call `createTheme` and pass your custom values
const myTheme = createTheme({
	type: "light", // it could be "light" or "dark"
	theme: {
		colors: {
			// brand colors
			primaryLight: "$green200",
			primaryLightHover: "$green300",
			primaryLightActive: "$green400",
			primaryLightContrast: "$green600",
			primary: "#4ADE7B",
			primaryBorder: "$green500",
			primaryBorderHover: "$green600",
			primarySolidHover: "$green700",
			primarySolidContrast: "$white",
			primaryShadow: "$green500",

			gradient:
				"linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
			link: "#5E1DAD",

			// you can also create your own color
			main: "#fffffe",
			secondary: "#d1d1e9",
			tertiary: "#e45858",
			backgroud: "#fffffe",
			headline: "#2b2c34",
			paragraph: "#2b2c34",
			button: "#6246ea",
			highlight: "#6246ea",

			// ...  more colors
		},
		space: {},
		fonts: {},
	},
})

export default myTheme
