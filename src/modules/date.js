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

export const getWeek = () => {
  return (
    moment().tz(timezone).week() -
    moment().tz(timezone).startOf("month").week() +
    1
  );
};
