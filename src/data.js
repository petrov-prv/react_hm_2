"use strict";
const data = new Date();
let today = data.getDate();
let month = data.getMonth() + 1;
let year = data.getFullYear();

export default function displayDate() {
  document.getElementById('data').textContent = `Сегодня: ` + today + `.` + month + `.` +
    year + ` г.`
}