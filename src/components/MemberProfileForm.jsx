import { useState } from 'react';

export function MemberProfileForm({ onAddMember }) {
    // Track form field values in React state so inputs stay controlled across renders
    const [name, setName] = useState('');
    const [fitnessGoal, setFitnessGoal] = useState('');
    const [error, setError] = useState('');
    // Store the validated profile object once submitted (null until first valid submit)
    const [submittedProfile, setSubmittedProfile] = useState('');

    const handleSubmit = (e) => {
        // Prevent default browser form submission from reloading the page
        e.preventDefault();

        // Block submission if either field is empty or whitespace
        if (!name.trim() || !fitnessGoal.trim()) {
            setError('Both Name and Fitness Goal are required');
            return;
        }

        // Clear any previous validation error once both fields are valid
        setError('');

        // Set submitted profile
        setSubmittedProfile({
            name: name.trim(),
            fitnessGoal: fitnessGoal.trim(),
        });

        onAddMember({
            name: name.trim(),
            fitnessGoal: fitnessGoal.trim(),
        });
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

                {/* Only render the error paragraph when error is a non-empty string */}
                {error && <p>{error}</p>}

                <button type="submit">Submit</button>

                {/* Render submitted profile details below the form once available */}
                {submittedProfile && (
                    <div>
                        <h3>Saved Member Profile</h3>
                        <p>Name: {submittedProfile.name}</p>
                        <p>Fitness Goal: {submittedProfile.fitnessGoal}</p>
                    </div>
                )}
            </form>
        </div>
    );
}