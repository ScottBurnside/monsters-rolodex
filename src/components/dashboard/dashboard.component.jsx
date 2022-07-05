import React from 'react';

import 'chart.js/auto';
import { Pie, Line } from 'react-chartjs-2';

import './dashboard.styles.css';

export const Dashboard = props => (
    <div className="list">
        <div className="dashboard-card">
            <div className="dashboard-card-header">
                <div className="header-text">
                    <span>Cloud Hosting Costs</span>
                </div>
                {/* <div className="team-button">
                    <span>ELK</span>
                </div>
                <div className="team-button">
                    <span>Gizmo</span>
                </div>
                <div className="team-button">
                    <span>Platform</span>
                </div>
                <div className="team-button">
                    <span>ELK</span>
                </div>
                <div className="team-button">
                    <span>Gizmo</span>
                </div> */}
            </div>
            <div className="dashboard-card-content">
                <div className="content-child">
                    <Line data={{
                        labels: props.costData.labels,
                        datasets: [{
                            label: 'Costs',
                            data: props.costData.data,
                            fill: true,
                            borderColor: '#ff7f00',
                            tension: 0.1
                        }]
                    }}
                        width={1000}
                        height={200}
                        options={{
                            maintainAspectRatio: false,
                        }} />
                </div>
            </div>
        </div>
        <div className="dashboard-card">
            <div className="dashboard-card-header">
                <div className="header-text">
                    <span>Sprint Commitment</span>
                </div>
                {/* <div className="team-button">
                    <span>ELK</span>
                </div>
                <div className="team-button">
                    <span>Gizmo</span>
                </div>
                <div className="team-button">
                    <span>Platform</span>
                </div>
                <div className="team-button">
                    <span>ELK</span>
                </div>
                <div className="team-button">
                    <span>Gizmo</span>
                </div> */}
            </div>
            <div className="dashboard-card-content">
                <div className="info-content content-child">
                    <h3>13JUL22 Sprint Goals </h3>
                    <ul>
                        <li>Metric dashboard</li>
                        <li>goal2</li>
                    </ul>
                </div>
                <div className="content-child">
                    <Pie data={{
                        labels: ['Bugs', 'Features', 'Other'],
                        datasets: [{
                            label: 'Ticket Type Commitment',
                            data: [10, 200, 100],
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                        }]
                    }}
                        height={200}
                        width={300}
                        options={{
                            maintainAspectRatio: false,
                        }} />
                </div>
                <div className="content-child">
                    <Line data={{
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'Burn Up Chart',
                            data: [3, 9, 15, 15, 27, 34, 46],
                            fill: false,
                            borderColor: '#ff7f00',
                            tension: 0.1
                        }]
                    }}
                        height={200}
                        width={300}
                        options={{
                            maintainAspectRatio: false,
                        }} />
                </div>
                <div className="content-child">
                    <Pie data={{
                        labels: ['Bugs', 'Features', 'Other'],
                        datasets: [{
                            label: 'Ticket Type Delivered',
                            data: [15, 50, 100],
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                        }]
                    }}
                        height={200}
                        width={300}
                        options={{
                            maintainAspectRatio: false,
                        }} />
                </div>
            </div>
        </div>
        
    </div>
);