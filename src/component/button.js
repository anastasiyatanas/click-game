import React from 'react';
import Score from "./score.js";
import '../styles/button.css';


const images = [
    {id:0, imgURL: "assets/img/pic1.jpg", clicked:false},
    {id:1, imgURL: "assets/img/pic2.jpg", clicked:false},
    {id:2, imgURL: "assets/img/pic3.jpg", clicked:false},
    {id:3, imgURL: "assets/img/pic4.jpeg", clicked:false},
    {id:4, imgURL: "assets/img/pic5.jpg", clicked:false},
    {id:5, imgURL: "assets/img/pic6.jpg", clicked:false},
    {id:6, imgURL: "assets/img/pic7.jpg", clicked:false},
    {id:7, imgURL: "assets/img/pic8.jpg", clicked:false},
    {id:8, imgURL: "assets/img/pic9.jpeg", clicked:false},
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