import React from 'react'
import Answer from './Answer'
function AnswerList(props) {
    const options=[];
    for(let i=0;i<props.dataSet.options.length;i++)
    {
        options.push(<Answer handleClick={props.handleClick} choice={i} answer={props.dataSet.options[i]}/>)
    }
    return (
        <div>
            <h2>Answer List</h2>
            {options}
        </div>
    )
}

export default AnswerList;
