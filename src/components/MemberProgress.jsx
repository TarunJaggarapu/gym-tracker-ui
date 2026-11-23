function MemberProgress({ workouts = [] }) {
  const total = workouts.length;

  const completed = workouts.filter(
    (workout) => workout.status === "Completed"
  ).length;

  const pending = total - completed;

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div>
      <h3>Member Workout Progress</h3>

      <p>Total Assigned: {total}</p>
      <p>Completed: {completed}</p>
      <p>Pending: {pending}</p>
      <p>Completion: {percentage}%</p>

      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: "5px"
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: "green",
            borderRadius: "5px"
          }}
        />
      </div>

      {total === 0 && <p>No workouts assigned yet.</p>}
    </div>
  );
}

export default MemberProgress;
