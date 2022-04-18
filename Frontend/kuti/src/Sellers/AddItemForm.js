import React, { useState } from 'react';
import { Form, Row, Col, Alert, Container } from 'react-bootstrap'
import NewLahenga from '../Lahengas/NewLahenga';
import NewSaree from '../Sarees/NewSaree';
import NewKurti from './NewKurti';
import NewJwelery from '../Jweleries/NewJwelery';
import SideNav from '../SideNavbar/SideNav';

const AddItemForm = ({ currentUser }) => {

    const [flag, setFlag] = useState(false)
    const [value, setValue] = useState(null)

    const [loginFormData, setloginFormData] = useState({
        category: "",
    });

    async function handleSubmit({ itemDetails }, e) {
        e.preventDefault()
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
        <Row className='addItem-wrapper'>
            <Col className='col-2'>
                <SideNav />
            </Col>
            {/* <Col className='col-xl-6 col-lg-8 col-md-9 lahenga-card px-4'> */}
            <Col className='p-4 mt-3 container justify-content-center col-6'>
                {flag && 
                    <Alert variant="warning">{value}</Alert>
                }
                <Form>
                    <Form.Group>
                        <Row className='justify-content-center'>
                            <Col className="col-3 ms-auto text-end p-0 mt-1 mx-2"> 
                                Select Category: 
                            </Col>
                            <Col className="col-4 me-auto text-start p-0 ">
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
                                    <option>Jwelery</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
                {
                    category === 'Saree'
                    ? <NewSaree handleChange={handleChange} handleSubmit={handleSubmit} currentUser={currentUser}/>
                    : category === 'Lahenga'
                    ? <NewLahenga handleChange={handleChange} handleSubmit={handleSubmit} currentUser={currentUser}/>
                    : category === 'Kurti'
                    ? <NewKurti handleChange={handleChange} handleSubmit={handleSubmit} currentUser={currentUser}/> 
                    : category === 'Jwelery'
                    ? <NewJwelery handleChange={handleChange} handleSubmit={handleSubmit} currentUser={currentUser}/>
                    : ''
                }
            </Col>
        </Row>
    )
}

export default AddItemForm;
