import React from 'react'
import Cards from './Cards'
import { useNavigate} from 'react-router-dom';
import { HStack, Box, Text, Heading } from '@chakra-ui/react';

export default function Character(){

    const navigate = useNavigate();


    const Characters =[
    {
        getImageSrc: () => require ('./assets/thirdCharacter.jpeg'),
        name : 'Tanya' ,
        career : 'Musician',
        route : function handleClick(event){
            event.preventDefault()
            navigate('/Music')
        }
    },
    {
        getImageSrc: () => require ('./assets/firstCharacter.jpeg'),
        name : 'Ola' ,
        career : 'Model/Stylist',
        route : function handleClick(event){
            event.preventDefault()
            navigate('/Fashion')
        }
    },
    {
        getImageSrc: () => require('./assets/fourthCharacter.jpeg'),
        name : 'Esther' ,
        career : 'Actress',
        route : function handleClick(event){
            event.preventDefault()
            navigate('/Movies')
        }
    },
    {
        getImageSrc: () => require("./assets/secondCharacter.jpeg"),
        name : 'Joe' ,
        career : 'Athlete',
        route : function handleClick(event){
            event.preventDefault()
            navigate('/Sports')
        }
    }
    ]
    return(
        <div className='Character'>
        <Heading paddingTop={300} as="h1" size='xl' colorScheme="purple">Choose Your Destiny</Heading>
        <HStack paddingLeft={100} >
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
    )
}