import React from 'react'
import Scene from './components/Scene.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Example from './components/Navbar.jsx'
import { FooterWithLogo } from './components/Footer.jsx'
import Choicer from './components/Choicer.jsx'
import CustomizerPage from './components/CustomizerPage.jsx'
import ProductPage from './components/ProductPage.jsx'
import ProductPageAmplifier from './components/ProductPageAmplifier.jsx'
import CustomizerPageAmplifier from './components/CustomizerPageAmplifier.jsx'
import GuitarCatalog from './components/GuitarCatalog.jsx'

const App = () => {
  return (
    <main className='relative h-screen'>
      <Example></Example>
      

   
        <Routes>
          <Route path='/product' element = {<ProductPage/>}/>
          <Route path='/product-amplifier' element = {<ProductPageAmplifier/>}/>
         <Route path='/customizer-page' element = {<CustomizerPage/>}/>
         <Route path='/customizer-page-amplifier' element = {<CustomizerPageAmplifier/>}/>
       
         <Route path='/products' element = {<GuitarCatalog/>}/>

        </Routes>
     




      {/* <CustomizerPage></CustomizerPage> */}
    
     

      
    </main>
  )
}

export default App