// (Optional) Change the names below to your friends.

interface Friend {
    name: string;
    phone: string;
    age: number
}

const friend1: Friend = {
  name: "Michael Jordan",
  phone: "087-12345",
  age: 25,
};

const friend2: Friend = {
  name: "Kevin Durant",
  phone: "086--12345",
  age: 31,
};

const friends: Friend[] = [friend1, friend2];
console.log(friends[1]);

//   -------------------
const colleague1 = {
  name: "James Harden",
  department: "Engineering",
  contact: {
    email: "jharden@company.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "Kyrie Irving",
  department: "Finance",
  contact: {
    email: "kirving@company.com",
    extension: 132,
  },
};

const colleague3 = {
  name: "Dirk Nowitzki",
  department: "HR",
  contact: {
    email: "dnowitzki@company.com",
    extension: 125,
  },
};
const colleagues = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[0]);
