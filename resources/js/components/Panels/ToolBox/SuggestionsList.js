import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loading from "../../utils/Loading";
import NoWhat from "../../utils/NoWhat";

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
    };

    render() {
        let showList = [];
        if (this.state?.suggestions) {
            for (let i = 0; i < this.state?.suggestions.length; i++)
                showList.push(
                    <Link
                        key={this.state.suggestions[i].id}
                        to={`/profile/${this.state.suggestions[i].id}`}
                        className="list-group-item text-dark text-decoration-none"
                    >
                        <div class="d-flex flex-row">
                            <div class="p-2">
                                <img
                                    src={`storage/${this.state.suggestions[i].photo}`}
                                    className="suggest-photo"
                                />
                            </div>
                            <div class="p-2">
                                {this.state.suggestions[i].name}
                            </div>
                        </div>
                    </Link>
                );
            if (this.state.suggestions.length > 0)
                return <div className="list-group">{showList}</div>;
            return (
                <div className="list-group">
                    <a className="list-group-item text-decoration-none text-dark">
                        <NoWhat what={this.props.what} />
                    </a>
                </div>
            );
        }
        return <Loading />;
    }
}

export default SuggestionsList;
