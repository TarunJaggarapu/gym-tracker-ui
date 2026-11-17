import React, {ReactNode} from 'react';
import './gymtrackeruimainpage.css';

interface GymTrackerUIProps {
    children: React.ReactNode;
}

export function GymTrackerUI({ children }: GymTrackerUIProps) {
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