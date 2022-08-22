import React from 'react'

const boton = ({desactivado}) => {
  return (
    <button type="button" className="btn btn-primary" disabled={desactivado}>Ingresar</button>
  )
}

export default boton