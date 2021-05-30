import "./component.css";
import {useState} from 'react';

const Question = ({q_type, OnOptionChange}) =>{
    const [options, Setoptions] = useState(["option one"])
    if(q_type=="text")
        return null;
        
    return (<>
        <ul>
        {   
            options.map((option)=>(<li>{option}</li>))
        }
        </ul>
        <button onClick={()=>{Setoptions([...options, "option two"])}}>Add Option</button>
        </>
    )
}
export default Question;