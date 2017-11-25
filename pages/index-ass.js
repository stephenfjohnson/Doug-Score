import React from 'react'
import Airtable from 'airtable'

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render () {
    const base = new Airtable({apiKey: 'keyxefljsTbnpZLbl'}).base('appNnFMrTfpaXXwLA');

    base('Doug Score Results').select({
    // Selecting the first 3 records in Grid view:
      maxRecords: 25,
      view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          console.log(records);

          records.forEach(function(record) {
              // console.log('Retrieved', record.get('Model'));
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
    });
    return (
      <div>ASS</div>
    )
  }
}

export default App
