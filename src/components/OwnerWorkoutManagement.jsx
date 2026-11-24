
import { useState } from 'react';

export default function OwnerWorkoutManagement({ members = [], workouts = [] }) {
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesMember =
      selectedMember === "" ||
      String(workout.memberId) === selectedMember;

    const matchesStatus =
      selectedStatus === "" ||
      workout.status === selectedStatus;

    return matchesMember && matchesStatus;
  });

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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
