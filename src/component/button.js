import React from 'react';
import Score from "./score.js";
import '../styles/button.css';


const images = [
    {id:0, imgURL: "assets/img/smart.jpeg", clicked:false},
    {id:1, imgURL: "assets/img/Evil-Kermit.jpg", clicked:false},
    {id:2, imgURL: "assets/img/Distracted-boyfriend.jpg", clicked:false},
    {id:3, imgURL: "assets/img/tellMeMore.jpeg", clicked:false},
    {id:4, imgURL: "assets/img/dafuq2.jpeg", clicked:false},
    {id:5, imgURL: "assets/img/dafuq.jpeg", clicked:false},
    {id:6, imgURL: "assets/img/cat.jpg", clicked:false},
    {id:7, imgURL: "assets/img/That-Would-Be-Great.jpg", clicked:false},
    {id:8, imgURL: "assets/img/mmm.jpeg", clicked:false},
];



class Images extends React.Component {
    
    state = {
        array: images,
        topScore: 0,
        score: 0};
    
    

    handleClick = id => {
          var {array, score, topScore} = this.state
           for(var i = 0; i < array.length; i++){
             if (array[i].id === id)  {
                 if (!array[i].clicked){
                     array[i].clicked=true
                    score += 1
                    if (score > topScore){
                        topScore = score
                    }
                 } else {score = 0
                for(var j = 0; j < array.length; j++) {
                    if (array[j].clicked) {
                        array[j].clicked=false
                    }
                }
                } 
                
               }
            }   
            this.shuffle(array)
            this.setState({
                array:array,
                score, 
                topScore
            })
    };
     shuffle=(a)=> {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    
    
    
    
    
    render() {
        return(
            <div>
            <Score score={this.state.score}topScore={this.state.topScore}></Score>
            {this.state.array.map(image =>( 
                <img class="images" src={image.imgURL} alt="" key={image.id} onClick={()=>this.handleClick(image.id)}/>

            ))}
            </div>
        );
    }
}

export default Images;