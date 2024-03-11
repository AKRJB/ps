import { Outlet } from 'react-router-dom'
import CustomNavbar from '../components/Navbar'
import Footer from '../components/Footer'

function Layout () {
    return (
        <>
            <CustomNavbar />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Layout