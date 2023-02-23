import React from "react";
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate} from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react'


function Homepage (){

    const navigate = useNavigate();

    function handleClick(event){
        event.preventDefault()
        navigate('/Character')
    }

    // For responsive design
    const breakpoints = {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
      }

    return(
        <div className="Homepage">
            <ButtonGroup paddingLeft={{base:5, sm:5, md:0, lg:0}}
                        paddingTop={{base:400, sm:350,}}
                        alignItems={{base:'center', sm:'center', md:'center', lg:'center'}} >
                <Button size={{base:'xl', sm:'xl', md:'xl', lg:'xl'}} colorScheme='red' color='white' padding={{base:25, sm:25, md:50, lg:50}} onClick={handleClick}
                        > Let The Journey Begin
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Homepage;