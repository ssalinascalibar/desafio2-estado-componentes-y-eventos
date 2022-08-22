import React from 'react'

const Input = ({setDesactivado}) => {
  return (
    <div className="mb-3">
        <div className="input">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" placeholder="Ingresa tu nombre"/>
        </div>
        <div className="input">
            <label className="form-label">Contraseña</label>
            <input type="password" 
            onChange={(e) => e.target.value === '252525'?setDesactivado(false):setDesactivado(true)} 
            className="form-control" placeholder="Ingresa una contraseña"/>
        </div>
    </div>

  )
}

export default Input