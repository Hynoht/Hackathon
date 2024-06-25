let span = document.querySelector(".content-3d");
		let spans = document.querySelectorAll("span");
		let card = document.querySelector(".elmnt");
		let hidden = document.querySelector(".hidding");
		let exit = document.querySelector(".exit");
		let menu = document.querySelector(".href");
		let list = document.querySelector(".list");
		let xx = document.querySelector(".xx");

		let content = function (nom, birth, regne, descrit) {
			hidden.innerHTML = 
			`
				<div class="elmnt">
					<div class="exit">
						<i class="fa-solid fa-x"></i>
					</div>
					<div class="img-class 1">
						<img src="image/${nom}.jpeg" alt="alasora" srcset="">
					</div>
					<span class="txt">
						<strong>` + nom + `</strong> (` + birth +`)
					</span>
					<p class="descrit">
						` + descrit + `
					</p>
				</div>
				`;
		};

		
		spans.forEach ((element) =>
		element.onclick = function () {
			let name = element.className;
			hidden.style.display = "flex";
			fetch('css/list.json')
			.then(response => response.json())
			.then(data => {
				content(name, data[name].birth, data[name].regne, data[name].descrit);
				let exit = document.querySelector(".exit");
				let hiddens = document.querySelector(".hidding");
				let cards = document.querySelector(".elmnt");
			
				exit.onclick =  function () {
					cards.style.visibility = "hidden";
					hiddens.style.display = "none";
				}
			})
			.catch(error => {
				console.error("Erreur lors du chargement du JSON :", error);
				});
			}
			);
			
			let counter = 0;
			function count () {
				span.style.transform = "perspective(1000px) rotateY("+ counter +"deg)";
				if (counter == 360)
				counter = 0;
			counter++;
		}

		window.onload = function () {
			setInterval(count, 90);
		}

		menu.onclick = function () {
			list.classList.add("afficher");
			xx.style.display = "block";
			menu.style.display = "none";
			xx.onclick = function () {
				xx.style.display = "none";
				menu.style.display = "block";
				list.classList.remove("afficher");
			}
		}