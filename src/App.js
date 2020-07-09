import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar,VideoList,VideoDetail} from './components';

class App extends React.Component{

    state={
        videos:[],
        selectedVideo:null
    }

    componentDidMount(){
        this.handleSubmit('India')
    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }

    handleSubmit= async (SearchItem)=>{
        const response=await youtube.get('search',
        {params : {
            part:'snippet',
            maxResults:7,
            key:'AIzaSyDJ74eECTc-175XQEwH7l_BkHTIPBnqdt4',
            q:SearchItem,
        }});
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]})
    }

    render(){
        const {selectedVideo,videos}=this.state;
        return(
            <React.Fragment>
        <Grid justify="center" container spacing={8}>
            <Grid item xs={12}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                    </Grid>
                    <Grid item lg={8} md={8} xs={12}>
                        <VideoDetail video={selectedVideo}/>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <h5 style={{textAlign:'center'}}>Made by Ankit Dutta</h5>
        </React.Fragment>
            );
    }
}

export default App;