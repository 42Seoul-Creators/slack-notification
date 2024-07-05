import { addDays, getFormatTodayDate, getWeek } from "./date.js";

export const buildMessage = () => {
  const month = getFormatTodayDate("YYYY년 MM월");
  const week = getWeek();
  const startDate = getFormatTodayDate("YYYY-MM-DD dddd");
  const endDate = addDays(6, "days").locale("ko-kr").format("YYYY-MM-DD dddd");

  const messageHeader = `*[${month} ${week}주차 인증 스레드]*\n`;
  const messageBody = `
  📆 기간: ${startDate} ~ ${endDate}
  `;
  const message = messageHeader + messageBody;

  return message;
};
