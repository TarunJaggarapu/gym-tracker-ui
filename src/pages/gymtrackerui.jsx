import React from 'react';
import './gymtrackeruimainpage.css';


// Build the main layout for the Gym Tracker app.
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