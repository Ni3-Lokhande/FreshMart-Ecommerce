import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

const Master = (props) => {
  return (
    <div>
        <Header />
       <props.Comp></props.Comp>   
        <Footer />
    </div>
  )
}

export default Master;