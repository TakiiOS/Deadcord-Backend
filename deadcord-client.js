var checkExist = setInterval(function() {
  if (document.querySelector("section[class='panels-j1Uci_']")) {

    // Show Deadcord splash
    console.log("%cDeadcord - Injected", "color: #9646eb; background: #1f1a24; font-size: 40px; text-shadow: 2px; 2px black; padding: 10px;");
    console.log("%cDeadcord has been injected into the Discord core. Please ensure that the Deadcord Engine is running. If you have any problems, visit our GitHub.","color: #f7f7f7; padding: 10px; background-color: #1f1a24; font-size: 20px;");

    try {

      // Inject main panel
      var container = document.querySelector("section[class='panels-j1Uci_']");
      container.insertAdjacentHTML('afterend', "<section class='panels-j1Uci_' aria-label='Deadcord Area' style='background-color:#3a3d5d; border-top: solid #9a34ff;'><div class='wrapper-24pKcD'></div><div class='container-3baos1'><div class='flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6' style='flex: 0 1 auto;'><button aria-label='Ping Tokens' id='ping_tokens' type='button' class='button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN' style='color:#fff;'><div class='contents-18-Yxp'><svg fill='none' height='24' width='24' viewBox='0 0 24 24' stroke='currentColor'> <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'></path></svg></div></button><button aria-label='Join Tokens' id='join_tokens' type='button' class='button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN' style='color:#fff;'><div class='contents-18-Yxp'><svg fill='none' height='24' width='24' viewBox='0 0 24 24' stroke='currentColor'> <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z'></path></svg></div></button><button aria-label='Leave Tokens' id='leave_tokens' type='button' class='button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN' style='color:#fff;'><div class='contents-18-Yxp'><svg fill='none' height='24' width='24' viewBox='0 0 24 24' stroke='currentColor'> <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z'></path></svg></div></button><button aria-label='Nick Tokens' id='nick_tokens' type='button' class='button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN' style='color:#fff;'><div class='contents-18-Yxp'><svg fill='none' height='24' width='24' viewBox='0 0 24 24' stroke='currentColor'> <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'></path></svg></div></button><button aria-label='Deadcord Start Spam' id='spam_deadcord' type='button' class='button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN' style='color:#fff;'><div class='contents-18-Yxp'><svg fill='none' height='24' width='24' viewBox='0 0 24 24' stroke='currentColor'> <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg></div></button><button aria-label='Deadcord Stop Spam' id='stop_spam_deadcord' type='button' class='button-14-BFJ enabled-2cQ-u7 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN' style='color:#ff007f;'><div class='contents-18-Yxp'><svg fill='none' height='24' width='24' viewBox='0 0 24 24' stroke='currentColor'> <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg></div></button></div></div></section>")

      // Add listeners
      document.getElementById('ping_tokens').addEventListener('click', ping_tokens, false);
      document.getElementById('join_tokens').addEventListener('click', join_tokens, false);
      document.getElementById('leave_tokens').addEventListener('click', leave_tokens, false);
      document.getElementById('nick_tokens').addEventListener('click', nick_tokens, false);
      document.getElementById('spam_deadcord').addEventListener('click', start_spam, false);
      document.getElementById('stop_spam_deadcord').addEventListener('click', stop_spam, false);

    }
    catch (err) {
      clearInterval(checkExist);
      console.error(`Caught Error on injection: ${err}. This could mean invalid injection syntax.`);
    }
    clearInterval(checkExist);
  }}, 100);

function ping_tokens() {
  const ping_tokens = get_data('ping-tokens')
}

function join_tokens() {

  // Join the target server.
  const join = post_data(`join-server/${get_url()[4]}/`, {
    'invite': get_text_data()[0],
    'channel_id': get_url()[5]
  });
}

function leave_tokens() {

 // Leave the target server.
 const leave = get_data(`leave-server/${get_url()[4]}`);

}

function nick_tokens() {

  // Chnage all token nicknames
  const start = post_data(`change-nick/${get_url()[4]}`, {
    'nick': get_text_data().join("")
  });

}

function start_spam() {

  // Build message string and start spam.
  const start = post_data(`spam/${get_url()[4]}`, {
    'message_content': get_text_data().join("")
  });

}

function stop_spam() {

  // Send signal to stop all spam.
  stop_spam = get_data('stop-spam');

}

function notify(text){

  document.querySelector(".base-3dtUhz").insertAdjacentHTML("afterbegin", `<div class="notice-3bPHh-" style="background-color:#722fb5;color:white;">${text}</div>`);

  setTimeout(function() {
    document.querySelector("div[class='notice-3bPHh-']").remove();
  }, 5500);

}

function error(text){

   console.log(`%c${text}`,"color: #f7f7f7; padding: 10px; background-color: #7a183e; font-size: 20px;");

}

async function post_data(url, data = {}) {
  try {
      fetch(`http://127.0.0.1:4321/deadcord/${url}`,{
        method: 'POST',
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify(data),
        headers: {"Content-Type": "text/plain"}
      })
      .then(response => response.json())
      .then((json) => { notify(json["message"]) })
  } catch (err){
    error(`An error occured while sending a POST request to the Deadcord Engine: ${err}`)
  }
}

async function get_data(endpoint) {
  try {
    const response = await fetch(`http://127.0.0.1:4321/deadcord/${endpoint}`)
    .then(response => response.json())
    notify(response["message"])
  } catch (err) {
    error(`An error occurred while sending a POST request to the Deadcord Engine: ${err}`)
  }
}

function get_url() {
  return window.location.href.split("/")
}

function get_text_data(){
  if(document.querySelector("span[data-slate-string='true']")){

    text = document.querySelectorAll("span[data-slate-string='true']");

    found_text = []

    for (var i in text) {
      var extracted = text[i].innerText;
      if (typeof extracted !== 'undefined'){
        found_text.push(extracted)
      }
    }

    return found_text

  } else {
    notify("You must type the needed paramters into Discord messages bar. <b>You do not need to send them!</b>", 2)
  }

}
