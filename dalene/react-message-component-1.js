import React, { Component } from 'react';

export default class Message extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderFile() {
        if (this.props.attachment) {
            return (
                <div>
                    <a href={this.props.attachment} target="_blank" rel="noopener noreferrer">
                        <font color="#3d9970">Download File</font>
                    </a>
                </div>
            );
        }
    }

    render() {
        const fromMe = this.props.forMe ? 'from-me' : '';
        return (
            <div className={`message ${fromMe}`}>
                <div className="username">
                    {this.props.username}
                </div>
                <div slassName="message-body">
                    {this.props.message}
                    {' '}
                    {this.renderFile()}
                </div>

            </div>
        );
    }
}