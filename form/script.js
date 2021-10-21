(function(){
    'use strict'

    /////SELECT-----------------------------
    const forms = document.forms;
    const registerF = forms.registerForm;

    const name = registerF.name;
    const email = registerForm.email;
    const password = registerForm.password;
    const submit = registerF.submitBut;

  
    const show1 = document.querySelector('.show1');
    const show2 = document.querySelector('.show2');
    const show3 = document.querySelector('.show3');
    const description1 = document.querySelector('.description1');
    const description2 = document.querySelector('.description2');
    const description3 = document.querySelector('.description3');
    let html = "";            



    ///EVENTLISTENER---------------------------
    submit.addEventListener("click",showItems);
    //window.addEventListener('DOMContentLoaded',showItems)



    ///FUNCTIONS-----------------------------
    function showItems(e){
        e.preventDefault();

        //name-------------
        if(name.value === null ||name.value === "" ){
            checkerror(name, show1);
            description1.innerHTML = "Name is required field.";
        }
        else{
            checkcorrect(name, show1);
            description1.innerHTML = ""
        }


        //email--------------
        if(email.value === null ||email.value === "" ){
            checkerror(email, show2);
            description2.innerHTML = "Email is required field.";
        }
        else{  
            if(validateEmail(email.value) != true){
                checkerror(email, show2);
                description2.innerHTML = "Email format is incorrect.";
            }
            else{
                checkcorrect(email, show2);
                description2.innerHTML = "";
            }
      
        }

        //passwoord-------------
        if(password.value === null ||password.value === "" ){
            checkerror(password, show3);
            description3.innerHTML = "Password is required field.";
        }
        else{
            if(validatePassword(password.value) != true){   
                
                checkerror(password, show3);
                description3.innerHTML = `At least one lower case <br> At least one digit <br> Min 7 characters`;

                /*  if(password.value.length < 7){
                    checkerror(password, show3);
                    description3.innerHTML = `Min 7 characters.`;
                }
                else if(/\d/.test(password.value) != true){
                    checkerror(password, show3);
                    description3.innerHTML = `At least one digit`;
                }
                else if(password.value.toUpperCase() != password.value){
                    checkerror(password, show3);
                    description3.innerHTML = `At least one lower case`;
                }
                else if(password.value.toUpperCase() == password.value){
                    checkerror(password, show3);
                    description3.innerHTML = `At least one upper case`;
                } */

            }
            else{
                checkcorrect(password, show3);
                description3.innerHTML = ""
            }
          
        }

    };




    function checkerror(lableName, showIcon){
        lableName.classList.add("error");
        lableName.classList.remove("correct");
        html = `<i class="fas fa-times errorIcon"></i>`;
        showIcon.innerHTML = html;
    };

    function checkcorrect(lableName, showIcon){
        html = "";
        lableName.classList.remove("error");
        lableName.classList.add("correct");
        html = `<i class="fas fa-check correctIcon"></i>`;
        showIcon.innerHTML = html; 
    };

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        var re = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/
        return re.test(password);
    }


    

})();





























































/* (function(){
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
    
    
    })(); */

