
import { GymTrackerUI } from './pages/gymtrackerui';
import WorkoutForm from './WorkoutForm';
import { MemberProfileForm } from './components/MemberProfileForm';
import ExerciseGuide from './ExerciseGuide';
import Navigation from './components/Navigation';

export function App() {
  return (
    <GymTrackerUI>
      <div>
        <h2>Gym Workout Tracker</h2>
        <p>Welcome to the Gym Workout Tracker!</p>

        <Navigation />

        <MemberProfileForm />

        <WorkoutForm />

        <ExerciseGuide />
      </div>
    </GymTrackerUI>
  );
}

export default App;
