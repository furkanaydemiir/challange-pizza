import '../css/home.css'
import logo from '../../images/iteration-1-images/logo.svg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <div className='home-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='home-caption'>
                <h1 style={{marginLeft:"24px"}} >KOD ACIKTIRIR</h1>
                <h1 >PİZZA, DOYURUR</h1>
            </div>
            <Link to={"/OrderPizza"} className='home-button'>ACIKTIM</Link>
        </div>
    )
}

export default Home