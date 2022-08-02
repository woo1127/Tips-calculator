import React from 'react'
import { ACTIONS } from '../App'
import {FaDollarSign, FaUser} from 'react-icons/fa'


export default function TipsInput({text, type, dispatch, value}) {
    return (
        <div>
            <p className='input-text'>{text}</p>
            <div className="input-group">
                {
                    text === 'Bill' ?
                    <FaDollarSign className='input-icon' /> :
                    <FaUser className='input-icon' />
                } 

                <input 
                    type='text' 
                    className='input-amount' 
                    placeholder='0'
                    value={value}
                    onChange={(event) => 
                        dispatch({
                            type: ACTIONS.GET_INPUT, 
                            payload: {key: type, inputValue: event.target.value },
                        })
                    }
                 />

            </div>
        </div>
    )
}