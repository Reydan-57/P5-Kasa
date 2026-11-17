import './styles/main.scss'
import AppRouter from './router/AppRouter.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </>
  )
}

export default App
