import React from "react";

// reactstrap components
import {
    Row, Col, Form, FormGroup, Label, Input, Button
} from "reactstrap";

class CreateClientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user || {
            ID: '',
            sex: '',
            name: '',
            lastname: '',
            email: '',
            adress: '',
            phone: '',
            date: '',
            client: {
                typeCli: 1,
                tasa_interes_Mora: 2.0,
                ciclo: 1,
                contrato: '',
                facturacion: '',
                estado_financiero: '',
                ID_contador: ''
            }
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleInputClient = e => {

        var { client } = { ...this.state };
        client[e.target.name] = e.target.value;

        this.setState({
            client: client
        });
        
    }

    cleanForm = () => {
        document.getElementById("form").reset();
    }

    handleSubmit = e => {
        e.preventDefault();

        var theState;
        
        theState = { ...this.state };
        delete theState.client;
        this.props.submitAction(theState);

        //this.props.submitAction(this.state);

        this.cleanForm();

        this.setState({
            ID: '',
            sex: '',
            name: '',
            lastname: '',
            email: '',
            adress: '',
            phone: '',
            date: '',
            client: {
                typeCli: 1,
                tasa_interes_Mora: 2.0,
                ciclo: 1,
                contrato: '',
                facturacion: '',
                estado_financiero: '',
                ID_contador: ''
            }
        });
    }

    render() {

        const addBtn = (!this.props.user) ? <Button color="warning">Add</Button> : <Button color="warning">Edit</Button>;

        const aditional = 
        <div>
            <center style={{ marginTop: "2em" }}>Aditional Information</center>

            <Row>
                <Col>
                    <Label for="">Tipo</Label>
                    <select onChange={this.handleInputClient} value={this.state.client.typeCli} className="form-control" name="typeCli" required>
                        <option>Natural</option>
                        <option>Juridica</option>
                    </select>
                </Col>
                <Col>
                    <Label for="">Tasa Interes mora</Label>
                    <Input onChange={this.handleInputClient} value={this.state.client.tasa_interes_Mora} type="number" name="tasa_interes_Mora" placeholder="Tasa Interes mora" required />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Label for="">Ciclo</Label>
                    <Input onChange={this.handleInputClient} value={this.state.client.ciclo} type="number" name="ciclo" placeholder="ciclo" required />
                </Col>
                <Col>
                    <Label for="">Numero de contrato</Label>
                    <Input onChange={this.handleInputClient} value={this.state.client.contrato} type="text" name="contrato" placeholder="contrato" required />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Label for="">Facturacion</Label>
                    <Input onChange={this.handleInputClient} value={this.state.client.facturacion} type="number" name="facturacion" placeholder="facturacion" required />
                </Col>
                <Col>
                    <Label for="">Estado Financiero</Label>
                    <select onChange={this.handleInputClient} value={this.state.client.estado_financiero} className="form-control" name="estado_financiero" required>
                        <option>Mora</option>
                        <option>No Mora</option>
                    </select>
                </Col>
            </Row>
            <Label for="">ID contador</Label>
            <Input onChange={this.handleInputClient} value={this.state.client.ID_contador} type="number" name="ID_contador" placeholder="ID_contador" required />

        </div> 

        return (
            <Form id="form" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Row>
                        <Col>
                            <Label for="">ID</Label>
                            <Input onChange={this.handleInput} value={this.state.ID} type="number" name="ID" placeholder="ID" required />
                        </Col>
                        <Col>
                            <Label for="">Sex</Label>
                            <select onChange={this.handleInput} value={this.state.sex} className="form-control" name="sex" required>
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </Col>
                    </Row>

                    <Label for="">Nombre</Label>
                    <Input onChange={this.handleInput} value={this.state.name} type="text" name="name" placeholder="Nombre" required />
                    <Label for="">Apellido</Label>
                    <Input onChange={this.handleInput} value={this.state.lastname} type="text" name="lastname" placeholder="Apellido" required />
                    <Label for="">Email</Label>
                    <Input onChange={this.handleInput} value={this.state.email} type="email" name="email" placeholder="Email" required />
                    <Label for="">Direccion</Label>
                    <Input onChange={this.handleInput} value={this.state.adress} type="text" name="adress" placeholder="Direccion" required />
                    <Label for="">Telefono</Label>
                    <Input onChange={this.handleInput} value={this.state.phone} type="number" name="phone" placeholder="Telefono" required />
                    <Label for="">Fecha de Nacimiento</Label>
                    <Input onChange={this.handleInput} value={this.state.date} type="date" name="date" placeholder="Fecha" required />
                    {aditional}

                </FormGroup>
                {addBtn}
            </Form>
        )
    }
};

export default CreateClientForm;