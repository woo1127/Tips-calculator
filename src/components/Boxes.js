import react from 'react'

export default function Boxes() {
    let ranges = []
    for (let i = 1; i <= 7; i++) {
        ranges.push(i)
    }
    
    const boxes = ranges.map(num => (
        <div className='box' key={num} id={`box${num}`}></div>
    ))

    return boxes
}