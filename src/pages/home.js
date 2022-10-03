import React from 'react'
import Hero from '../components/hero'
import Layout from '../components/layout'
import AboutMe from '../components/about-me'

export default function Home() {
  return (
    <Layout>
        <Hero/>
        <AboutMe/>
    </Layout>
  )
}
