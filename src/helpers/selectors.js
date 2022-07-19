///////////////// APPOINTMENTS /////////////////////////
export function getAppointmentsForDay(state, day) {
  const filteredAppt = state.days.filter(days => days.name === day);
  let appointments = []
  if (filteredAppt[0]) {
    const idOfDay = filteredAppt[0].appointments
    appointments = idOfDay.map(elm => state.appointments[elm]);
  }
  return appointments;
};

//////////////// INTERVIEWS ///////////////////////
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

//////////////// DAILY INTERVIEWERS ////////////////////
export function getInterviewersForDay(state, day) {
  const filteredAppt = state.days.filter(everyDay => everyDay.name === day);
  let interviewers = []

  if (filteredAppt[0]) {
    const interviewerId = filteredAppt[0].interviewers;
    interviewers = interviewerId.map(elm => state.interviewers[elm]);
  }
  return interviewers;
};