import React from 'react';
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends React.Component{
    state={
        searchItem:'',
    }

    handleChange=(event)=>{
        this.setState({searchItem:event.target.value});
    }

    handleSubmit=(event)=>{
        const {searchItem} =this.state;
        const {onFormSubmit}=this.props;
        onFormSubmit(searchItem);
        event.preventDefault();
    }

    render(){
        return(
            <Paper elevation={6} style={{padding:"25px"}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search Here..." onChange={this.handleChange}/>
                </form>
            </Paper>
        );
    }
}

export default SearchBar;