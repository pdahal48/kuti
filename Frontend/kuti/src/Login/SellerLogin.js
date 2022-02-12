import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { Form, Alert, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons'
import './Styles/Login.css'

const SellerLoginIcon = <FontAwesomeIcon icon={faStoreAlt} size="3x"/>

const SellerLogin = ({ showSellerRegistration, loginSeller }) => {

    const [flag, setFlag] = useState(false)
    const [value, setValue] = useState(null)

    const navigate = useNavigate()
    
    const [loginFormData, setloginFormData] = useState({
        username: "",
        password: ""
    });

    async function handleSubmit(e) {
        e.preventDefault()
        let user = await loginSeller(loginFormData)
        if(user.success){
            navigate('/')
        } else {
            setFlag(true)
            setValue(user.errors[0])
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setloginFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div className="login-body">
        <Row className="justify-content-center text-center">
            <Col className="col-7">
                {flag && 
                <Alert variant="warning">{value}</Alert>
                }
                <div className = "card my-5">
                <div className = "card-body">
                <Row className="login-icon mb-3 justify-content-center">
                    <Col className="col-8">
                        {SellerLoginIcon}
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
                        <Row>
                            <Col onClick={ showSellerRegistration } className="mt-3 register-link text-start">
                                <Link to="/seller-registration">
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

export default SellerLogin;
