import { useState } from 'react';
import { GymTrackerUI } from './pages/gymtrackerui';
import WorkoutForm from './components/WorkoutForm';
import { MemberProfileForm } from './components/MemberProfileForm';
import ExerciseGuide from './ExerciseGuide';
import WorkoutList from './components/WorkoutList';

export function App() {
  const [members, setMembers] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  function addMember(profile) {
    const newMember = {
      id: members.length + 1,
      name: profile.name,
      fitnessGoal: profile.fitnessGoal
    };

    setMembers([...members, newMember]);
  }

  function addWorkout(workout) {
    const newWorkout = {
    id: workouts.length + 1,
    memberId: workout.memberId,
    exerciseName: workout.exerciseName,
    sets: workout.sets,
    reps: workout.reps,
    weight: workout.weight
    };

    setWorkouts([...workouts, newWorkout]);
  }
  console.log(workouts);
  return (
    <GymTrackerUI>
      <div>
        <h2>Gym Workout Tracker</h2>
        <p>Welcome to the Gym Workout Tracker!</p>
        <MemberProfileForm onAddMember={addMember} />
        <WorkoutForm members={members} onAddWorkout={addWorkout} />
        <WorkoutList workouts={workouts} />
        <ExerciseGuide />
      </div>
    </GymTrackerUI>
  );
}