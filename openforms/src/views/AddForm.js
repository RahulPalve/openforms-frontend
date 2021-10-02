import QuestionList from "../components/QuestionList"
import FormHeader from "../components/FormHeader.js"
import { FormContextProvider } from "../contexts/FormContext.js"
import {useState} from 'react';
function AddForm() {
  const [head,SetHead] = useState(["Title","Description of Form"]);

  return (
    <>
    <div style={{margin:"0 1cm 0 1cm"}}>
      <FormContextProvider head={head}>
        <FormHeader head={head} SetHead={SetHead}/>
        <QuestionList />
      </FormContextProvider>
      </div>
    </>
  )
}

export default AddForm;
