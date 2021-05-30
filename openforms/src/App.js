import Container from "./components/container.js"
import FormHeader from "./components/FormHeader.js"
import AddQuestionButton from "./components/AddQuestionButton.js"
import {useState} from 'react';

function App() {
  const q = [{"title": "unititled question", "key":1, "q_type": "text", "options":[]}]

  const [questions, Setquestions] = useState(q)
  
  function AddQuestion(){
    Setquestions([...questions, {"title":"untitled question", "id": questions.length+1, "q_type": "text"}])
  }


  return (
    <>
        <div>
          <FormHeader/>
          {
        questions.map((q)=>(
          <Container id={q.id} Setquestions={Setquestions} questions={questions} key={q.key}/>
        ))
        }
        </div>
        <AddQuestionButton onClick={AddQuestion}/>        
    </>
  )
}

export default App;
