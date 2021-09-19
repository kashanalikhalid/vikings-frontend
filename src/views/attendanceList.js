import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

// react-bootstrap components
import {
    Button,
    Container,
    Row,
    Col,
    Form, Tooltip, OverlayTrigger,
} from "react-bootstrap";

import  '../assets/css/list.css'
import Pagination from 'react-responsive-pagination';
import 'font-awesome/css/font-awesome.min.css';
import SimpleLoader from '../components/Loaders/SimpleLoader'
import {attendanceList} from "../actions/attendanceActions";


const AttendanceList = ({history,location}) => {
    const dispatch= useDispatch()
    const attendanceListData =useSelector(state=>state.attendanceList)


    const{loading,error,members}=attendanceListData
    const [currentPage, setCurrentPage] = useState(1);
    const[search, setSearch]=useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const [dateValue,setDateValue]=useState('')

    useEffect(()=>{
            dispatch(attendanceList(`${location.pathname}?search=${search}`))




    },[location,dispatch,history])

    const handleSearch= (value)=>{
        setCurrentPage(1)
        setSearch(value)
        if(value!=='')
            history.push(`/admin/attendance?search=${value}`)
        else{
            history.push(`/admin/attendance`)
        }
    }

    const pageChangeHandler=(page)=>{
        setCurrentPage(page);
        if(search==='')
        {
            history.push(`/admin/attendance?page=${page}`)
        }
        else{
            history.push(`/admin/attendance?search=${search}&page=${page}`)
        }
    }

    const getFormattedDate=(date)=>{
        let newDate=new Date(date)
        return `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`

    }


    const list=()=>{
            return(

                <Container fluid>
                    <Col md={3} className="d-flex">
                        <Form.Group>
                            <label>Fee Date</label>
                            <Form.Control
                                type="date"
                                value={dateValue}
                                onChange={(e)=>{
                                    setDateValue(e.target.value)
                                    setSearch(getFormattedDate(e.target.value))
                                    handleSearch(getFormattedDate(e.target.value))
                                }}
                                required={true}
                            ></Form.Control>
                        </Form.Group>
                    </Col>


                    {
                        members===undefined? '' : members.members.map(member =>{
                            return(
                                <div style={{backgroundColor: `transparent` , "&:hover": {backgroundColor: `transparent`}}} key={member._id}  className='table-entry'>
                                    <Row  className='justify-content-center flex-row align-items-center' >
                                        <Col xs={10} md={1}>
                                            <img style={{objectFit:'contain'}} className='img-thumbnail ' width={100} height={100}
                                                 src={`https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg`} />

                                        </Col>

                                        <Col  xs={6} md={6}>
                                            <p >
                                                <span>{member.name} </span><br/>
                                                <span>{member.time}</span>
                                                <span>{member.date}</span>
                                            </p>

                                        </Col>
                                        <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                            <OverlayTrigger
                                                overlay={
                                                    <Tooltip id="tooltip-829164576">Profile</Tooltip>
                                                }
                                            >
                                                <Button onClick={()=>{history.push(`/admin/memberprofile/${member.reg}`)}} size='sm'  className='btn-fill btn-padding' variant="primary"><i className=" icon-margin far fa-id-card fa-2x "> </i></Button>
                                            </OverlayTrigger>
                                        </Col>

                                    </Row>
                                </div>
                            )
                        })

                    }
                    {
                        members===undefined? '' : (<Pagination
                            current={members.page}
                            total={members.pages}
                            onPageChange={pageChangeHandler}
                        />)
                    }

                </Container>
            )
    }

    return (
        <>
            {
                loading===true? <SimpleLoader/> : list()
            }
        </>
    );
};

export default AttendanceList;
