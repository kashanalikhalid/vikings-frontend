import React, { useEffect, useRef, useState } from "react";
import "../assets/css/login.css";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOff";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import image from "../assets/img/Vikings.svg";
const Login = ({ history }) => {
  const [warning, setWarning] = useState("hidden");
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [opacity, setOpacity] = useState(0);
  const [margin, setMargin] = useState("0px");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  let particle = useRef(null);

  useEffect(() => {}, []);

  const auth = (e) => {
    e.preventDefault();
    console.log("hi");
    if (username !== "sherry" || password !== "12345") {
      setWarning("visible");
      setOpacity(1);
      setMargin("5px");
    } else {
      history.push("/admin/data/addmember");
    }
  };
  return (
    <div className="login-container">
      <Row className="login_wrapper">
        <Col xs={12} md={6} lg={4} className="login_wrapper--right flex-column">
          <div className="text-center">
            <img className=" login-logo" src={image} height="150" />
          </div>
          <Container className="px-5 pb-5 login-form">
            <Row className="justify-content-start align-items-center pt-4">
              <h3 className="login-h3 mb-4">
                S<span className="login-h3-underline">ig</span>n In
              </h3>
            </Row>
            <Row className="pb-3 justify-content-center">
              <h6
                style={{
                  visibility: `${warning}`,
                  opacity: `${opacity}`,
                  marginTop: `${margin}`,
                }}
                className="login-warning"
              >
                Invalid username or password
              </h6>
            </Row>
            <Form className="position-relative" onSubmit={auth}>
              <Form.Group className="mx-4" controlId="formBasicEmail">
                <Form.Label
                  className={`login-label ${username || usernameFocus ? "display-label" : ""}`}
                >
                  Username*
                </Form.Label>
                <Form.Control
                  onBlur={() => setUsernameFocus(false)}
                  onFocus={() => setUsernameFocus(true)}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className="login-input"
                  type="text"
                  placeholder="Username"
                />
                <i className="login-icons nc-icon nc-single-02" />
              </Form.Group>

              <Form.Group className="mx-4" controlId="formBasicPassword">
                <Form.Label
                  className={`login-label ${password || passwordFocus ? "display-label" : ""} `}
                >
                  Password*
                </Form.Label>

                <Form.Control
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="login-input"
                  type={passwordVisibility ? "text" : "password"}
                  placeholder="Password"
                />

                <i className="login-icons nc-icon nc-lock-circle-open" />
                {passwordVisibility ? (
                  <VisibilityOutlinedIcon
                    className="nc-icon login-password-visibility"
                    onClick={() => setPasswordVisibility(false)}
                  />
                ) : (
                  <VisibilityOffOutlinedIcon
                    onClick={() => setPasswordVisibility(true)}
                    className="nc-icon login-password-visibility"
                  />
                )}
              </Form.Group>
              <Row className="justify-content-end">
                <Button type="submit" className="login-submit">
                  Sign in
                </Button>
              </Row>
            </Form>
          </Container>
        </Col>
        <Col xs={12} md={6} lg={8} className="login_wrapper--left"></Col>
      </Row>
    </div>
  );
};

export default Login;
