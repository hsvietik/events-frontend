import React, { useState } from "react";
import CreateEvent from "./CreateEvent";
import Event from "../EventList/Event";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const AddEvent = (props) => {
  //   const [current, setCurrent] = useState(undefined);
  return (
    <>
      <CreateEvent
        client={props.client}
        refreshList={() => {
          props.refreshList();
          props.Current();
        }}
        currentEvent={props.current}
      />
    </>
  );
};

export default AddEvent;
