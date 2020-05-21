import React from 'react';

export const initialState = {
    tasks: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        },
        {
            item: 'Make it through Redux',
            completed: false,
            id: 2
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks, 
                    {
                        item: action.payload.item,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }
        case 'TASK_DONE':
            return {
                ...state,
                tasks:
                state.tasks.map(item => {
                    if (item.id === action.payload) {
                        return{
                            ...item,
                            completed: !item.completed
                        }
                    }
                    else {
                        return item
                    }
                })
            }
        case 'CLEAR':
            return {
                ...state,
                tasks: state.tasks.filter( e => e.completed ? '' : e)
            }
            default:
                return state
    }
}
