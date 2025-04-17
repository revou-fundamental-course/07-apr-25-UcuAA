console.log('ok')

// Funtion to validate the form
function validateForm() {
    console.log('Form validation started')
    const name = document.getElementById('name').value;

    if (name == '') {
        /// Disini logika ketika gagal
        alert('Please enter your name');
    } else {
        /// Disini logika ketika sukses
        alert('Form submitted successfully');
    }

    // Nama Bulan
    const bulan = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    // Waktu saat ini
    let date = new Date();
    let tanggal = date.getDate()+" "+(bulan[date.getMonth()])+" "+ date.getFullYear();
    let jam = date.getHours() +":"+ date.getMinutes();

    WaktuIni = jam+","+tanggal



    //Data input Form
    let nama = document.forms["message-form"]["nama"].value;
    let ttl = document.forms["message-form"]["ttl"].value;
    let gender = document.forms["message-form"]["gender"].value;
    let pesan = document.forms["message-form"]["pesan"].value;


    // Validasi Form 
    if( nama === "" || ttl === "" || gender === "" || pesan === "" ) {
        alert("Input form tidak boleh kosong!");
        return false;
}

let indexBanner = 0;

function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    console.log('Banner function started');
    const bannerList = document.getElementsByClassName('banner-img');
    console.log('Banner list' bannerList)

    // Check if indexBanner is greater than the legth of the bannerList
    if (indexBanner > bannerList.length - 1) {
        indexBanner = 0;
    }

    // Hide banner with looping
    for (let i =0; i < bannerList.length; i++) {
        bannerList[i].style = 'display: none';
    }

    // Show the banner
    bannerList[indexBanner].style = 'display: block';
}

showBanner();

// Set interval to change the banner every 3 seconds
setInterval(() => {
    nextBanner();
}, 3000)
// Function to tonggle the menu