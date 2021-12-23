import './style.css'
import moment from 'moment'
import time, { average, max, min, sum } from 'time-value'

const time1 = new time(3, 3, 10);
const time2 = new time(1, 0, 45);
const time3 = new time(5, 51, 6);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <h1>${moment().format()}<h1>

  <h2> time1 = ${time1} </h2>
  <h2> time2 = ${time2} </h2>
  <h2> time3 = ${time3} </h2>


<h2>Average time is:  ${ average([time1, time2, time3]) }</h2>

<h2>Max time is: ${ max([time1, time2, time3]) }</h2>

<h2>Min time is: ${ min([time1, time2, time3]) }</h2>

<h2>Sum time is: ${ sum([time1, time2, time3]) }</h2>

  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`