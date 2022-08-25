//noteBuilder

function noteBuilder (item, json=timelineJustinJSON){
    console.log("noteBuilder function started", item, json[item]);
    document.getElementById("notes").innerHTML = `<H2>${item}</H2>`;
    for (element in json[item]) {
        console.log("noteBuilder function started", item, json[item][element]);
        if (element == "tips"){
            let theTipOfTheDay = json[item][element][Math.floor(Math.random()*json[item][element].length)]
            document.getElementById("event").innerHTML = `<b>${item} tip of the day:</b><br><br> ${theTipOfTheDay}`;
            document.getElementById("notes").innerHTML += `<b>${element}</b><br>${json[item][element].join(', ')}<br><br>`;
        } else {
            document.getElementById("notes").innerHTML += `<b>${element}</b><br>${json[item][element]}<br><br>`;
        }
    }
}
