import React from "react";

// reactstrap components
import {
    Row, Col, Form, FormGroup, Label, Input, Button
} from "reactstrap";

class CreateUserForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.user || {
        //     type: 'operador',
        //     ID: '',
        //     sex: 'Female',
        //     name: '',
        //     lastname: '',
        //     email: '',
        //     adress: '',
        //     neighborhood: '',
        //     stratum: '',
        //     phone: '',
        //     date: '',
        //     state: true,
        //     client: {
        //         typeCli: 1,
        //         tasa_interes_Mora: 2.0,
        //         ciclo: 1,
        //         contrato: '',
        //         facturacion: '',
        //         estado_financiero: '',
        //         ID_contador: '',
        //     }
        // }
        this.state = this.props.user || {
            // type: "operador",
            // sex: "Female",
            // neighborhood: "",
            // stratum: "",
            id_user: "",
            name: "",
            email: "",
            password: "123",
            phone: "",
            address: "",
            date_of_birth: "",
            is_admin: false, //bools all down
            is_active: false,
            is_staff: false,
            is_superuser: false,
            client: {
                id: 1,
                type_client: null,
                interes_mora: null, //float
                category: "",
                cycle: "",
                contrat_number: null,
                estrato: null,
                billing: "",
                financial_state: "",
            }
        }
    }

    handleInput = e => {

        var val = e.target.value;

        if (e.target.name === "state") {
            if (val === "Activo") {
                val = true;
            } else {
                val = false;
            }
        }

        this.setState({
            [e.target.name]: val
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

        if (this.state.type !== "Cliente") {

            theState = { ...this.state };
            delete theState["client"];
            this.props.submitAction(theState);
        } else {
            theState = {...this.state.client};
            let temp = {...this.state};
            delete temp["client"];
            theState["user"] = temp;
            console.log(theState);
            this.props.submitAction(theState);
        }

        this.cleanForm();

        // this.setState({
        //     type: 'operador',
        //     ID: '',
        //     sex: 'Female',
        //     name: '',
        //     lastname: '',
        //     email: '',
        //     address: '',
        //     neighborhood: '',
        //     stratum: '',
        //     phone: '',
        //     date: '',
        //     state: true,
        //     client: {
        //         typeCli: 1,
        //         tasa_interes_Mora: 2.0,
        //         ciclo: 1,
        //         contrato: '',
        //         facturacion: '',
        //         estado_financiero: '',
        //         ID_contador: '',
        //     }
        // });

        this.setState({
            id_user: "",
            name: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            date_of_birth: "",
            is_admin: false, //bools all down
            is_active: false,
            is_staff: false,
            is_superuser: false,
            client: {
                id: null,
                type_client: null,
                interes_mora: null, //float
                category: "",
                cycle: "",
                contrat_number: null,
                estrato: null,
                billing: "",
                financial_state: "",
            }
        });
    }

    render() {

        const addBtn = (!this.props.user) ? <Button color="success">Add</Button> : <Button color="success">Edit</Button>;

        const showStateAttr = (!this.props.editMode) ? <div> <Label for="">Estado</Label>
            <select onChange={this.handleInput} value={this.state.state} className="form-control" name="state" required>
                <option>Activo</option>
                <option>Inactivo</option>
            </select>
        </div> : true

        const aditional = (this.state.type === 'Cliente') ? <div>
            <center style={{ marginTop: "2em" }}>Adtional Information</center>

            <Row>
                <Col>
                    <Label for="">Tipo</Label>
                    <select onChange={this.handleInputClient} value={this.state.client.type_client} className="form-control" name="type_client" required>
                        <option>Natural</option>
                        <option>Juridica</option>
                    </select>
                </Col>
                <Col>
                    <Label for="">Tasa Interes mora</Label>
                    <Input onChange={this.handleInputClient} value={this.state.client.interes_mora} type="number" name="interes_mora" placeholder="Tasa Interes mora" required />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Label for="">Ciclo</Label>
                    <Input onChange={this.handleInputClient} value={this.state.client.category} type="number" name="category" placeholder="ciclo" required />
                </Col>
                <Col>
                    <Label for="">Ciclo</Label>
                    <Input onChange={this.handleInputClient} value={this.state.client.cycle} type="number" name="cycle" placeholder="ciclo" required />
                </Col>
                <Col>
                    <Label for="">Numero de contrato</Label>
                    <Input onChange={this.handleInputClient} value={this.state.client.contrat_number } type="text" name="contrat_number " placeholder="contrato" required />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Label for="">Facturacion</Label>
                    <Input onChange={this.handleInputClient} value={this.state.client.billing} type="number" name="billing" placeholder="facturacion" required />
                </Col>
                <Col>
                    <Label for="">Estado Financiero</Label>
                    <select onChange={this.handleInputClient} value={this.state.client.financial_state} className="form-control" name="financial_state" required>
                        <option>Mora</option>
                        <option>No Mora</option>
                    </select>
                </Col>
            </Row>
            <Label for="">ID contador</Label>
            <Input onChange={this.handleInputClient} value={this.state.client.ID_contador} type="number" name="ID_contador" placeholder="ID_contador" required />

        </div> : true


        // Return


        return (
            <Form id="form" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <div>
                        <Label for="">Tipo de usuario</Label>
                        <select onChange={this.handleInput} value={this.state.type} className="form-control" name="type" required>
                            <option>Operador</option>
                            <option>Gerente</option>
                            <option>Cliente</option>
                        </select>
                        <Row>
                            <Col>
                                <Label for="">ID</Label>
                                <Input onChange={this.handleInput} value={this.state.id_user} type="number" name="id_user" placeholder="ID" required />
                            </Col>
                            {/* <Col>
                                <Label for="">Sex</Label>
                                <select onChange={this.handleInput} value={this.state.sex} className="form-control" name="sex" required>
                                    <option>Female</option>
                                    <option>Male</option>
                                </select>
                            </Col> */}
                        </Row>

                        {/* <Row> */}
                        {/* <Col> */}
                        <Label for="">Nombre</Label>
                        <Input onChange={this.handleInput} value={this.state.name} type="text" name="name" placeholder="Nombre" required />
                        {/* </Col> */}
                        {/* <Col> */}
                        {/* <Label for="">Apellido</Label> */}
                        {/* <Input onChange={this.handleInput} value={this.state.lastname} type="text" name="lastname" placeholder="Apellido" required /> */}
                        {/* </Col> */}
                        {/* </Row> */}
                        <Label for="">Email</Label>
                        <Input onChange={this.handleInput} value={this.state.email} type="email" name="email" placeholder="Email" required />

                        <Row>
                            <Col>
                                <Label for="">Direccion</Label>
                                <Input onChange={this.handleInput} value={this.state.address} type="text" name="address" placeholder="Direccion" required />
                            </Col>
                            {/* <Col>
                                <Label for="">Barrio</Label>
                                <Input onChange={this.handleInput} value={this.state.neighborhood} type="text" name="neighborhood" placeholder="Barrio" required />
                            </Col>
                            <Col>
                                <Label for="">Estrato</Label>
                                <Input onChange={this.handleInput} value={this.state.stratum} type="number" name="stratum" placeholder="Estrato" required />
                            </Col> */}
                        </Row>

                        <Label for="">Telefono</Label>
                        <Input onChange={this.handleInput} value={this.state.phone} type="number" name="phone" placeholder="Telefono" required />
                        <Label for="">Fecha de Nacimiento</Label>
                        <Input onChange={this.handleInput} value={this.state.date_of_birth} type="date" name="date_of_birth" placeholder="Fecha" required />
                        {showStateAttr}
                        {aditional}
                    </div>
                </FormGroup>
                {addBtn}
            </Form>
        )
    }
};

export default CreateUserForm;