
let characters = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

for (let character of characters) {

    if (character.health >= 10 && character.damage >= 2 && character.warrior) {

        let div = document.createElement('div');

        let h1 = document.createElement('h1');


        let firstH3 = document.createElement('h3');
        let secondH3 = document.createElement('h3');


        let hr = document.createElement('hr');

        // adding content to the elements
        h1.textContent = `Name: ${character.name}`;
        firstH3.textContent = `Damage: ${character.damage}`;
        secondH3.textContent = `Health: ${character.health}`;

        // if there is letter "a" in the name, make the name red
        if (character.name.toLowerCase().indexOf('a') != -1) {
            h1.style.color = 'red';
        }


        div.append(h1, firstH3, secondH3, hr);

        document.body.appendChild(div);
    }
}