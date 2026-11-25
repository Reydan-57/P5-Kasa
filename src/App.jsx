import './styles/main.scss'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Spinner from './components/Spinner.jsx'

function App() {
  const navigation = useNavigation();

  return (
    <>
      <div className="container">
        <Header />
        {navigation.state === 'loading' ? <Spinner /> : <Outlet />}
      </div>
      <Footer />
    </>
  )
}

export default App
