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
import Homepage from './Pages/Homepage.jsx'
import Projects from './Pages/Projects.jsx'
import Location from './Pages/Location.jsx'
import Career from './Pages/Career.jsx'
import Pollen from './Pages/Pollen.jsx'

const App = () => {
  return (
    <main className='relative h-screen'>
      <Example></Example>
      

   
        <Routes>
          <Route path='/product' element = {<ProductPage/>}/>
          <Route path='/product-amplifier' element = {<ProductPageAmplifier/>}/>
         <Route path='/customizer-page' element = {<CustomizerPage/>}/>
        
       
         <Route path='/products' element = {<GuitarCatalog/>}/>
         <Route path='/' element = {<Homepage/>}/>
         <Route path='/projects' element = {<Projects/>}/>
         <Route path='/pollen' element = {<Pollen/>}/>
         <Route path='/location' element = {<Location/>}/>
         <Route path='/career' element = {<Career/>}/>


        </Routes>
     




      {/* <CustomizerPage></CustomizerPage> */}
    
     

      
    </main>
  )
}

export default App