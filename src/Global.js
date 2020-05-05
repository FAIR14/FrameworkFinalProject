import React, { Component } from 'react'
import './App.css'


class Globalcases extends Component {
    constructor(){
        super();
        this.state = {
            positif: null,
            sembuh: null,
            meninggal: null
        }
    }

    async componentDidMount(){
        // Pengambilan data kasus covid global
        fetch('https://covid19.mathdro.id/api')
        .then(resp => resp.json())
        .then(json1 =>
            this.setState({
                positif: json1.confirmed.value,
                sembuh: json1.recovered.value,
                meninggal: json1.deaths.value})
        )
    }
    
    render() {
        const { positif, sembuh, meninggal } = this.state;
        return (
        <>
            <h1>Global</h1>
            <div className='container'>
                <span className='box'>
                    <h2>Positif</h2>
                    {positif}
                </span>
                <span className='box'>
                    <h2>Sembuh</h2>
                    {sembuh}
                </span>
                <span className='box'>
                    <h2>Meninggal</h2>
                    {meninggal}
                </span>
            </div>
        </>
        )
    }
}

export default Globalcases;