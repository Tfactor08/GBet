import React from 'react'
import { useNavigate } from "react-router-dom";

const Event = ({ event }) => {

  const navigate = useNavigate();

  return (
    <li
      className="collection-item avatar"
      key={event.id}
      onClick={() => navigate(`/events/${event.id}`)}
      style={{ paddingLeft: 20, lineHeight: "inherit" }}
    >
      <span className="title" style={{ fontSize: 20, fontWeight: "bold" }}>
        {event.name} (
        <span style={{ fontStyle: "italic", fontSize: 16 }}>
          {event.subject.name}
        </span>
        )
      </span>
      <br />
      <strong style={{ fontSize: "smaller", fontStyle: "italic" }}>
        {event.date}
      </strong>
      <a href="#!" className="secondary-content">
        <i className="material-icons">content_paste</i>
      </a>
    </li>
  )
}

export default Event