const appointments = [
  {
    client: "Valeria Ruiz",
    service: "Masaje relajante",
    hour: "10:30",
    therapist: "Lucía",
    status: "Confirmada",
  },
  {
    client: "Daniela Pérez",
    service: "Facial hidratante",
    hour: "11:15",
    therapist: "Paola",
    status: "Pendiente",
  },
  {
    client: "Paula Méndez",
    service: "Pedicure spa",
    hour: "12:00",
    therapist: "Karina",
    status: "Confirmada",
  },
  {
    client: "Andrea Molina",
    service: "Aromaterapia",
    hour: "12:45",
    therapist: "Julia",
    status: "Confirmada",
  },
];

const list = document.getElementById("appointmentsList");

appointments.forEach(({ client, service, hour, therapist, status }) => {
  const item = document.createElement("li");
  item.innerHTML = `
    <div>
      <strong>${hour} · ${client}</strong>
      <small>${service} · Especialista: ${therapist}</small>
    </div>
    <span class="badge">${status}</span>
  `;
  list.appendChild(item);
});
