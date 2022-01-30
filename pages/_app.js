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
        overflow-y:hidden;
        
      }
      ::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
      }
      ::-webkit-scrollbar-track {
        background:  hsl(230, 17%, 14%);        /* color of the tracking area */
      }
      ::-webkit-scrollbar-thumb {
        background-color: hsl(228, 28%, 20%);    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: hsl(231, 18%, 21%) solid orange;  /* creates padding around scroll thumb */
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

  