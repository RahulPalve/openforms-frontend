import React from 'react';
import {useState} from 'react';

export const FormContext = React.createContext({});

export const FormContextProvider = (props) => {

    const [form, SetForm] = useState(
        [{"id":1,"title": "unititled question", "q_type": "text", "is_required": true, "options": [{ "id": 1, "text": "option one" }]}]
    );
    return (
        <FormContext.Provider value={[form, SetForm]}>
            {props.children}
        </FormContext.Provider>
    );
}