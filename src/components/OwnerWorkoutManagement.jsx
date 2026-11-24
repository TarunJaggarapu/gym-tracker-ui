export default function OwnerWorkoutManagement({ members = [], workouts = [] }) {
  return (
    <div>
      <h2>Owner Workout Management</h2>
      <p>View and manage all assigned workouts.</p>

      <table>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight (lbs)</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {workouts.map((workout) => {
            const member = members.find(
              (m) => m.id === workout.memberId
            );

            return (
              <tr key={workout.id}>
                <td>{member ? member.name : "Unknown Member"}</td>
                <td>{workout.exerciseName}</td>
                <td>{workout.sets}</td>
                <td>{workout.reps}</td>
                <td>{workout.weight}</td>
                <td>{workout.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}