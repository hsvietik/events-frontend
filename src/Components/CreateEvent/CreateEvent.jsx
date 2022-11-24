import React, { useState, useEffect } from "react";
import NavbarMenu from "../Navbar/Navbar";

const CreateEvent = (props) => {
  const [formData, changeFormData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    time: "",
    attendance: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // const handleVisibility = () => {
  //   setIsVisible((current) => !current);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    setDisabled(true);
    let result;
    if (props.currentEvent) {
      result = props.client.updateEvent(
        props.currentEvent._id,
        e.target.name.value,
        e.target.description.value,
        e.target.location.value,
        e.target.date.value,
        e.target.time.value,
        e.target.attendance.value
      );
    } else {
      result = props.client.addEvent(
        e.target.name.value,
        e.target.description.value,
        e.target.location.value,
        e.target.date.value,
        e.target.time.value,
        e.target.attendance.value
      );
    }

    result
      .then(() => {
        setDisabled(false);
        // document.getElementById("addForm").reset();
        console.log(props);
        // props.refreshList();
      })
      .catch((error) => {
        console.log(error);
        alert("an error occured, please try again");
        setDisabled(false);
      });
  };

  useEffect(() => {
    changeFormData({
      name: props.currentEvent ? props.currentEvent.name : "",
    });
  }, [props.currentEvent]);

  const handleInput = (e) => {
    let newState = { ...formData };
    newState.name = e.target.value;
    changeFormData(newState);
  };

  return (
    <>
      {/* <NavbarMenu handleVisibility={handleVisibility} /> */}
      <form
        onSubmit={(e) => submitHandler(e)}
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        <input
          type="text"
          value={formData.name}
          name="name"
          onInput={(e) => {
            handleInput(e);
          }}
          placeholder="Event Name"
          disabled={disabled}
        />
        <input
          type="text"
          defaultValue={props.currentEvent?.description}
          name="description"
          placeholder="Description"
          disabled={disabled}
        />
        <input
          type="text"
          defaultValue={props.currentEvent?.location}
          name="location"
          placeholder="Location"
          disabled={disabled}
        />
        <input
          type="date"
          defaultValue={props.currentEvent?.date}
          name="date"
          placeholder="Date"
          disabled={disabled}
        />
        <input
          type="time"
          defaultValue={props.currentEvent?.time}
          name="time"
          placeholder="Time"
          disabled={disabled}
        />
        <input
          type="text"
          defaultValue={props.currentEvent?.attendance}
          name="attendance"
          placeholder="Registration required"
          disabled={disabled}
        />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
};

export default CreateEvent;
