import "./ExerciseGuide.css";

const exercises = [
  {
    id: 1,
    name: "Barbell Squat",
    muscleGroup: "Legs",
    description:
      "Stand with a barbell across your upper back, lower your hips until your thighs are parallel to the floor, then drive back up. Builds quads, glutes, and core strength.",
  },
  {
    id: 2,
    name: "Bench Press",
    muscleGroup: "Chest",
    description:
      "Lie on a bench, lower a barbell to your mid-chest, then press it back up. A staple for building chest, shoulder, and tricep strength.",
  },
  {
    id: 3,
    name: "Deadlift",
    muscleGroup: "Back",
    description:
      "Lift a loaded barbell from the floor to hip height while keeping your back flat. Works the lower back, glutes, and hamstrings.",
  },
  {
    id: 4,
    name: "Overhead Press",
    muscleGroup: "Shoulders",
    description:
      "Press a barbell or dumbbells from shoulder height to overhead until your arms are fully extended. Targets the shoulders and triceps.",
  },
  {
    id: 5,
    name: "Plank",
    muscleGroup: "Core",
    description:
      "Hold a push-up position on your forearms with your body in a straight line. Strengthens the abs, obliques, and lower back.",
  },
];

function ExerciseGuide() {
  return (
    <div className="exercise-guide">
      <h1 className="exercise-guide__title">Exercise Guide</h1>
      <p className="exercise-guide__subtitle">
        Learn the basics of popular exercises and the muscles they target.
      </p>

      <div className="exercise-guide__grid">
        {exercises.map((exercise) => (
          <article key={exercise.id} className="exercise-card">
            <h2 className="exercise-card__name">{exercise.name}</h2>
            <span className="exercise-card__badge">{exercise.muscleGroup}</span>
            <p className="exercise-card__description">{exercise.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ExerciseGuide;
