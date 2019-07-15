import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 
                        'Client-ID 6eb40795698624385d4d26918223e77ffdf781fc2b259831b568edf70b7a7c54'
                }    
            });

        console.log(response.data.results);
    }

    


    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
};

export default App;