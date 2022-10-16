import React, { Fragment } from 'react';
import { Component } from 'react';
import './App.css';
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Panel} from 'primereact/panel';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { UserService } from './componentes/UserService';
import { CarService } from './componentes/CarService';

export default class App extends Component{
    constructor(){
      super();
      this.state = {
        panelcontainer:false,
        panelcontainer2:false,
      };
      this.userService = new UserService();
      this.carService = new CarService();
        
    }

    componentDidMount(){
      this.userService.getAll().then(data => this.setState({user: data}))
      this.carService.getAll().then(data => this.setState({car: data}))
    }

    render(){
        var HandleChange = e =>{
          this.setState({panelcontainer:!this.state.panelcontainer});
        }
        const x=this.state.panelcontainer;
        var HandleChange2 = e =>{
          this.setState({panelcontainer2:!this.state.panelcontainer2});
        }
        const x2=this.state.panelcontainer2;
        return(
            <Fragment>
                <h1>Usuarios y Autos</h1>
                <button onClick={HandleChange}>{x?'Ocultar Lista Usuarios':'Mostrar Lista Usuarios'}</button>
                {
                    x && (<Panel header=" Lista Usuarios" style={{width:'80%',  margin: '0 auto', marginTop: '20px'}}>
                    <DataTable value={this.state.user}>
                        <Column field="name" header="Nombre"></Column>
                        <Column field="email" header="Correo electrónico"></Column>
                    </DataTable>
                </Panel>)
                }
                
                <button onClick={HandleChange2}>{x2?'Ocultar Lista Autos':'Mostrar Lista Autos'}</button>
                {
                    x2 && (<Panel header=" Lista Autos" style={{width:'80%',  margin: '0 auto', marginTop: '20px'}}>
                    <DataTable value={this.state.car}>
                        <Column field="brand" header="Marca"></Column>
                        <Column field="model" header="Modelo"></Column>
                        <Column field="userId" header="ID Usuario"></Column>
                    </DataTable>
                    </Panel>)
                }
            
            </Fragment>
            
        );
    }
}