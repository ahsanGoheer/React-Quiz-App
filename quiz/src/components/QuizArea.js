import React from 'react'
import Question from './Question'
import AnswerList from './AnswerList'
import UserGreeting from './UserGreeting'
function QuizArea(props) {
    if(props.isFinished)
    {
        return (<UserGreeting />);
    }
    return (
        <div>
            <h2 className="quizArea">Quiz Area</h2>
            <Question dataSet={props.dataSet}></Question>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}></AnswerList>
           
        </div>
    )
}

export default QuizArea;
