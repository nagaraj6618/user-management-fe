import React from 'react'
import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import Router from '../../Router/Router'

const Layout = () => {
   return (
      <React.Fragment>
         <Header />
         {/* <Footer /> */}
         <Router />
      </React.Fragment >
   )
}

export default Layout