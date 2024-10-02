import React from "react";
import "./Rules.css";

const Rules = () => {
  return (
    <div className="fest-rules-container">
      <div className="fest-rules-css">
        <h2 className="fest-heading">Fest Rules and Information</h2>
        <ol>
          <li>
            For entry into the fest, students must present the following
            documents:
            <ol type="a">
              <li>A valid student ID card of the institute.</li>
              <li>
                A valid government ID proof (e.g., Driving License, PAN Card,
                passport, Aadhar card, etc).
              </li>
              <li>
                A letter signed by the head of the institute is prepared on the
                institute letterhead. Alternatively, students who come from the
                same college can bring the letter in the following format on the
                institute letterhead, signed and sealed by the head of the
                institution.
                <div className="format-container">
                  <strong>Format:</strong>
                  <table>
                    <tbody>
                      <tr>
                        <td colspan="5" className="format-heading">
                          [ Institute Letterhead ]
                        </td>
                      </tr>
                      <tr>
                        <td>Student name</td>
                        <td>Roll number of student</td>
                        <td>Residential address</td>
                        <td>Event name (in which you are participating)</td>
                        <td>Contact number</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Signature of College Head</td>
                        <td colspan="5"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ol>
            <p>
              Please ensure that all the required documents are presented at the
              entry point for hassle-free entry into the fest.
            </p>
          </li>
          <li>
            Students from other colleges must register for at least one event to
            be eligible to participate in the Fest.
          </li>
          <li>
            It is strictly forbidden for students from outside IIIT Trichy to
            enter the Hostel or Mess Premises.
          </li>
          <li>
            Non-resident visitors are welcome between 09:00 AM and 06:00 PM.
          </li>
          <li>
            The Reception Committee will be available to guide students from
            other colleges. All students are expected to follow the directions
            provided by the Committee.
          </li>
          <li>
            The management will not tolerate any indisciplinary activities on
            the institute premises.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Rules;
