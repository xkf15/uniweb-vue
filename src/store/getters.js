
const transferTimeFormat = time => {
  const date = (new Date(Date.parse(time))).toLocaleString()
  return date
}

export const roomDateFormat = state => {
  const start = transferTimeFormat(state.roomInfo.info.date_time_start)
  const end = transferTimeFormat(state.roomInfo.info.date_time_end)
  return {
    date_time_start: start,
    date_time_end: end
  }
}
