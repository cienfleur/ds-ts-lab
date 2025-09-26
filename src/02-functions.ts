import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]) : string[] {
    friends.forEach( f => f.age += 1 )
    return friends.map( f => `${f.name} is now ${f.age}` )
}

console.log(older(friends[0]))
console.log(allOlder(friends))