(function(){
    'use strict'
    
        const forms = document.forms;
        const orderForm = forms.orderForm;
    
        const naam = orderForm.name;
        const voornaam = orderForm.firstname;
        const date = orderForm.dateOrder;
        const order = orderForm.order;
        const sub = orderForm.submitBut;
    
        sub.addEventListener('click', showItems);
    
        function showItems(e){
            if(naam.value == null || naam.value == ''){
                naam.style.backgroundColor = "red";
                naam.setCustomValidity('Naam ingevuld worden');
                naam.reportValidity();
                return false;
            }
            else{
                naam.style.backgroundColor = "white";
                naam.setCustomValidity('');
            };
    
            if(voornaam.value == null || voornaam.value == ''){
                voornaam.style.backgroundColor = "red";
                voornaam.setCustomValidity('Voornaam ingevuld worden');
                voornaam.reportValidity();
                return false;
            }
            else{
                voornaam.style.backgroundColor = "white";
                voornaam.setCustomValidity('');
            };
            
    
            if(dateOrder.value == null || dateOrder.value == ''){
                dateOrder.style.backgroundColor = "red";
                dateOrder.setCustomValidity('Datum ingevuld worden');
                dateOrder.reportValidity();
                return false;
            }
            else{
                dateOrder.style.backgroundColor = "white";
                dateOrder.setCustomValidity('');
            };
    
            if(order.value == null || order.value == ''){
                order.style.backgroundColor = "red";
                order.setCustomValidity('Order ingevuld worden');
                order.reportValidity();
                return false;
            }
            else{
                order.style.backgroundColor = "white";
                order.setCustomValidity('');          
            };
    
     
            e.preventDefault();
                    
            const ulElem = document.createElement('ul');
            const nameLi = document.createElement('li');
            const firstnameLi = document.createElement('li');
            const dateLi = document.createElement('li');
            const oerdeLi = document.createElement('li');
    
            nameLi.innerText = naam.value;
            firstnameLi.innerText = voornaam.value;
            dateLi.innerText = date.value;
            oerdeLi.innerText = order.value;
    
            ulElem.append(nameLi);
            ulElem.append(firstnameLi);
            ulElem.append(dateLi);
            ulElem.append(oerdeLi);
            
            document.getElementById('toon').append(ulElem);
            
            naam.value = '';
            voornaam.value = '';
            dateOrder.value = null;
            order.value = '';
    
        };
    
    
    })();