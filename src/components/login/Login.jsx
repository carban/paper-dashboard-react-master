import React from "react";

import logo from "logo.svg";

import auth from "components/auth/auth.js";

import { Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Col, Form, FormGroup, Label, Input, Button
} from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Col md="4" id="login">
                <Card>
                    <CardHeader>
                        <center>
                            <img src={logo} width="80px" height="80px" alt="description"></img>
                            <CardTitle tag="h5">Login</CardTitle>
                        </center>

                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Login" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                            <center>
                                {/* <Button color="success">Login</Button> */}
                                <Button color="success" onClick={() => {
                                    auth.login(rou => { this.props.history.push("/" + rou) }, "admin");
                                }}>Admin</Button>
                                <Button color="warning" onClick={() => {
                                    auth.login(rou => { this.props.history.push("/" + rou) }, "operator");
                                }}>Op</Button>
                                <Button color="info" onClick={() => {
                                    auth.login(rou => { this.props.history.push("/" + rou) }, "manager");
                                }}>Manager</Button>
                                <br/>
                                <Link to="/">Home</Link>
                            </center>
                        </Form>
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </Col>
        )
    }
}

export default Login;