
const transferTimeFormat = time => (new Date(Date.parse(time))).toLocaleString()

const getTimeInfo = time => {
  const date = new Date(Date.parse(time))
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hours: date.getHours(), // getUTCHours()
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
}

export default {
  transferTimeFormat,
  getTimeInfo
}
