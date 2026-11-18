import { useState } from "react";

export default function WorkoutForm() {
  const [exerciseName, setExerciseName] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  function handleSubmit(e) {
   e.preventDefault();
   alert(
     "Exercise: " + exerciseName +
     "\nSets: " + sets +
     "\nReps: " + reps +
     "\nWeight: " + weight + " lbs"
    );
  }
  return (
    <div>
      <h2>Add Workout</h2>
      <p>Enter your workout details below.</p>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
}
