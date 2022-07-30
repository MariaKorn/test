import logo from './logo.svg';
import './App.css';
import {Calc} from './calc';
import { Route, Routes } from 'react-router-dom';
import { Main } from './Main';

function App() {
    return <div>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='calc' element={<Calc name="Calculator"/>} />
        </Routes>
    </div>;
    
}

export default App;
