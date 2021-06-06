import "./component.css";
import LineInput from "./LineInput.js"
import { useContext } from 'react';
import { FormContext} from "../contexts/FormContext.js"


const Options = ({ q_id}) => {
    

    const [form, SetForm] = useContext(FormContext);

    const currentQuestionIndex =  q_id;

    if(form[currentQuestionIndex].q_type==="text")
        return null;

    const addOption=()=>{
        var newform = [...form]
        newform[currentQuestionIndex].options = [...form[currentQuestionIndex].options, { "id": form[currentQuestionIndex].options.length+1, "text": "option one" }];
        SetForm(newform)
    }

    const deleteOption=(e,id)=>{
        var newform = [...form]
        newform[currentQuestionIndex].options = form[currentQuestionIndex].options.filter(e=>(e.id !== id));
        SetForm(newform);
    }

    return (
        <ul>
            {
                form[currentQuestionIndex].options.map((option) => (
                    <li key={option.id} >
                        <LineInput 
                        default_text={option.text} 
                        style={{display:"inline", marginBottom:"2px"}}
                        onChange={
                            (e)=>{
                                var f = [...form];
                                f[currentQuestionIndex].options[option.id-1].text= e.target.value;
                                SetForm(f)
                            }
                        }
                        />
                        <button className="button-option-del" onClick={(e,id)=>(deleteOption(e,option.id))}>X</button>
                    </li>
                    )
                )
            }
            <li><button onClick={addOption}>Add Option</button></li>

        </ul>
    )
}
export default Options;