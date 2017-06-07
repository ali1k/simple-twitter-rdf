const username = 'hyperir';
const startDate = '2017-05-01';
const endDate = '2017-06-7';

let stream = require( 'stream' );
let Scraper = require( 'twitter-scraper' ).Scraper;

let query = 'from:'+username+' since:'+startDate+' until:'+endDate;
let scraper = new Scraper( query );
let toConsole = new stream.Writable( {
  objectMode: true,
  write: function( tweet, enc, cb ) {
    console.log(JSON.stringify(tweet) + ',');
    return cb();
  }
} )
scraper.pipe( toConsole );

// Start the scraper
scraper.start();
