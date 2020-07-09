import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList=({videos,onVideoSelect})=>{

    const listOfVideos=videos.map((video,id)=> 
    <VideoItem
    onVideoSelect={onVideoSelect}
    key={video.id.videoId}
    video={video}
    />)
    return(
        <Grid container spacing={8}>
            {listOfVideos}
        </Grid>
        
    );
}
export default VideoList;