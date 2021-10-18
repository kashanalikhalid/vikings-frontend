import React from "react";
import { useState,useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMember, printReceipt, updateMember} from '../actions/memberActions.js'



// react-bootstrap components
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col, Modal
} from "react-bootstrap";

import '../assets/css/addData.css'
import UpdateLoader from "../components/Loaders/UpdateLoader";
import ProfileLoader from "../components/Loaders/ProfileLoader";


const MemberProfile=({match,history})=> {
    const dispatch= useDispatch();
    const updatedMemberData =useSelector(state=>state.updatedMember)
    const memberProfile=useSelector(state=>state.memberProfile)
    const{loading,error,member}=memberProfile
    const{updateLoading,updatedMember}=updatedMemberData

    const [cnic,setCnic] =useState(null);
    const [contact,setContact] =useState(null);
    const[city,setCity] =useState(null);
    const[address,setAddress] =useState(null);
    const[name,setName] =useState(null);
    const [fee,setFee]=useState(null)
    const [membership,setMembership] = useState(null)
    const[registrationDate,setRegistrationDate] = useState(null)
    const[feeDate,setFeeDate] = useState(null)
    const [rfid, setRfid] = useState(null);
    const[gender,setGender] = useState(null);
    const[months,setMonths] = useState(null);
    const[group,setGroup] = useState(null);
    const[discount,setDiscount] = useState(null);
    const[discountAmount,setDiscountAmount] = useState(0)
    const[training,setTraining]=useState(null)
    const[trainingFee,setTrainingFee]=useState(null)


    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);


    const handleRFID=()=>{
        if(rfid==='')
            setShow(true)
        else
            setShow(false)
    }

    useEffect(()=>{
        dispatch(getMember(match.params.id))
    },[dispatch,updatedMember])

    const onSubmitHandler= (e)=>{
        e.preventDefault();
        const data={
                contact,city,address,name,cnic,membership:membership===null?member.membership:membership,registrationDate,feeDate,fee,rfid,gender:gender===null?member.gender:gender
            ,months:months===null?member.months:months
            ,group:group===null?member.group:group
            ,discount
            ,training:training===null?member.training:training
        }
        console.log(discount)

        const rfidData={
            rfid
        }
        dispatch(updateMember(member._id,data,rfidData,member.rfid))
    }

    const receipt=()=>{
        const data={
            name:name===null?member.name:name,
            membership:membership===null?member.membership:membership,
            fee:fee===null?member.fee:fee,
            date:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
        }
        console.log(data)
        dispatch(printReceipt(data));
        history.push('/receipt')
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
    function getFormattedDate(date) {
         date= new Date(date)
        var day = ("0" + date.getDate()).slice(-2);
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        let newdate=  date.getFullYear()+"-"+(month)+"-"+(day) ;

        return newdate.toString()
    }

    const calculateFee=()=>{
        let amount = 0;
        let trainingcost = 0
        let discount = 0

        if(gender===null) {
            setGender(gender===null?member.gender:gender)
            setMonths(months===null?member.months:months)
            setGroup(group===null?member.group:group)
            setTraining(training===null?member.training:training)
            setMembership(membership===null?member.membership:membership)
            setTrainingFee(trainingFee===null?member.trainingFee:trainingFee)
            if ((gender||member.gender) === "male") {
                if ((membership||member.membership) === 'Weight Training') {
                    amount = 1500
                }
                else if((membership||member.membership)==='Cardio')
                {
                    amount=2000
                }else {

                    amount = 3000
                }
                trainingcost = 6000
            } else {
                amount = 3000
                trainingcost = 3000
            }
            if ((months||member.months) === 3) {
                discount = discount + 10
                amount = amount * 3
            } else if ((months||member.months) === 6) {
                discount = discount + 15
                amount = amount * 6
            }

            if ((group||member.group) === 4) {
                discount = discount + 10
            } else if ((group||member.group) === 6) {
                discount = discount + 15
            }
            if ((training||member.training) === true) {
                amount = amount + parseInt(trainingFee);
            }
        }

        else{
            if (gender === 'male') {
                if ((membership||member.membership) === 'Weight Training') {
                    amount = 1500
                }
                else if((membership||member.membership)==='Cardio')
                {
                    amount=2000
                }else {

                    amount = 3000
                }
            } else {
                amount = 3000
            }
            if (months === 3) {
                discount = discount + 10
                amount = amount * 3
            } else if (months === 6) {
                discount = discount + 15
                amount = amount * 6
            }

            if (group === 4) {
                discount = discount + 10
            } else if (member.group === 6) {
                discount = discount + 15
            }
            if (training === true) {
                amount = amount + parseInt(trainingFee);
            }
        }
        discount=0;

        const checkDiscount=(discount/100)*amount
        setDiscountAmount(checkDiscount)
        setFee(amount-checkDiscount)
        setDiscount(discount)
    }





    const showProfile=()=>{
        if(member!==undefined){
            if (updateLoading === true)
                return <UpdateLoader/>
            else
                return(
                    <Container fluid>

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
                                        <Card.Title as="h4">{member.name}'s profile</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form onSubmit={(e)=>{onSubmitHandler(e)}}>
                                            <Row>
                                                <Col className="pr-1" md="6">
                                                    <Form.Group>
                                                        <label>Contact</label>
                                                        <Form.Control
                                                            onChange={(value)=>validateNum(value,11)}
                                                            value={contact===null?member.contact :contact}
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
                                                            value={name===null? member.name :name}
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
                                                            value={cnic===null? member.cnic :cnic}
                                                            required={true}
                                                        ></Form.Control>
                                                    </Form.Group>
                                                </Col>

                                                <Col md="6">
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                        <Form.Label>Membership Type</Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            value={membership===null? member.membership :membership}
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
                                                            value={address===null? member.address:address}
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
                                                            value={city===null?member.city:city}
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
                                                            value={registrationDate===null? getFormattedDate(member.registrationDate):registrationDate}
                                                            onChange={(e)=>{setRegistrationDate(e.target.value)}}
                                                            required={true}
                                                            disabled={true}
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
                                                            value={discount===null?member.discount:discount}
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
                                                            onChange={(e)=>{setFeeDate(e.target.value)}}
                                                            value={feeDate===null? getFormattedDate(member.feeDate):feeDate}
                                                            required={true}
                                                        ></Form.Control>
                                                    </Form.Group>
                                                </Col>

                                                <Col className="pr-1" md="1">
                                                    <Form.Group>
                                                        <label>Fee Amount</label>
                                                        <Form.Control
                                                            type="number"
                                                            disabled
                                                            value={fee===null?member.fee :fee}
                                                            onChange={(e)=>{setFee(e.target.value)}}
                                                            required={true}
                                                        ></Form.Control>
                                                    </Form.Group>
                                                </Col>

                                                <Col className="pr-1" md="2">
                                                    <Form.Group>
                                                        <label>Training Fee</label>
                                                        <Form.Control
                                                            type="number"
                                                            value={trainingFee===null?member.trainingFee :trainingFee}
                                                            onChange={(e)=>{setTrainingFee(e.target.value)}}
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
                                                            value={rfid===null?member.rfid:rfid}
                                                            onChange={(e) => {
                                                                setRfid(e.target.value);
                                                                handleRFID()
                                                            }}
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
                                                            checked={group===null? member.group===1:group===1}
                                                            onChange={()=>{setGroup(1)}}


                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="4"
                                                            type='radio'
                                                            name="group"
                                                            className="data-radio"
                                                            checked={group===null? member.group===4:group===4}
                                                            onChange={()=>{setGroup(4)}}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="6"
                                                            type='radio'
                                                            name="group"
                                                            className="data-radio"
                                                            onChange={()=>{setGroup(6)}}
                                                            checked={group===null? member.group===6:group===6}

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
                                                            className="data-radio"
                                                            onChange={(e)=>{setMonths(1)}}
                                                            required
                                                            checked={months===null? member.months===1:months===1}
                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="3"
                                                            type='radio'
                                                            name="fee"
                                                            className="data-radio"
                                                            onChange={(e)=>{setMonths(3)}}
                                                            required
                                                            checked={months===null? member.months===3:months===3}

                                                        />
                                                        <Form.Check
                                                            inline
                                                            label="6"
                                                            type='radio'
                                                            name="fee"
                                                            className="data-radio"
                                                            onChange={(e)=>{setMonths(6)}}
                                                            checked={months===null? member.months===6:months===6}

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
                                                            checked={gender===null? member.gender==='male':gender==='male'}
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
                                                            checked={gender===null? member.gender==='female':gender==='female'}
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
                                                            onChange={(e)=>{e.target.checked===true? setTraining(true):setTraining(false) ;console.log(e.target.checked)}}
                                                            checked={training===null?member.training : training}
                                                        />
                                                    </Row>

                                                </Col>
                                            </Row>


                                            <Button
                                                className="btn-fill pull-right"
                                                type="submit"
                                                variant="info"
                                            >
                                                Update
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
                )
        }
    }

    return (
        <>
            {loading == true ? <ProfileLoader/> : showProfile()}
        </>
    );
}

export default MemberProfile;
