import React, { Component } from 'react';
import Globalcases from './Global'
import Countrycase from './Country'

class App extends Component {
  constructor() {
    super()
    this.state = {
      country: [],
      pilihan: 'Indonesia',
      url: "https://covid19.mathdro.id/api/countries",
      refreshing: true,
      positif: '0',
      sembuh: '0',
      meninggal: '0'
    }
  }

  async componentDidMount(){
    //Pengambilan data untuk pilihan negara
    this.setState({ refreshing: true })
    const response = await fetch(this.state.url)
    const json = await response.json();
    this.setState({ country: json.countries.map(data => data.name) })
    this.getCaseCountry(this.state.pilihan);  
  }

  handlerChange = (event) => {
    this.setState({pilihan: event.target.value})
    this.getCaseCountry(event.target.value);
  }

  getCaseCountry = async (negara) => {
    fetch(`${this.state.url}/${negara}`)
      .then(resp => resp.json())
      .then(json2 => this.setState({
          positif: json2.confirmed.value, 
          sembuh: json2.recovered.value,
          meninggal: json2.deaths.value
        })
      )
  }
  render() {
    const {...rest} = this.state;
    return (
      <div style={{display:'flex', flex: 1, flexDirection: 'column'}}>
        <Globalcases />
        <Countrycase caseData2={{...rest}} handlerChange={this.handlerChange} />
      </div>
    )
  }
}

export default App;