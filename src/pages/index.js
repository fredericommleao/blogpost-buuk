import Head from 'next/head'

import Navbar from '../../components/NavBar'
import Banner from '../../components/Banner'
import Content from '../../components/Content'
import TitleSecond from '../../components/TitleSecond'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'
import ArrowBeck from '../../components/ArrowBeck'

export default function Home() {
  return (
    <>
      <Head>
        <title>Buuk | Analítica & Design</title>
        <meta name="description" content="Neste texto você entenderá os motivos para enviar um 'presstrip' aos participantes do seu evento e os passos que deve seguir para que ele seja um documento relevante para todos os envolvidos.
        Os preparativos para a participação em um evento costumam ser atarefados para quem oferece e cansativos para quem participa. No entanto, há um arquivo que pode mudar o cenário para ambos, diminuindo o tempo destinado à retirada de dúvidas e causando boas impressões: o chamado de 'Presstrip', 'Travelbook' ou 'Livro de viagem'. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <Navbar />
      <Banner />
      <Content/>
      <TitleSecond/>
      <Cards/>
      <ArrowBeck/>
      <Footer/>
    </>
  )
}
