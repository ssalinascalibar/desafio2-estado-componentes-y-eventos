import React from 'react'

const boton = ({desactivado}) => {
  return (
    <button type="submit" className="btn btn-primary" disabled={desactivado}>Ingresar</button>
  )
}

export default boton