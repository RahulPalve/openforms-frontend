import "./component.css";
const AddQuestionButton = ({onClick}) =>{
    return (

        <div align="center" className="container" style={{border: "1px solid gray"}} onClick={onClick}>
            +
        </div>
    )
}
export default AddQuestionButton;