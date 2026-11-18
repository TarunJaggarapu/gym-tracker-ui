// @ts-ignore
import { GymTrackerUI } from './pages/gymtrackerui';
import WorkoutForm from './WorkoutForm';
// @ts-ignore
import { MemberProfileForm } from './components/MemberProfileForm'

export function App() {
  return (
    <GymTrackerUI>
      <div>
      <h2>Gym Workout Tracker</h2>
      <p>Welcome to the Gym Workout Tracker!</p>
      <MemberProfileForm />
      <WorkoutForm />
      </div>
    </GymTrackerUI>
  );
}
