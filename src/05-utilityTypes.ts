import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, SecureColleagueContact, FriendPartial, ColleaguePartial, EventPass, commonFC } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}
/* console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))
  */

function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
    ): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
        const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
        };
        return secure;
    });
    }
    let result = secureFindFriends(
        friends,
        (f: Friend) => f.age < 30
    )
// console.log(result)

function generateEventPass(colleague: Colleague): EventPass {
  const passCode = Math.round(Math.random() * (1000 - 1) + 1);
  return {
    name: colleague.name,
    department: colleague.department,
    passCode: passCode,
  };
}
//console.log(generateEventPass(colleagues.current[0]));

function findSecureColleague(
    colleagues: Colleague[],
    criteria: (c: Colleague) => boolean
    ): SecureColleagueContact[] {
    const matches = colleagues.filter(criteria);
    return matches.map((c) => {
        const secure: SecureColleagueContact = {
            name: c.name,
            email: c.contact.email,
            extension: c.contact.extension
        };
        return secure;
    });
}

let result2 = findSecureColleague(
    colleagues.current,
    (c: Colleague) => c.department === "HR"
);
// console.log(result2);


function intersection(
  friends: Friend[],
  colleagues: Colleague[]
): commonFC[] {
  let result: commonFC[] = []
  friends.reduce((res, friend) => {
    const colleague = colleagues.find((col) => col.name === friend.name);
    if (colleague) {
      // Colleague is also a Friend
      const common: commonFC = {
        name: friend.name,
        age: friend.age,
        contact: {
            email: colleague.contact.email,
            extension: colleague.contact.extension,
        },
    }
        res.push(common);
    }
    return res;
  }, result);
  return result;
}

console.log(intersection(friends, colleagues.current));



