import { useState, } from "react";
import { VStack, RadioGroup, Radio, Stack, Heading, Button, Text, Box, HStack, IconButton } from "@chakra-ui/react";
import { BiHome, BiArrowBack} from "react-icons/bi";
import { useNavigate} from 'react-router-dom';


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
        option: ["Davido", "Wizkid", "Burna Boy", "Tekno"],
        answer: "Tekno",
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
        alert('Congratulions!! You are now a Musician')
      }
      else{
      alert(`Your score is ${score} out of ${questions.length}. Try again :(`)
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

  return (
    <>
        <HStack>
            <Box padding={2}>
            <IconButton
                colorScheme='red'
                aria-label='Back button'
                size='lg'
                icon={<BiArrowBack/>}
                onClick={Back}
                />
            </Box>
            <Box>
            <IconButton
                colorScheme='red'
                aria-label='Home button'
                size='lg'
                icon={<BiHome/>}
                onClick={Home}
            />
            </Box>
        </HStack>
          <Heading as="h1" textAlign="center" paddingTop={200}>
            Music
          </Heading>
          <Box paddingLeft={650}>
            <VStack
              color="black"
              backgroundColor="red"
              cursor="pointer"
              borderRadius="md"
              width={600}
              height={400}
              paddingTop={50}
            >
              <Heading as="h2">{questions[currentQuestion].name}</Heading>
              <Text>{questions[currentQuestion].question}</Text>
              <RadioGroup onClick={handleChange} value={userAnswers[currentQuestion]}>
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
