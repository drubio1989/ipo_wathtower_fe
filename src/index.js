import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import RecentlyFiled from './routes/RecentlyFiled';
import LastOneHundred from './routes/LastOneHundred';
import LastTwelveMonths from './routes/LastTwelveMonths';
import CurrentYearPricings from './routes/CurrentYearPricings';
import IpoCalendar from './routes/IpoCalendar';
import IpoIndex from './routes/IpoIndex';
import Company from './routes/Company';
import NotFound from './routes/NotFound';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ipos-recently-filed" element={<RecentlyFiled />} />
        <Route path="/last-100-ipos" element={<LastOneHundred />} />
        <Route path="/last-12-months" element={<LastTwelveMonths />} />
        <Route path="/current-year-pricings" element={<CurrentYearPricings/>} />
        <Route path="/ipo-calendar" element={<IpoCalendar />} />
        <Route path="/ipo-index/*" element={<IpoIndex />} />
        <Route path="/companies/*" element={<Company />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
