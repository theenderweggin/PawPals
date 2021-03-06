import React from 'react'
import { Input, Form, FormGroup, Button, Col } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import userActions from '../actions/userActions'
import CustomInput from './CustomInput'

class Login extends React.Component {

  handleSubmit(values) {
    this.props.loginUser();
  }

  render() {
    return (
      <div style={{marginTop: 20}}>
        <h2>Welcome!</h2>
        <h6 style={{
          marginBottom: 15
        }}>Sign in below</h6>
        <Form onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>
          <FormGroup>
          
            <Col xs={{size: 10, offset: 1}}>
              <Field name='username' type='text' placeholder='Username' component={CustomInput}/>
            </Col>

            <Col xs={{size: 10, offset: 1}} style={{
                marginBottom: 15
              }}>
              <Field name="password" type='password' placeholder='Password' component={CustomInput}/>
            </Col>

            <Button className='submitButton'>Login</Button>

          </FormGroup>
        </Form>
      </div>
    )
  }
}

// Connect Login to redux store

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => {
  return {
    loginUser: () => {
      dispatch(userActions.loginUser());
    }
  }
}

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

Login = reduxForm({form: 'login'})(Login);

export { Login };