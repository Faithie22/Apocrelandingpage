	const menu = document.getElementById("menu");
					menu.addEventListener("click", openNav);
 function openNav() {	document.getElementById("sidenav").style.width = "70%";
		}

const btn = document.getElementById("btn");
   btn.addEventListener("click", closeNav);
		function closeNav() {		document.getElementById("sidenav").style.width = "0%";
		}