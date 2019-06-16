
export const getFirstWeekday = () => 'Monday';
export const getSecondWeekday = () => 'Tuesday';
/* экспортируем функцию типа 'Function Declaration' */
export function getThirdWeekday () {
  return 'Wednesday';
}
export const fourthWeekday = 'Thursday';
const getFifthWeekday = () => 'Friday';
export default getFifthWeekday // export default () => 'Friday'
/* две функции ниже не будут экспортированы */
const firstWeekendDay = 'Saturday';
const getLastWeekendDay = () => 'Sunday';
export default date = new Date();