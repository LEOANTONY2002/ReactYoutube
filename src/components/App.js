import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { video : [] , selVid : null };

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async(term) => {
        const res = await youtube.get('/search',{
            params : {
                q : term
            }
        });
        this.setState({
            video : res.data.items,
            selVid : res.data.items[0] 
        });
    };
    onVidSel = (vid) => {
        this.setState({selVid : vid});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                   <div className="ui row">
                      <div className="eleven wide column">
                        <VideoDetail video={this.state.selVid} />
                      </div>
                      <div className="five wide column">
                        <VideoList onVidSel={this.onVidSel} videos={this.state.video} />
                      </div>
                </div>
                </div>
            </div>
        );
    }
}

export default App;