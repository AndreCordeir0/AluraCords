import React,{useState,useEffect} from 'react';
import RingLoader from "react-spinners/RingLoader";
function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
          
        }
      
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
      
    );
  }
    
export default function PaginaChat(){
<GlobalStyle/>   
    const [loading ,setLoading] = useState(false)

    useEffect(()=>{
       setLoading(true);
        setTimeout( ()=>{
            setLoading(false);
        }, 4000);
    },[]);
    return(
    
      
     <div className="app" 
     >
         <style jsx>{`
         
        .app{display:flex;
        align-items:center;
        justify-content:center;
        height:90vh;
        width:100%;
        }
         `}</style>
         {
         loading ?

         <RingLoader
         size={60}
         color={'#123abc'}
         loading={loading}
         />
         :
<div></div>
 }
</div>

         
    );
    
}