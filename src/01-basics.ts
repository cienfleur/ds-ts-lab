import {Friend, Colleague, ColleagueHistory } from './myTypes'

const friend1: Friend = {
  name: "Michael Jordan",
  phone: "087-12345",
  age: 25,
  dob: new Date(1998-2-17),
};

const friend2: Friend = {
  name: "Kevin Durant",
  phone: "086--12345",
  age: 31,
  interests: ["basketball", "cooking"]
};

export const friends: Friend[] = [friend1, friend2];
// console.log(friends[1]);

//   -------------------

const colleague1: Colleague = {
  name: "James Harden",
  department: "Engineering",
  contact: {
    email: "jharden@company.com",
    extension: 121,
  },
};

const colleague2: Colleague = {
  name: "Kyrie Irving",
  department: "Finance",
  contact: {
    email: "kirving@company.com",
    extension: 132,
  },
};

const colleague3: Colleague = {
  name: "Dirk Nowitzki",
  department: "HR",
  contact: {
    email: "dnowitzki@company.com",
    extension: 125,
  },
};


export const colleagues : ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

// console.log(colleagues.current[0]);
