function shout(string) {
    // todo
  }
  function shout(string) {
    return string;
  }
  "Hello!".toUpperCase(); // 'HELLO!'
  function shout(string) {
    return string.toUpperCase();
  }
  
  "Hello!".toLowerCase(); // 'HELLO!'
  function whisper(string) {
    return string.toLowerCase();
  }

  "Hello!".toUpperCase(); // 'HELLO!'
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  "Hello!".toLowerCase(); // 'HELLO!'
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  const string = "Hello!";

console.log(string);
let roommateResponse;

  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        roommateResponse = "I can\'t hear you!";
    }
    else if(string === string.toUpperCase()) {
        roommateResponse = "YES INDEED!" ;
    }
    else if(string === "Let's have dinner together!") {
        roommateResponse = "I would love to!" ;
    }
    console.log(roommateResponse);
    return roommateResponse;
  }



