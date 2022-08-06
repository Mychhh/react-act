import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Main from './components/Main'
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Exercise4 from './components/Exercise4';
import Exercise5 from './components/Exercise5';
import Exercise6 from './components/Exercise6';
import NoPage from './components/NoPage';
import TheButton from './buttons/TheButton'

function App() {
    return (
        <>
        <div className='all'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="Main" element={<Main />} />
                        <Route path="Exercise1" element={<Exercise1 />} />
                        <Route path="Exercise2" element={<Exercise2 />} />
                        <Route path="Exercise3" element={<Exercise3 />} />
                        <Route path="Exercise4" element={<Exercise4 />} />
                        <Route path="Exercise5" element={<Exercise5 />} />
                        <Route path="Exercise6" element={<Exercise6 />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <TheButton/>
        </div>
        </>
    );
}

export default App;
