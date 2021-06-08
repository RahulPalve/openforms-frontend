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
        newform[currentQuestionIndex].options = [...form[currentQuestionIndex].options, { "id": form[currentQuestionIndex].options.length+1, "text": "untitled option" }];
        SetForm(newform)
    }

    const deleteOption=(e,id)=>{
        const newform = [...form]
        newform[currentQuestionIndex].options = form[currentQuestionIndex].options.filter(e=>(e.id !== id));
        // if (newform[currentQuestionIndex].options.length<=0)
        //     newform[currentQuestionIndex].q_type="text";
        SetForm(newform);
    }

    return (
        <ol>
            {
                form[currentQuestionIndex].options.map((option) => (
                    <li key={option.id} >
                        <LineInput 
                        default_text={option.text} 
                        style={{display:"inline", marginBottom:"2px", width:"20%"}}
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
            <li style={{listStyle:"none", marginTop: "5px"}}><button className="button-option-add" onClick={addOption}>+</button></li>

        </ol>
    )
}
export default Options;