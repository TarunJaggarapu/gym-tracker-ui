
import { useState } from "react";

// Build navigation buttons
function Navigation() {
  const [activePage, setActivePage] = useState("Profile");

  return (
    <div>
      <h1>Gym Tracker</h1>

      <nav aria-label="Member navigation">
        <button
          type="button"
          onClick={() => setActivePage("Profile")}
        >
          Profile
        </button>

        <button
          type="button"
          onClick={() => setActivePage("Workouts")}
        >
          Workouts
        </button>
      </nav>

      <main>
        <h2>{activePage}</h2>

        {activePage === "Profile" ? (
          <p>Welcome to your gym member profile.</p>
        ) : (
          <p>View your assigned workouts here.</p>
        )}
      </main>
    </div>
  );
}

export default Navigation;
