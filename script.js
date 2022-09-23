var audio = new Audio("assets/sentmessage.mp3");
var contactString =
  "<div class='social'> <a target='_blank' href='tel:+919174403667'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>9174403667</label></div> </a> <a href='mailto:vashnavichauhan1@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/vashnavichauhan1825'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/917303318948'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a><a target='_blank' href='https://www.instagram.com/streamofthought18/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vashnavi-chauhan-b6222514b/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString =
  "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vashnavi Chauhan.pdf</label></div><a href='assets/Vashnavi_chauhan_Resume.pdf' download='Vashnavi_chauhan_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString =
  "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.9522135786324!2d78.22250471486853!3d26.263214283411525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c10f0ced33f7%3A0x837e7d8226a90e6!2sShree%20radhe%20enterprises!5e0!3m2!1sen!2sin!4v1663920644456!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>New Janakpuri, Aditiyapuram<br>Gwalior,Madhya Pradesh, INDIA 474020</address>";
function startFunction() {
  setLastSeen();
  waitAndResponce("intro");
}

function setLastSeen() {
  var date = new Date();
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText =
    "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function openFullScreenDP() {
  var x = document.getElementById("fullScreenDP");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function isEnter(event) {
  if (event.keyCode == 13) {
    sendMsg();
  }
}

function sendMsg() {
  var input = document.getElementById("inputMSG");
  var ti = input.value;
  if (input.value == "") {
    return;
  }
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "sent");
  greendiv.setAttribute("class", "green");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText = input.value;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  setTimeout(function () {
    waitAndResponce(ti);
  }, 1500);
  input.value = "";
  playSound();
}
// Hello there 👋🏻,My name is Vashanvi Chauhan. The great pleasure introduce my self.
// I’m Frontend developer and apart from this I love to build beautiful UI ❤ 👨🏻‍💻📚I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.Send 'more' to know more about me.

function waitAndResponce(inputText) {
  var lastSeen = document.getElementById("lastseen");
  lastSeen.innerText = "typing...";
  switch (inputText.toLowerCase().trim()) {
    case "intro":
      setTimeout(() => {
        sendTextMessage(
          "Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink' href='https://twitter.com/VashnaviChauhan'>Vashanvi Chauhan</a>.</span><br><br>Great pleasure introduce my self. <span class='bold'>I’m Frontend developer and apart from this I love to build beautiful UI 💛</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'more'</span> to know more about me.<br>"
        );
      }, 2000);
      break;
    case "more":
      sendTextMessage(
        "<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> -ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>"
      );
      break;
    case "resume":
      sendTextMessage(resumeString);
      break;
    case "skills":
      sendTextMessage(
        "<span class='sk'>I'm Frontend developer and here's my Tech Stack:<br><span class='bold'>Javascript<br>C++<br>React JS<br>Redux<br>Redux Toolkit<br>React Router Dom v6 <br>Styled-components<br>Firebase<br>CSS3<br>HTML5</span></span>"
      );
      break;

    case "education":
      sendTextMessage(
        "I completed my graduation in B.A Hons political science from Delhi University<br>Passing Year : 2022<br><br>Neog Camp<br>A web developer cohort-based in India .Completed the course and learned React JS ,JavaScript ,Redux, Redux-Tookit ,CSS3, HTML5<br>duration:6 months"
      );
      break;

    case "address":
      sendTextMessage(addressString);
      break;
    case "clear":
      clearChat();
      break;
    case "about":
      sendTextMessage(
        "🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://twitter.com/VashnaviChauhan'><span class='bold'>Vashnavi Chauhan</a> with ❤️</span>"
      );
      break;
    case "contact":
      sendTextMessage(contactString);
      break;
    case "projects":
      sendTextMessage(
        "You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/vashnavichauhan1825'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>"
      );
      break;
    case "new":
      sendTextMessage(addressString);
      break;
    default:
      setTimeout(() => {
        sendTextMessage(
          "oohhoo ! I couldn't catch you...😢<br>Send 'more' to know more about usage."
        );
      }, 2000);
      break;
  }
}

function clearChat() {
  document.getElementById("listUL").innerHTML = "";
  waitAndResponce("intro");
}

function sendTextMessage(textToSend) {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.setAttribute("id", "sentlabel");
  dateLabel.id = "sentlabel";
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  greendiv.innerHTML = textToSend;
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function sendResponse() {
  setTimeout(setLastSeen, 1000);
  var date = new Date();
  var myLI = document.createElement("li");
  var myDiv = document.createElement("div");
  var greendiv = document.createElement("div");
  var dateLabel = document.createElement("label");
  dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
  myDiv.setAttribute("class", "received");
  greendiv.setAttribute("class", "grey");
  dateLabel.setAttribute("class", "dateLabel");
  greendiv.innerText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
  myDiv.appendChild(greendiv);
  myLI.appendChild(myDiv);
  greendiv.appendChild(dateLabel);
  document.getElementById("listUL").appendChild(myLI);
  var s = document.getElementById("chatting");
  s.scrollTop = s.scrollHeight;
  playSound();
}

function playSound() {
  audio.play();
}
