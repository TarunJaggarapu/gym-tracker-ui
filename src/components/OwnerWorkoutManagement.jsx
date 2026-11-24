
import { useState } from 'react';

export default function OwnerWorkoutManagement({members = [], workouts = [], onUpdateWorkout}) {
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [editingWorkout, setEditingWorkout] = useState(null);

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesMember =
      selectedMember === "" ||
      String(workout.memberId) === selectedMember;

    const matchesStatus =
      selectedStatus === "" ||
      workout.status === selectedStatus;

    return matchesMember && matchesStatus;
  });

  function handleEdit(workout) {
    setEditingWorkout({ ...workout });
  }

  function handleEditChange(e) {
    const { name, value } = e.target;

    setEditingWorkout((previousWorkout) => ({
      ...previousWorkout,
      [name]: value
    }));
  }

  function handleSave(e) {
    e.preventDefault();

    if (!editingWorkout.exerciseName.trim()) {
      return;
    }

    onUpdateWorkout(editingWorkout.id, {
      exerciseName: editingWorkout.exerciseName.trim(),
      sets: editingWorkout.sets,
      reps: editingWorkout.reps,
      weight: editingWorkout.weight
    });

    setEditingWorkout(null);
  }

  return (
    <div>
      <h2>Owner Workout Management</h2>
      <p>View and manage all assigned workouts.</p>

      <div>
        <label htmlFor="filter-member">Filter by Member: </label>

        <select
          id="filter-member"
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
        >
          <option value="">All Members</option>

          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="filter-status">Filter by Status: </label>

        <select
          id="filter-status"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight (lbs)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredWorkouts.map((workout) => {
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
                <td>
                  <button
                    type="button"
                    onClick={() => handleEdit(workout)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {editingWorkout && (
        <div>
          <h3>Edit Workout</h3>

          <form onSubmit={handleSave}>
            <div>
              <label htmlFor="edit-exercise">Exercise Name: </label>
              <input
                id="edit-exercise"
                type="text"
                name="exerciseName"
                value={editingWorkout.exerciseName}
                onChange={handleEditChange}
                required
              />
            </div>

            <div>
              <label htmlFor="edit-sets">Sets: </label>
              <input
                id="edit-sets"
                type="number"
                name="sets"
                min="1"
                value={editingWorkout.sets}
                onChange={handleEditChange}
                required
              />
            </div>

            <div>
              <label htmlFor="edit-reps">Reps: </label>
              <input
                id="edit-reps"
                type="number"
                name="reps"
                min="1"
                value={editingWorkout.reps}
                onChange={handleEditChange}
                required
              />
            </div>

            <div>
              <label htmlFor="edit-weight">Weight (lbs): </label>
              <input
                id="edit-weight"
                type="number"
                name="weight"
                min="0"
                value={editingWorkout.weight}
                onChange={handleEditChange}
                required
              />
            </div>

            <button type="submit">Save Changes</button>

            <button
              type="button"
              onClick={() => setEditingWorkout(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
