import "./GymOwnerDashboard.css"

export default function GymOwnerDashboard({ members, workouts }) {    
    // Derive all four summary counts directly from props so they stay in sync automatically
    const totalMembers = members.length;
    const totalWorkouts = workouts.length;
    const completedWorkouts = workouts.filter(
        (workout) => workout.status === "Completed"
    ).length;
    const pendingWorkouts = workouts.filter(
        (workout) => workout.status === "Pending"
    ).length;

    return (
        <section>
            <h2>Gym Owner Dashboard</h2>

            {/* Summary cards */}
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h3>Total Members</h3>
                    <p>{totalMembers}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Assigned Workouts</h3>
                    <p>{totalWorkouts}</p>
                </div>

                <div className="dashboard-card">
                    <h3> Completed Workouts</h3>
                    <p>{completedWorkouts}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Pending Workouts</h3>
                    <p>{pendingWorkouts}</p>
                </div>
            </div>

            {/* Empty-state messages */}
            {totalMembers === 0 && (
                <p>No members are registered yet. Add a member below to get started.</p>
            )}
            {totalWorkouts === 0 && (
                <p>No workouts have been assigned yet.</p>
            )}
        </section>
    )
}