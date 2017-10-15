import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Submit, TextField, Email, FlagField, RadioGroup, RadioButton, Confirmation, Password } from '../lib'
// import '../lib/style.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Demo />,
    document.getElementById('root')
  )
})

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      emailValue: '',
      countryText: '',
      countryIndex: 0,
      phoneText: '',
      countryCode: '+1',
      password: '',
      passwordConfirmation: '',
      radioValue: "ABC"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field, e) {
    this.setState({ [field]: e.target.value })
  }

  render() {
    const { inputValue, emailValue, countryIndex, countryText, countryCode, phoneText, password, passwordConfirmation } = this.state;
    return (
      <Form onSubmit={() => console.log(this.state) }>
        <TextField
          onChange={e => this.handleChange('inputValue', e)}
          value={inputValue}
          label="Text Input"
          required={true}
          aria-describedby="info"
          underline="More information"
          errorProps={ { id: "inputValue-error" } }
          underlineProps={ { id: "inputValue-underline" } }
          />
        <TextField
          onChange={e => this.handleChange('emailValue', e)}
          value={emailValue}
          label="Text Input"
          required={true}
          />
        <Submit></Submit>
      </Form>
    );
  }
}

// <TextField
//   onChange={e => this.handleChange('emailValue', e)}
//   value={emailValue}
//   label="Error Input"
//   errors={[{ _handle: () => false, message: "Fuck me" }]} />
// <FlagField
//   onChange={e => this.handleChange('countryText', e)}
//   onChangeCountry={countryIndex => this.setState({ countryIndex })}
//   countryIndex={countryIndex}
//   value={countryText}
//   required={true}
//   underline="This input allows for selecting a country and adding text input as well"
//   />
// <RadioGroup
//   currentValue={this.state.radioValue}
//   onChange={radioValue => this.setState({ radioValue })}
//   >
//   <RadioButton id="ABC" value="ABC" />
//   <RadioButton id="DEF" value="DEF" />
//   <RadioButton id="GHI" value="GHI" />
// </RadioGroup>

