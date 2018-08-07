import { formatIsoDay } from '../datelib/utils'

const DAY_HEADER_CLASS = 'fc-day-header'

export function getDayGridDayEls(date) {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  return $('.fc-day-grid .fc-day[data-date="' + formatIsoDay(date) + '"]')
}

export function getDayHeaderEls() {
  return $(currentCalendar.el).find(`.${DAY_HEADER_CLASS}`)
}

export function getDayGridAxis() {
  return $('.fc-day-grid .fc-axis')
}

// TODO: discourage use
export function getDayGridDowEls(dayAbbrev) {
  return $(`.fc-day-grid .fc-row:first-child td.fc-day.fc-${dayAbbrev}`)
}


