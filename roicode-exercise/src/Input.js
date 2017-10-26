import React, { Component } from 'react';
import './App.css';

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let sentence = this.state.value;
    this.inflationary(sentence)
  }

  inflationary(sentence){
    let arr = sentence.toLowerCase().split(" ")
    let arrInflat = arr.map(word=>{
      if(word.includes("ten")){
        return word.replace('ten', 'eleven')
      }else if(word.includes("nine")){
        return word.replace('nine', 'ten')
      }else if(word.includes("nign")){
        return word.replace('nign', 'ten')
      }else if(word.includes("eight")){
        return word.replace('eight', 'nine')
      }else if(word.includes("ate")){
        return word.replace('ate', 'nine')
      }else if(word.includes("seven")){
        return word.replace('seven', 'eight')
      }else if(word.includes("six")){
        return word.replace('six', 'seven')
      }else if(word.includes("five")){
        return word.replace('five', 'six')
      }else if(word.includes("four")){
        return word.replace('four', 'five')
      }else if(word.includes("fore")){
        return word.replace('fore', 'five')
      }else if(word.includes("for")){
        return word.replace('for', 'five')
      }else if(word.includes("three")){
        return word.replace('three', 'four')
      }else if(word.includes("two")){
        return word.replace('two', 'three')
      }else if(word.includes("too")){
        return word.replace('too', 'three')
      }else if(word.includes("to")){
        return word.replace('to', 'three')
      }else if(word.includes("one")){
        return word.replace('one', 'two')
      }else if(word.includes("won")){
        return word.replace('won', 'two')
      }
      return word
    })
    let newSentence = arrInflat.reduce((word1,word2)=>{
      return word1+ " " + word2
    })
    newSentence = newSentence.charAt(0).toUpperCase()+newSentence.slice(1)
    console.log(newSentence)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input a Sentence:
          <input value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
