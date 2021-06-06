import "./component.css";

const QTypeSelector = ({onChange}) =>{

    return (
        <>
        <select onChange={(e) => {onChange(e)}} className="selector" name="q_type" id="q_type">
        <option value="text">Text</option>
        <option value="checkbox">Checkbox</option>
        <option value="dropdown">Dropdown</option>
        <option value="mcq">Multiple Choice</option>
        </select>
        </>

    )
}
export default QTypeSelector;