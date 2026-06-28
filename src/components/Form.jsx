import React from 'react'
import { useState } from 'react'
const Form = () => {
    const [agreed, setAgreed] = useState(false)
    const [country, setCountry] = useState("O`zbekiston")
  return (
    <div>
        <h1>{country}</h1>
        <select>
            <option value="">Tailand</option>
            <option value=""></option>
            <option value="">Tailand</option>
            <option value="">Tailand</option>
        </select>
        <h1>{agreed ? "true" : "false"}</h1>
        <input type="checkbox" checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)} />
    </div>
  )
}

export default Form