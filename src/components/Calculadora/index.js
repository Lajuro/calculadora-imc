import React, {useState} from 'react';

import Field from './Field';
import Button from './Button';
import Alert from './Alert';

import './style.css';

function Calculadora(props) {
  let {title = "Sem Título"} = props;

  let [peso, setPeso] = useState(0);
  let [altura, setAltura] = useState(0);
  let [imc, setIMC] = useState(0);
  let [mensagem, setMensagem] = useState(<Alert display={false} />);

  function valorDoCampo(event) {
    let campo = event.target;
    let {id, value} = campo;

    switch(id) {
      case "peso":
        setPeso(parseFloat(value));
        break;
      case "altura":
        setAltura(parseFloat(value));
        break;
      default:
        throw new Error();
    }
  }

  function calcular(event) {
    event.preventDefault();
    let imc = (peso / (altura * altura)).toFixed(2);
    setIMC(imc);

    if (imc < 18.5) {
      setMensagem(<Alert title="Magreza" message={`Sinto muito, mas o seu IMC é de ${imc} kg/m2 e você precisa ganhar peso.`} />)
    } else if (imc >= 18.5 && imc <= 24.9) {
      setMensagem(<Alert title="Normal" message={`Parabéns, seu IMC é ${imc} kg/m2 e você está dentro do peso adequado!`} type="success" />);
    } else if (imc >= 25 && imc <= 29.9) {
      setMensagem(<Alert title="Sobrepeso" message={`Sinto muito, mas o seu IMC é de ${imc} kg/m2, por isso você está acima do peso.`} type="warning" />);
    } else if (imc >= 30 && imc <= 39.9) {
      setMensagem(<Alert title="Obesidade" message={`Sinto muito, mas o seu IMC é de ${imc} kg/m2, por isso você está acima do peso.`} type="danger" />);
    } else if (imc >= 40) {
      setMensagem(<Alert title="Obesidade Grave" message={`Sinto muito, mas o seu IMC é de ${imc} kg/m2, por isso você está acima do peso.`} type="danger" />);
    } else {
      setMensagem(<Alert title="Erro" message={`Por favor, digite valores válidos.`} type="danger" />);
    }
  }

  return (
    <section className="calculadora">
      <header>
        <h1>{title}</h1>
      </header>
        <form>
          <Field id="altura" title="Altura" acao={valorDoCampo} placeholder="1,70"/>
          <Field id="peso" title="Peso" acao={valorDoCampo} placeholder="65,40" />
          <Button acao={calcular} />
        </form>
      <hr/>
      <h3>Mensagem:</h3>
      <p><strong>Peso:</strong> {peso}</p>
      <p><strong>Altura:</strong> {altura}</p>
      <p><strong>IMC:</strong> {imc}</p>
      {mensagem}
    </section>
  );
}

export default Calculadora;
