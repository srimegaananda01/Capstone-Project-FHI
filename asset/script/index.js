/*humberger bottom*/

function showMenu() {
    var x = document.getElementById('hamburger').innerHTML;
    console.log(x);
    if (x == "-") {
      console.log("close");
      document.getElementById('hamburger').innerHTML = "&#8801;";
      document.getElementById('menu_vertikal').style.display = "none";
    } else {
      console.log("hamburger");
      document.getElementById('hamburger').innerHTML = "-";
      document.getElementById('menu_vertikal').style.display = "block";
    }
  }

/*animate slider*/
AOS.init(
    {
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 300,
    delay: 3,
    duration: 2000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',

  });

/*back to top*/
// Get the button
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 3000 || document.documentElement.scrollTop > 3000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//bmi//
var tinggi,berat,keterangan,bmi;
function hitung() {
	tinggi = parseFloat(document.getElementById("ipt_t").value);
	tinggi /= 100;
	berat = parseFloat(document.getElementById("ipt_b").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi > 27) {
		keterangan = "Gemuk, Kelebihan berat badan tingkat berat";
	}else if ((bmi >= 25.1) & (bmi <= 27)){
		keterangan = "Gemuk, Kelebihan berat badan tingkat ringan";
	}else if ((bmi >= 18.5) & (bmi <= 25)){
		keterangan = "Normal";
	} else if ((bmi >= 17) & (bmi <= 18.4)){
		keterangan = "Kurus, Kekurangan berat badan tingkat ringan";
	}else {
		keterangan = "Kurus, Kekurangan berat badan tingkat berat";
	}
	document.getElementById('bmi').innerHTML = "Hasil perhitungan BMI : " + bmi.toFixed(1);
	document.getElementById('keterangan').innerHTML = keterangan;
}