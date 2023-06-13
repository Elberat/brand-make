import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store/store';

import { Layout } from 'components/Base/Layout/Layout';
import { Caps, Home, OrderForm, TShirt, Thanks } from './pages/index.js';

import { PATHS } from './common/constants';


function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route element={<Layout/>} >
            <Route path={PATHS.home} element={<Home />} />
            <Route path={PATHS.hoodie} element={<Home />} />
            <Route path={PATHS.tShirts} element={<TShirt />} />
            <Route path={PATHS.caps} element={<Caps />} />
          </Route>
          <Route path={PATHS.order} element={<OrderForm />} />
          <Route path={PATHS.thanks} element={<Thanks />} />
        </Routes>
      </Provider>
    </>

  );
}

export default App;
