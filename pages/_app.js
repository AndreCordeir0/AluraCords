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
        body:before {
          filter: hue-rotate(070deg);
          position: absolute;
          left: 0;
          top: 0;
          content: '';
          width: 100%;
          height: 100%;
          background-image:
      url(https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAifSMTy-kzNc0gX2fMNdgI4),
      url(https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAgkQw8YVRAHWD7ejl6jGhiY);
          animation: NEVE 90s linear infinite;
          z-index:1 !important;
          filter:opacity(0.2);
          pointer-events: none !important;
          object-fit:cover;
      }
      @keyframes NEVE {
        0% {
            background-position: 0 0, 0 0, 0 0;
        }
        100% {
            background-position:  -200px 400px, 300px 300px;
        }
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
  

export default function MyApp({ Component, pageProps }) {
    return (
    <>
    
    <GlobalStyle/>
    <Component {...pageProps} />

    </>
    )
  }