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
    let sentence1 = sentence.replace(/ten/i, 'eleven')
    let sentence2 = sentence1.replace(/nine|nign/i, 'ten')
    let sentence3 = sentence2.replace(/eight|ate/i, 'nine')
    let sentence4 = sentence3.replace(/seven/i, 'eight')
    let sentence5 = sentence4.replace(/six/i, 'seven')
    let sentence6 = sentence5.replace(/five/i, 'six')
    let sentence7 = sentence6.replace(/four|fore|for/i, 'five')
    let sentence8 = sentence7.replace(/three/i, 'four')
    let sentence9 = sentence8.replace(/two|too|to/i, 'three')
    let newSentence = sentence9.replace(/one|won/i, 'two')
    console.log(newSentence)
    alert(newSentence);
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
