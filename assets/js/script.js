const btnPlay = document.querySelector('#button .mulai');
const messege = document.querySelector('.messege-box');
const messege1 = document.querySelector('.messege-box1');
const messege2 = document.querySelector('.messege-box2');
const messege2P = document.querySelector('.messege-box2 .pesan p');
const hilang1 = document.querySelector('.hilang1');
const hilang2 = document.querySelector('.hilang2');
const nama = document.querySelectorAll('.nama h2')[0];
const nama1 = document.querySelectorAll('.nama h2')[1];
const waktu = document.getElementById('waktu');
const jam = waktu.querySelector('h1');
const hari = waktu.querySelector('p');
const bg1 = document.querySelector('.background1');
const bg2 = document.querySelector('.background2');
const body = document.querySelector('.body');
const audio = document.querySelector('.audio');

body.classList.add('background1');

const date = new Date();
const hour = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const day = date.getDay();
const tgl = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

hari.innerHTML = `${dayID()}, ${tgl} ${monthID()} ${year}`;
jam.innerHTML = `${hour}:${minutes}`;

// Dirubah 
const pengirim = "Tamaa";
const nomorWa = "6285156581907"; // awalan nomor 0 harus di awalin 62
const textWa = "Hi tam, aku sudah bacaa";
const pesan = `Happy birthday sass, wish you all the best`;

// Initialize attempt counter
let attemptCounter = 0;

if (pengirim) {
  nama.innerHTML = pengirim;
  nama1.innerHTML = pengirim;
} else {
  nama.innerHTML = "Nama Kamu";
  nama1.innerHTML = "Nama Kamu";
}

btnPlay.addEventListener('click', () => {
  audio.play();
  messege1.style.display = "block";
  messege1.style.transform = "translateX(0)";
  btnPlay.style.display = "none";
  hilang1.style.display = "block";
});

hilang1.addEventListener('click', () => {
  messege1.style.display = "none";
  messege2.style.transform = "translateX(0)";
  hilang1.style.display = "none";
  hilang2.style.display = "block";
  Swal.fire({
    imageUrl: "/assets/img/stiker_mylove.gif",
    imageHeight: 120,
    title: 'Masukkin Password Duluu',
    html: '<p>hayoo coba tebak apaa passwordnya wkwkwk</p>',
    input: 'password',
    inputPlaceholder: 'Password',
    confirmButtonText: 'Kirim',
    focusConfirm: false,
    preConfirm: (password) => {
      attemptCounter++; // Increment attempt counter
      let message = 'yah salah :(';
      if (password === 'Maret' || password === 'maret' || password === 'MARET' || password === 'march' || password === 'March' || password === 'MARCH') {
        body.classList.replace('background1', 'background2');
        body.classList.add('muncul');
        
        let i = 0;
        const speed = 50;
        let txt = `${pesan}`;

        const typeWriter = () => {
          if (i < txt.length) {
            messege2P.innerHTML += txt.charAt(i);
            i++;
            messege2.classList.remove('kelip');
            hilang2.style.display = "none";
            setTimeout(typeWriter, speed);
          } else {
            messege2.classList.add('kelip');
            hilang2.style.display = "block";
          }
        };
        typeWriter();
      } else {
        if (attemptCounter === 1) {
          message = `netnott... wkwk`;
        } else if (attemptCounter === 2) {
          message = `passwordnya itu bulan pertama kita kenal wkwk`;
        } else if (attemptCounter === 3) {
          message = `netnott... <br> ayo coba diinget lagi ya cantikk hehe <3`;
        }
          else if (attemptCounter === 3 ) {
          message = `yahh masih salahh :(`;
        }
        else if (attemptCounter > 3 ) {
          message = `hmm masa lupa si huhuu`;
        }
        Swal.showValidationMessage(message);
      }
      return { password };
    }
  });
});

hilang2.addEventListener('click', () => {
  audio.pause(); // Menambahkan baris ini untuk menghentikan musik
  window.open(`https://wa.me/${nomorWa}/?text=${textWa}`, '_blank');
});
