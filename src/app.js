import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["Avenger", "Hulk", "Titan", "Superman", "Monster", "friend"];
  let action = ["took my", "threw my", "ate", "stole my", "destroyed my"];
  let possetion = ["house", "keys", "car", "shoe"];
  let where = ["on the street", "on the drive", "in the parking lot"];
  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);
  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[posIndx] +
    " " +
    where[whereIndx]
  );
};
