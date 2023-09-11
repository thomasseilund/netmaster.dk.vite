import { Fragment } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Description from './components/Description'
import Price from './components/Price'
import CalendarBookings from './components/CalendarBookings'
import BookingRequest from './components/BookingRequest'
import FAQ from './components/FAQ'

export default function App() {

  return (
    <Fragment>
      {/* use HashRouter and not BrowserRouter because app should be able to run fron sub folder on server <BrowserRouter> */} 
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/description" element={<Description />} />
          <Route path="/price" element={<Price />} />
          <Route path="/calendar" element={<CalendarBookings />} />
          <Route path="/bookingrequest" element={<BookingRequest />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </Fragment>
  )
}
