function fabTampilan() {
	var isiBody = document.getElementById('bodyPotong');
	var isiFooter = document.getElementById('bagianFooter');
	var classFooter = isiFooter.className;
	isiFooter.className = classFooter == "footerdarkMode" ? "footerlightMode" : "footerdarkMode";
	var classBody = isiBody.className;
	isiBody.className = classBody == "darkMode" ? "lightMode" : "darkMode";
}