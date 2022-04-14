const users = [
    {  
        name: 'Bob',  
        age: 27,  
        address:{  
            country:'USA',  
            city:'LA'  
        },  
        marks:[2,3,5,4,2,3,1,5]  
    },  
    {  
        name: 'July',  
        age: 21,  
        address:{  
            country:'Ukraine',  
            city:'Kiev'  
        },  
        marks:[4,4,5,4,3,4,3,5]  
    },  
    {  
        name: 'Monya',  
        age: 15,  
        address:{  
            country:'Ukraine',  
            city:'Odessa'  
        },  
        marks:[5,1,5,1,5,1,5,1]  
    },  
    {  
        name: 'Vsevolod',  
        age: 19,  
        address:{  
            country:'Ukraine',  
            city:'Lviv'  
        },  
        marks:[3,4,5,3,1,2,4,6]  
    },
];
  
//  Eсть массив пользователей: 

console.log('Users: ', users);

// Hужно сделать следующее:  
  
// 1.  Cоздать переменную isNotAdult и получить в неё обьект студента, который не совершеннолетний.

const isNotAdult = users.filter( e => e.age < 18 );

console.log('1) Not Adult: ', isNotAdult);

// 2.  Создать переменную foreignStudents и получить туда массив иногородних студентов (не из Украины).

const foreignStudents = users.filter( e => e.address.country !== 'Ukraine' );

console.log('2) Foreign Students: ', foreignStudents);

// 3.  Получить новый массив с юзерами. У каждого юзера должно появится новое проперти isAdult: true | false. 
//     Tак же должно появиться новое поле averageMark, содержащее среднюю оценку пользователя.

const newUsers = users.reduce( (acc, e) => {
    const newUser  = {
        name: e.name,
        age: e.age,
        address: e.address,
        marks: e.marks,
        isAdult: e.age >= 18,
        averageMark: e.marks.reduce( (acc, e) => acc += e, 0)/e.marks.length
    }
    acc.push(newUser);
    return acc;
}, []);

console.log('3) New Users (+isAdult, +averageMark): ', newUsers);

// 4.  Создать переменную averageMark и указать среднюю оценку по всем пользователям.

// Variant 1:

// const allMarks = users.reduce( (acc, e) => {
//     return [...acc, ...e.marks];
// }, []);

// const averageMark = allMarks.reduce( (acc, e) => {
//     return acc += e;
// }, 0)/ allMarks.length;
    
// Variant 2:

const averageMark = users.reduce( 
    (acc,e) => 
        acc += e.marks.reduce( 
            (acc, e) => 
                acc += e, 0)/e.marks.length,
        0
)/users.length;

console.log(`4) Average Mark: ${averageMark}`);

// 5.  Создать новую переменную addresses из массива пользователей, вернуть в неё новый обьект, 
//     который будет в себе содержать два поля: 1 . countries - массив стран пользователей и 2 cities массив городов пользователей.

const addresses = users.reduce( (acc, e) => {
    acc.countries.push(e.address.country);
    acc.cities.push(e.address.city);
    return acc;
}, {countries: [], cities: []});

console.log('5) User`s addresses: ', addresses);