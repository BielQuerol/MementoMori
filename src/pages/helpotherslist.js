import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import HelpMeForm from "../pages/helpmeform";


class HelpOthersList extends Component {
    constructor() {
        super();
        this.state = { listOfHelpRequests: [] };
    }

    getAllHelpRequests = () => {
        axios.get(`http://localhost:4000/api/helprequest`)
        .then(responseFromApi => {
            this.setState({
                listOfHelpRequests: responseFromApi.data

            });
        });
    };
    componentDidMount() {
        this.getAllHelpRequests();
    }

    render() {
    return (
        <div>
            <div>
                {this.state.listOfHelpRequests.map(eachHelpRequest => {
                    return (
                        <div key={eachHelpRequest._id}>
                        <Link to={`/helprequest/${HelpRequest._id}`}>
                            <h3>{eachHelpRequest.title}</h3>
                        </Link>
                        <p>{eachHelpRequest.city}</p>
                        </div>
                    );
                })}
                        </div>
                        <div>
                        <HelpMeForm getData={() => this.getAllHelpRequests()}/>
                        </div>
                        </div>
                    );
                }}
            
            export default withAuth(HelpOthersList);