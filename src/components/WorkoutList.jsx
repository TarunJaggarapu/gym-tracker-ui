
function WorkoutList({ workouts }) {
  return (
    <div>
      <h2>My Workout Records</h2>

      <ul>
        {workouts.map((workout) => (
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
