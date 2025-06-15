import React from 'react'
import './Quiz.css'
const Quiz = () => {
  return (
    <div className='container'>
        <h1>Quiz app</h1>
        <hr />
        <h2>What is the capital of India?</h2>
        <ul>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Chennai</li>
            <li>Pune</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz