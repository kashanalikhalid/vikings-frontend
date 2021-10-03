import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMember,printReceipt} from '../actions/memberActions.js'



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


const AddMember=({match,history})=> {
    const dispatch= useDispatch();
    const addedMember =useSelector(state=>state.addedMember)
    const{loading,error,member}=addedMember

    const [cnic,setCnic] =useState('');
    const [contact,setContact] =useState('');
    const[city,setCity] =useState('');
    const[address,setAddress] =useState('');
    const[name,setName] =useState('');
    const [fee,setFee]=useState('')
    const [membership,setMembership] = useState('Weight Training')
    const[registrationDate,setRegistrationDate] = useState('')
    const[feeDate,setFeeDate] = useState('')
    const [rfid, setRfid] = useState('');
    const[gender,setGender] = useState('male');
    const[months,setMonths] = useState(1);
    const[group,setGroup] = useState(1);
    const[discount,setDiscount] = useState(0);
    const[discountAmount,setDiscountAmount] = useState(0)
    const[training,setTraining]=useState(false)


    const [show, setShow] = useState(false);
    const [alertBox,setAlertBox] = useState(true)


    const handleClose = () => setShow(false);


    const handleRFID=()=>{
        if(rfid==='')
            setShow(true)
        else
            setShow(false)
    }
    const receipt=()=>{
        const data={
            contact,city,address,name,cnic,membership,registrationDate,feeDate,fee,rfid,months,group,discount,gender,
            date:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
        }
        history.push('/receipt')
        dispatch(printReceipt(data));
    }



    const onSubmitHandler= (e)=>{
        e.preventDefault();
        const data={
            contact,city,address,name,cnic,membership,registrationDate,feeDate,fee,rfid,months,group,discount,gender
        }
        const rfidData={
            rfid,type:'member'
        }
        setAlertBox(true)
        dispatch(addMember(data,rfidData))
    }


    const validateNum=(value,len)=>{
        value=value.target.value
        if(value.toString().length<=len)
        {
            if(len===13)
                setCnic(value);
            else if(len===11)
                setContact(value)
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

    const calculateFee=()=>{
        let amount=0;
        let trainingcost=0
        let discount=0
        if(gender==='male')
        {
            if(membership==='Weight Training')
            {
                amount=1500
            }
            else if(membership==='Cardio')
            {
                amount=2000
            }
            else {
                amount=3000
            }
         trainingcost=6000
        }
        else {
            amount=3000
            trainingcost=3000
        }
        if(months===3)
        {discount=discount+10
            amount=amount*3
        }
        else if(months===6)
        {
            discount=discount+15
            amount=amount*6
        }

        if(group===4)
        {
            discount=discount+10
        }
        else if(group===6)
        {
            discount=discount+15
        }
        if(training===true)
        {
            amount=amount+trainingcost;
        }
        discount=0;
        const checkDiscount=(discount/100)*amount
        setDiscountAmount(checkDiscount)
        setFee(amount-checkDiscount)
        setDiscount(discount)

    }


    return (
        <>

            <Container fluid>
                {
                    showAlert()
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
                                <Card.Title as="h4">Add Member</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={(e)=>{onSubmitHandler(e)}}>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <Form.Group>
                                                <label>Contact</label>
                                                <Form.Control
                                                    onChange={(value)=>validateNum(value,11)}
                                                    value={contact}
                                                    placeholder="03XX5XXXXXX"
                                                    type="number"
                                                    required={true}
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
                                                    required={true}
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
                                                    required={true}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col md="6">
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Membership Type</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    value={membership}
                                                    required={true}
                                                    onChange={e=>{
                                                        setMembership(e.target.value)
                                                    }}
                                                >
                                                    <option>Weight Training</option>
                                                    <option>Cardio</option>
                                                    <option>Cardio and weight Training</option>
                                                </Form.Control>
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
                                                    required={true}
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
                                                    required={true}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col className="pr-1" md="4">
                                            <Form.Group>
                                                <label>Registration Date</label>
                                                <Form.Control
                                                    type="date"
                                                    value={registrationDate}
                                                    onChange={(e)=>{setRegistrationDate(e.target.value)}}
                                                    required={true}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col className="pr-1" md="3">
                                            <Form.Group>
                                                <label>Discount %</label>
                                                <Form.Control
                                                    type='number'
                                                    value={discount}
                                                    disabled
                                                    onChange={(e)=>{setDiscount(e.target.value)}}

                                                    required={true}
                                                >
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col className="pr-1" md="3">
                                            <Form.Group>
                                                <label>Discount Amount</label>
                                                <Form.Control
                                                    type='number'
                                                    value={discountAmount}
                                                    disabled
                                                    onChange={(e)=>{setDiscountAmount(e.target.value)}}
                                                    required={true}
                                                >
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>



                                        <Col className="pr-1" md="3">
                                            <Form.Group>
                                                <label>Fee Date</label>
                                                <Form.Control
                                                    type="date"
                                                    value={feeDate}
                                                    onChange={(e)=>{setFeeDate(e.target.value)}}
                                                    required={true}
                                                ></Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col className="pr-1" md="3">
                                            <Form.Group>
                                                <label>Fee Amount</label>
                                                <Form.Control
                                                    type="number"
                                                    value={fee}
                                                    onChange={(e)=>{setFee(e.target.value)}}
                                                    required={true}
                                                    disabled
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

                                        <Col className="pl-3" md="1">
                                            <Form.Group>
                                                <label>Group of</label>
                                            </Form.Group>
                                             <Row className="flex-column">
                                                 <Form.Check
                                                     inline
                                                     label="1"
                                                     type='radio'
                                                     name="group"
                                                     className="data-radio"
                                                     checked={group===1}
                                                     onClick={()=>{setGroup(1)}}


                                                 />
                                                 <Form.Check
                                                     inline
                                                     label="4"
                                                     type='radio'
                                                     name="group"
                                                     className="data-radio"
                                                     onClick={()=>{setGroup(4)}}
                                                 />
                                                 <Form.Check
                                                     inline
                                                     label="6"
                                                     type='radio'
                                                     name="group"
                                                     className="data-radio"
                                                     onClick={()=>{setGroup(6)}}

                                                 />
                                             </Row>

                                        </Col>

                                        <Col className="pl-3" md="2">
                                            <Form.Group>
                                                <label>Fee for(months)</label>
                                            </Form.Group>
                                            <Row className="flex-column">
                                                <Form.Check
                                                    inline
                                                    label="1"
                                                    type='radio'
                                                    name="fee"
                                                    checked={months===1}
                                                    className="data-radio"
                                                    onChange={(e)=>{setMonths(1)}}
                                                    required
                                                />
                                                <Form.Check
                                                    inline
                                                    label="3"
                                                    type='radio'
                                                    name="fee"
                                                    className="data-radio"
                                                    onChange={(e)=>{setMonths(3)}}
                                                    required

                                                />
                                                <Form.Check
                                                    inline
                                                    label="6"
                                                    type='radio'
                                                    name="fee"
                                                    className="data-radio"
                                                    onChange={(e)=>{setMonths(6)}}

                                                    required

                                                />
                                            </Row>

                                        </Col>


                                        <Col className="pl-3" md="1">
                                            <Form.Group>
                                                <label>Gender</label>
                                            </Form.Group>
                                            <Row className="flex-column">
                                                <Form.Check
                                                    inline
                                                    label="M"
                                                    type='radio'
                                                    checked={gender==='male'}
                                                    name="gender"
                                                    className="data-radio"
                                                    onChange={(e)=>{setGender('male')}}

                                                    required
                                                />
                                                <Form.Check
                                                    inline
                                                    label="F"
                                                    type='radio'
                                                    name="gender"
                                                    className="data-radio"
                                                    onChange={(e)=>{setGender('female')}}

                                                    required
                                                />
                                            </Row>

                                        </Col>

                                        <Col className="pl-3" md="1">
                                            <Form.Group>
                                                <label>Training</label>
                                            </Form.Group>
                                            <Row className="flex-column">
                                                <Form.Check
                                                    type='checkbox'
                                                    className="data-radio"
                                                    onChange={(e)=>{e.target.checked===true? setTraining(true):setTraining(false)}}
                                                />
                                            </Row>

                                        </Col>


                                    </Row>



                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                    >
                                        Add Member
                                    </Button>
                                    <Button
                                        className="btn-fill pull-right mr-2"
                                        variant="info"
                                        onClick={calculateFee}
                                    >
                                        Calculate Fee
                                    </Button>

                                    <Button
                                        className="btn-fill pull-right mr-2"
                                        variant="info"
                                        onClick={receipt}
                                    >
                                        Print Receipt
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

export default AddMember;
