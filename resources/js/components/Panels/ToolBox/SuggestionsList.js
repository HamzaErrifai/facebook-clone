import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../../utils/Loading";

export class SuggestionsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            suggestions: [],
        };
    }

    componentDidMount = () => {
        axios
            .get("/api/" + this.props.what)
            .then((resp) =>
                this.setState({
                    suggestions: resp.data,
                })
            )
            .catch((err) => console.log(err));
            console.log("/api/" + this.props.what)
    };

    render() {
        let showList = [];
        if (this.state?.suggestions) {
            for (let i = 0; i < this.state?.suggestions.length; i++)
                showList.push(
                    <Link
                        key={this.state.suggestions[i].id}
                        to={`/profile/${this.state.suggestions[i].id}`}
                        className="list-group-item text-dark"
                    >
                        {this.state.suggestions[i].name} hh
                    </Link>
                );
            return <div className="list-group">{showList}</div>;
        }
        return <Loading />;
    }
}

export default SuggestionsList;
