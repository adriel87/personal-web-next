import { Card, Container, Row, Text, Image } from "@nextui-org/react"
import Head from "next/head"
import Link from "next/link"
import DateFormated from "../../components/Date"
import Layout, { siteTitle } from "../../components/layout"

import utilStyles from "../../styles/utils.module.css"
import { getSortedPostsData } from "../../utils/posts"
import Landing from "../landing/Landing"
import { PostInfo } from "../posts/[id]"

interface AllPostsData {
	allPostsData: PostInfo[]
}

const main = ({ allPostsData }: AllPostsData) => {
	// console.log(allPostsData);

	return <Landing />

	// return (
	// 	<Layout home>
	// 		<Head>
	// 			<title>{siteTitle}</title>
	// 		</Head>
	// 		<section className={utilStyles.headingMd}>
	// 			<p>Hola soy Adriel Oronoz</p>
	// 			<p>
	// 				Y aqui comienza una bonita aventura... vamos a codear y si nos queda
	// 				tiempo
	// 			</p>
	// 			<p>que nos va a quedar a escalar</p>
	// 		</section>

	// 		<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
	// 			<h2 className={utilStyles.headingLg}>Blog</h2>
	// 			<ul className={utilStyles.list}>
	// 				{allPostsData.map(({ id, date, title }) => (
	// 					<li className={utilStyles.listItem} key={id}>
	// 						<Link href={`/posts/${id}`}>
	// 							<a>{title}</a>
	// 						</Link>
	// 						<br />
	// 						<small>
	// 							<DateFormated date={date} />
	// 						</small>
	// 					</li>
	// 				))}
	// 			</ul>
	// 		</section>
	// 	</Layout>
	// )
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}

export default main
