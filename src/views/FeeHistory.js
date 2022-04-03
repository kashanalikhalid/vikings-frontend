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
import {feeHistory} from "../actions/feeActions";


const FeeHistory=({history, location})=>{

    const dispatch= useDispatch()
    const {loading,error,fees} =useSelector(state=>state.feeList)



    const [currentPage, setCurrentPage] = useState(1);
    const[search, setSearch]=useState('')


    const feeStatus=(date)=>{
        date= new Date(date)
        let today= new Date()
        return Math.round((today-date)/(1000*60*60*24));


    }

    useEffect(()=>{
        if(location.search){
            dispatch(feeHistory(location.pathname+location.search))
        }
        else{
            dispatch(feeHistory(location.pathname))
        }



    },[location,dispatch])

    const handleSearch= (value,event)=>{
        setCurrentPage(1)
        setSearch(value)
        if(value!=='')
            history.push(`/admin/feehistory?search=${value}`)
        else{
            history.push(`/admin/feeHistory`)
        }
    }

    const pageChangeHandler=(page)=>{
        setCurrentPage(page);
        if(search==='')
        {
            history.push(`/admin/feehistory?page=${page}`)
        }
        else{
            history.push(`/admin/feehistory?search=${search}&page=${page}`)
        }
    }

    const getFormattedDate=(date)=>{
        let newDate=new Date(date)
        return ` ${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`

    }



    const list=()=>{
            return(

                <Container fluid>

                    <SearchField
                        placeholder="Search Name"
                        classNames="search"
                        onEnter={handleSearch}
                    />

                    {
                        fees===undefined? '' : fees.fees.map(member =>{
                            return(
                                <div  key={member._id}  className='table-entry'>
                                    <Row  className='justify-content-center flex-row align-items-center' >
                                        <Col xs={10} md={1}>
                                            <img style={{objectFit:'contain'}} className='img-thumbnail ' width={100} height={100}
                                                 src={`https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg`} />

                                        </Col>

                                        <Col  xs={6} md={6}>
                                            <p >
                                                <span>{member.name} </span><br/>
                                                <span>{member.amount}</span><br/>
                                                <span>{member.date}</span>
                                            </p>

                                        </Col>
                                        <Col className=' d-flex justify-content-end' xs={6} md={4}>

                                            <OverlayTrigger
                                                overlay={
                                                    <Tooltip id="tooltip-829164576">Profile</Tooltip>
                                                }
                                            >
                                                <Button onClick={()=>{history.push(`/admin/memberprofile/${member.member}`)}} size='sm'  className='btn-fill btn-padding' variant="primary"><i className=" icon-margin far fa-id-card fa-2x "> </i></Button>
                                            </OverlayTrigger>
                                        </Col>

                                    </Row>
                                </div>
                            )
                        })

                    }
                    {
                        fees===undefined? '' : (<Pagination
                            current={fees.page}
                            total={fees.pages}
                            onPageChange={pageChangeHandler}
                        />)
                    }

                </Container>
            )
    }

    return (
        <>
            {
                loading===true? <SimpleLoader/> :list()
            }
        </>
    );
}

export default FeeHistory;
