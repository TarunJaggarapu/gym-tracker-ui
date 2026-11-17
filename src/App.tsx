
import { GymTrackerUI } from './pages/gymtrackerui';
import WorkoutForm from './WorkoutForm';

export function App() {
  return (
    <GymTrackerUI>
      <div>
        <h2>Gym Workout Tracker</h2>
        <p>Welcome to the Gym Workout Tracker!</p>

        <WorkoutForm />
      </div>
    </GymTrackerUI>
  );
}
