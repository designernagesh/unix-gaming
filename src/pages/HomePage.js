import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Ecosystem from '../components/Ecosystem'
import Partnerships from '../components/Partnerships'
import SubscribeEmail from '../components/SubscribeEmail';
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Ecosystem />
      <Partnerships />
      <SubscribeEmail />
      <Footer />
    </>
  )
}

export default HomePage
