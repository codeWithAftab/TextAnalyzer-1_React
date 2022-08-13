import React from 'react'

export default function Alerts(props) {
    return (
        props.Alert && <div className="container">
             <div className={`alert alert-${props.Alert.type} mt-3 alert-dismissible fade show`} role="alert">
  <strong>{props.Alert.type}</strong> {props.Alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        </div>
    )
}
