import React from 'react';
//Components
import BenchIndex from './bench_index';
import BenchMap from './bench_map';


const Search = ({benches, requestBenches}) => (
    <div>
        <BenchIndex benches={benches} requestBenches={requestBenches}/>
        <BenchMap benches={benches} requestBenches={requestBenches}/>
    </div>
);


export default Search;
