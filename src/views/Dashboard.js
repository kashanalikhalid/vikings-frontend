import React, {useEffect, useState} from "react";
import ChartistGraph from "react-chartist";


import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {countMember} from "../actions/memberActions";
import {deleteMember,allMembers} from "../actions/memberActions.js";
import SimpleLoader from '../components/Loaders/SimpleLoader'

function Dashboard() {

  const dispatch= useDispatch()
  const {memberCount,memberLoading} =useSelector(state=>state.memberCount)
  const{loading,error,members} =useSelector(state=>state.allMembers)
  const [revenue,setRevenue]=useState(0)
  const [paid,setPaid]=useState(0)
  const [notPaid,setNotPaid]=useState(0)


  useEffect(()=>{
    dispatch(countMember())
    dispatch(allMembers())
  },[dispatch])

  const feeStatus=(date)=>{
    date= new Date(date)
    let today= new Date()
    return Math.round((today-date)/(1000*60*60*24));


  }

  const calculateRevenue=()=>{
    let total=0;
    let paid=0;
    let notPaid=0;
    let count=memberCount.data.count
    if(members)
    {
      members.forEach((member)=>{
        let days=feeStatus(member.feeDate)
        if(days<31*member.months)
        {
          let fee=member.fee/member.months
              total=total+fee;
        }

      })

    }
    return total;
  }


  const calculatePaid=()=>{
    let paid=0;
    let notPaid=0;
    let count=memberCount.data.count
    if(members)
    {
      members.forEach((member)=>{
        let days=feeStatus(member.feeDate)
        if(days<31*member.months)
        {
          paid=paid+1;
        }
        else{
          notPaid=notPaid+1;
        }

      })

    }
    return Math.ceil((paid/count)*100);
    // setNotPaid(Math.floor((notPaid/count)*100))
  }


  const calculateNotPaid=()=>{
    let paid=0;
    let notPaid=0;
    let count=memberCount.data.count
    if(members)
    {
      members.forEach((member)=>{
        let days=feeStatus(member.feeDate)
        if(days<31*member.months)
        {
          paid=paid+1;
        }
        else{
          notPaid=notPaid+1;
        }

      })

    }
    return Math.floor((notPaid/count)*100)
  }

  const showDashboad=()=>{
    if(memberLoading==false)
    {
        return( <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Members</p>
                      <Card.Title as="h4">{memberCount.data.count}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Cardio Members</p>
                      <Card.Title as="h4">{memberCount.data.cardio}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Weight Training</p>
                      <Card.Title as="h4">{memberCount.data.strength}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Strength and Cardio</p>
                      <Card.Title as="h4">{memberCount.data.strengthCardio}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-secondary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Training</p>
                      <Card.Title as="h4">{memberCount.data.training}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bank text-info"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">{members?calculateRevenue():''}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Fee statistics</Card.Title>
              </Card.Header>
              <Card.Body>
                <div
                    className="ct-chart ct-perfect-fourth"
                    id="chartPreferences"
                >
                  <ChartistGraph
                      data={{
                        labels: [`${calculatePaid()}%`, `${calculateNotPaid()}%`],
                        series: [calculatePaid(), calculateNotPaid()],
                      }}
                      type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Paid <i className="fas fa-circle text-danger"></i>
                  Not-Paid
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>)
    }
    else{
      return <SimpleLoader/>
    }
  }

  return (
    <>{showDashboad()}
    </>
  );
}

export default Dashboard;
