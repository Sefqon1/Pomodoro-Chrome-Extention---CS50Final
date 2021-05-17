let timerID;
let timerTime;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd === 'START_TIMER') {
        timerTime = new Date(request.when);
        timerId = setTimeout(() => {

        }, timerTime.getTime() - Date.now());
    } 
    else if (request.cmd === 'GET_TIME') {
        sendResponse( { time: timerTime });
    } 
});