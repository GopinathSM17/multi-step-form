
// all the right side Box
const step1Box = document.querySelector('.step-1-box');
const step2Box = document.querySelector('.step-2-box');
const step3Box = document.querySelector('.step-3-box');
const step4Box = document.querySelector('.step-4-box');
const step5Box = document.querySelector('.step-5-box');


// all the left side number divs
const leftBoxStep1 = document.querySelector('.left-box-step-number-1');
const leftBoxStep2 = document.querySelector('.left-box-step-number-2');
const leftBoxStep3 = document.querySelector('.left-box-step-number-3');
const leftBoxStep4 = document.querySelector('.left-box-step-number-4');

// all the next button array
const nextButton = document.querySelectorAll('.next-step');


// this let variable is to have 
let currPageIterator = 1;

// 1st page eventListener for next Step button
nextButton[0].addEventListener("click", (e) => {
    e.preventDefault();
    currPageIterator++;

    if (currPageIterator == 2) {
        // name , email, phone Number validations
        const step = step1FormValidation();
        // background color change for left side stepper number

        // change to next page
        if (step) {
            leftBoxStep1.classList.remove("bg-[lightBlue]")
            leftBoxStep2.classList.add("bg-[lightBlue]")
            step1Box.classList.replace("flex", "hidden");
            step2Box.classList.replace("hidden", "flex");
        }

    }
})


// 2nd page eventListener for next Step button
let planSelected = 0;
nextButton[1].addEventListener("click", (e) => {
    e.preventDefault();

    const radioContainer =  document.querySelector('.radio-container');
    console.log(radioContainer);
    
    

    radioContainer.addEventListener('click',(e)=>{
        e.stopPropagation();

        
        const label = e.target.closest('label');
        console.log(planSelected);

        e.stopPropagation();

        if(!label){
            return;
        }
        planSelected = 1;
        console.log(planSelected);
        
    })


    if(planSelected === 1){
        console.log("im here");
        
        currPageIterator++;

        if (currPageIterator == 3) {
    
            // background color change for left step numbers
            leftBoxStep2.classList.remove("bg-[lightBlue]")
            leftBoxStep3.classList.add("bg-[lightBlue]")
    
            // step successfully moves to the next step
            step2Box.classList.replace("flex", "hidden");
            step3Box.classList.replace("hidden", "flex");
        }    
    }

   


})

// 3rd page eventListener for next Step button
nextButton[2].addEventListener("click", (e) => {
    e.preventDefault();
    currPageIterator++;

    if (currPageIterator == 4) {
        leftBoxStep3.classList.remove("bg-[lightBlue]")
        leftBoxStep4.classList.add("bg-[lightBlue]")
        step3Box.classList.replace("flex", "hidden");
        step4Box.classList.replace("hidden", "flex");
        const totalValueDiv  = document.querySelector('.total-plan-amount');
        const val = totalValueDiv.querySelector('p');
        val.innerHTML = `$${planValueInNumbers}/yr`;
    }
});

// 4th page eventListener for next Step button
nextButton[3].addEventListener("click", (e) => {
    e.preventDefault();
    currPageIterator++;

    if (currPageIterator == 5) {
        leftBoxStep4.classList.remove("bg-[lightBlue]")
        step4Box.classList.replace("flex", "hidden");
        step5Box.classList.replace("hidden", "flex");
    }
});


// back button codes

const backButton = document.querySelectorAll("#back-step");

backButton[0].addEventListener("click", (event) => {
    console.log("clicked the back button");
    if (currPageIterator == 2) {
        leftBoxStep2.classList.remove("bg-[lightBlue]")
        leftBoxStep1.classList.add("bg-[lightBlue]")
        step2Box.classList.replace("flex", "hidden");
        step1Box.classList.replace("hidden", "flex");
    }
    currPageIterator--;
});

backButton[1].addEventListener("click", (event) => {
    console.log("clicked the back button");
    if (currPageIterator == 3) {
        leftBoxStep3.classList.remove("bg-[lightBlue]")
        leftBoxStep2.classList.add("bg-[lightBlue]")
        step3Box.classList.replace("flex", "hidden");
        step2Box.classList.replace("hidden", "flex");

    }
    planValueInNumbers =0;
    currPageIterator--;
});

backButton[2].addEventListener("click", (event) => {
    console.log("clicked the back button");
    if (currPageIterator == 4) {
        leftBoxStep4.classList.remove("bg-[lightBlue]")
        leftBoxStep3.classList.add("bg-[lightBlue]")
        step4Box.classList.replace("flex", "hidden");
        step3Box.classList.replace("hidden", "flex");

        // clearing the add ons
        existingPlan = [];
        // clear it in add-ons
        const addOnPlans = document.querySelector('.add-on-plans');
        addOnPlans.innerHTML = "";

        const addOnsOptionContainer = document.querySelector('.options-container')

        const labels = addOnsOptionContainer.querySelectorAll('input');

        labels.forEach(element => {
            element.checked = false;
        });

        let mainPlanValue = document.querySelector('.main-plan-value-step-4');
        mainPlanValue.textContent = planValue;

        const priceContent = mainPlanValue.textContent;
        const price = parseInt(priceContent.replace(/[^0-9]/g, ""), 10);
        planValueInNumbers = price;
    }
    currPageIterator--;
});




