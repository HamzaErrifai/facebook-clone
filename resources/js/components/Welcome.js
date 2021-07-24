import React, { Component } from "react";

export class Welcome extends Component {
    render() {
        return (
            <div className="hw-100h d-flex align-items-center justify-content-center flex-column">
                <h1 className="dummy-push text-center">
                    Welcome to Facebook Clone
                </h1>
                <div className="">
                    <a className="btn btn-secondary" href="/login">
                        Log in
                    </a>
                    <a className="btn btn-primary ml-3" href="/register">
                        Register
                    </a>
                </div>
            </div>
        );
    }
}

export default Welcome;
