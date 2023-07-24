import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PageMain from './pages/PageMain';
import PageHairstyle from './pages/PageHairstyle';
import PageBeautyMake from './pages/PageBeautyMake';
import PageSpecialDayMake from './pages/PageSpecialDayMake';
import PageSpecialSchedule from './pages/PageSchedule';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={ PageMain } />
        <Route path="hairstyle" Component={ PageHairstyle } />
        <Route path="beauty-make" Component={ PageBeautyMake } />
        <Route path="special-day-make" Component={ PageSpecialDayMake } />
        <Route path="schedule" Component={ PageSpecialSchedule } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
