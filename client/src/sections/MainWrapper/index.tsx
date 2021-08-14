import React, { ReactChild } from "react"
import Footer from "../Footer"
import Header from "../Header"

interface _MainWrapper {
  children: ReactChild
}

const MainWrapper:React.FC<_MainWrapper> = (props) => {
  const {children} = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div> 
  )
}

export default MainWrapper;