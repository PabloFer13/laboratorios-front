import React, { Component } from 'react';
import { FormContainer } from './Perfil.styled';

class Perfil extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_name   : '',
      last_name    : '',
      email        : '',
      url_pp       : '',
      phone_number : '',
      status       : '',
      userType     : '',
      
      copy_first_name   : '',
      copy_last_name    : '',
      copy_phone_number : '',

      old_pass: null,
      new_pass: null,
      cn_pass : null,

      error_message   : '',
      password_message: '',
    }
    this.onChangeFirstName  = this.onChangeFirstName.bind(this);
    this.onChangeLastName   = this.onChangeLastName.bind(this);
    this.onChangePhoneNumer = this.onChangePhoneNumer.bind(this);
    this.onClickSubmit         = this.onClickSubmit.bind(this);
    this.onClickSubmitPassword = this.onClickSubmitPassword.bind(this);
  }

  componentDidMount(){
    /* TODO: Consultar los datos reales desde la api */
    this.setState({
      first_name   : 'Hector Fernando',
      last_name    : 'Gomez Garcia',
      email        : 'fgomez@ucaribe.edu.mx',
      url_pp       : '',
      phone_number : '',
      status       : 'Activo',
      userType     : 'Maestro',
    });
  }

  onChangeFirstName(event){
    this.setState({copy_first_name: event.target.value});
  }
  onChangeLastName(event){
    this.setState({copy_last_name: event.target.value});
  }
  onChangePhoneNumer(event){
    this.setState({copy_phone_number: event.target.value});
  }
  handleChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
  }

  /* Funciones que llaman a la api */
  onClickSubmit(){
    /* TODO: Enviar los nuevos datos a la api para la modificacion del usuario */
    console.log({
      // variables para el graphql
      first_name   : (this.state.copy_first_name.trim()   !== "") ? this.state.copy_first_name   : this.state.first_name,
      last_name    : (this.state.copy_last_name.trim()    !== "") ? this.state.copy_last_name    : this.state.last_name,
      phone_number : (this.state.copy_phone_number.trim() !== "") ? this.state.copy_phone_number : this.state.phonecopy_phone_number,
    });
    /* 
      ##### Mutacion de GraphQL 
      mutation update_Users($id: ID!, $first_name: String, $last_name: String, $phone_number: String){
        update_User(id: $id, first_name: $first_name, last_name: $last_name, phone_number: $phone_number){
          id,
          first_name,
          last_name,
          email,
          password,
          url_pp,
          phone_number,
          userType{
            id,
            type,
            permissions,
            status{
              id,
              status,
              createdAt,
              updatedAt
            },
            createdAt,
            updatedAt,
          },
          status{
            id
          },
          createdAt,
          updatedAt
        }
      }
      ##### Variables
      {
        "id": 1, #El ID corresponde al registro de la base de datos
        "first_name": "",
        "last_name": "",
        "phone_number": ""
      }
      ##### Resultado de la mutacion
      {
        "data": {
          "update_User": {
            "id": "1",
            "first_name": "Yarely",
            "last_name": "Baez",
            "email": "ybaez@ucaribe.edu.mx",
            "password": "Error: Hidden.",
            "url_pp": "",
            "phone_number": "",
            "userType": {
              "id": "1",
              "type": "Administrador",
              "permissions": "000",
              "status": {
                "id": "1",
                "status": "Activo",
                "createdAt": "Wed Oct 24 2018 02:18:42 GMT-0500 (GMT-05:00)",
                "updatedAt": "Wed Oct 24 2018 02:18:42 GMT-0500 (GMT-05:00)"
              },
              "createdAt": "Wed Oct 24 2018 02:18:42 GMT-0500 (GMT-05:00)",
              "updatedAt": "Fri Nov 30 2018 23:24:43 GMT-0500 (GMT-05:00)"
            },
            "status": {
              "id": "1"
            },
            "createdAt": "Wed Oct 24 2018 02:18:42 GMT-0500 (GMT-05:00)",
            "updatedAt": "Sat Dec 01 2018 11:39:58 GMT-0500 (GMT-05:00)"
          }
        }
      }
       */
    
  }
  onClickSubmitPassword(){
    if(this.state.new_pass === this.state.cn_pass){
      this.setState({ password_message: ''});
      /* TODO: Enviar los nuevos datos a la api para la modificacion de la contraseña del usuario */
      console.log({
        // variables para el graphql
          old_pass: this.state.old_pass,
          new_pass: this.state.new_pass,
          cn_pass : this.state.cn_pass ,
        });
      /* 
      ##### Mutacion de GraphQL 
      mutation update_User_password($id: ID! $password: String!, $new_password: String!){
        update_User_password(id: $id, password: $password, new_password: $new_password){
          id,
          first_name,
          last_name,
          email,
          password,
          url_pp,
          phone_number,
          userType{
            id,
            type,
            permissions,
            status{
              id,
              status,
              createdAt,
              updatedAt
            },
            createdAt,
            updatedAt,
          },
          status{
            id
          },
          createdAt,
          updatedAt
        }
      }
      ##### Variables
      {
        "id": 1, #El ID corresponde al registro de la base de datos
        "password": "holaybaez",
        "new_password": "adiosybaez"
      }
      ##### Resultado de la mutacion
      {
        "data": {
          "update_User_password": {
            "id": "1",
            "first_name": "Yarely",
            "last_name": "Baez",
            "email": "ybaez@ucaribe.edu.mx",
            "password": "$2a$10$AVLHiIzBYXYD6BC8OHu8peVY/zKiR3L3SHUNc82ryB1osGIkbGoCK",
            "url_pp": "",
            "phone_number": "",
            "userType": {
              "id": "1",
              "type": "Administrador",
              "permissions": "000",
              "status": {
                "id": "1",
                "status": "Activo",
                "createdAt": "Wed Oct 24 2018 02:18:42 GMT-0500 (GMT-05:00)",
                "updatedAt": "Wed Oct 24 2018 02:18:42 GMT-0500 (GMT-05:00)"
              },
              "createdAt": "Wed Oct 24 2018 02:18:42 GMT-0500 (GMT-05:00)",
              "updatedAt": "Fri Nov 30 2018 23:24:43 GMT-0500 (GMT-05:00)"
            },
            "status": {
              "id": "1"
            },
            "createdAt": "Wed Oct 24 2018 02:18:42 GMT-0500 (GMT-05:00)",
            "updatedAt": "Tue Dec 04 2018 12:49:11 GMT-0500 (GMT-05:00)"
          }
        }
      }
       */
      
    } else {
      this.setState({ password_message: 'Error: Las contraseñas no coinciden. '});
    }
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4"/>
            
            <div className="col-md-4">
              <FormContainer className="container">
                <div>
                  <h4>Datos de la cuenta</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="container">
                      
                        <div className="row">
                          <div className="col-md-6">
                            <strong>
                              {(this.state.copy_last_name.trim()!=="")? this.state.copy_last_name : this.state.last_name}
                              {` / `}
                              {(this.state.copy_first_name.trim()!=="")? this.state.copy_first_name : this.state.first_name}
                            </strong> 
                            <br/>
                            {this.state.email}
                          </div>

                          <div className="col-md-6">                             
                            Telefono: {(this.state.copy_phone_number.trim()!=="")? this.state.copy_phone_number : this.state.phone_number} <br/>
                            Tipo de usuario: {this.state.userType} <br/>
                            Estado: {this.state.status} <br/>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="col-md-12">
                      <input className="form-control" type="text" onChange={this.onChangeFirstName} placeholder="Nombre(s)"  />
                      <input className="form-control" type="text" onChange={this.onChangeLastName}  placeholder="Apellido(s)"/>
                      <input className="form-control" type="text" onChange={this.onChangePhoneNumer}placeholder="Telefono"/>
                      <button className="btn btn-lg btn-primary btn-block" onClick={this.onClickSubmit}>Modificar</button>
                      <strong>{this.state.error_message}</strong>
                    </div>
                  </div>
                  
                  
                </div>
                
              </FormContainer>  

              <FormContainer className="container">
                <div>
                  <h4>Cambiar contraseña</h4>
                  <div className="row">
                    <div className="col-md-12">
                      <input className="form-control" type="password" name="old_pass" onChange={e => this.handleChange(e)}placeholder="Old password"  />
                      <input className="form-control" type="password" name="new_pass" onChange={e => this.handleChange(e)}placeholder="New passsword"/>
                      <input className="form-control" type="password" name="cn_pass"  onChange={e => this.handleChange(e)}placeholder="Confirm new password"/>
                      <button className="btn btn-lg btn-warning btn-block" onClick={this.onClickSubmitPassword}>Modificar contraseña</button>
                      <strong>{this.state.password_message}</strong>
                    </div>
                  </div>
                </div>
                
              </FormContainer>  
            </div>
            <div className="col-md-4"/>
          </div>
        
        </div>
      </div>

    );
  }
}

export default Perfil;
