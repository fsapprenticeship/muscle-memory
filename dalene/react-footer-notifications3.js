import React, { Component } from "react";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default class Footer extends Component {
    createNotification = (type, message, messageTitle => {
    return () => {
        switch (type) {
            case 'info':
                NotificationManager.info(message, messageTitle);
                break;
            case 'success':
                NotificationManager.success(message, messageTitle, 3000);
                break;
            case 'warning':
                NotificationManager.warning(message, messageTitle, 3000);
                break;
            case 'error':
                NotificationManager.error(message, messageTitle, 10000, () => {
                    console.log('Error')
                });
                break;
            default:
                break;
        }
    };
};
render() {
    const footerStyle = {
        textAlign: 'center',
        // position: 'absolute',
        bottom: 0,
        //padding: '20px',
        left: 0,
        right: 0,
        // background: '#ddd',
    }
    return (
        <div style={footerStyle}>
            <NotificationContainer />
            <div id="transaction-failure" onClick={this.createNotification('error', 'Your transaction was not successful.', 'Transaction Error')} ></div>
            <div id="transaction-success" onClick={this.createNotification('success', 'Your transaction was successful.', 'Transaction Status')} ></div>
            <div id="database-success" onClick={this.createNotification('success', 'Your action was successful.', 'Confirmation')} ></div>
            <div id="database-failure" onClick={this.createNotification('error', 'There was an error whie processing your request - please reresh the page, check yur internet connection, & try again.', 'Database Error')} ></div>
            <div id="transaction-pending" onClick={this.createNotification('warning', 'Your transactio is pending.', 'Transaction Status')} ></div>
            <h2><a href="://anotherlink.com" target="_blank" rel="noopener noreferrer">Terms of Serice</a> - <a href="https://imaginarylink.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a></h2>
            <h4>FUll-Stack Apprenticeship - @2019 </h4>
            </div>
       )
    }
}