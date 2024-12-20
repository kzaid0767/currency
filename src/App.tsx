import { useState, useEffect } from 'react'
import Header from './Header'

import './App.css'

function App() {

  const urlData = `https://v6.exchangerate-api.com/v6/ad7768ebcc6a9247ed148cdc/latest/USD`
  const [showingRates, setShowingRates] = useState(false)
  
 /*  useEffect(()=>{
    fetchData(urlData)
  }) */

  async function fetchData(url:string) {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
  } 

  return (
    <>
      <Header showingRates={showingRates}/>
      
    </>
  )
}

export default App
