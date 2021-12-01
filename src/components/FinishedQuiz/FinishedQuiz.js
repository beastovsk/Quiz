import React from 'react';
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    Text
                    <i className={'fa fa-times ' + classes.error}/>
                </li>
                <li>
                    <strong>1. </strong>
                    Text
                    <i className={'fa fa-check ' + classes.success}/>
                </li>
            </ul>

            <p>4 was correct</p>

            <div>
                <button>Again</button>
            </div>
        </div>
    )
}

export default FinishedQuiz