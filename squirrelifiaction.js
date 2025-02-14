const JOURNAL = require('./squirreEvents')
function journalEvents(journal) {
  let events = []
  for (let entry of journal) {
    console.log('value of entry', entry)
    for (let event of entry.events) {
      console.log('value of event of entry.event', event)
      if (!events.includes(event)) {
        console.log('value of event pushed ', event)
        events.push(event)
      }
    }
    console.log('value of events array', events)
  }
  return events
}

// console.log(journalEvents(JOURNAL))
