// This Demo is Very Reach examples
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d


var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

let mapId = officers.map((temp)=> temp.id);
console.log(mapId);

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 30,
  }
];


let MaxReduceYear = pilots.reduce((acc, temp)=>{
    if(acc.years > temp.years){
        return acc;
    }else{
        return temp;
    }
}, {});
console.log(MaxReduceYear)
let totalYearsOfExperience = pilots.reduce((acc, temp)=>{
    return acc + temp.years;
},0);
console.log(totalYearsOfExperience);

// Need to find which is the pilot having more Experience 
let maxExpePilot = Math.max(...pilots.map((temp)=> temp.years));
console.log(maxExpePilot);


let arr = [20, 10, 30, 30, 60, 90];
// Find the 1st max 1st Min using reduce;

let firstMax = arr.reduce((acc, temp)=>{
    if(acc < temp){
        acc = temp
     return acc;
    }else{
        return temp;
    }
}, 0);

console.log(firstMax)

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// Our objective: get the total score of force users only.

let output = personnel.filter((temp) => temp.isForceUser)
    .map((temp)=> temp.shootingScore + temp.pilotingScore)
    .reduce((acc, temp) => acc+ temp, 0);
console.log(output)









