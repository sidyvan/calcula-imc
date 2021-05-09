import React from 'react';
import axios from 'axios';

export default class PostImc extends React.Component {
  state = {
    peso: '',
    altura: '',
    resposta: '',
  }

  handleChangePeso = event => {
    this.setState(
      { peso: event.target.value });
  
  }

    handleChangeAltura = event => {
    this.setState(
      { altura: event.target.value }); 
  }

  handleSubmit = event => {
    event.preventDefault();

    const imc = {
      peso: this.state.peso,
      altura: this.state.altura,
    };

    axios.post(`http://localhost:8000/`, imc )
      .then(res => {
       this.setState(res.data);
        console.log(res.data);

      })
  }

  render() {
    return (
      <div>
      <h1>Cálculadora IMC</h1>

        <form onSubmit={this.handleSubmit} className="container">
        <div className="item">
          <label>Peso</label>
        </div>
        <div>
            <input placeholder = "Informe o seu peso" type="number" step="0.01"  min="0"  min="0"name="peso" onChange={this.handleChangePeso} />
          
        </div>
        <div className="item">
          <label>Altura</label>
        </div>
        <div>
        
            <input placeholder = "Informe a sua altura" type="number" min="0"  step="0.01" name="altura" onChange={this.handleChangeAltura} />
         
        </div>

        <div className="item">
          <button className="botao" type="submit">Calcula IMC</button>
        </div>
          
        </form>
        <div  className="item">
          <label>{this.state.resposta}</label>
        </div>
      
      </div>
    )
  }
}