import React, {Component} from 'react';

class CreditCard extends Component {
  constructor(props) {
    super(props)
    this.state = {number: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  checkType(number) {
    let types = this.props.types
    let result = ''
    for (let t in types) {
      if (number.match(types[t])) {
        result = t;
      }
    }

    return result
  }

  process(number) {
    let type = this.checkType(number)
    let text = this.insertSpaces(number)
    text = text.trim()
    return { text: text, type: type }
  }

  filterSpaces(value) {
    return value.replace(/\s/g, '')
  }

  insertSpaces(text) {
    return text.replace(/(.{4})/g, '$1 ');
  }

  handleChange(e) {
    let newValue = e.target.value

    if (newValue.length > 19) {
      return
    }

    let newNumber = this.filterSpaces(newValue)
    this.setState({number: newNumber})
  }

  render() {
    let {text, type} = this.process(this.state.number)
    return (
      <div className="Credit-card">
        <input type="text" className="Field-text" value={text} onChange={this.handleChange}/>
        <span className={type}></span>
      </div>
      )
  }
}

export default CreditCard;