import React from 'react';
import './gymtrackeruimainpage.css';

export function GymTrackerUI({ children }) {
    return (
        <div className="layout-container">
            <header className="layout-header">
                <h1>Gym Workout Tracker</h1>
            </header>
            <main className="layout-content">
                {children}
            </main>
        </div>
    );
}