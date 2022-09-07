import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  ////////////// DATE SELECTOR ON SIDEBAR /////////////////
  const setDay = (day) => setState({ ...state, day });

  ///////////// SPOTS UPDATE ON CREATE AND DELETE /////////////////
  function spotChange(number) {
    const days = state.days.map((day) => {
      if (day.name === state.day) {
        day.spots += number;
      }
      return day;
    });
    return days;
  }

  //////////////// BOOK/CREATE INTERVIEW //////////////////////
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    let days = state.days;
    if (!state.appointments[id].interview) {
      days = spotChange(-1);
    }

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState({
        ...state,
        appointments,
        days,
      });
    });
  }

  ////////////////// CANCEL/DELETE INTERVIEW //////////////////////
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = spotChange(1);

    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      setState({
        ...state,
        appointments,
        days,
      });
    });
  }

  /////////////////// USE EFFECT ////////////////////
  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
