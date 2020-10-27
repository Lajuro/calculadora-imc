import React from 'react';

function Field(props) {
  let {title = "Campo", id = new Date().getTime(), acao, placeholder} = props;
  return (
    <section className="form-group">
      <label htmlFor={id}>{title}</label>
      <input type="number" id={id} name={id} onChange={acao} placeholder={placeholder} />
    </section>
  )
}

export default Field;