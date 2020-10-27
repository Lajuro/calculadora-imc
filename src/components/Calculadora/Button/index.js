import React from 'react';

function Button(props) {
  let {acao} = props;

  return (
    <button className="btn btn-primary" onClick={acao} type="submit">Enviar</button>
  )
}

export default Button;