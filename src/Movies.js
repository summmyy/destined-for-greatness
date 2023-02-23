import { useState, } from "react";
import { VStack, RadioGroup, Radio, Stack, Heading, Button, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { BiHome, BiArrowBack} from "react-icons/bi";
import { useNavigate} from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react'


export default function Fashion (){
  const [values, setValues] = useState('');
  const [questions, setquestions] = useState([
    {
        name: "Question 1",
        question: "What was the first feature-length animated movie ever released?",
        option: ["Toy Story", "Fantasia", "Snow White and the Seven Dwarfs", "Pinocchio"],
        answer: "Snow White and the Seven Dwarfs",
      },
      {
        name: "Question 2",
        question: "What movie is considered to be the first summer blockbuster ever made?",
        option: ["Jaws", "Star Wars", "Indiana Jones and the Raiders of the Lost Ark", "Jurassic Park"],
        answer: "Jaws",
      },
      {
        name: "Question 3",
        question: "What was the highest-grossing movie of the 2010s?",
        option: ["The Avengers", "Avatar", "Star Wars: The Force Awakens", "Avengers: Endgame"],
        answer: "Avengers: Endgame",
      },
      {
        name: "Question 4",
        question: "What was the first movie to win all five major Academy Awards?",
        option: ["Gone with the Wind", "The Godfather", "One Flew Over the Cuckoo's Nest", "The Silence of the Lambs"],
        answer: "One Flew Over the Cuckoo's Nest",
      },
      {
        name: "Question 5",
        question: "What was the first movie ever to be rated PG-13?",
        option: ["Indiana Jones and the Temple of Doom", "Red Dawn", "Gremlins", "The Terminator"],
        answer: "Red Dawn",
      },
  ]);
  const [userAnswers, setUserAnswers] = useState([questions.length]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [initialQuestions, setinitialQuestions] = useState(questions);

  const handleChange = (event) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = event.target.value;
    setUserAnswers(newAnswers);
  }


  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      let score = 0;
      questions.forEach((question, index) => {
        if (question.answer === userAnswers[index]) {
          score++;
        }
      });
      if( score >= 4){
        alert('Congratulions!! You are now an Actress 🥳')
      }
      else{
      alert(`Your score is ${score} out of ${questions.length}. Try again 😢`)
      }
  }
}

const handleRestart = () => {
    setquestions(initialQuestions);
    setUserAnswers(Array(questions.length).fill(""));
    setCurrentQuestion(0);
  };

  const navigate = useNavigate();

  function Home(event){
    event.preventDefault()
    navigate('/')
}

function Back(event){
    event.preventDefault()
    navigate('/Character')
}

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

  const theme = extendTheme({ breakpoints })

  return (
    <>
        <HStack>
            <Box padding={2}>
            <IconButton
                colorScheme='red'
                aria-label='Back button'
                size={{base:'md', sm:'md', md:'lg'}}
                icon={<BiArrowBack/>}
                onClick={Back}
                />
            </Box>
            <Box>
            <IconButton
                colorScheme='red'
                aria-label='Home button'
                size={{base:'md', sm:'md', md:'lg'}}
                icon={<BiHome/>}
                onClick={Home}
            />
            </Box>
        </HStack>
          <Heading as="h1" textAlign="center" paddingTop={180} color='black'>
            Movies
          </Heading>
          <Box paddingLeft={{base:10,sm:10,md:420,xl:650}} alignContent='center'>
            <VStack
              color="black"
              backgroundColor="red"
              cursor="pointer"
              borderRadius="md"
              width={{base:300,sm:300,md:600}}
              height={400}
              paddingTop={50}
            >
              <Heading as="h2">{questions[currentQuestion].name}</Heading>
              <Text textAlign='center'>{questions[currentQuestion].question}</Text>
              <RadioGroup paddingBottom={3} onClick={handleChange} value={userAnswers[currentQuestion]}>
                <Stack direction="column">
                  {questions[currentQuestion].option.map((option, index) => (
                    <Radio key={index} value={option}>
                      {option}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
              <HStack>
              <Button onClick={handlePrevious}>Back</Button>
              <Button onClick={handleSubmit}>Submit</Button>
              <Button onClick={handleRestart}>Reset</Button>
              </HStack>
            </VStack>
          </Box>
    </>
  );
}
