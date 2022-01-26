import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import {useRouter} from 'next/router'



function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
                
            }
            `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
 // const username = 'AndreCordeir0';//
  const [username,setUsername]=React.useState('AndreCordeir0');
const roteamento = useRouter();
  return (
    <>
    
      
      <Box
        styleSheet={{
            
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          background: 'url(https://i.imgur.com/inbBVfG.jpg)',filter:'brightness(0.8)',zindex:'-1',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          
        }}
      >
          
        <Box
          
          styleSheet={{
            display: 'flex',
            alignItems: 'center',zindex:'11111111',filter:'brightness(1)',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 80%)',
            
            backgroundColor: appConfig.theme.colors.primary.mybackground,
          }}
        >
          {/* Formulário */}
          <Box
         
            as="form"
            onSubmit={function(event){
            event.preventDefault();
            roteamento.push('chat')
            console.log('Alguem tentou entrar');
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
             placeholder="Digite Aqui"
             value={username}
            
              fullWidth
              onChange={function(event){
                console.log('o usuario digitou',event.target.value);
                const valor = event.target.value
                setUsername(valor)
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
            
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.primary.backgrounduser,
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,objectfit:'cover',boxShadow:'0px 0px 22px 0px #230A49',
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',objectfit:'cover',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}