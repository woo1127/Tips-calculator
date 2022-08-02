import React, {useReducer } from 'react'
import TipsButton from './components/TipButton'
import Input from './components/Input'
import Card from './components/Card'
import tipsData from './tipsData'

const initialValue = {
    bill: '',
    tips: '',
    numOfPeople: '',
    activeButton: '',
}

export const ACTIONS = {
    GET_INPUT: 'get-input',
    GET_TIPS: 'get-tips',
    SET_ACTIVE_BUTTON: 'set-active-button',
    RESET: 'reset'
}

function reducer(state, {type, payload}) {
    switch (type) {
        case ACTIONS.GET_INPUT:
            return {
                ...state,
                [payload.key]: payload.inputValue
            }
        case ACTIONS.GET_TIPS:
            return {
                ...state,
                tips: payload.number
            }
        case ACTIONS.SET_ACTIVE_BUTTON:
            return {
                ...state,
                activeButton: payload.activeId
            }
        case ACTIONS.RESET:
            return {
                bill: '',
                tips: '',
                numOfPeople: '',
            }
        default:
            throw new Error(`Unknown action type: ${type}`)
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialValue)
    console.log(state)

    const tipsAmount = state.bill * state.tips / 100 / state.numOfPeople
    const total = (state.bill * (state.tips / 100 + 1))  / state.numOfPeople

    const buttonElements = tipsData.map(tips => (
        <TipsButton 
            dispatch={dispatch} 
            number={tips.number}
            id={tips.id}
            key={tips.id}
            activeButton={state.activeButton}
        />
    ))

    return (
        <div className='container'>
            <div className='left-side'>
                <Input 
                    type='bill'
                    text='Bill'
                    value={state.bill}
                    dispatch={dispatch}
                />
                <p className="tips__text">Select Tip %</p>
                <div className="tips__btn-grid">
                    {buttonElements}
                    <div className='custom-tips'>
                        <input 
                            type="text"
                            placeholder='Custom'
                            value={state.tips}
                            onChange={(event) => dispatch({
                                type: ACTIONS.GET_INPUT,
                                payload: {key: 'tips', inputValue: event.target.value}
                            })}
                            onClick={() => {
                                dispatch({
                                    type: ACTIONS.SET_ACTIVE_BUTTON, 
                                    payload: {activeId: ''}
                                });
                                state.tips = '';
                            }}
                            className='custom-tips-input'/>
                    </div>
                </div>
                <Input 
                    type='numOfPeople' 
                    text='Number Of People'
                    value={state.numOfPeople}
                    dispatch={dispatch}
                />
            </div>
            <Card 
                tipsAmount={
                    state.numOfPeople === '' ? 
                    '0.00' : 
                    Math.round(tipsAmount * 100) / 100
                }
                total={
                    state.numOfPeople === '' ? 
                    '0.00' : 
                    Math.round(total * 100) / 100
                }
                dispatch={dispatch}
            />
        </div>
    )
}
