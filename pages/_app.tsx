import "../styles/globals.css"
import type { AppProps } from "next/app"
import { NextUIProvider } from "@nextui-org/react"
import myTheme from "../styles/theme/customTheme"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider theme={myTheme}>
			<Component {...pageProps} />
		</NextUIProvider>
	)
}

export default MyApp
