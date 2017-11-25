import React from 'react'
import Head from 'next/head'
import Airtable from 'airtable'
import {Bar, Line, Pie} from 'react-chartjs-2'

import Header from '../components/Header'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Welcome to the Doug Score',
      cars: []
    }

    const base = new Airtable({apiKey: 'keyxefljsTbnpZLbl'}).base('appNnFMrTfpaXXwLA');
    base('Doug Score Results').select({ maxRecords: 99, view: "Grid view" })
      .eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        // console.log(records);
        const json = JSON.stringify(records);
        this.setState({ cars: records });
        // const json = records.json();
        // console.log(`JSON 🙌`);
        // console.log(records);
        // console.log(json);
        // console.log(`JSON 🙌`);

        // const {cars} = json;
        // console.log(`CARS 🙌`);

        // console.log(cars);
        // console.log(`CARS 🙌`);

        // console.log(`Settings States 🙏`);
        // this.setState({ test: 'Test200' });
        // console.log(this.state.test);
        // console.log(this.state.test);
        // this.setState({ json });
        // console.log(`Done Settings States 🙏`);

        // this.setState({ cars });
        // this.setState({cars: records.fields.Make});
        // console.log(records.fields.Make);

        // records.forEach(function(record) {
        //     console.log('Retrieved', record.get('Model'));
        //     // I guess either one works
        //     // this.setState({cars: record.fields.Make});
        //     this.setState({ carsForEach: record.fields });
        //     console.log(`🚘 Car: ${record.fields} ${record.get('Model')}`);
        // });
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        // fetchNextPage();

      }.bind(this));

  }

  getPosts = () =>  {

  }

  componentDidMount(){

    // console.log(this.state);
    this.getPosts();


  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition: 'right'
  }

  render () {

    // setTimeout(() => {
    //   this.setState({title: 'Check all Doug Scores'});
    // }, 2000);

    // const title = 'Welcome'

    console.log(`STATE 🔥 🔥 🔥 🔥 🔥 🔥 🔥`);
    // console.log(this.state);
    // console.log(this.state.cars[0]);
    // console.log(Object.keys(this.state.cars)[1]);
    console.log(`END STATE LOG 🔥 🔥 🔥 🔥 🔥 🔥 🔥`);

    return (
      <div>
        <Head><title>Doug Score</title></Head>
        <header>
          <div className="header-wrapper">
            <Header title={this.state.title} />
            <h3>So how does the DougScore work? There are 10 separate categories, and they’re each judged on a scale of 1 through 10 — with “1” being the worst, and “10” being the best, meaning the highest possible DougScore is 100. The ten categories are split into two separate groups: “Weekend” and “Daily.” The “Weekend” categories measure a car’s appeal to enthusiasts; in other words, how much fun it would be to drive on the weekend. The “Daily” categories meanwhile, focus on a car’s livability and practicality.</h3>
            <a href="https://www.youtube.com/c/dougdemuro" target="_blank" className="button">Doug's Youtube Channel</a>
            <a href="http://www.dougdemuro.com/uncategorized/welcome-to-the-dougscore/" target="_blank" className="button">Doug's Website</a>
          </div>
        </header>
        {/* <h1 title={title}></h1> */}
        {/* { this.state.cars[0] } */}
        {/* { Object.entries(this.state.cars)[0] } */}
        {/* {this.state.cars.map((car) => {
          {car.id}
        })} */}
        {/* { this.state.cars._rawJson.id } */}

        <div className='flex-grid'>
          {this.state.cars.map((car, key) => {
            const chartData = {
              labels: ['Styling', 'Acceleration', 'Handling', 'Cool Factor', 'Importance', 'Features', 'Comfort', 'Quality', 'Practicality', 'Value'],
              datasets: [
                {
                  label: 'Rating',
                  data: [
                    car._rawJson.fields.styling,
                    car._rawJson.fields.acceleration,
                    car._rawJson.fields.handling,
                    car._rawJson.fields.coolFactor,
                    car._rawJson.fields.importance,
                    car._rawJson.fields.features,
                    car._rawJson.fields.comfort,
                    car._rawJson.fields.quality,
                    car._rawJson.fields.practicality,
                    car._rawJson.fields.value
                  ],
                  backgroundColor: [
                    'rgba(0, 0, 0, 0.6)'
                  ]
                }
              ]
            }

            const data = [
              {name: 'Styling', value: car._rawJson.fields.styling},
              {name: 'Acceleration', value: car._rawJson.fields.acceleration},
              {name: 'Handling', value: car._rawJson.fields.handling},
              {name: 'Cool Factor', value: car._rawJson.fields.coolFactor},
              {name: 'Importance', value: car._rawJson.fields.importance},
              {name: 'Features', value: car._rawJson.fields.features},
              {name: 'Comfort', value: car._rawJson.fields.comfort},
              {name: 'Quality', value: car._rawJson.fields.quality},
              {name: 'Practicality', value: car._rawJson.fields.practicality},
              {name: 'Value', value: car._rawJson.fields.value}
            ]
            // console.log(data);
            return (
              <div className="col">
                <div className="total">{car._rawJson.fields.totalDougScore}</div>
                <div className="text">
                  <h2>{car._rawJson.fields.year} {car._rawJson.fields.make} {car._rawJson.fields.model}</h2>
                  <h3>🏖 Weekend Category: {car._rawJson.fields.weekendTotal}</h3>
                  <h3>🏢 Daily Category: {car._rawJson.fields.dailyTotal}</h3>
                </div>
                {/* <h5>ID: {car.id}</h5> */}
                {/* <p>{car._rawJson.fields.year}</p> */}
                {/* <p>Acceleration: {car._rawJson.fields.acceleration}</p>
                <p>Comfort: {car._rawJson.fields.comfort}</p> */}
                <Bar
                  data={chartData}
                  width={100}
	                height={60}
                  options={{
                    maintainAspectRatio: true,
                    responsive: true,
                    title: {
                      display: this.props.displayTitle,
                      text: 'Doug Score Ratings',
                      fontSize: 14
                    },
                    legend: {
                      display: this.props.displayLegend,
                      position: this.props.legendPosition
                    },
                    scales: {
                      xAxes: [{
                        stacked: true,
                        ticks: {
                          stepSize: 1,
                          min: 0,
                          autoSkip: false
                        }
                      }],
                      yAxes: [{
                        stacked: true,
                      }]
                    }
                  }}
                />
                {/* { console.log(car.id) }
                { console.log(car._rawJson.fields) } */}
              </div>
            )
          })
          }
        </div>
        <footer>
          <a href="https://stephenfjohnson.com/" target="_blank">Built By Stephen 👨🏼‍💻</a>
        </footer>
        <style global jsx>{`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: Sans-Serif;
            position: relitive;
          }
          header {
            position: relitive
            width: 100%;
            background: #222;
            margin-bottom: 1rem;
          }
          .header-wrapper {
            max-width: 1200px;
            width: 100%;
            color: white;
            padding: 2rem;
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
          }
          header h1 {
            margin: 0;
            font-size: 4rem;
          }
          header h3 {
            font-weight: 300;
            font-size: 1.1rem;
            line-height: 1.5;
          }
          @media (max-width: 1000px) {
            header h1 {
              font-size: 3rem;
            }
            header h3 {
              font-size: 1rem;
            }
          }
          @media (max-width: 600px) {
            header h1 {
              font-size: 2rem;
            }
            header h3 {
              font-size: .9rem;
            }
          }
          header a {
            color: white;
            text-transform: uppercase;
            text-decoration: none;
          }
          header a:hover {
            text-decoration: line-through;
          }
          .flex-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .col {
            flex: 1 15%;
            padding: 1rem;
            margin: 1rem;
            // // max-width: 20%;
            // width: 20%;
            background: #f7f7f7;
            border-radius: 5px;
            position: relative;
          }
          .total {
            display: flex;
            align-items: center;
            justify-content: center;
            background: red;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
            position: absolute;
            top: 10px;
            right: 10px;
            border-radius: 50%;
            z-index: 10;
            width: 40px;
            height: 40px;
          }
          @media (max-width: 1000px) {
            .col {
              flex: 1 20%;
            }
          }
          @media (max-width: 1000px) {
            .col {
              flex: 1 30%;
            }
          }
          @media (max-width: 600px) {
            .col {
              flex: 1 100%;
            }
          }
          .VictoryContainer {
            top: -80px;
          }
          .text {
            padding: .3rem 0 0 .5rem;
          }
          .text h2 {
            margin: 0;
          }
          .text h3 {
            margin: 0;
            font-weight: 400;
          }
          footer {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #222;
            width: 100%;
            height: 100px;
          }
          footer a {
            color: white;
            text-decoration: none;
          }
          footer a:hover {
            text-decoration: line-through;
          }
        `}</style>
      </div>
    )
  }
}

export default App
