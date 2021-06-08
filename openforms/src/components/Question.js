import "./component.css";
import LineInput from "./LineInput.js";
import QTypeSelector from "./QTypeSelector.js";
import Options from "./Options.js";
import { FormContext } from "../contexts/FormContext.js"

import {useContext} from 'react';

const Question = ({id}) =>{
    const [form, SetForm] = useContext(FormContext);

    let currentQuestionIndex = form.findIndex(q=> q.id === id);

    return (

        <div className="container">
            <QTypeSelector
            onChange={ 
                (e)=>{
                    const qs = [...form];
                    qs[currentQuestionIndex].q_type = e.target.value;
                    if(e.target.value==="text")
                        qs[currentQuestionIndex].options=[];
                    SetForm(qs);
                }
            }
            />

            <LineInput
            onChange={
                (e)=>{
                    form[currentQuestionIndex].q_type = e.target.value;
                    SetForm(form);
                }
            }
            default_text={form[currentQuestionIndex].title}
            />  
            <Options key={id} q_id={currentQuestionIndex}/>

        </div>
    )
}
export default Question;