import React from 'react'
import Cards from './Cards'
import { useNavigate} from 'react-router-dom';
import { HStack, Box, Heading, IconButton } from '@chakra-ui/react';
import { BiArrowBack} from "react-icons/bi";
import { extendTheme } from '@chakra-ui/react'

export default function Character(){

    const navigate = useNavigate();


    const Characters =[
    {
        getImageSrc: () => require ('./assets/thirdCharacter.png'),
        name : 'Tanya' ,
        career : 'Musician',
        route : function handleClick(event){
            event.preventDefault()
            navigate('/Music')
        }
    },
    {
        getImageSrc: () => require ('./assets/firstCharacter.png'),
        name : 'Ola' ,
        career : 'Model/Stylist',
        route : function handleClick(event){
            event.preventDefault()
            navigate('/Fashion')
        }
    },
    {
        getImageSrc: () => require('./assets/fourthCharacter.png'),
        name : 'Esther' ,
        career : 'Actress',
        route : function handleClick(event){
            event.preventDefault()
            navigate('/Movies')
        }
    },
    {
        getImageSrc: () => require("./assets/secondCharacter.png"),
        name : 'Joe' ,
        career : 'Athlete',
        route : function handleClick(event){
            event.preventDefault()
            navigate('/Sports')
        }
    }
    ]


  function Back(event){
    event.preventDefault()
    navigate('/')
}

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

  const theme = extendTheme({ breakpoints })


    return(
    <>
    <Box padding={{base:4, sm:4, md:2}}>
    <IconButton
                colorScheme='red'
                aria-label='Back button'
                size={{base:'md', sm:'md', md:'lg', lg:'lg', xl:'lg'}}
                icon={<BiArrowBack/>}
                onClick={Back}
                />
    </Box>
        <Box className='Character'>
        <Heading paddingTop={{base:10,sm:10,md:150,lg:160}} as="h1" size={{base:'lg', sm:'lg', md:'xl'}} color="black" >Choose Your Destiny</Heading>
        <HStack paddingLeft={{base:5,sm:5,md:90,lg:150, '2xl':380}} paddingTop={10}>
            <Box
            display={{base:'grid', sm: 'grid', md:'flex', lg:'flex'}}
            gridTemplateColumns="repeat(2,minmax(0,1fr))"
            gridGap={{base:5, sm:5, md:20}}
            paddingLeft={0}
            paddingTop={10}
            padding={{base:3}}
            >
                {Characters.map((character) => (
          <Cards
            key={character.name}
            name={character.name}
            career={character.career}
            imageSrc={character.getImageSrc()}
            route={character.route}
          />
                ))}
            </Box>
        </HStack>
        </Box>
    </>
    )
}