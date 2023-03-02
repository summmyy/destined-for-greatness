import { useState, } from "react";
import { VStack, RadioGroup, Radio, Stack, Heading, Button, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { BiHome, BiArrowBack} from "react-icons/bi";
import { useNavigate} from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react'


export default function Music (){
  const [values, setValues] = useState('');
  const [questions, setquestions] = useState([
    {
        name: "Question 1",
        question: "Which afrobeats artist won a Grammy in 2020",
        option: ["Tems", "Burna Boy", "Wizkid", "Drake"],
        answer: "Burna Boy",
      },
      {
        name: "Question 2",
        question: "Which artist was a succesful producer before becoming an artist",
        option: ["J.Cole", "Drake", "Kanye West", "Lil Wanye"],
        answer: "Kanye West",
      },
      {
        name: "Question 3",
        question: "Which afrobeats artist won a BET Award in 2021",
        option: ["Tems", "Burna Boy", "Wizkid", "Davido"],
        answer: "Wizkid",
      },
      {
        name: "Question 4",
        question: "Who is the youngest member of the YBNL crew",
        option: ["Limerick", "Fireboy DML", "Picazo", "Lyta"],
        answer: "Fireboy DML",
      },
      {
        name: "Question 5",
        question: "Which Nigerian artist has the most viewed video on Youtube",
        option: ["Davido", "Wizkid", "Burna Boy", "Rema"],
        answer: "Rema",
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
      if( score >= 5){
        alert(`Your score is ${score} out of ${questions.length}.
        Congratulions!! You are now a Stylist/Model 🥳`)
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
          <Heading as="h1" textAlign="center" paddingRight={10} paddingTop={180} color='black'>
            Music
          </Heading>
          <Box paddingLeft={{base:10,sm:10,md:180, lg:400, '2xl':630}} alignContent='center'>
            <VStack
              color="black"
              backgroundColor="red"
              cursor="pointer"
              borderRadius="md"
              width={{base:300,sm:300,md:600}}
              height={400}
              paddingTop={10}
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
