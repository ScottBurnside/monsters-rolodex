import React from 'react';

import 'chart.js/auto';
import { Pie, Line } from 'react-chartjs-2';

import './dashboard.styles.css';

export const Dashboard = props => (
    <div className="list">
        <div className="dashboard-card">
            <div className="dashboard-card-header">
                <div className="header-text">
                    <span>Jira</span>
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
                    <span>Sprint Date</span><br />
                    <span>Sprint Goals</span>
                    <ul>
                        <li>goal1</li>
                        <li>goal2</li>
                    </ul>
                </div>
                <div className="content-child">
                    <Pie data={{
                        labels: ['Bugs', 'Features', 'Other'],
                        datasets: [{
                            label: 'Ticket Type Commitment',
                            data: [300, 50, 100],
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
                            data: [65, 59, 80, 81, 56, 55, 40],
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
                            data: [300, 50, 100],
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
        <div className="dashboard-card">
            <div className="dashboard-card-header">
                <div className="header-text">
                    <span>Reg</span>
                </div>
                {/* <div className="team-button">
                    <span>SSO</span>
                </div>
                <div className="team-button">
                    <span>Activity</span>
                </div>
                <div className="team-button">
                    <span>F&D</span>
                </div>
                <div className="team-button">
                    <span>Payment</span>
                </div>
                <div className="team-button">
                    <span>Reg</span>
                </div> */}
            </div>
            <div className="dashboard-card-content">
                <div className="content-child">
                    <Line data={{
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'Diagram',
                            data: [65, 59, 80, 81, 56, 55, 40],
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
                    <Line data={{
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'Bugs',
                            data: [65, 59, 80, 81, 56, 55, 40],
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
                    <Line data={{
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'Diagram',
                            data: [65, 59, 80, 81, 56, 55, 40],
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
                    stats
                </div>
            </div>
        </div>
        <div className="dashboard-card">
            <div className="dashboard-card-header">
                <div className="header-text">
                    <span>AWS</span>
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
                            fill: false,
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
                <div className="content-child">
                    stats
                </div>
            </div>
        </div>
    </div>
);