import './Home.scss'
import Category from '../../components/category/Category'
import Hero from '../../components/hero/Hero'

import Footer from '../../layout/footer/Footer';
import Features from '../../components/features/Features';
import Social from '../../components/social/Social';
import Outles from '../../components/outles/Outles';


const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Features/>
      <Outles/>
      <Social/>
      <Footer />

    </>
  )
}

export default Home