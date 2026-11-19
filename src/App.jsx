import { GymTrackerUI } from './pages/gymtrackerui';
import WorkoutForm from './WorkoutForm';
import { MemberProfileForm } from './components/MemberProfileForm'
import ExerciseGuide from './ExerciseGuide';
export function App() {
  return (
    <GymTrackerUI>
      <div>
      <h2>Gym Workout Tracker</h2>
      <p>Welcome to the Gym Workout Tracker!</p>
      <MemberProfileForm />
      <WorkoutForm />
      <ExerciseGuide />
      </div>
    </GymTrackerUI>
  );
}
