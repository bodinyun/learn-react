import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; //ถ้าเป็นไฟล์ css ต้องมี .css แต่ถ้าเป็นไฟล์ javascript สามารถละนามสกุล .js ได้
import App from './App'; // import มาจาก ไฟล์อื่นที่ชื่อว่า App
import reportWebVitals from './reportWebVitals';

// default //
import abcd from "./import-export/sayHi";
// name export // 
// import { month } from './import-export/sayHi';
// import แล้วเปลี่ยนเชื่อเพื่อใช้ในนี้ //
// import { month as mnt } from './import-export/sayHi';
//
import { month, sayHello, day, year} from './import-export/sayHi';
// import * as obj //
// import * as obj from './import-export/sayHi';

// obj.sayHim()
obj.year

// abcd();
// console.log(month);
// console.log(mnt);

month.push('May');
console.log(month);
console.log(year);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

