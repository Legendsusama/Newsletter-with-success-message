





let buttonSubs = document.querySelector(".subscribeBtn");
let pattern = /^[a-zA-z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
let message = document.querySelector(".message");
let inputField = document.querySelector("input[type='text']");
let main = document.querySelector("main");



buttonSubs.addEventListener("click", ()=>{

    let email = inputField.value;

    if(email==""){

        message.innerHTML = "Please write Something";
        message.className = "text-red-500";
        inputField.classList.remove("border-black");
        inputField.classList.add("border-red-500", "bg-red-200", "text-red-500");


    }else if(pattern.test(email)){
        
        successState(email);



    }else{
        message.innerHTML = "Invalid Email";
        message.className = "text-red-500"
        inputField.classList.remove("border-black");
        inputField.classList.add("border-red-500", "bg-red-200", "text-red-500");
    }

})


inputField.addEventListener("input", (event)=>{
    if(pattern.test(event.target.value)){

        message.innerHTML = "Valid Email";
        message.classList.remove("text-red-500");
        inputField.classList.remove("border-red-500","bg-red-200", "text-red-500");
        inputField.classList.add("border-black");

    }else{
        message.innerHTML = "";
    }
})



function successState(email){

    main.innerHTML = `

        <div class="bg-white sm:rounded-lg p-10 w-full h-screen flex flex-col sm:justify-around   sm:w-[400px] sm:h-[500px]">

            <span class="block">
                <img class="w-14 h-14" src="./assets/images/icon-list.svg"/>
            </span>
            

            <h2 class="text-5xl font-bold text-purple-950 py-5">
                Thanks for<br> subscribing!
            </h2>

            <p class="py-4">
                A confirmation email has been sent to <strong>${email}</strong>. 
                Please open it and click the button inside to confirm your subscription.
            </p>


            <button class="custom-btn my-2 dismiss">
                Dismiss message
            </button>
            
        </div>

    `

    let dismissBtn = document.querySelector(".dismiss");
    
    dismissBtn.addEventListener('click', ()=>{
        location.reload();
    })

}

inputField.value = "";

