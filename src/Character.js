import React from 'react'
import Cards from './Cards'
import { useNavigate} from 'react-router-dom';
import { HStack, Box, Heading, IconButton } from '@chakra-ui/react';
import { BiArrowBack} from "react-icons/bi";

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

    return(
    <>
    <Box padding={2}>
    <IconButton
                colorScheme='red'
                aria-label='Back button'
                size='lg'
                icon={<BiArrowBack/>}
                onClick={Back}
                />
    </Box>
        <div className='Character'>
        <Heading paddingTop={300} as="h1" size='xl' color="red">Choose Your Destiny</Heading>
        <HStack paddingLeft={320} >
            <Box
            display="grid"
            gridTemplateColumns="repeat(4,minmax(0,1fr))"
            gridGap={20}
            paddingLeft={100}
            paddingTop={100}
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
        </div>
    </>
    )
}