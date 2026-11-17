import { GymTrackerUI } from './pages/gymtrackerui';
// @ts-ignore
import { MemberProfileForm } from './components/MemberProfileForm'

export function App() {
  return (
    <GymTrackerUI>
      <div>
      <h2>Gym Workout Tracker</h2>
      <p>Welcome to the Gym Workout Tracker!</p>
      <MemberProfileForm />
      </div>
    </GymTrackerUI>
  );
}