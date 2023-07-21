import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PageMain from './pages/PageMain';
import PageHairstyle from './pages/PageHairstyle';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={ PageMain } />
        <Route path="hairstyle" Component={ PageHairstyle } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
