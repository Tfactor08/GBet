import React, { useEffect, useState } from 'react'
import EventList from '../components/EventList'
import APIService from '../services/APIService'
import { useFetching } from "../hooks/useFetching"
import Loader from '../components/Loader'

const Events = () => {

  const [events, setEvents] = useState([])
  const [fetchEvents, isEventsLoading] = useFetching(async () => {
    const events = await APIService.getEvents()
    setEvents(events)
  })

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div style={{ margin: 5 }}>
      {isEventsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
      : <EventList events={events}/>}
    </div>
  );
}

export default Events