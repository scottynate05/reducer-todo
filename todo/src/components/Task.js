import React from 'react';

const Task = props => {
    return(
        <>
            <li
                onClick={() => props.handleToggle(props.tasks.id)}
                className={props.tasks.completed ? 'completed' : ''}
            >
                <h1>{props.tasks.item}</h1>
            </li>
        </>
    )
}

export default Task;