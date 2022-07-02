import React from 'react';

import 'chart.js/auto';
import { Pie, Line } from 'react-chartjs-2';

import './dashboard.styles.css';

export const Dashboard = (props) => (
    <div class="dashboard">
        <h1>Dashboard</h1>
        <div class="dashboard-card">
            <div class="dashboard-card-header">
                <div class="header-text">
                    <span>Jira</span>
                </div>
                <div class="team-button">
                    <span>ELK</span>
                </div>
                <div class="team-button">
                    <span>Gizmo</span>
                </div>
                <div class="team-button">
                    <span>Platform</span>
                </div>
                <div class="team-button">
                    <span>ELK</span>
                </div>
                <div class="team-button">
                    <span>Gizmo</span>
                </div>
            </div>
            <div class="dashboard-card-content">
                <div class="info-content content-child">
                    <span>Sprint Date</span><br />
                    <span>Sprint Goals</span>
                    <ul>
                        <li>goal1</li>
                        <li>goal2</li>
                    </ul>
                </div>
                <div class="content-child">
                    <Pie data={{
                        labels: ['Bugs', 'Features', 'Other'],
                        datasets: [{
                            label: 'My First Dataset',
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
                <div class="content-child">
                    <Line data={{
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'My First Dataset',
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
                <div class="content-child">
                    <Pie data={{
                        labels: ['Bugs', 'Features', 'Other'],
                        datasets: [{
                            label: 'My First Dataset',
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
        <div class="dashboard-card">
            <div class="dashboard-card-header">
                <div class="header-text">
                    <span>Reg</span>
                </div>
                <div class="team-button">
                    <span>SSO</span>
                </div>
                <div class="team-button">
                    <span>Activity</span>
                </div>
                <div class="team-button">
                    <span>F&D</span>
                </div>
                <div class="team-button">
                    <span>Payment</span>
                </div>
                <div class="team-button">
                    <span>Reg</span>
                </div>
            </div>
            <div class="dashboard-card-content">
                <div class="content-child">
                    <Line data={{
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'My First Dataset',
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
                <div class="content-child">
                    <Line data={{
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'My First Dataset',
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
                <div class="content-child">
                    <Line data={{
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'My First Dataset',
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
                <div class="content-child">
                    stats
                </div>
            </div>
        </div>
        <div class="dashboard-card">
            <div class="dashboard-card-header">
                <div class="header-text">
                    <span>AWS</span>
                </div>
                <div class="team-button">
                    <span>ELK</span>
                </div>
                <div class="team-button">
                    <span>Gizmo</span>
                </div>
                <div class="team-button">
                    <span>Platform</span>
                </div>
                <div class="team-button">
                    <span>ELK</span>
                </div>
                <div class="team-button">
                    <span>Gizmo</span>
                </div>
            </div>
            <div class="dashboard-card-content">
                <div class="content-child">
                    <Line data={{
                        labels: [1, 2, 3, 4, 5],
                        datasets: [{
                            label: 'My First Dataset',
                            data: [65, 59, 80, 81, 56, 55, 40],
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
                <div class="content-child">
                    stats
                </div>
            </div>
        </div>
    </div>
);