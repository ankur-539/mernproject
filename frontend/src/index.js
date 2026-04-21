import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './apps/Welcome';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './output.css'
import Userlogin from './apps/modules/users/auth/Userlogin';
import UserRegistor from './apps/modules/users/auth/UserRegistor';
import "./apps/assets/global.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Applandingpage from './apps/modules/dashboard/Applandingpage';
import Apperror from './apps/modules/sharecomponents/Apperror';
import Contact from './apps/modules/dashboard/Contact';
import Productdetails from './apps/modules/dashboard/Productdetails';
import Graph from './apps/modules/dashboard/Graph';
import { Provider } from 'react-redux';
import redStore from '../src/apps/modules/redux/ReduxStore';
import Loader from './apps/modules/dashboard/Loader';
import ReduxWebPage from '../src/apps/modules/redux/ReduxWebPage';
import Calender from './apps/modules/dashboard/Calender';
import UserEdit from './apps/modules/users/auth/UserEdit';
const Product = lazy(() => import('./apps/modules/dashboard/Product'));
const Userdashboard = lazy(() => import('./apps/modules/dashboard/Userdashboard'));
const PaginationTable = lazy(() => import('./apps/modules/dashboard/Table'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={redStore}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Welcome></Welcome>} />
          <Route path='usermanagement' element={<Userlogin></Userlogin>} />
          <Route path='usermanagement/signup' element={<UserRegistor></UserRegistor>} />
          <Route path='usermanagement/signup/login' element={<Userlogin></Userlogin>} />
          <Route path='usermanagement/dashboard' element={<Applandingpage></Applandingpage>}>
            <Route path='' element={
              <Suspense fallback={<Loader></Loader>}>
                <Userdashboard></Userdashboard>
              </Suspense>
            } />
            <Route path='useredit/:id' element={<UserEdit></UserEdit>} />
            <Route path='contact' element={<Contact></Contact>} />
            <Route path='product' element={
              <Suspense fallback={<Loader></Loader>}>
                <Product></Product>
              </Suspense>
            } />
            <Route path='graph' element={<Graph></Graph>} />
            <Route path='redux' element={<ReduxWebPage></ReduxWebPage>} />
            <Route path='product/details/:id' element={<Productdetails></Productdetails>} />
            <Route path='calender' element={<Calender></Calender>} />
            <Route path='table' element={
              <Suspense fallback={<Loader></Loader>}>
                <PaginationTable></PaginationTable>
              </Suspense>
            } />

            <Route path='*' element={<Apperror />}></Route>
          </Route>

          <Route path='*' element={<Apperror />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
