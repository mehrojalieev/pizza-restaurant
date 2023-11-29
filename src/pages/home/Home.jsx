import Category from '../../components/category/Category'
import Hero from '../../components/hero/Hero'
import './home.css'

import Footer from '../../components/footer/Footer';
import Features from '../../components/features/Features';


const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Features/>
      <Footer />

    </>
  )
}

export default Home