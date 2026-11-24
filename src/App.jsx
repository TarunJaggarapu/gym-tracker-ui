
import { useState, useRef } from 'react';
import { GymTrackerUI } from './pages/gymtrackerui';
import WorkoutForm from './components/WorkoutForm';
import { MemberProfileForm } from './components/MemberProfileForm';
import ExerciseGuide from './ExerciseGuide';
import WorkoutList from './components/WorkoutList';
import Navigation from './components/Navigation';
import OwnerWorkoutManagement from './components/OwnerWorkoutManagement';

export function App() {
  const [members, setMembers] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const nextWorkoutId = useRef(1);

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
      id: nextWorkoutId.current++,
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

  function updateWorkout(workoutId, updatedDetails) {
    setWorkouts((previousWorkouts) =>
      previousWorkouts.map((workout) =>
        workout.id === workoutId ? { ...workout, ...updatedDetails } : workout
      )
    );
  }

  function deleteWorkout(workoutId) {
    setWorkouts((previousWorkouts) =>
      previousWorkouts.filter((workout) => workout.id !== workoutId)
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
        <OwnerWorkoutManagement members={members} workouts={workouts} onUpdateWorkout={updateWorkout} onDeleteWorkout={deleteWorkout} />
        <WorkoutList members={members} workouts={workouts} onToggle={toggleWorkoutStatus} />

        <ExerciseGuide />
      </div>
    </GymTrackerUI>
  );
}
