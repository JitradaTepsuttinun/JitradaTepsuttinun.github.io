import { useState } from 'react'
import './App.css'

function App() {
  const [a, setA] = useState(0)
  const [vat, setVAT] = useState(0)
  const [discount, setDiscount] = useState(0)
  // 1. Add a variable b,
  // 2. Add a button to increase b
  // 3. on click "Increase B" button,
  // Use value of count and a, b = count + a

  function addA() {
    setA(a + 1)
    console.log(a)
  }

  function addDiscount() {
    setDiscount(discount + 1)
    console.log(discount)
  }

  // const handler = (e) => {
  //   const price = e.target.value
  //   console.log(price)
  //   setA(price)
  //   setDiscount(discount)
  //   let v = (price - discount) * 0.07
  //   setVAT(Math.round(v * 100) / 100)
  // }
  function calculate() {
    let v = (a - discount) * 0.07
    setVAT(Math.round(v*100)/100)
  }

  return (
    <>
    <input type="number" value={a}
      style={ {fontSize: '30pt'} }
      onChange={addA}/>
    <br></br>
    <input type="number" value={discount}
      style={ {fontSize: '30pt'} }
      onChange={addDiscount} />
    <br></br>
    <button type='button' onClick={calculate}>Calculate</button>
      <h1>My A = {a}</h1>
      <h1>My discount = {discount}</h1>
      <h1>VAT = {vat}</h1>
      <div className="card">

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
