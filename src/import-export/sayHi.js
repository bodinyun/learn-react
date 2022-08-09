function sayHi() {

    console.log('Say Hi');

}



function sayHello() {

    console.log('Say Him');

}

const month = ["Jan","Dec"]

// default export - only 1 per modules
// export default sayHi;

// export default function sayHi() {

//     console.log('Say Hi');

// }

// ถ้าเป็น default สามารถละชื่อ function ได้เลย

// export default function () {

//         console.log('Say Hi');
    
//     }

// name Export 
export {sayHello, month};

export const day = ['mon', 'tue', 'wed'];
export const year = [2018 , 2019 , 2020];



