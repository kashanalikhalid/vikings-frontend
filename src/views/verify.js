import React, {useEffect, useRef, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import '../assets/css/addData.css'
import {verifyRfid} from '../actions/rfidActions'
import {useDispatch, useSelector} from "react-redux";
const Verify = ({navigation}) => {
    const dispatch= useDispatch();
    const [name, setMemberName] = useState('')
    const [rfid,setRfid]=useState('')
    const verifyfield=useRef(null)

    const verifyData =useSelector(state=>state.verifyStatus)
    const{loading,result,error}=verifyData
    if(result)
    {
        const {lastEntry,name,training,membership,months,group,allowed,discount}=result.data
    }




    useEffect(()=>{
        verifyfield.current.focus()
    },[])


    const validateRfid=(value)=>{

        if(value.length ===10)
        {
            dispatch(verifyRfid(value))
        }
        if(value.length>10)
        {
            value=parseInt(parseInt(value)/1000000000)
            setRfid(value)
        }
        else{
            setRfid(value)
        }

    }

    const feeStatus=(date)=>{
        date= new Date(date)
        let today= new Date()
        return Math.round((today-date)/(1000*60*60*24));


    }

    function formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    }


    const verifyPage=()=>{
        let color;
        let allowed;
        return(
            <div>
                <Row >
                    <Col className="pr-1 d-flex flex-column align-items-center" md="12" sm="12">
                        <Form.Group style={{width:'80%'}}>
                            <label>RFID</label>
                            <Form.Control
                                ref={verifyfield}
                                placeholder="RFID"
                                type="number"
                                value={rfid}
                                maxLength="10"
                                onChange={(e) => {
                                    validateRfid(e.target.value);
                                }}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                {error? <Col className="d-flex justify-content-center align-items-center"
                             style={{
                                 backgroundColor:'#de2828',
                                 height:'20vh',
                                 color:'white'
                             }} sm={12}>
                    <h1>Rfid mot found!</h1>
                </Col>:''}
                {result? <Container>
                    {
                        result.data.type==="member"?<Row>
                            <div style={{display:'none'}}>  {result.data.allowed===true?color='#4cc100' :color='#de2828'}
                                {result.data.allowed===true?allowed='ALLOWED' :color='WARNING!'}
                            </div>

                            <Col className="d-flex justify-content-center align-items-center"
                                 style={{
                                     backgroundColor:`${color}`,
                                     height:'20vh',
                                     color:'white'
                                 }} sm={12}>
                                <h1>{allowed}</h1>
                            </Col>

                            <Col className="d-flex flex-column pl-5 pt-4"
                                 style={{
                                     backgroundColor:'white',
                                     height:'50vh',
                                     color:'black',
                                     fontWeight:700
                                 }} sm={12}>


                                <Row>
                                    {result.data.allowed===true?'':<div><h2>Suspicious member card scanned!</h2> <h2>result.data.reason</h2></div>
                                    }
                                </Row>
                                <Row className="d-flex">
                                    <h3 style={{color:'#f5344f'}}>Name:</h3>
                                    <h3>{result.data.name}</h3>
                                </Row>

                                <Row className="d-flex">
                                    <h3 style={{color:'#f5344f'}}>Last Scanned:</h3>
                                    <h3>{formatDate(new Date(result.data.lastEntry))}</h3>
                                </Row>
                                <Row className="d-flex">
                                    <h3 style={{color:'#f5344f'}}>Fee months:</h3>
                                    <h3>{result.data.months}</h3>
                                </Row>
                                <Row className="d-flex">
                                    <h3 style={{color:'#f5344f'}}>Group of:</h3>
                                    <h3>{result.data.group}</h3>
                                </Row>
                                <Row className="d-flex">
                                    <h3 style={{color:'#f5344f'}}>Package:</h3>
                                    <h3>{result.data.membership}</h3>
                                </Row>
                                <Row className="d-flex">
                                    <h3 style={{color:'#f5344f'}}>training:</h3>
                                    <h3>{result.data.training===true?'true':'false'}</h3>
                                </Row>

                                <Row className="d-flex">
                                    <h3 style={{color:'#f5344f'}}>Remaining Days:</h3>
                                    <h3>{31-feeStatus(result.data.feeDate)}</h3>
                                </Row>


                            </Col>




                            <Col sm={12}>

                            </Col>
                        </Row>:''
                    }

                </Container>:'' }


            </div>
        )
    }


    return (
        verifyPage()
    );
};

export default Verify;
