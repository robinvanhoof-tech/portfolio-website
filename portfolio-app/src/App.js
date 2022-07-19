import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'


import { Routes, Route } from 'react-router-dom'
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <>            
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
