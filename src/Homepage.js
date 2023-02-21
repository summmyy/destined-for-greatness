import React from "react";
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate} from 'react-router-dom';


function Homepage (){

    const navigate = useNavigate();

    function handleClick(event){
        event.preventDefault()
        navigate('/Character')
    }
    return(
        <div className="Homepage">
            <ButtonGroup padding={480} >
                <Button size='lg' colorScheme='purple' padding={50} onClick={handleClick}
                        > Let The Journey Begin
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Homepage;