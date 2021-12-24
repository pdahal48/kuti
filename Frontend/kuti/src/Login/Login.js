import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { Form, Alert, Row, Col, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import SignUpForm from '../Customers/SignUpForm';
import './Styles/Login.css'

const loginIcon = <FontAwesomeIcon icon={faUser} size="6x"/>

const Login = ({ showCustomerRegistration, loginUser }) => {

    const [flag, setFlag] = useState(false)
    const [value, setValue] = useState(null)

    const history = useNavigate()
    const [loginFormData, setloginFormData] = useState({
        username: "",
        password: ""
    });

    async function handleSubmit(e) {
        console.log(`submitted`)
        // e.preventDefault()
        // let user = await loginUser(loginFormData)
        // if(user.success){
        //     history.push('/')
        // } else {
        //     setFlag(true)
        //     setValue(user.errors[0])
        // }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setloginFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const ShowMsg = () => showCustomerRegistration;

    return (
        <div className="login-body">
            {console.log(showCustomerRegistration)}
        <Row className="justify-content-center text-center">
        <Col className="col-7">
            {flag && 
            <Alert variant="warning">{value}</Alert>
            }
            <div className = "card my-5">
                <div className = "card-body">
                    <Row className="login-icon mb-3">
                        <Col className="col-12">
                            <img src="https://medias.utsavfashion.com/skin/frontend/ultimo/default/images/utsavfashion-logo.png"></img>
                        </Col>
                    </Row>
                <Col>
                <Form onSubmit = {handleSubmit}>
                    <Form.Group className="mb-2">
                        <Form.Control 
                            type="text" 
                            name = "username"
                            placeholder="Username"
                            value = {loginFormData.username}
                            onChange = {handleChange}
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="password"
                            name = "password"
                            placeholder="Password"
                            value = {loginFormData.password}
                            onChange = {handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="submit"
                            value = "Submit"
                            className="btn btn-primary mt-2"
                        />
                    </Form.Group>
                    <Row className="mt-3">
                        <Col className="register-link text-start">
                            <Link to="/register">
                                Register
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="loginHelp text-start">
                            <Link to="/login-help">
                                Login Help?
                            </Link>
                        </Col>
                    </Row>
                </Form>
                </Col>
                </div>
                </div>
                </Col>
        </Row>
        </div>
    )
}

export default Login;
