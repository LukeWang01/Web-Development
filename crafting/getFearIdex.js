function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

async function getIdex(timespan) {
    let output = ""; 
    let tmp_timestamp = parseInt(document.getElementsByClassName("market-fng-gauge__timestamp")[0].dataset.timestamp); 
    let tmp_idx = document.getElementsByClassName("market-fng-gauge__dial-number-value")[0].innerText; 
    let datetime = new Date(tmp_timestamp)
    output += tmp_timestamp + "," + datetime + "," + tmp_idx + ";"; 
    console.log(output);  
    await delay(timespan);
    return output;
}

async function run(duration=3600, timespan=5000) {
    for (let i = 0; i < duration; i++)
    {
        await getIdex(timespan);
    }
}
