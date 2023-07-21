import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import PageMain from './pages/PageMain';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={ PageMain } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
