import { useState } from 'react';
// Build a component that displays a list of workouts assigned to a selected member. The component should allow the user to select a member from a dropdown menu, and then display the workouts assigned to that member below the dropdown. If no member is selected, display a message prompting the user to select a member.

function WorkoutList({ members = [], workouts }) {
  const [selectedMember, setSelectedMember] = useState("");

  const filteredWorkouts = workouts.filter(
    (workout) => String(workout.memberId) === selectedMember
  );

  return (
    <div>
      <h2>My Assigned Workouts</h2>

      <div>
        <label htmlFor="view-member">Select Member: </label>
        <select
          id="view-member"
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
        >
          <option value="">Select a member</option>

          {members.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {filteredWorkouts.map((workout) => (
          <li key={workout.id}>
            <h3>{workout.exerciseName}</h3>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weight: {workout.weight} lbs</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;