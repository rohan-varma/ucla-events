# ucla-events

# Event Model
    title: String,
    host: String,
    date: Date,
    location: String,
    details: String,
    url: String,
    tags: String Array

# Tag Model
    name: String
    events: Event Array

# API Cheatsheet

## Event routes

##### GET /api/events  
returns all events ordered by time
- array of events
- array will be empty if anything goes wrong or if there are no events
- status 200 : Success
- status 500 : Error

##### GET /api/events/[eventId]
returns one event based on id
- an event object
- status 200 : Success
- status 500 : Error


## Tag routes

##### GET /api/tag/[tagName]
returns all events of a particular tag
- array of events
- array will be empty if anything goes wrong or if there are no events
- status 200 : Success
- status 500 : Error

[![Build Status](https://travis-ci.com/mitrikyle/ucla-events.svg?token=4pjpRgWQNr8j1qw1gjL9&branch=master)](https://travis-ci.com/mitrikyle/ucla-events)
