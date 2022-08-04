import logo from './logo.svg';
import './App.css';
import {Calc} from './calc';
import { Route, Routes } from 'react-router-dom';
import { Main } from './Main';
import { Translit } from './Translit';
import { Phonebook } from './PhoneBook';

function App() {
    return <div>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='calc' element={<Calc name="Calculator"/>} />
            <Route path='translit' element={<Translit/>} />
            <Route path='phonebook/*' element={<Phonebook/>} />
        </Routes>
    </div>;
    
}

export default App;
