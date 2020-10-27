import React from 'react';

function Alert(props) {
  let {title = "Sem título", message = "-", display = true, type = ""} = props;

  if (display) {
    return (
      <>
        <section className={`alert${type === "" ? "" : ' alert-' + type}`}>
          <h3>{title}</h3>
          <p>{message}</p>
        </section>
      </>
    )
  } else {
    return <></>;
  }
}

export default Alert;