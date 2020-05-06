import React from 'react'
import './App.css'


const Countrycase = ({ caseData2, handlerChange}) => {
  return (
    <div>
      <label>Pilih Negara:
        <select value={caseData2.pilihan} onChange={handlerChange}>
          {caseData2.country.map( (data1) =>
            <option key={data1} value={data1}>{data1}</option>)}
        </select>
      </label>
      <h1>Negara: {caseData2.pilihan} </h1>
      <div className='container'>
        <span className='box'>
          <h2>Positif</h2>{caseData2.positif}
        </span>
        <span className='box'>
          <h2>Sembuh</h2>{caseData2.sembuh}
        </span>
        <span className='box'>
          <h2>Meninggal</h2>{caseData2.meninggal}
        </span>
      </div>
    </div>
  )
}

export default Countrycase