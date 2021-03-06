import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useState } from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js';
import {useRouter} from 'next/router';
import { ButtonSendSticker} from '../src/components/ButtonSendSticker.js';
const SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM5OTMyNCwiZXhwIjoxOTU4OTc1MzI0fQ.QfjvJuWQeiEPir5gWC3yYhk9Mf4vZ80Rp3J4Qx8WUCk'
    const SUPABASE_URL='https://mrdvhttmouaubjuzimkm.supabase.co';
    const supabase_Client = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);

   



export default function ChatPage() {
    const [mensagem,setMensagem]= React.useState('');
    const [listaDeMensagens,setListaDeMensagens]=React.useState([]);
   
    const roteamento = useRouter();
    const usuarioLogado = roteamento.query.username;

    function escutaMensagensEmTempoReal(adicionaMensagem) {
        return supabase_Client
            .from('mensagem')
            .on('INSERT', (respostaLive) => {
                adicionaMensagem(respostaLive.new);
            })
            .subscribe();
    }

    React.useEffect(()=>{
   supabase_Client
    .from('mensagens')
    .select('*')
    .order('id',{ ascending:false})
    .then(({data}) =>{
setListaDeMensagens(data)
})

const subscription = escutaMensagensEmTempoReal((novaMensagem) => {
    console.log('Nova mensagem:', novaMensagem);
    console.log('listaDeMensagens:', listaDeMensagens);
  
    setListaDeMensagens((valorAtualDaLista) => {
      console.log('valorAtualDaLista:', valorAtualDaLista);
      return [
        novaMensagem,
        ...valorAtualDaLista
      ]
    });
  });

  return () => {
    subscription.unsubscribe();
  }
}, []);



   function deleteMessage(){
       
   }


    function handleNovaMensagem(novaMensagem){
        const mensagem = {
           // id: listaDeMensagens.length + 1,
            de: usuarioLogado,
            texto: novaMensagem,
        };

        supabase_Client
        .from('mensagens')
        .insert([
            mensagem
        ])
       .then(({data}) =>{
        setListaDeMensagens([
            data[0],
            ...listaDeMensagens,
            
        ]);
       }
       )
        setMensagem('')  }

    return (
     
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                
                backgroundImage: `url(https://images.alphacoders.com/699/thumb-1920-699287.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',filter:'brightness(1.3)',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.primary.backgrounduser,
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.primary.mybackground,
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                      
                    }}
                >

                 <MessageList mensagens={listaDeMensagens}/>
{/*listaDeMensagens.map((mensagemAtual)=>{
return(
<li>{mensagemAtual}</li>
)
})*/}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                        value={mensagem}
                        onChange={(event)=>{
                            
                            const valor = event.target.value
                            setMensagem(valor);
                        }}
                        onKeyPress={(event)=>{
                            if(event.key ==='Enter'){
                                event.preventDefault();
                                
                              handleNovaMensagem(mensagem);
                                
                            }
                        }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '90%',
                               
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                          <ButtonSendSticker
                            onStickerClick={(sticker) => {
                                // console.log('[usando o componente] salva esse sticker no banco', sticker)
                                handleNovaMensagem(':sticker: ' + sticker)
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
        
    );
}

function Header() {
    return (
        <>
       
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log(props.listaDeMensagens);
    return (
    
      
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'auto',
                overflowX:'hidden',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
  {props.mensagens.map((mensagem) => {

      return( <Text
        key={mensagem.id}
        tag="li"
        styleSheet={{
            
            borderRadius: '5px',
            padding: '6px',
            marginBottom: '12px',
            hover: {
                backgroundColor: appConfig.theme.colors.primary.mybackgroundhover,
            }
        }}
    >
        <Box
            styleSheet={{
                marginBottom: '1px',
            }}
        >
            <Image
                styleSheet={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '8px',
                }}
                src={`https://github.com/${mensagem.de}.png`}
            />
            <Text tag="strong"  styleSheet={{
                 position:'relative',
                 top:'-19px',
                 paddingRight:'12px',
                 left:'25px',
                }}>
                {mensagem.de}
            </Text>
            <Text
                styleSheet={{
                    fontSize: '10px',
                    marginLeft: '138px',
                    color: appConfig.theme.colors.neutrals[300],
                    position:'relative',
                    top:'-13px',
                    left:'-135px',
                }}
                tag="span"
            >
                {(new Date().toLocaleDateString())}
            </Text>
        </Box>
        {mensagem.texto.startsWith(':sticker:')
                            ? (
                                <Image
                                    styleSheet={{
                                        width: '150px',
                                    }}
                                    src={mensagem.texto.replace(':sticker:', '')} />
                            )
                            : (
                                <Text
                                    styleSheet={{
                                        hover: {
                                            borderBottom: 'none',
                                        }
                                    }}>
                                    {mensagem.texto}
                                </Text>
                            )}
    </Text>)
  }
)}

     
        </Box>
      
    )
}