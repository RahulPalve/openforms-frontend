import "./component.css";
import LineInput from "./LineInput"

const FormHeader = ({head, SetHead}) =>{

    return (

        <div className="container" >
            <LineInput default_text="Title" onChange={(e)=>(SetHead([e.target.value, head[1]]))}/>
            <LineInput default_text="Description of form" onChange={(e)=>(SetHead([head[0],e.target.value ]))}/>
        </div>
    )
}
export default FormHeader;