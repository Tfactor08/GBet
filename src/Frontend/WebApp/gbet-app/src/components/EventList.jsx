import React from 'react'
import Event from './Event'

const EventList = ({ events }) => {
    return (
      <div>
        <h4 style={{ textAlign: "center", margin: "10px 10px 10px", fontSize: 28 }}>
          События
        </h4>

        {events.length
        ? <ul className="collection">
          {events.map((event) => (
            <Event event={event} key={event.id} />
          ))}
        </ul>
        : <h6 style={{ textAlign: "center", fontStyle: "italic" }}>
            Пока нет событий :( <br/>
            (Но скоро они появятся :))
          </h6>
        }
      </div>
  )
}

export default EventList