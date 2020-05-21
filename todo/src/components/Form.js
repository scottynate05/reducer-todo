import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';
import Task from './Task';

const Form = () => {
    
    const [tasks, setTasks] = useState({
        item: ''
    })

    const handleChanges = e => {
        setTasks({
            ...tasks,
            [e.target.name]: e.target.value
        })
    }

    const handleToggle = id => {
        dispatch({type: "TASK_DONE", payload: id})
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <label htmlFor='item'>Item: </label>
            <input
                id='item'
                type='text'
                name='item'
                placeholder='New Task'
                onChange={handleChanges}
                value={tasks.item}
            />
            <button onClick={e => {
                    e.preventDefault()
                    dispatch({ type: 'ADD_TASK', payload: tasks })
                    setTasks({
                        item: ''
                    })                    
                }}
            >
                Enter
            </button>
            {
                state.tasks.map(item => (
                    <Task
                        handleToggle={handleToggle}
                        tasks={item}
                        key={item.id}
                    />
                ))
            }
            <button onClick={() => { dispatch({ type: 'CLEAR'}) }}>
                Clear
            </button>
        </>
    )
}

export default Form;