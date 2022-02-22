import React, { useState, useContext } from 'react';
import { Form, Row, Col, Alert } from 'react-bootstrap'
import NewLahenga from './NewLahenga';
import NewSaree from './NewSaree';
import NewKurti from './NewKurti';

const AddItemForm = ({ currentUser }) => {

    const [flag, setFlag] = useState(false)
    const [value, setValue] = useState(null)

    const [loginFormData, setloginFormData] = useState({
        category: "",
    });

    async function handleSubmit({ itemDetails }, e) {
        console.log(`submitted with `)
        // e.preventDefault()
        // let user = await signupSeller(loginFormData)
        // if(user.success){
        //     navigate('/')
        // } else {
        //     setFlag(true)
        //     setValue(user.Error)
        // }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setloginFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const { category } = loginFormData;

    return (
        <div className="container col-xl-6 col-lg-8 col-md-9 mt-3">
        <div className = "card">
        {flag && 
            <Alert variant="warning">{value}</Alert>
        }
        <div className = "card-body">
        <Form>
            <Row>
                <Col>
                <Form.Group>
                    <Row>
                    <Col className="col-3 ms-auto text-start"> 
                        Select Category: 
                    </Col>
                    <Col className="col-7 me-auto">
                        <Form.Select
                            onChange={handleChange} 
                            value={loginFormData.category}
                            name="category"
                        >
                            <option>Item Category</option>
                            <option>Saree</option>
                            <option>Lahenga</option>
                            <option>Salwar Kameez</option>
                            <option>Kurti</option>
                            <option>Jwellery</option>
                        </Form.Select>
                        </Col>
                    </Row>
                </Form.Group>
                </Col>
            </Row>
        
        </Form>
            {
                category == 'Saree'
                ? <NewSaree handleChange={handleChange} handleSubmit={handleSubmit} />
                : category == 'Lahenga'
                ? <NewLahenga handleChange={handleChange} handleSubmit={handleSubmit} currentUser={currentUser}/>
                : category == 'Kurti'
                ? <NewKurti handleChange={handleChange} handleSubmit={handleSubmit} />
                : ''
            }
        </div>
        </div>
        </div>
    )
}

export default AddItemForm;
