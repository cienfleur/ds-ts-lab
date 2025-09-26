import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]) : string[] {
    friends.forEach( f => f.age += 1 )
    return friends.map( f => `${f.name} is now ${f.age}` )
}

// console.log(older(friends[0]))
// console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // infer return type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
// console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string): Colleague {

  const extension = highestExtension(cs).contact.extension + 1;
  const colleague: Colleague = {
    name: name,
    department: department,
    contact: {
      email: email,
      extension: extension
    }
  };
  cs.push(colleague);
  return colleague;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

// console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
// console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

function findFriends(
    friends: Friend[],
    finder: (f: Friend) => boolean
): Friend[] {
    const found = friends.filter(finder);
    const result: Friend[] = found.map((fe) => ({ name: fe.name, phone: fe.phone, age: fe.age }));
    return result;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Mi')));
console.log(findFriends(friends, (friend) => friend.age < 35));
