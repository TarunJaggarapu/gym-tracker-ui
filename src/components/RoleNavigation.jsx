
function RoleNavigation({ role, activeSection, onSectionChange }) {
    const ownerSections = [
      "Dashboard",
      "Members",
      "Assign Workout",
      "All Workouts"
    ];
  
    const memberSections = [
      "Home",
      "My Workouts",
      "Progress",
      "Exercise Guide",
      "Profile"
    ];
  
    const sections =
      role === "Owner" ? ownerSections : memberSections;
  
    return (
      <nav aria-label={`${role} navigation`}>
        {sections.map((section) => (
          <button
            key={section}
            type="button"
            onClick={() => onSectionChange(section)}
            aria-current={activeSection === section ? "page" : undefined}
            style={{
              fontWeight: activeSection === section ? "bold" : "normal",
              margin: "5px",
              padding: "10px"
            }}
          >
            {section}
          </button>
        ))}
      </nav>
    );
  }
  
  export default RoleNavigation;
  