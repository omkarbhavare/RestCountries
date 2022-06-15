
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header';
import { Search } from './components/Search/Search';
import { Country } from './components/Search/Country';

function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="country/:name" element={<Country />} />
    </Routes>
  </BrowserRouter>
      
    </>
  );
}

export default App;
