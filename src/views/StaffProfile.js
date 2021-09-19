import React from "react";
import { useState,useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addStaff,getStaff,updateStaff} from '../actions/staffActions.js'



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
import {getMember} from "../actions/memberActions";
import UpdateLoader from "../components/Loaders/UpdateLoader";
import ProfileLoader from "../components/Loaders/ProfileLoader";


const StaffProfile=({match})=> {
    const dispatch= useDispatch();
    const updatedStaffData =useSelector(state=>state.updatedStaff)
    const staffProfile=useSelector(state=>state.staffProfile)
    const{loading,error,staff}=staffProfile
    const{updateLoading,updatedStaff}=updatedStaffData

    const [cnic,setCnic] =useState(null);
    const [phone,setPhone] =useState(null);
    const[city,setCity] =useState(null);
    const[address,setAddress] =useState(null);
    const[name,setName] =useState(null);
    const [joiningDate,setJoiningDate]=useState(null)
    const [rfid, setRfid] = useState(null);
    const [show, setShow] = useState(false);


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
            rfid
        }
        dispatch(updateStaff(staff._id,data,rfidData))
    }

    useEffect(()=>{
        dispatch(getStaff(match.params.id))
    },dispatch,updatedStaff)



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

    function getFormattedDate(date) {
        date= new Date(date)
        let day = ("0" + date.getDate()).slice(-2);
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let newdate=  date.getFullYear()+"-"+(month)+"-"+(day) ;

        return newdate.toString()
    }

    const showProfile=()=>{
        if(staff!==undefined)
        {
            if(updateLoading===true)
                return <UpdateLoader/>
            else{
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
                                                            value={phone===null?staff.phone:phone}
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
                                                            value={name===null?staff.name:name}
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
                                                            value={cnic===null?staff.cnic:cnic}
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
                                                            value={address===null?staff.address:address}
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
                                                            value={city===null?staff.city:city}
                                                            onChange={(e)=>{setCity(e.target.value)}}
                                                        ></Form.Control>
                                                    </Form.Group>
                                                </Col>

                                                <Col className="pr-1" md="4">
                                                    <Form.Group>
                                                        <label>Joining Date</label>
                                                        <Form.Control
                                                            type="date"
                                                            value={joiningDate===null? getFormattedDate(staff.joiningDate):joiningDate}
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
                                                            type="number"
                                                            value={rfid===null?staff.rfid:rfid}
                                                            onChange={(e) => {
                                                                setRfid(e.target.value);
                                                                handleRFID()
                                                            }}
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
                                                Update
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

    }


    return (
        <>
            {loading == true ? <ProfileLoader/> : showProfile()}

        </>
    );
}

export default StaffProfile;
