import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addStaff} from '../actions/staffActions.js'



// react-bootstrap components
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col, Modal, Alert
} from "react-bootstrap";

import '../assets/css/addData.css'


const User=({match})=> {
    const dispatch= useDispatch();
    const addedStaff =useSelector(state=>state.addedStaff)
    const{loading,error,staff}=addedStaff

    const [cnic,setCnic] =useState('');
    const [phone,setPhone] =useState('');
    const[city,setCity] =useState('');
    const[address,setAddress] =useState('');
    const[name,setName] =useState('');
    const [joiningDate,setJoiningDate]=useState('')
    const [image, setImage] = useState('')
    const [rfid, setRfid] = useState('');
    const [show, setShow] = useState(false);
    const [alertBox,setAlertBox] = useState(true)


    const handleClose = () => setShow(false);


    const handleRFID=()=>{
        if(rfid==='')
            setShow(true)
        else
            setShow(false)
    }

    const onSubmitHandler= (e)=>{
        e.preventDefault();
        const data={
           phone,city,address,name,joiningDate,cnic,rfid
        }
        const rfidData={
            rfid,type:'staff'
        }
        dispatch(addStaff(data,rfidData))
        setAlertBox(true)


    }

    const validateNum=(value,len)=>{
        value=value.target.value
        if(value.toString().length<=len)
        {
            if(len===13)
                setCnic(value);
            else if(len===11)
                setPhone(value)
        }
    }

    const showAlert=()=>{
        if(error) {
            if(alertBox)
                return (
                <Alert variant="danger" onClose={() => setAlertBox(false)} dismissible>
                    <Alert.Heading>Member not added!</Alert.Heading>
                </Alert>
                )
        }
    }


    return (
        <>

            <Container fluid>
                {
                    showAlert
                }

                <Modal show={show} onHide={handleClose}>
                    <Modal.Body><img width='310' src={require("assets/img/scan rfid.gif").default} alt='scan rfid'/></Modal.Body>
                    <Modal.Footer>
                        <Form.Control
                            style={{width:'310px',marginLeft:'-0.5px'} }
                            placeholder="RFID"
                            type="number"
                            value={rfid}
                            onChange={(e)=>{setRfid(e.target.value) ;handleRFID()}}
                        ></Form.Control>
                    </Modal.Footer>
                </Modal>

                <Row>
                    <Col >
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Add Staff</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Contact</label>
                                                <Form.Control
                                                    onChange={(value)=>validateNum(value,11)}
                                                    value={phone}
                                                    placeholder="03XX5XXXXXX"
                                                    type="number"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Name</label>
                                                <Form.Control
                                                    onChange={(e)=>setName(e.target.value)}
                                                    value={name}
                                                    type="text"
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>CNIC</label>
                                                <Form.Control
                                                    placeholder="3630229314081"
                                                    type="number"
                                                    onChange={(value)=>validateNum(value,13)}
                                                    value={cnic}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <Form.Group>
                                                <label>Address</label>
                                                <Form.Control
                                                    placeholder="Home Address"
                                                    type="text"
                                                    value={address}
                                                    onChange={(e)=>{setAddress(e.target.value)}}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>City</label>
                                                <Form.Control
                                                    type="text"
                                                    value={city}
                                                    onChange={(e)=>{setCity(e.target.value)}}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>Joining Date</label>
                                                <Form.Control
                                                    type="date"
                                                    value={joiningDate}
                                                    onChange={(e)=>{setJoiningDate(e.target.value)}}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-3" md="4">
                                            <Form.Group>
                                                <label>RFID</label>
                                                <Form.Control
                                                    placeholder="RFID"
                                                    type="string"
                                                    value={rfid}
                                                    onChange={(e)=>{setRfid(e.target.value) ;handleRFID()}}
                                                    onFocus={handleRFID}
                                                    onBlur={handleRFID}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>



                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                        onClick={(e)=>{onSubmitHandler(e)}}
                                    >
                                        Add Staff
                                    </Button>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default User;
