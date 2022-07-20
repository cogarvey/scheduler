import React from "react";

import { 
  render,   
  cleanup,
  waitForElement,
  fireEvent,
  getByText,
  getAllByTestId,
  getAltText,
  getByPlaceholderText,
  getByAltText,
  prettyDOM,
  queryByText,
  queryByAltText, } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);
describe("Application", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);

    return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
    });
  })
  it("loads data, books an interview and reduces the spots remaining for the first day by 1", async () => {
    const { container, debug } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    ///////////////// ALL APPTS /////////////////////////////
    const appointments = getAllByTestId(container, "appointment");
    //////////////// SPECIFIC APPT //////////////////////////
    const appointment = getAllByTestId(container, "appointment")[0];


    ///////////////// ADD APPT //////////////////////
    fireEvent.click(getByAltText(appointment, "Add"));
    /////////////////// ENTER STUDENT NAME LYDIA ON PLACEHOLDER /////////
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });
    //////////////////// FIRST INTERVIEWER /////////////////////
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    ////////////////// SAVE APPT ///////////////////////////////
    fireEvent.click(getByText(appointment, "Save"));

    ///////////////////// VERRIFY APPT SAVING ///////////////////////
    expect(getByText(appointment, "SAVING")).toBeInTheDocument;

    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );

    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
    // console.log(prettyDOM(appointment));
  });
});
