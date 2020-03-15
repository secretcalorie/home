// jQuery pilihan untuk dropdown

$(document).ready(function () {
    $("#toko").change(function () {
        var val = $(this).val();
        if (val == "Hegar") {
            $("#makanan").html("<option value=51>Siomay</option><option value=58>Baso Tahu</option><option value=97>Telur Rebus</option><option value=34>Paria</option><option value=87>Kentang Rebus</option>");
        } else if (val == "Batagor") {
			$("#makanan").html("<option value=51>Pangsit</option><option value=57>Batagor</option>");
		} else if (val == "Milaris") {
			$("#makanan").html("<option value=280>Roti Panggang</option><option value=249>Roti Kukus</option>");
		} else if (val == "Pak Gio") {
			$("#makanan").html("<option value=421>Mie Ayam</option>");
		} else if (val == "Pelangi") {
			$("#makanan").html("<option value=32>Baso Ikan</option><option value=32>Basreng</option>")
		} else if (val == "Ibu Iwa") {
			$("#makanan").html("<option value=388>Mie Bakso</option><option value=179>Piscok</option>")
		} else if (val == "Ibu Tia") {
			$("#makanan").html("<option value=312>Soto Ayam</option><option value=292>Nasi Timbel</option><option value=320>Pop Mie Ayam</option><option value=243>Rujak</option>")
		} else if (val == "Si Goyang") {
			$("#makanan").html("<option value=333>Nasi Goreng</option><option value=150>Nasi Kuning</option><option value=132>Lotek atau Gado Gado</option>")
		} else if (val == "Ma Ecin") {
			$("#makanan").html("<option value=270>Nasi Putih</option")
		} else if (val == "Ibu Cucu") {
			$("#makanan").html("<option value=250>Kupat Tahu</option><option value=333>Nasi Goreng</option><option value=194.5>Lontong Sayur</option><option value=317>Tongseng</option><option value=300>Indomie Rebus Ayam Bawang</option><option value=380>Indomie Goreng</option>")
		} else if (val == "Bang Zack") {
			$("#makanan").html("<option value=192>Lumpia Basah</option><option value=32>Baso Ikan</option><option value=125>Jamur Crispy</option><option value=132>Jasuke atau Jagung Manis</option><option value=262>Seblak Biasa</option>")
		} 
	});
});

// jQuery ganti placeholder box teks

$(document).ready(function () {
	$("#makanan").change(function() {
		var selectedValue = $(this).val();

		if(selectedValue < 100 ) {
			selectedTextarea = $("#porsi")[0];

			selectedTextarea.placeholder = 
				"Masukan Per Butir";
		}
		else if(selectedValue > 101) {
			selectedTextarea = $("#porsi")[0];

			selectedTextarea.placeholder =
				"Masukan Per Porsi";
		}

	});
});

// Fungsi JS Random

function randomTeks(){
	var a = "Jumlah kalori yang dibutuhkan manusia per harinya dapat menyalakan lampu selama 2 menit 46 detik";
	var b = "Kacang Macadamia menjadi makanan kalori tertinggi dengan memiliki 718 Kkal per 100 g nya";
	var c = "Rata-rata kalori laki-laki adalah 2500 Kkal per harinya";
	var d = "Rata-rata kalori perempuan adalah 2000 KKal per harinya";
	var e = "1 Kkal setara dengan 4184 Joule";
	var teks = [a,b,c,d,e];
	var randomFact = teks[Math.floor(Math.random()*teks.length)];

	return randomFact;
}

// Fungsi JS Menampilkan

function hitungan(){
	
	var makanan = document.getElementById("makanan").value;
	var porsi = document.getElementById("porsi").value;
	var hasil = makanan*porsi + " Kkal";

	document.getElementById("hasil").innerHTML = hasil + ("<br><br><i>Fakta</i> :<br>") + randomTeks();

}

