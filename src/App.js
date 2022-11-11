import './App.css';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  PoweredBy,
  Hits,
  Highlight,
} from 'react-instantsearch-hooks-web';


const searchClient = algoliasearch(
  "CKEFNWXMEN",
  "3151a2d235d3b34f32e709eaafcd1a3c"
);


function Hit ({ hit }) {
  return (
  <div>
    <img src={hit.avatar} alt={hit.username} />
    <h1> <Highlight attribute="username" hit={hit} /> </h1>
    <p><strong>Email:</strong> {hit.email}</p>
    <p><strong>Bio:</strong>  {hit.bio}</p>   
  </div>
  );
}

function App() {
  return (
    <div>
    <InstantSearch searchClient={searchClient} indexName='newindex'>

      <h3 className='title'>Algolia Firebase Search</h3>

      <SearchBox autoFocus placeholder='Search...' className='searchbox'/>

      <PoweredBy className='poweredby'/>

      <Hits hitComponent={Hit} className="hits"/>

      </InstantSearch>
    </div>
  );
}

export default App;
