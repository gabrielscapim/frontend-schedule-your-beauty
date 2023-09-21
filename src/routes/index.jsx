import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageMain from '../pages/PageMain';
import PageHairStyle from '../pages/PageHairstyle';
import PageBeautyMake from '../pages/PageBeautyMake';
import PageSpecialDayMake from '../pages/PageSpecialDayMake';
import PageSchedule from '../pages/PageSchedule';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={ PageMain } />
        <Route path="hairstyle" Component={ PageHairStyle } />
        <Route path="beauty-make" Component={ PageBeautyMake } />
        <Route path="special-day-make" Component={ PageSpecialDayMake } />
        <Route path="schedule-production" Component={ PageSchedule } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
