import "./component.css";
import LineInput from "./LineInput.js";
import QTypeSelector from "./QTypeSelector.js";
import Question from "./Question.js";

const Container = ({id, Setquestions, questions}) =>{

    let currentQuestionIndex = questions.findIndex(q=> q.id === id);
    let currentQuestion = questions[currentQuestionIndex];

    function OnQTypeChange(e){
        questions[currentQuestionIndex].q_type = e.target.value;
        Setquestions(questions);
    }

    function OnOptionChange(e, option_index){

    }

    return (

        <div className="container">
            <QTypeSelector OnQTypeChange={OnQTypeChange}/>

            <LineInput
            onChange={(e)=>{questions[currentQuestionIndex].q_type = e.target.value; Setquestions(questions);}}
            style={{display:"inline"}} 
            default_text={currentQuestion.title}
            />

            <Question q_type={questions[currentQuestionIndex].q_type} OnOptionChange={OnOptionChange}/>

        </div>
    )
}
export default Container;