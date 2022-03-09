var superHeros = [
  {
    hero: 'SuperMan',
    power: 'Healing Factor',
    DC: true
  },
   {
    hero: 'WonderWoman',
    power: 'Magic Weaponry',
    DC: true
  },
   {
    hero: 'IronMan',
    power: 'Advanced Technology',
    DC: false
  },  
];

let mapVal = superHeros.map((hero)=>{
    if(hero.DC === true){
        return {...hero, age: 123}
    }
    else
        return hero;
    
});

console.log(mapVal)

let filterVal = superHeros.filter((hero)=>{
    if(hero.DC === true){
        return true;
    }else 
        return false;
});

console.log(filterVal);

let output = superHeros.filter((hero)=> hero.DC ? true: false).reduce((acc, hero)=>{
    acc = acc+ hero.hero + ' '; 
    return acc;
}, '');
console.log(output);
