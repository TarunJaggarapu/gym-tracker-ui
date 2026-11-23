import { useState } from 'react';
import { GymTrackerUI } from './pages/gymtrackerui';
import WorkoutForm from './components/WorkoutForm';
import { MemberProfileForm } from './components/MemberProfileForm';
import ExerciseGuide from './ExerciseGuide';
import WorkoutList from './components/WorkoutList';
import Navigation from './components/Navigation';

export function App() {
  const [members, setMembers] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [selectedMember, setSelectedMember] = useState("");

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
      weight: workout.weight,
      status: "Pending"
    };
    
    setWorkouts([...workouts, newWorkout]);
  }
  function toggleWorkoutStatus(workoutId) {
    setWorkouts((currentWorkouts) =>
      currentWorkouts.map((workout) =>
        workout.id === workoutId
          ? {
              ...workout,
              status: workout.status === "Completed"
                ? "Pending"
                : "Completed"
            }
          : workout
      )
    );
  }

  return (
    <GymTrackerUI>
      <div>
        <h2>Gym Workout Tracker</h2>
        <p>Welcome to the Gym Workout Tracker!</p>

        <Navigation />
        <MemberProfileForm onAddMember={addMember} />
        <WorkoutForm members={members} onAddWorkout={addWorkout} />
        <WorkoutList
          members={members}
          workouts={workouts}
          onToggle={toggleWorkoutStatus} 
        />
        <ExerciseGuide />
      </div>
    </GymTrackerUI>
  );
}