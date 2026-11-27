
function RoleSelector({ role, onRoleChange }) {
    return (
      <div>
        <label htmlFor="role">Select your role: </label>
  
        <select
          id="role"
          value={role}
          onChange={(event) => onRoleChange(event.target.value)}
        >
          <option value="Member">Gym Member</option>
          <option value="Owner">Gym Owner</option>
        </select>
      </div>
    );
  }
  
  export default RoleSelector;
  