let a = {
    name: 'Ashu',
    address:
        {
            at: 'Kadua',
            post: 'Kadua',
            dist: 'Ganjam',
            pin: [7,6,1,1,2,1]
        },
    fav: ['c', 'h','i', 'c']
}
let temp = Object.entries(a);

console.log(temp);

temp.forEach(([type, value])=>{
    console.log('Type --> ', type);
    console.log('Value --> ', value);
    console.log('****************');
})
