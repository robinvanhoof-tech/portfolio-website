import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'


import { Routes, Route } from 'react-router-dom'
import About from './components/About';

const App = () => {
    return (
        <>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true" />
            <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="true" />
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="true" />                

            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>      
        </>
    );
}

export default App;
