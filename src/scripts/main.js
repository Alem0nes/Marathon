AOS.init();

const dateEvent = new Date("oct 27, 2024     8:45:00");
const timeStampEvent = dateEvent.getTime();

const contTime = setInterval(function () {
    const now = new Date();
    const timeStampAtual = now.getTime();

    const distanceEvent = timeStampEvent - timeStampAtual;

    const dayInMin = 1000*60*60*24;
    const hourInMin = 1000*60*60;
    const minInMin = 1000*60;

    const dayForEvent = Math.floor(distanceEvent / dayInMin);
    const hourForEvent = Math.floor((distanceEvent % dayInMin) / hourInMin);
    const minForEvent = Math.floor((distanceEvent % hourInMin) / minInMin)
    const segForEvent = Math.floor((distanceEvent % minInMin)/1000)

    document.getElementById ('contador').innerHTML = `${dayForEvent}d ${hourForEvent}h ${minForEvent}m ${segForEvent}s`

    if(distanceEvent < 0) {
        clearInterval(contTime);
        document.getElementById ('contador').innerHTML = `<b>You are late!</b>`
    } 

},1000)