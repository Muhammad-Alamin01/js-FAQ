function explainCallback(name, age, tasks) {
    console.log(`Hello ${name}, Your age ${age}`);
    tasks();
}

function wastHand(){
    console.log(`Wash hand with soap`);
}
function takeShower(){
    console.log(`take shower`);
}


explainCallback('Sogir',18, wastHand);
explainCallback('Kogir',13, takeShower);