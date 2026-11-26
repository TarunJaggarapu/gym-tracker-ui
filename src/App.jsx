
import { useState } from 'react';
import { GymTrackerUI } from './pages/gymtrackerui';
import WorkoutForm from './components/WorkoutForm';
import { MemberProfileForm } from './components/MemberProfileForm';
import ExerciseGuide from './ExerciseGuide';
import WorkoutList from './components/WorkoutList';
import RoleSelector from './components/RoleSelector';
import RoleNavigation from './components/RoleNavigation';

export default function App() {
  const [members, setMembers] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [selectedMember, setSelectedMember] = useState("");

  // Remember the selected role.
  const [role, setRole] = useState("Member");

  // Remember the selected section for each role.
  const [activeSections, setActiveSections] = useState({
    Member: "Home",
    Owner: "Dashboard"
  });

  const activeSection = activeSections[role];

  function changeSection(section) {
    setActiveSections((previous) => ({
      ...previous,
      [role]: section
    }));
  }

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

  function renderSection() {
    if (role === "Owner") {
      switch (activeSection) {
        case "Dashboard":
          return <h3>Gym Owner Dashboard</h3>;

        case "Members":
          return (
            <>
              <h3>Manage Members</h3>
              <MemberProfileForm onAddMember={addMember} />
            </>
          );

        case "Assign Workout":
          return (
            <>
              <h3>Assign Workout</h3>
              <WorkoutForm
                members={members}
                onAddWorkout={addWorkout}
              />
            </>
          );

        case "All Workouts":
          return (
            <>
              <h3>All Workouts</h3>
              <WorkoutList
                members={members}
                workouts={workouts}
              />
            </>
          );

        default:
          return null;
      }
    }

    switch (activeSection) {
      case "Home":
        return <h3>Welcome, Gym Member!</h3>;

      case "My Workouts":
        return (
          <>
            <h3>My Workouts</h3>
            <WorkoutList
              members={members}
              workouts={workouts}
            />
          </>
        );

      case "Progress":
        return <h3>My Progress</h3>;

      case "Exercise Guide":
        return <ExerciseGuide />;

      case "Profile":
        return (
          <>
            <h3>My Profile</h3>
            <MemberProfileForm onAddMember={addMember} />
          </>
        );

      default:
        return null;
    }
  }

  return (
    <GymTrackerUI>
      <div>
        <h2>Gym Workout Tracker</h2>
        <p>Welcome to the Gym Workout Tracker!</p>

        <RoleSelector
          role={role}
          onRoleChange={setRole}
        />

        <RoleNavigation
          role={role}
          activeSection={activeSection}
          onSectionChange={changeSection}
        />

        <main>
          {renderSection()}
        </main>
      </div>
    </GymTrackerUI>
  );
}

