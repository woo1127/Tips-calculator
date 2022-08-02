import React from 'react'
import { ACTIONS } from '../App'

export default function TipsButton({dispatch, number, id, activeButton}) {

    return (
        <>  
            <button
                id={id}
                className={activeButton == id ? 'tips__btn--focus' : 'tips__btn'}
                onClick={(event) => {
                        dispatch({type: ACTIONS.GET_TIPS, payload: {number}});
                        dispatch({type: ACTIONS.SET_ACTIVE_BUTTON, payload: {activeId: event.target.id}});
                    }
                }
            >
                {number}%
            </button>
        </>
    )
}