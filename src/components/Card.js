import React from 'react'
import { ACTIONS } from '../App'

export default function Card({tipsAmount, total, dispatch}) {
    return (
        <div className="card">
            <div>
                <div className="card-content">
                    <p className="card-text">Tip Amount <br></br><span className="card-person">/ person</span></p>
                    <p className="card-amount">${tipsAmount}</p>
                </div>
                <div className="card-content">
                    <p className="card-text">Total<br></br><span className='card-person'>/ person</span></p>
                    <p className="card-amount">${total}</p>
                </div>
            </div>
            <button 
                className="card-btn"
                onClick={() => dispatch({type: ACTIONS.RESET})}
            >
                Reset
            </button>
        </div>
    )
}