import Navbar from './Navbar.jsx';
import { Routes, Route } from 'react-router-dom'
import { Contact, Home, Product } from '../pages';
import Red from '../detail/red.jsx';
import Blue from '../detail/blue.jsx';


export default function MainLayout() {
    return (
        <section className='bg-black'>
            <div className='flex justify-center '>
             <Navbar />
            </div>
            <div className='pt-28 flex justify-center'>
            <Routes >
                <Route path='/' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/product' element={<Product />}></Route>
                <Route path='/red' element={<Red />}></Route>
                <Route path='/blue' element={<Blue />}></Route>
            </Routes>
            </div>
        </section>
    )
}

