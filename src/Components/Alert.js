import React from 'react'

function Alert(props) {
  const capitalize=(word)=>{
    let w =word.toLowerCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
}
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
