import React from 'react';
 const Score = (props) =>(

    <div>
        <p>Try to click on all of the pictures! If you click on the same picture twice, the score will reset and start over!</p>
        <h1>Score: {props.score}</h1>
        <h1>Top Score: {props.topScore}</h1>
    </div>
 )

export default Score;