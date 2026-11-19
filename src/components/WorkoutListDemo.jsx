
import WorkoutList from './WorkoutList';

export default function WorkoutListDemo() {
  const sampleWorkouts = [
    {
      id: 1,
      exerciseName: "Bench Press",
      sets: 3,
      reps: 10,
      weight: 95
    },
    {
      id: 2,
      exerciseName: "Squats",
      sets: 3,
      reps: 8,
      weight: 135
    },
    {
      id: 3,
      exerciseName: "Dumbbell Curls",
      sets: 3,
      reps: 12,
      weight: 20
    }
  ];

  return <WorkoutList workouts={sampleWorkouts} />;
}
