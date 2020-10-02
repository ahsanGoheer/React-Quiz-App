import React from 'react'
import CorrectAnswers from './CorrectAnswers'
import IncorrectAnswers from './IncorrectAnswers'

function ScoreArea(props) {
    return (
        <div className="scoreWrapper">
            <CorrectAnswers correct={props.correct}/>
            <IncorrectAnswers incorrect={props.incorrect}/>
        </div>
    )
}

export default ScoreArea;
