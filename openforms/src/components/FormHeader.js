import "./component.css";
import LineInput from "./LineInput"

const FormHeader = () =>{
    return (

        <div className="container" >
            <LineInput default_text="Title"/>
            <LineInput default_text="Description of form"/>
        </div>
    )
}
export default FormHeader;