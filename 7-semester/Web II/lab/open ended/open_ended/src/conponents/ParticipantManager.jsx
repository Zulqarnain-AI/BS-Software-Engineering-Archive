import { useState } from "react";

function ParticipantManager() {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState("");

  const addParticipant = () => {
    if (!name) return;

    setParticipants([
      ...participants,
      { id: Date.now(), name, active: true }
    ]);

    setName("");
  };

  const toggleStatus = (id) => {
    setParticipants(
      participants.map(p =>
        p.id === id ? { ...p, active: !p.active } : p
      )
    );
  };

  const removeParticipant = (id) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2>Participants</h2>

      <input
        type="text"
        placeholder="Participant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addParticipant}>Add</button>

      <ul>
        {participants.map(p => (
          <li key={p.id}>
            {p.name} — {p.active ? "Active" : "Inactive"}

            <input
              type="checkbox"
              checked={p.active}
              onChange={() => toggleStatus(p.id)}
            />

            <button onClick={() => removeParticipant(p.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantManager;
