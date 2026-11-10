import Features from './components/features'
import Footer from './components/footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Join from './components/Join'
import Pages from './components/Pages'
import Reviews from './components/Reviews'
import Stats from './components/stats'
import Students from './components/Students'
import Tools from './components/Tools'

export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Tools/>
      <Pages/>
      <Students/>
      <Stats/>
      <Reviews/>
      <Features />
      <Join/>
      <Footer/>
    </>
  )
}
