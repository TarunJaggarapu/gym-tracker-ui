function WorkoutCompletion({ workout, onToggle }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={workout.status === "Completed"}
          onChange={() => onToggle(workout.id)}
        />
        Mark as Completed
      </label>
    </div>
  );
}

export default WorkoutCompletion;
