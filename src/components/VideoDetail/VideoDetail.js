import React from 'react';
import {Paper,Typography} from '@material-ui/core';
import style from './VideoDetail.module.css';

const VideoDetail=({video})=>{

    if(!video){
        return <div>Loading...</div>
    }

    const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`

    return(
        <React.Fragment>
            <Paper elevation={6} className={style.videoHeight}>
                <iframe frameBorder="0" height='100%' width='100%' title='Video Player' src={videosrc}/>
            </Paper>
            <Paper elevation={6} style={{padding:'15px',marginBottom:'12rem'}}>
                <Typography variant="h4" className={style.title}>{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    );
}

export default VideoDetail;