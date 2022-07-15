export function getAppointmentsForDay(state, day) {
  const filteredAppt = state.days.filter(days => days.name === day);
  let appointments = []
  if (filteredAppt[0]) {
    const idOfDay = filteredAppt[0].appointments
    appointments = idOfDay.map(elm => state.appointments[elm]);
  }
  return appointments;
}