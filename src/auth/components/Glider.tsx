import foto1 from '../assets/foto1.jpg';
import foto3 from '../assets/foto3.jpg';
import foto4 from '../assets/foto4.jpg';


import Glide  from '@glidejs/glide'
import { useEffect } from 'react'

export const Glider = () => {

    useEffect(() => {
      
      new Glide('.glide',{
        type:'carousel',
        autoplay:9000,
      }).mount()
      
    }, [])
    

  return (

     <div className="glide">
        <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
            <li className="glide__slide"><img alt='foto1' src={foto1} style={{height:'100vh', width:'100%',  objectFit:'cover'}} /></li>
            <li className="glide__slide"><img alt='foto3' src={foto3} style={{height:'100vh', width:'100%' ,  objectFit:'cover'}} /></li>
            <li className="glide__slide"><img alt='foto4' src={foto4} style={{height:'100vh', width:'100%' , objectFit:'cover'}} /></li>
    
            </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0">.</button>
          <button className="glide__bullet" data-glide-dir="=1">.</button>
          <button className="glide__bullet" data-glide-dir="=2">.</button>
        </div>
    </div>

  )
}
