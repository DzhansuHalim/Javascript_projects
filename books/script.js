(function(){
    'use strict'
    
        const uitvoer = document.getElementById('boeken');
        const xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = () =>{
            if(xhr.readyState == 4 && xhr.status == 200){
                let resultaat = JSON.parse(xhr.responseText);
                //boeken.data = resultaat;
                boek.filteren( resultaat );
                boeken.uitvoeren();
            }
        };
        xhr.open('GET', 'boek.json', true);
        xhr.send();
    
        const boeken = {
            //filter op taal
            filteren(gegevens){
                this.data = gegevens.filter( (bk) => {return bk.taal == "Engels"} )
            },
    
    
            //er wordt hier een eigenschap data aangemaakt
            uitvoeren(){
                let html = "";
                this.data.forEach( boek => {
                    // in het geval van een voortitel
                    let titel = "";
                    if(boek.voortitel){
                        titel += boek.voortitel + " ";
                    }
                    titel += boek.titel;
    
                    let auteurs = "";
                    boek.auteurs.forEach(schrijver =>{
                        let tv = schrijver.tussenvoegsel ? schrijver.tussenvoegsel + " ": "";
                        let separator = " ";
                        auteurs += schrijver.voornaam + " " + schrijver.achternaam;
                    });
    
                    html += `<section class="boek">`;
                    html += `<img class="boek_cover" src="${boek.cover}" alt="${titel}">`;
                    html += `<h3 class="boek_kopje">${boek.titel}</h3>`;
                    html += `<p class="boek_auteur">${auteurs}</p>`;
                    html += `<span class="boek_uitgave"> ${boek.uitgave}</span>`;
                    html += `<span class="boek_ean">ean: ${boek.ean}</span>`;
                    html += `<span class="boek_paginas"> ${boek.paginas}blz</span>`;
                    html += `<span class="boek_taal"> ${boek.taal}</span>`;
                    html += `<div class="boek_prijs">&euro; ${boek.prijs}</div>`;
                    html += `</section>`;
                });
                uitvoer.innerHTML = html;
            }
        };
    
    })();