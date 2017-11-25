import React from 'react'
import Airtable from 'airtable'

class App extends React.Component {

  constructor(props) {
    super(props);


    const base = new Airtable({apiKey: 'keyxefljsTbnpZLbl'}).base('appNnFMrTfpaXXwLA');
    base('Doug Score Results').select({
    // Selecting the first 3 records in Grid view:
      maxRecords: 10,
      view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          console.log(records);

          records.forEach(function(record) {
              console.log('Retrieved', record.get('Model'));
              // I guess either one works
              console.log(`🚘 Car: ${record.fields.Make} ${record.get('Model')}`);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();

      }, function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`Done Fetching Pages 👊`);
          return records;
    });


    this.state = {
      date: new Date(),
      name: 'stephen',
      larry: 'larry'
    };
  }

  render () {

    // const base = new Airtable({apiKey: 'keyxefljsTbnpZLbl'}).base('appNnFMrTfpaXXwLA');
    // base('Doug Score Results').find('recMBYzWNqUy4Fa9G', function(err, record) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     console.log('Success Results! ⬇️');
    //     console.log(record);
    //     console.log('Success Results! ⬆️');
    //
    //
    //     console.log(`👊 👊 👊 👊 👊 ${record.fields.Make}`);
    //     // this.state = {
    //     //   name : 'stephen'
    //     // }
    //
    //     // console.log(record.fields);
    //     // console.log(record._rawJson);
    //     // return recordmemes;
    // });

    // const stephen = 'Stephen'

    // this.state = {name : 'stephen'}

    return (
      <div>
        <h1>Doug Score</h1>
        {/* <h2>{this.state.date.toLocaleTimeString()}</h2> */}
        <h2>{this.state.name}</h2>
        <h2>{this.state.larry}</h2>
        <h2>{this.state.carName}</h2>
        <p>It recently occurred to me that some of you people, certainly my craziest viewers and readers, actually pay attention to my opinion when it comes to purchasing automobiles. This is especially surprising to me, personally, because my friends don’t even trust my opinion when it comes to buying toothpaste.</p>
        <style global jsx>{`
          body {
            font-family: monospace;
            padding: 5em;
            line-height: 1.6;
            color: #666;
          }
          h1, h2, h3 {
            line-height: 1.2
            color: #444;
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
