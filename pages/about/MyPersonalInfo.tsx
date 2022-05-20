import { Col, Container, Image, Row, Text } from "@nextui-org/react"
import NavBar from "../../components/navBar/NavBar"
import Social from "../../components/Social"
import style from "./about.module.css"
const MyPersonalInfo = () => {
	return (
		<>
			<NavBar />
			<Container className={style.container}>
				<Row>
					<Col>
						<Text h1>
							<span>👋</span> soy Adriel
						</Text>
						<Image
							src='/images/profile.jpg'
							alt='soy yo Adriel Arocha Oronoz, creo que estare sonriendo'
							objectFit='cover'
							width={250}
							height={250}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Text h2>The begin</Text>
						<Text className={style.paragraph}>
							Por donde empezar, pues como todo por el principio. Yo era un
							👶🏽...
						</Text>
						<Text className={style.paragraph}>
							Igual empiezo muy atras, mejor te digo por que empece en el mundo
							de la programacion. Siempre me ha gustado todo lo relacionado con
							la tecnologia, desde como funciona resorte hasta los viajes 🚀 a
							la luna 🌖.
						</Text>
						<Text className={style.paragraph}>
							Pues un dia mi esposa 🦆 tan linda ella me dijo:
						</Text>

						<Text className={style.paragraph}>
							<p className={style.wife}>
								<span>🦆</span> me voy a apuntar a un ciclo de programacion
							</p>
							<p className={style.octopus}>
								<span>🐙</span> Que bien y eso mi vida ?
							</p>
							<p className={style.wife}>
								<span>🦆</span> Creo que tengo que actualizarme, y tu gandul que
								vas a hacer esta tarde ?
							</p>
							<p className={style.octopus}>
								<span>🐙</span> matricularme contigo
							</p>
							<p className={style.wife}>
								<span>🦆</span> y eso por que?
							</p>
							<p className={style.octopus}>
								<span>🐙</span> jajaja porque no
							</p>
							<p className={style.wife}>
								<span>🦆</span> eres un caso
							</p>
						</Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Text h2>Y que hago ahora</Text>

						{/* TODO meter una cuenta regresiva para el ciclo */}
						<Text className={style.paragraph}>
							Pues actualmente sigo cursando el ciclo superior, trabajando
							haciendo cerveza 🍺 y por si no es suficiente empiezo un Bootcamp
						</Text>
						<Text className={style.paragraph}>
							Si lo se igual parece mucho. ¿y sabes que? Es mucho literalmente
							aveces no me da la vida. Pero estoy feliz 😊 de verdad. Ahora creo
							que estoy haciendo lo que de verdad me gusta y me llena aunque el
							camino sea angosto y empinado, creo que tengo lo que hace falta
							para se un gran desarrollador 🤓
						</Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Text h2>Solo amo Progr... QUE VA !!</Text>
						<Text className={style.paragraph}>
							Me encanta escalar 🧗🏾‍♂️y lo que conlleva como entrenar y tener una
							valvula de escape. Por que literalmente es una actividad que
							demanda tanto 🧠 como 💪🏻.
						</Text>
						<Text className={style.paragraph}>
							🐠🤿🐙 Bucear, impresionante un mundo completamente nuevo
						</Text>
						<Text className={style.paragraph}>
							vamos me gusta el deporte en general y jugar a casi cualquier cosa
							que tenga una pelota de por medio 🏀 ⚽ 🏐 🥎
						</Text>
						<Text className={style.paragraph}>
							🎮 Soy gamer desde que mis padres me compraron una master system,
							alla por el 92
						</Text>
						<Text className={style.paragraph}>
							Leer, pues ahora leo documentacion tecnica y como aplicar tdd 😂
							aunque mi genero literario preferido seria la fantasia epica 🧙‍♂️ y
							leer mangas
						</Text>
					</Col>
				</Row>

				<Row>
					<Col>
						<Text h2>Next steps 👣</Text>
						<Text className={style.paragraph}>
							seguir desarrollandome como desarrollador, buscar activamente
							oportunidades tanto freelance como por cuenta ajena
						</Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Text h2>No me voy sin dar las gracias</Text>
						<Text className={style.paragraph}>
							Primero a ti que te has molestado en leer la chapa... y ahora a la
							gente que quiero
						</Text>
						<Text className={style.paragraph}>
							Gracias Idaira por siempre creer en mi apoyarme y ser mi amiga y
							esposa TE AMO 🦆
						</Text>
						<Text className={style.paragraph}>
							Gracias a mi padres es por ellos que soy como soy 👨‍👨‍👧‍👦
						</Text>
						<Text className={style.paragraph}>
							Gracias a mi hermana Raquel es por ella que tengo las fotos del
							portfolio 📸, bueno cuando escribi esto no las habia editado
						</Text>
						<Text className={style.paragraph}>
							Gracias Jota sin lugar a dudas el mejor profesor que un estudiante
							puede tener 🧑‍🏫
						</Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Text h2>👇👇Mis Redes👇👇</Text>
					</Col>
				</Row>
				<Row>
					<Col>
						<Social fontsize={60} color={"tertiary"} />
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default MyPersonalInfo
