import Navbar from './components/navbar'
import Hero from './components/Hero'
import GetOnSetApp from './components/GetOnSetApp'
import SetAppJourney from './components/setappJourney'
import MusicianUseSetapp from './components/MusicianUseSetapp'
import SetAppYourWord from './components/setappYourWord'
import SuperPower from './components/superPower'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <GetOnSetApp />
      <SetAppJourney />
      <MusicianUseSetapp />
      <SetAppYourWord />
      <SuperPower />
      <Footer />
    </div>
  )
}

export default App

