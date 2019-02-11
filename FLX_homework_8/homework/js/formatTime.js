function time(value) {
  let minutes = value % 60;
  let totalHours = (value - minutes) / 60;
  let hours = totalHours % 24;
  let days = (totalHours - hours) / 24;
  return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)';
}
time(120);
time(59);
time(3601);