import { useState } from 'react';

export function MemberProfileForm() {
    // Track form field values in React state so inputs stay controlled across renders
    const [name, setName] = useState('');
    const [fitnessGoal, setFitnessGoal] = useState('');

    const handleSubmit = (e) => {
        // Prevent default browser form submission from reloading the page
        e.preventDefault();
    };

    return (
        <div>
            <h2>Member Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="member-name">Name</label>
                    <input
                        id="member-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="fitness-goal">Fitness Goal</label>
                    <input
                        id="fitness-goal"
                        type="text"
                        value={fitnessGoal}
                        onChange={(e) => setFitnessGoal(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}