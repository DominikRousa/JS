const animals = []

function addAnimal(){

    const animal = {
        name: "",
        weight: 0,
        species: "",
    }

    animal.name = document.getElementById('anName').value
    animal.weight = parseInt(document.getElementById('anWeight').value)
    animal.species = document.getElementById('anSpecies').value

    animals.push(animal)

    console.log(...animals)

    var node=document.createElement("LI");
    var textnode=document.createTextNode(animal.name + ", " + animal.weight + ", " + animal.species);
    node.appendChild(textnode);
    document.getElementById("animalsInZoo").appendChild(node);
}