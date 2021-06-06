import Question from "./Question.js"
import { useContext } from 'react';
import { FormContext} from "../contexts/FormContext.js"

function QuestionList() {
    const [form, SetForm] = useContext(FormContext);
    const defaultQuestion = { "title": "untitled question", "id": form.length + 1, "q_type": "text", "is_required": true, "options":[{ "id": 1, "text": "option one" }]};

    return (
      <>
        {
          form.map((q) => (
            <Question id={q.id} key={q.id} />
          ))
        }
      
      <div align="center"
      className="container"
      style={{ border: "1px solid gray" }} 
      onClick={() => (SetForm([...form, defaultQuestion]))}
      >
          +
      </div>
      </>
    )
  }

  export default QuestionList;