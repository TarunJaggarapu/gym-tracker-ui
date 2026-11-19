import { useState } from "react";

export default function WorkoutForm({ members = [], onAddWorkout }) {
  const [member, setMember] = useState("");
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const selectedMember = members.find((m) => String(m.id) === member);

    if (!selectedMember) {
      return;
    }

    onAddWorkout({
      memberId: selectedMember.id,
      exerciseName: exerciseName,
      sets: sets,
      reps: reps,
      weight: weight
    });

    alert("Workout assigned to " + selectedMember.name);
  }
  
  return (
    <div>
      <h2>Assign Workout</h2>
      <p>Select a member and add a workout</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="member">Select Member: </label>
          <select
            id="member"
            value={member}
            onChange={(e) => setMember(e.target.value)}
            required
          >
            <option value="">
              {members.length === 0 ? "No members available" : "Select a member"}
            </option>

            {members.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Exercise Name: </label>
          <input type="text" placeholder="Enter exercise name" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} required/>
        </div>

        <div>
          <label>Sets: </label>
          <input type="number" min="1" value={sets} onChange={(e) => setSets(e.target.value)} required/>
        </div>

        <div>
          <label>Reps: </label>
          <input type="number" min="1" value={reps} onChange={(e) => setReps(e.target.value)} required/>
        </div>

        <div>
          <label>Weight (lbs): </label>
          <input type="number" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
        </div>

        <button type="submit">Assign Workout</button>
      </form>
    </div>
  );
}
