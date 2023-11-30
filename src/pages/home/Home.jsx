import Category from '../../components/category/Category'
import Hero from '../../components/hero/Hero'
import './home.css'

import Footer from '../../layout/footer/Footer';
import Features from '../../components/features/Features';
import Social from '../../components/social/Social';


const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Features/>
      <Social/>
      <Footer />

    </>
  )
}

export default Home