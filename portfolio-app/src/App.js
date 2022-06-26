import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'


import { Routes, Route } from 'react-router-dom'
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true" />
            <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="true" />
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="true" />                

            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>      
        </>
    );
}

export default App;
