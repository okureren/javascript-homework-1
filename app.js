document.body.style.backgroundColor = "#E6E6FA";

let user_name = prompt("Merhaba, adınız nedir?");
if (user_name == 0) {
    alert("İsimsiz Giriş Yaptınız");
}
let firstdiv = document.querySelector("#firstdiv");
let seconddiv = document.querySelector("#seconddiv");
let thirddiv = document.querySelector("#thirddiv");

firstdiv.innerHTML = `
    <div class="text-center mt-5">
        <img src="https://cdn.sanity.io/images/9kdepi1d/production/65c832d202a503b15d99e628f4313782f3ef50db-300x62.png">
        </img>
    </div>
    <div class="text-center fs-3 mt-5" style="color: #FF8C00">Merhaba <strong> ${user_name}</strong>, Hoşgeldin!</div>    
`


function currentDate() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let doW = today.getDay();

    switch (doW) {
        case 1:
            doW = "Pazartesi";
            break;
        case 2:
            doW = "Salı";
            break;
        case 3:
            doW = "Çarşamba";
            break;
        case 4:
            doW = "Perşembe";
            break;
        case 5:
            doW = "Cuma";
            break;
        case 6:
            dow = "Cumartesi";
            break;
        case 7:
            doW = "Pazar";
            break;
        default:
            dow = "Day"
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let getTime = hours + ":" + minutes + ":" + seconds + " " + doW;
    document.querySelector("#seconddiv").innerText = getTime;
    document.querySelector("#seconddiv").textContent = getTime;
}


currentDate();

thirddiv.innerHTML = `
<div class="text-center fs-4" style="color: #FF8C00">
    tarihinde <strong>Kodluyoruz Frontend Web Development Patikası</strong> 'nın
    Javascript bölümü 1. Ödevindesiniz.
</div>
`











