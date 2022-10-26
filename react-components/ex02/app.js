const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

const dropChars = (string, charCount = 2) => {
  return string.slice(0, string.length - charCount);
};

console.warn(`
Folosind obiectul person si reduce afiseaza in consola un string
care contine skillurile de pe pozitiile pare ale arrayului,
separate prin virgula
`);
const string1 = person.skills.reduce((string1, skill, index, skills) => {
  if (index % 2 === 0) {
    string1 += `${skill}, `;
  }

  return string1;
}, '');
// console.log(string1.slice(0, string1.length - 2));
console.log(dropChars(string1));

console.warn(`
In mod similar, afiseaza skillurile care NU incep cu j
`);
const string2 = person.skills.reduce((string2, skill) => {
  if (!skill.startsWith('j')) {
    string2 += `${skill}, `;
  }

  return string2;
}, '');
console.log(dropChars(string2));

console.warn(`
Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."

`);
const sentence = person.friends.reduce(
  (sentence, { name, surname }, index, friends) => {
    const punctuation = index === friends.length - 1 ? '.' : ', ';

    sentence += `${name} ${surname}${punctuation}`;
    return sentence;
  },
  'Prietenii mei se numesc ',
);

console.log(sentence);

console.warn(`
Folosind reduce, afiseaza numarul total de ani pe care il au persoanele
din arrayul friends, doar daca varsta este mai mare sau egala cu 30
`);
const sumYears = person.friends.reduce((sumYears, { age }) => {
  if (age >= 30) {
    sumYears += age;
  }

  return sumYears;
}, 0);
console.log(sumYears);

console.warn(`
  Folosing reduce, afiseaza suma anilor de nastere ai persoanelor
`);
const sumBirthYears = person.friends.reduce((sumBirthYears, { age }) => {
  const curretYear = new Date().getFullYear();

  sumBirthYears += curretYear - age;

  return sumBirthYears;
}, 0);
console.log(sumBirthYears);

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
Intre Dragos si Steven...", doar daca varsta prietenului este impara
`);

const string3 = person.friends
  .reduce((string3, { age, name }) => {
    string3 += `Intre ${person.name} si ${name} este o diferenta de
  ${Math.abs(person.age - age)} ani.`;

    return string3;
  }, '')
  .trim();
console.log(string3);

console.warn(`
Folosind obiectul person si reduce, afiseaza in
consola un string care contine skillurile persoanei,
separate prin virgula
`);
const string4 = person.skills.reduce((string4, skill, index, skills) => {
  const punctuation = index === skills.length - 1 ? '.' : ', ';

  string4 += `${skill}${punctuation}`;

  return string4;
}, '');
console.log(string4);

console.warn(`
In mod similar, afiseaza skillurile care incep cu c
`);
const skillsList = person.skills.reduce((skillsList, skill) => {
  if (skill.startsWith('c')) {
    skillsList.push(skill);
  }

  return skillsList;
}, []);
console.log(`${skillsList.join(', ')}.`);

console.warn(`
Folosind reduce afiseaza propozitia: "Numele de familie ale
prietenilor mei sunt: xxx, xxx , xxx."
`);
const string5 = person.friends.reduce(
  (string5, { surname }, index, friends) => {
    const friendSurname = `${surname}`;
    const punctuation = index === friends.length - 1 ? '.' : ', ';
    return (string5 += `${friendSurname}${punctuation}`);
  },
  'Numele de familie ale prietenilor mei sunt: ',
);
console.log(string5);

console.warn(`
Folosind reduce, afiseaza numarul total de ani pe care il au
persoanele din arrayul friends
`);
const totalAge = person.friends.reduce((totalAge, { age }) => {
  totalAge += age;

  return totalAge;
}, 0);
console.log(totalAge);

console.warn(`
Folosind reduce, afiseaza suma anilor  persoanelor.
`);
const ageOfPersons = person.friends.reduce((ageOfPersons, { age }) => {
  return ageOfPersons + age;
}, 0);
console.log(ageOfPersons + person.age);

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii
din arrayul friends.
`);
const ageDiff = person.friends.reduce((ageDiff, { age }) => {
  const myAge = person.age;
  ageDiff.push(myAge - age);

  return ageDiff;
}, []);
console.log(ageDiff);

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de
xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul
friends.
`);

const string6 = person.friends
  .reduce((string6, { name, age }) => {
    const message = `Intre ${person.name} si ${name} este o diferenta de ${
      person.age - age
    } ani. `;
    return string6 + message;
  }, '')
  .trim();
console.log(string6);
