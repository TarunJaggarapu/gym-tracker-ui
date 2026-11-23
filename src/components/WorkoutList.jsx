import { useState } from 'react';
import WorkoutCompletion from './WorkoutCompletion';
function WorkoutList({ members = [], workouts, onToggle }) {
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
            <p>Status: {workout.status || "Pending"}</p>

            <WorkoutCompletion
              workout={workout}
              onToggle={onToggle}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;