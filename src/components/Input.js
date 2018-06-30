import React, {Component} from "react";

export default class Input extends Component{
  constructor(){
    super();
    this.state = {
      nome: "",
      sexo: "",
      escola: ""
    };
 
  this.onChange = (evento) =>{
    const state = Object.assign({}, this.state);
    const campo = evento.target.name;
    state[campo] = evento.target.value;
    this.setState(state);
  };
  this.onSubmit = (evento) =>{
    evento.preventDefault();
    console.log(this.state);  
    this.setState({
      nome:"",
      sexo:"",
      escola: ""
    });
  };
}
  render(){
    return(
      <div>
      Nome: <input name="nome" value={this.state.nome} onChange={this.onChange} type="text"/>
      <br/>
      Sexo:
        <input type="radio" name="sexo" value= "masculino" onChange={this.onChange} checked={this.state.sexo ==="masculino"}/>
        <input type="radio" name="sexo" value= "feminino" onChange={this.onChange} checked={this.state.sexo ==="feminino"}/>
        <br/>
      Escola:
        <select name="escola" onChange={this.onChange} value={this.state.escola}>
          <option value="">Selecione</option>
          <option value="1">Escola 1</option>
          <option value="2">Escola 2</option>
        </select>
        <br/>
        <button onClick={this.onSubmit}>Enviar </button>

      </div>
    );
  }
}