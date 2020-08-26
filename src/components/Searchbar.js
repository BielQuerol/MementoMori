import React from 'react';
import { withAuth } from "../lib/AuthProvider";
import "./Searchbar.css";

class SearchBar extends React.Component {
  state = {
    search: ""
  }
    handleChange = (e) => {
    const updatedText = e.target.value;
    this.setState({ search: updatedText })

    this.props.filterHelpRequests(updatedText)
  }

  render() {
    return(
      <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
    )
  }
}

export default withAuth(SearchBar);