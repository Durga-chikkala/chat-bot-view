import React from 'react'
import College from '../colleges/College'
import Footer from '../Footer/Footer'
import Frequent from '../frequent/Frequent'
import Head from '../Head/Head'
import Navbar from '../Navbar/Navbar'


function Home() {
  return (
    <div>
        <Navbar/>
        <Head/>
        <College/>
        <Frequent/>
        <Footer/>
    </div>
  )
}

export default Home