import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      gender: '',
      designation: '',
      email: '',
      password: '',
      confirm_password: '',
      hospital_id: '',
      hospital_data: [],
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();
    var newUser = {
      name: this.state.name,
      gender: this.state.gender,
      designation: this.state.designation,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
      hospital_id: this.state.hospital_id
    }
    // service.register(newUser)
    // axios.post('/doctors/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))
    // this.props.history.push("/")
  }
  render() {
    const { hospital_data } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your account</p>
              <form className="container was-validated" onSubmit={this.onSubmit} noValidate >
                <div className="form-group">
                  <label className="form-control-label" htmlFor="inputSuccess1">Your Name:</label>
                  <div className="col-xs-5 selectContainer">
                    <input id="inputSuccess1" type="text" className="form-control form-control-lg" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} required minLength="5" />
                    <div className="invalid-feedback">Enter atleast 5 characters.</div>
                  </div>
                </div>
                <div ><label htmlFor="customRadioInline1">Choose Gender:</label></div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline1" name="gender" className="custom-control-input" value="male" onChange={this.onChange} required />
                  <label className="custom-control-label" htmlFor="customRadioInline1">Male</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="gender" className="custom-control-input" value="female" onChange={this.onChange} required />
                  <label className="custom-control-label" htmlFor="customRadioInline2">Female</label>
                </div>
                <div className="form-group">
                  <div><label htmlFor="designation">Enter Designation:</label></div>
                  <input type="text" className="form-control form-control-lg" placeholder="Designation" name="designation" value={this.state.designation} onChange={this.onChange} minLength="5" required />
                  <div className="invalid-feedback">Enter your designation.</div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Enter Your Mail ID:</label>
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} required />
                  <div className="invalid-feedback">Enter a valid Mail address</div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Enter Password:</label>
                  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} minLength="5" required />
                  <div className="invalid-feedback">Enter atleast 5 characters.</div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirm_password">Confirm Password:</label>
                  <input type="password" className="form-control form-control-lg" placeholder="confirm Password" name="confirm_password" value={this.state.password2} onChange={this.onChange} required />
                  <div className="invalid-feedback">password should match.</div>
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
