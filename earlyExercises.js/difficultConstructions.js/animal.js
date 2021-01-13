function animal(typeAnimal){
if (typeAnimal == "dog") {
    console.log("mammal");  
} else if (typeAnimal == "crocodile" || typeAnimal == "tortoise" || typeAnimal == "snake") {
    console.log("reptile");
} else {
    console.log("unknown");    
}
}
animal("dog")