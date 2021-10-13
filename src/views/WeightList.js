import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

// react-bootstrap components
import SearchField from "react-search-field";
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
import DeleteLoader from '../components/Loaders/DeleteLoader'
import {deleteMember,weightList} from "../actions/memberActions.js";


const WeightList=({history, location})=>{

    const dispatch= useDispatch()
    const memberListData =useSelector(state=>state.memberWeight)
    const deleted =useSelector(state=>state.memberDelete)



    const{loading,error,members}=memberListData
    const{success,deleting}=deleted
    const [currentPage, setCurrentPage] = useState(1);
    const[search, setSearch]=useState('')
    const [defaulters,setDefaulters]=useState(false)




    const handleDelete=(id,rfid)=>{
        dispatch(deleteMember(id,rfid))
    }

    const feeStatus=(date)=>{
        date= new Date(date)
        let today= new Date()
        return Math.round((today-date)/(1000*60*60*24));


    }

    useEffect(()=>{
        if(location.search){
            dispatch(weightList(location.pathname+location.search))
        }
        else{
            dispatch(weightList(location.pathname))
        }



    },[location,dispatch,success])

    const handleSearch= (value,event)=>{
        setCurrentPage(1)
        setSearch(value)
        if(value!=='')
            history.push(`/admin/weight?search=${value}`)
        else{
            history.push(`/admin/weight`)
        }
    }

    const pageChangeHandler=(page)=>{
        setCurrentPage(page);
        if(search==='')
        {
            history.push(`/admin/weight?page=${page}`)
        }
        else{
            history.push(`/admin/weight?search=${search}&page=${page}`)
        }
    }

    const showDefaulter =()=>{
        return (
            <Container fluid>
                <Col md={3} className="d-flex">
                    <p>Defaulters</p>
                    <Form.Check
                        type='checkbox'
                        checked={defaulters}
                        onChange={(e)=>{setDefaulters(!defaulters)}}
                    />
                </Col>


                <SearchField
                    placeholder="Search Name"
                    classNames="search"
                    onEnter={handleSearch}
                />

                {
                    members===undefined? '' : members.members.map(member =>{
                        let days=feeStatus(member.feeDate)
                        if(days>((31*member.months)-3))
                        {
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
                                                <span>{member.cnic}</span>
                                            </p>

                                        </Col>
                                        <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                            <OverlayTrigger
                                                overlay={
                                                    <Tooltip id="tooltip-829164576">Remove</Tooltip>
                                                }
                                            >
                                                <Button onClick={()=>{handleDelete(member._id,member.rfid)}}  size='sm' className='btn-fill btn-padding btn-margin' variant="danger"><i className=" far fa-trash-alt fa-2x "> </i></Button>
                                            </OverlayTrigger>


                                            <OverlayTrigger
                                                overlay={
                                                    <Tooltip id="tooltip-829164576">Profile</Tooltip>
                                                }
                                            >
                                                <Button onClick={()=>{history.push(`/admin/memberprofile/${member._id}`)}} size='sm'  className='btn-fill btn-padding' variant="primary"><i className=" icon-margin far fa-id-card fa-2x "> </i></Button>
                                            </OverlayTrigger>
                                        </Col>

                                    </Row>
                                </div>
                            )}
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

    const list=()=>{
        if(deleting===true)
        {
            setTimeout(function(){return; }, 2000);
            return <DeleteLoader/>
        }
        else
            return(

                <Container fluid>
                    <Col md={3} className="d-flex">
                        <p>Defaulters</p>
                        <Form.Check
                            type='checkbox'
                            checked={defaulters}
                            onChange={(e)=>{setDefaulters(!defaulters)}}
                        />
                    </Col>



                    <SearchField
                        placeholder="Search Name"
                        classNames="search"
                        onEnter={handleSearch}
                    />

                    {
                        members===undefined? '' : members.members.map(member =>{
                            let days=feeStatus(member.feeDate)
                            let color= days>31? '#df4759': 'transparent'
                            return(
                                <div style={{backgroundColor: `${color}` , "&:hover": {backgroundColor: `${color}`}}} key={member._id}  className='table-entry'>
                                    <Row  className='justify-content-center flex-row align-items-center' >
                                        <Col xs={10} md={1}>
                                            <img style={{objectFit:'contain'}} className='img-thumbnail ' width={100} height={100}
                                                 src={`https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg`} />

                                        </Col>

                                        <Col  xs={6} md={6}>
                                            <p >
                                                <span>{member.name} </span><br/>
                                                <span>{member.cnic}</span>
                                            </p>

                                        </Col>
                                        <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                            <OverlayTrigger
                                                overlay={
                                                    <Tooltip id="tooltip-829164576">Remove</Tooltip>
                                                }
                                            >
                                                <Button onClick={()=>{handleDelete(member._id,member.rfid)}}  size='sm' className='btn-fill btn-padding btn-margin d-md-none' variant="danger"><i className=" far fa-trash-alt fa-2x "> </i></Button>
                                            </OverlayTrigger>


                                            <OverlayTrigger
                                                overlay={
                                                    <Tooltip id="tooltip-829164576">Profile</Tooltip>
                                                }
                                            >
                                                <Button onClick={()=>{history.push(`/admin/memberprofile/${member._id}`)}} size='sm'  className='btn-fill btn-padding' variant="primary"><i className=" icon-margin far fa-id-card fa-2x "> </i></Button>
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
                loading===true? <SimpleLoader/> : defaulters===true? showDefaulter():list()
            }
        </>
    );
}

export default WeightList;
