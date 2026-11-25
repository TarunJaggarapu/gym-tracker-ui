import "./MemberManagement.css";

export default function MemberManagement({ members, workouts }) {
    // Count how many workouts belong to a specific member
    function getAssignedWorkoutCount(memberId) {
        return workouts.filter(
            (workout) => Number(workout.memberId) === Number(memberId)
        ).length;
    }

    return (
        <section className="member-management">
            <h2>Member Management</h2>

            {members.length === 0 ? (
                <p>No registered members to manage yet.</p>
            ) : (
                <table className="member-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Fitness Goal</th>
                            <th>Assigned Workouts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member) => (
                            <tr key={member.id}>
                                <td>{member.name}</td>
                                <td>{member.fitnessGoal}</td>
                                <td>{getAssignedWorkoutCount(member.id)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
}