import React, { ReactChild } from "react"
import Footer from "../../sections/Footer"
import Header from "../../sections/Header"

interface _WrapperMain {
  children: ReactChild
}

const WrapperMain:React.FC<_WrapperMain> = (props) => {
  const {children} = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div> 
  )
}

export default WrapperMain;