const weekday = ["ravivar", "sonvar", "mangalvar", "bhuddvar", "bhraspativar", "shukravar", "sanivar"];

// const shubhChaughadiya=["Amrit","Shubh","Labh","Char"];
// const vipreetChaughadiya=["Udveg","Kaal","Rog"];

const rahuKaal = {
    "ravivar": '990',
    "sonvar": '450',
    "mangalvar": '900',
    "bhuddvar": '720',
    "bhraspatvar": '810',
    "shukravar": '630',
    "sanivar": '540'
};

// Object for "chaughadiya"
const chaughadiya = {
    "ravivar": { '360': "Udveg", '450': "Char", '540': "Labh", '630': "Amrit", '720': "Kaal", '810': "Shubh", '900': "Rog", '990': "Udveg", '1080': "Shubh", '1170': "Amrit", '1260': "Char", '1350': "Rog", '0': "Kaal", '90': "Labh", '180': "Udveg", '270': "Shubh" },
    "sonvar": { '360': "Amrit", '450': "Kaal", '540': "Shubh", '630': "Rog", '720': "Udveg", '810': "Char", '900': "Labh", '990': "Amrit", '1080': "Char", '1170': "Rog", '1260': "Kaal", '1350': "Labh", '0': "Udveg", '90': "Shubh", '180': "Amrit", '270': "Char" },
    "mangalvar": { '360': "Rog", '450': "Udveg", '540': "Char", '630': "Labh", '720': "Amrit", '810': "Kaal", '900': "Shubh", '990': "Rog", '1080': "Kaal", '1170': "Labh", '1260': "Udveg", '1350': "Shubh", '0': "Amrit", '90': "Char", '180': "Rog", '270': "Kaal" },
    "bhuddvar": { '360': "Labh", '450': "Amrit", '540': "Kaal", '630': "Shubh", '720': "Rog", '810': "Udveg", '900': "Char", '990': "Labh", '1080': "Udveg", '1170': "Shubh", '1260': "Amrit", '1350': "Char", '0': "Rog", '90': "Kaal", '180': "Labh", '270': "Udveg" },
    "bhraspativar": { '360': "Shubh", '450': "Rog", '540': "Udveg", '630': "Char", '720': "Labh", '810': "Amrit", '900': "Kaal", '990': "Shubh", '1080': "Amrit", '1170': "Char", '1260': "Rog", '1350': "Kaal", '0': "Labh", '90': "Udveg", '180': "Shubh", '270': "Amrit" },
    "shukravar": { '360': "Char", '450': "Labh", '540': "Amrit", '630': "Kaal", '720': "Shubh", '810': "Rog", '900': "Udveg", '990': "Char", '1080': "Rog", '1170': "Kaal", '1260': "Labh", '1350': "Udveg", '0': "Shubh", '90': "Amrit", '180': "Char", '270': "Rog" },
    "sanivar": { '360': "Kaal", '450': "Shubh", '540': "Rog", '630': "Udveg", '720': "Char", '810': "Labh", '900': "Amrit", '990': "Kaal", '1080': "Labh", '1170': "Udveg", '1260': "Shubh", '1350': "Amrit", '0': "Char", '90': "Rog", '180': "Kaal", '270': "Labh" }

};

var urlPath = '';

function displayPehar() {
    var dateTime = new Date();
    var day = dateTime.getDay();
    var currentHour = dateTime.getHours();
    var currentMinute = dateTime.getMinutes();
    //var currentSecond=dateTime.getSeconds();
    var rolledMinute = ((currentHour * 60) + (currentMinute));
    var objectData = chaughadiya[weekday[day]];

    for (let pehar in objectData) {
        pehar = parseInt(pehar);
        if (rolledMinute >= pehar && rolledMinute <= (pehar + 90)) {
            document.querySelector(".chaughadiya-p").innerText = `'${objectData[pehar]}'`;
            switch (objectData[pehar]) {
                case "Amrit": document.querySelector(".chaughadiya-p").style.color = "#F26800";

                    break;
                case "Shubh": document.querySelector(".chaughadiya-p").style.color = "#F23030";

                    break;
                case "Labh": document.querySelector(".chaughadiya-p").style.color = "#F20746";

                    break;
                case "Char": document.querySelector(".chaughadiya-p").style.color = "#1BBF15";

                    break;
                case "Udveg": document.querySelector(".chaughadiya-p").style.color = "#890085";

                    break;
                case "Kaal": document.querySelector(".chaughadiya-p").style.color = "#2B335C";

                    break;
                case "Rog": document.querySelector(".chaughadiya-p").style.color = "#880015";

                    break;
                default: console.log(`There is some error in code`);
                    break;
            }

            if (parseInt(rahuKaal[weekday[day]]) === pehar) {
                document.querySelector(".rahukaal").innerText = "राहु - काल ' सक्रिय है '";
                document.querySelector(".chaughadiya-p").style.color = "#F20505";
                document.querySelector(".rahukaal").style.color = "#F20505";
            }
            else {
                document.querySelector(".rahukaal").innerText = "राहु - काल ' सक्रिय-नहीं है '";
            }
            if(currentHour>18){
                urlPath="url('https://wallpaperaccess.com/full/2637581.jpg')";
            }
            else{
                urlPath="url('https://files.wallpaperpass.com/2019/09/8k%20wallpaper%20041%20-%205120x2880.jpg')";
            }
        }
    }
}
setInterval(displayPehar, 1);

function mouseover(value) {
    value.style.backgroundImage = urlPath;
}

function mouseout(value) {
    value.style.backgroundImage = '';
}