import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PageMain from './pages/PageMain';
import PageHairstyle from './pages/PageHairstyle';
import PageBeautyMake from './pages/PageBeautyMake';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={ PageMain } />
        <Route path="hairstyle" Component={ PageHairstyle } />
        <Route path="beauty-make" Component={ PageBeautyMake } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
