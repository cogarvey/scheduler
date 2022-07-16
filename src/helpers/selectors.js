export function getAppointmentsForDay(state, day) {
  const filteredAppt = state.days.filter(days => days.name === day);
  let appointments = []
  if (filteredAppt[0]) {
    const idOfDay = filteredAppt[0].appointments
    appointments = idOfDay.map(elm => state.appointments[elm]);
  }
  return appointments;
};

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewData = state.interviewers[interview.interviewer]
  return {
    ...interview, 
    interviewer: interviewData
  };
};