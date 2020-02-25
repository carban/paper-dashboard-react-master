import React from "react";
import CreateUserForm from "views/admin/CreateUserForm.jsx";

// reactstrap components
import {
    Card,
    CardBody,
    Row,
    Col, Button, Alert
} from "reactstrap";

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    createEle = item => {
        this.setState({
            list: [...this.state.list, item]
        })
    }

    onDismiss = key => {
        var newList = this.state.list.slice();
        newList.splice(key, 1);
        this.setState({
            list: newList
        })
    }

    sendNews = () => {
        // AXIOS
        alert("Axios");
        this.setState({ list: [] });
    }

    render() {
        var news = this.state.list;
        if (news.length !== 0) {
            news = this.state.list.map((n, key) => {
                return (
                    <Alert color="primary" key={key} toggle={() => this.onDismiss(key)}>
                        #{key + 1} <b>{n.name} {n.lastname}</b> - {n.ID}
                        <br></br>
                        <i>{n.type}</i>
                    </Alert>
                )
            })
        }else{
            news = <center><h6><i>No users yet</i></h6></center>;
        }

        return (
            <div className="content">
                <Row>
                    <Col md="6" >
                        <Card>
                            <CardBody>
                                <CreateUserForm submitAction={this.createEle} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card>
                            <CardBody>
                                {news}
                            </CardBody>
                        </Card>
                        <center>
                            <Button color="success" onClick={this.sendNews}>CREATE</Button>
                        </center>

                    </Col>
                </Row>
            </div>
        )
    }
};

export default CreateUser;