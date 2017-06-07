const username = 'hyperir';

let fs = require ('fs');
let _ = require("lodash");
let input = fs.readFileSync(username+'.js','utf8');
let currentObj = JSON.parse(input);

let prefixes = '@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .  @prefix foaf: <http://xmlns.com/foaf/0.1/> . @prefix daia: <http://purl.org/ontology/daia/> . @prefix owl: <http://www.w3.org/2002/07/owl#> . @prefix xsd: <http://www.w3.org/2001/XMLSchema#> . @prefix skos: <http://www.w3.org/2004/02/skos/core#> . @prefix dcterms: <http://purl.org/dc/terms/> . @prefix schema: <http://schema.org/> . @prefix tweet: <https://twitter.com/'+username+'/status/> .';

console.log(prefixes);
console.log('');
_.forEach(currentObj.tweets, (node, i)=> {
    console.log('tweet:'+node.id+ ' a schema:UserTweets; dcterms:title """' + node.text + '""" ; daia:timestamp "' + node.timestamp +'" . ');
});
