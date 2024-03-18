import Navbar from './Navbar.jsx';
import { Routes, Route } from 'react-router-dom'
import { Contact, Home, Product } from '../pages';


export default function MainLayout() {
    return (
        <section>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/product' element={<Product />}></Route>
            </Routes>

        </section>
    )
}

