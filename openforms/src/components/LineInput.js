import "./component.css";

const LineInput = ({default_text="", style}) =>{
    return (
        <>
        <input className={style?"line_input":"line_input "+style} type="text" placeholder={default_text}> 
        </input>
        </>
    )
}
export default LineInput;