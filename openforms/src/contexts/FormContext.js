import React, { useEffect } from 'react';
import {useState} from 'react';
import '../components/component.css'
import axios from 'axios';

export const FormContext = React.createContext({});

export const FormContextProvider = (props) => {

    const [form, SetForm] = useState(
        [{"id":1,"title": "unititled question", "q_type": "text", "is_required": true, "options": [{ "id": 1, "text": "untitled option" }]}]
    );

    const transfromData = ( obj) => {
        obj["sr_no"] = obj["id"];
        obj["type"] = obj["q_type"];
        obj["options"] = obj["options"].map(a => a.text);
        delete obj["q_type"];
        delete obj["is_required"];
        delete obj["id"];
      }

    const submitForm = () => {
        const arr = JSON.parse(JSON.stringify(form));
        arr.forEach( obj => transfromData( obj) );
        axios.post('http://127.0.0.1:5000/form/', {
            title: props.head[0],
            description: props.head[1],
            questions: arr
        })
        .then((res)=>alert('Seccess'))
        .catch((err)=>alert(err))
    }
    return (
        <FormContext.Provider value={[form, SetForm]}>
            {props.children}
            <button onClick={()=>submitForm()} className="submit_button">Submit</button>
        </FormContext.Provider>
    );
}