import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageMain from '../pages/PageMain';
import PageHairStyle from '../pages/PageHairstyle';
import PageBeautyMake from '../pages/PageBeautyMake';
import PageSpecialDayMake from '../pages/PageSpecialDayMake';
import PageNotFound from '../pages/PageNotFound';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={ PageNotFound } />
        <Route exact path="/" Component={ PageMain } />
        <Route path="penteados" Component={ PageHairStyle } />
        <Route path="maquiagem-beauty" Component={ PageBeautyMake } />
        <Route path="maquiagem-special-day" Component={ PageSpecialDayMake } />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
