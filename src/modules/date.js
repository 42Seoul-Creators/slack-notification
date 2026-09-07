import moment from "moment-timezone";

const timezone = "Asia/Seoul";

export const getFormatTodayDate = (formatStr) => {
  const formattedTimezoneDate = moment()
    .locale("ko-kr")
    .tz(timezone)
    .format(formatStr);
  return formattedTimezoneDate;
};

export const addDays = (amount, type) => {
  return moment().tz(timezone).add(amount, type);
};

export const getWeek = (date = moment().tz(timezone)) => {
  // A week belongs to the month whose Thursday it contains. This prevents a
  // partial week at the beginning of a month from shifting the week number.
  const monthStart = date.clone().startOf("month");
  const firstThursday = monthStart.clone().isoWeekday(4);

  if (firstThursday.isBefore(monthStart, "day")) {
    firstThursday.add(7, "days");
  }

  const weekThursday = date.clone().startOf("isoWeek").add(3, "days");
  return Math.floor(weekThursday.diff(firstThursday, "days") / 7) + 1;
};