// step 1 form validation
const step1FormValidation = () => {
    const nameInput = document.querySelector('.name-input-step1');
    nameInput.addEventListener("input", function (event) {
        // Allow only letters (A-Z, a-z) and spaces
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
    const emailInput = document.querySelector('.email-input-step1');
    emailInput.addEventListener("input", function (event) {
        // Allow only letters (A-Z, a-z) and spaces
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
    const phoneInput = document.querySelector('.phone-input-step1');
    phoneInput.addEventListener("input", function (event) {
        // Allow only letters (A-Z, a-z) and spaces
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
    return true;
}


// total value for 4th step

let totalValue = 0;

//step 2 (Select your plan) using checkBox property

//yearly constant values (main plan)
const arcadeYearlyValues = "$90/yr";
const advancedYearlyValues = "$120/yr";
const proYearlyValues = "$150/yr";

//yearly constant values (add-ons plan)
const onlineServiceYearlyValues = "$10/yr";
const largerStorageYearlyValues = "$20/yr";
const customizableProfileYearlyValues = "$20/yr"

//monthly constant values (main plan)
const arcadeMonthlyValues = "$9/mo";
const advancedMonthlyValues = "$12/mo";
const proMonthlyValues = "$15/mo";


//monthly constant values (add-ons plan)
const onlineServiceMonthlyValues = "$1/mo";
const largerStorageMonthlyValues = "$2/mo";
const customizableProfileMonthlyValues = "$2/mo"



const toggleButton = document.querySelector('.switch');

let changecontent = "yearly";
toggleButton.addEventListener("change", (e) => {

    console.log("I'm checked");

    const arcadeValue = document.querySelector('.arcade-value');
    const advancedValue = document.querySelector('.advanced-value');
    const proValue = document.querySelector('.pro-value')


    // add ons
    const onlineService = document.querySelector('.add-ons-online-service-price');
    console.log(onlineService);

    const largerStorage = document.querySelector('.add-ons-large-storage-price');
    const customizableProfile = document.querySelector('.add-ons-customizable-profile-price');

    if (changecontent === "yearly") {
        console.log("i'm inside the yearly");

        arcadeValue.innerHTML = arcadeYearlyValues;
        advancedValue.innerHTML = advancedYearlyValues;
        proValue.innerHTML = proYearlyValues;

        // add-ons (yearly vlaues)
        onlineService.innerHTML = onlineServiceYearlyValues;
        largerStorage.innerHTML = largerStorageYearlyValues;
        customizableProfile.innerHTML = customizableProfileYearlyValues;

        const monthFree = document.querySelectorAll('.month-free');
        monthFree.forEach(element => {
            element.classList.remove("hidden");
        });

        changecontent = "monthly";
    }

    else {
        console.log("i'm inside monthly");

        arcadeValue.innerHTML = arcadeMonthlyValues;
        advancedValue.innerHTML = advancedMonthlyValues;
        proValue.innerHTML = proMonthlyValues;

        //add- ons (monthly values)
        onlineService.innerHTML = onlineServiceMonthlyValues;
        largerStorage.innerHTML = largerStorageMonthlyValues;
        customizableProfile.innerHTML = customizableProfileMonthlyValues;

        const monthFree = document.querySelectorAll('.month-free');
        monthFree.forEach(element => {
            element.classList.add("hidden");
        });
        changecontent = "yearly";
    }
})

// step 2 plan connecting step 4

// transfer Values
let planType = "";
let planValue = "";
let planValueInNumbers = 0;

const radioContainer = document.querySelector('.radio-container');

let priceValueArr = [];

radioContainer.addEventListener("click", (e) => {
    // console.log(e.target.closest("label"));
    const selectedPlan = e.target.closest("label");

    if (!selectedPlan) {
        return;
    }

    e.stopPropagation();

    planType = selectedPlan.querySelector("h3").textContent;
    planValue = selectedPlan.querySelector("p").textContent;

    // finishing up page
    let mainPlan = document.querySelector('.main-plan-step-4');
    let mainPlanValue = document.querySelector('.main-plan-value-step-4')


    mainPlan.textContent = planType;
    mainPlanValue.textContent = planValue;

    const priceContent = mainPlanValue.textContent;
    const price = parseInt(priceContent.replace(/[^0-9]/g, ""), 10);


    if(!priceValueArr.includes(price)){
        priceValueArr.push(price);
        planValueInNumbers += price;
        planSelected = 1;
    }

})

// step 3 (add-ons plan) using checkBox property

let onlineServiceAddOn = 0;
let largerStorageAddOn = 0;
let customizableProfileAddOn = 0;
let existingPlan = [];


const addOnsOptionContainer = document.querySelector('.options-container')



addOnsOptionContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    const label = e.target.closest('label');

    if (!label) {
        return;
    }


    let addOnPlan = label.querySelector('h3').textContent;
    const addOnPlanValue = label.querySelector('.add-ons-price').textContent;

    //create the div to add the plan and plan value

    const planDiv = document.createElement('div');
    planDiv.classList.add("plan-type", "flex", "flex-row", "justify-between");

    const h3Div = document.createElement('h3');
    h3Div.classList.add("text-[var(--coolgray)]");
    h3Div.textContent = addOnPlan;

    const parentDivForParagraph = document.createElement('div');
    parentDivForParagraph.classList.add("plan-value", "flex");


    const paragraphTag = document.createElement('p');
    paragraphTag.classList.add("text-[var(--marineblue)]");
    paragraphTag.textContent = addOnPlanValue;

    parentDivForParagraph.appendChild(paragraphTag);

    planDiv.appendChild(h3Div);
    planDiv.appendChild(parentDivForParagraph)

    const addOnPlans = document.querySelector('.add-on-plans');

    console.log(existingPlan);

    if (!existingPlan.includes(addOnPlan) ) {
        existingPlan.push(addOnPlan); 
        addOnPlans.appendChild(planDiv);   
        const val = parseInt(addOnPlanValue.replace(/[^0-9]/g, ""), 10);
        planValueInNumbers += val; 
    }

})



