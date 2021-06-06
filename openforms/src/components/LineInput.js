import "./component.css";

const LineInput = ({default_text="", style, onChange}) =>{
    return (
        <>
        <input onChange={(e)=>(onChange(e))} className="line_input" style={style} type="text" placeholder={default_text}> 
        </input>
        </>
    )
}
export default LineInput;