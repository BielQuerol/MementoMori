import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import HelpMeForm from "../pages/helpmeform";
import { render } from "@testing-library/react";

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
                {this.state.listOfHelpRequests.map(helprequest => {
                    return (
                        <div key={helprequest._id}>
                        <Link to={`/helprequest/${helprequest._id}`}>
                            <h3>{helprequest.title}</h3>
                        </Link>
                        <p>{helprequest.city}</p>
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