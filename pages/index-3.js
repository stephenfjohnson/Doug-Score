import React from 'react';
import 'whatwg-fetch'
// require('env2')('.env')

const config = {
  base: 'appNnFMrTfpaXXwLA',
  table: 'appNnFMrTfpaXXwLA',
  view: 'Doug%20Score',
  apiKey: 'keyxefljsTbnpZLblm',
  maxRecords: 20
}

// const config = {
//   base: process.env.AIRTABLE_BASE,
//   table: process.env.AIRTABLE_TABLE,
//   view: process.env.AIRTABLE_VIEW,
//   apiKey: process.env.AIRTABLE_API_KEY,
//   maxRecords: process.env.AIRTABLE_MAX_RECORDS
// }

const request = new Request(`https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${config.maxRecords}&view=${config.view}`, {
  method: 'get',
  headers: new Headers({
    'Authorization': `Bearer ${config.apiKey}`
  })
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { records: [] };
    this.fetchAirtable.bind(this);
  }

  async componentDidMount() {
    await this.fetchAirtable()
  }

  async fetchAirtable() {
    const resp = fetch(request).catch(err => {console.log(err)})
    if(resp.status >= 200 && resp.status < 300) {
      const json = await resp.json()
      const {records} = json;
      this.setState({ records });
    }
  }

  render() {

    const {records} = this.state

    return (
      <div>
        <h1>Doug Score</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        {records && records.length > 0 ? records.map(record =>
          <p>{JSON.stringify(record)}</p>
        ) : <p>Double that you have added your api key?</p>}
        <p>It recently occurred to me that some of you people, certainly my craziest viewers and readers, actually pay attention to my opinion when it comes to purchasing automobiles. This is especially surprising to me, personally, because my friends don’t even trust my opinion when it comes to buying toothpaste.</p>
        <style global jsx>{`
          body {
            font-family: monospace;
            padding: 5em;
            line-height: 1.5
          }
          @media (max-width: 600px) {
            body {
              padding: 3em;
            }
          }
          @media (max-width: 450px) {
            body {
              padding: 1em;
            }
          }
          a:hover {
            text-decoration: line-through;
          }
        `}</style>
      </div>
    )
  }
}

export default App
