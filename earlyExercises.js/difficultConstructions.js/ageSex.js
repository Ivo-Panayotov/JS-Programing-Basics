function status(age, gender) {
    age = Number(age);
if (age >= 16) {
    if (gender == "m")
    console.log("Mr.");
    else if (gender == "f")
    console.log("Ms.");
} else {
    if (gender == "m")
    console.log("Master");
    else if (gender == "f")
    console.log("Miss");
}
}
status(32,"m");