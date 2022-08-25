//botBuilder

function buildBot(divName="brand"){
    console.log('bot engaged');
}

// document.getElementById("buttonChat").addEventListener("click", getChatResponse);
// document.getElementById("chatInput").addEventListener("click", watchMe);

const transcriptArray = [];

function getChatResponse() {
    var responseText;
    responseText = document.getElementById("chatInput").value;
    if (responseText !== "") {
        transcriptArray.push(responseText);
        console.log('chat transcript: ', responseText);
        document.getElementById("chatInput").value = "";
        buildTranscript();
        respondToChat(responseText);
    }
}

function respondToChat(response){
    let botResponse = `I see you said, "${response}." I'll be better once I'm trained.`;
    console.log('chat bot responding: ', botResponse);
    setTimeout(() => {
        transcriptArray.push(botResponse);
        buildTranscript();
    }, 1200);
}

function buildTranscript() {
    if (transcriptArray.length > 1 && transcriptArray.length < 8) {
        document.getElementById("transcript").innerHTML = transcriptArray.join('<br>');
    } else if (transcriptArray.length > 7) {
        document.getElementById("transcript").innerHTML = transcriptArray.slice(-7).join('<br>');
    } else {
        document.getElementById("transcript").innerHTML = transcriptArray.toString();
    }
    //lookDirection("straight");
}
