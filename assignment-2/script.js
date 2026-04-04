// Interactivity for Welcome page

const welcomePage = document.getElementById("welcome-page");
const questions = document.getElementById("questions");
const styling = document.getElementById("styling");
const finalLook = document.getElementById("results");

questions.style.display = "none"; // this will hide the question section until the user clicks the start button
styling.style.display = "none"; // hides styling section until user clicks start button
finalLook.style.display = "none"; // hides final look section until user clicks start button

// start button logic using event listener

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function(){ // when button is clicked, the user will be taken to the next section of the page
    welcomePage.style.display = "none"; // use .styles to hide the welcome page
    questions.style.display = "block"; // block helps to show the next section of the page
    styling.style.display =  "none"; // hides styling section until user clicks the continue button
    finalLook.style.display = "none"; 
})

// accessing checked properties and input value for the question section

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const casualBtn = document.getElementById("casualBtn");
const partyBtn = document.getElementById("partyBtn");
const workBtn = document.getElementById("workBtn");

const continueBtn = document.getElementById("continue-btn");
    
// continue button logic using onclick function
continueBtn.onclick = function(){ 

    welcomePage.style.display = "none";
    questions.style.display = "none";
    styling.style.display = "block"; // styling section will appear after user the click continue button
    finalLook.style.display = "none";

  if  (casualBtn.checked){
    currentTops = categories.casual.tops;
    currentBottoms = categories.casual.bottoms;
    currentShoes = categories.casual.shoes;

    currentTopIndex = 0;
    currentBottomIndex = 0;
    currentShoeIndex = 0;

    showTop();
    showBottom();
    showShoe();

  }
    else if (partyBtn.checked){
    currentTops = categories.party.tops;
    currentBottoms = categories.party.bottoms;
    currentShoes = categories.party.shoes;

    currentTopIndex = 0;
    currentBottomIndex = 0;
    currentShoeIndex = 0;

    showTop();
    showBottom();
    showShoe();

  } else if (workBtn.checked){
    currentTops = categories.work.tops;
    currentBottoms = categories.work.bottoms;
    currentShoes = categories.work.shoes;

    currentTopIndex = 0;
    currentBottomIndex = 0;
    currentShoeIndex = 0;

    showTop();
    showBottom();
    showShoe();
  };

    if (yesBtn.checked){
        currentAddOns = categories.addOns;
        currentAddOnIndex = 0;
        showAddOns();
        addOnImage.style.display = "block";
        styling.style.display = "block";
        welcomePage.style.display = "none";
        questions.style.display = "none";
        alert("Get 15% off on accessories 💍✨");
        console.log(alert);
        console.log("yes"); // this will log "yes" in the console if the user clicks the yes checkbox 
    }
    else if (noBtn.checked){
        addOnImage.style.display = "none";
        styling.style.display = "block";
        welcomePage.style.display = "none";
        questions.style.display = "none";
        prevBtn0.style.display = "none";
        nextBtn0.style.display = "none" 
        console.log("no");
    };
}

// caraousel buttons for the dress up section
const prevBtn0 = document.getElementById("0prevBtn");
const nextBtn0 = document.getElementById("0nextBtn");
const prevBtn1 = document.getElementById("1prevBtn");
const nextBtn1 = document.getElementById("1nextBtn");
const prevBtn2 = document.getElementById("2prevBtn");
const nextBtn2 = document.getElementById("2nextBtn");
const prevBtn3 = document.getElementById("3prevBtn");
const nextBtn3 = document.getElementById("3nextBtn");

const categories = {
   addOns: [
       { image: "clothing-images/bag.jpg", price: 20 },
       { image:  "clothing-images/jewellery.jpg", price: 15},
    ],
   casual: {
    tops: [  
       { image: "clothing-images/casual-baby-tee.jpg", price: 30 },
       { image: "clothing-images/casual-long-sleeve.jpg", price: 20 },
       { image: "clothing-images/casual-hoodie.jpg" , price: 25}
    ],
    bottoms: [
           { image: "clothing-images/casual-jeans.jpg", price: 20 },
           { image: "clothing-images/casual-cargos.jpg", price: 35},
           { image: "clothing-images/casual-mini-skirt.jpg", price: 25 }
        ],
    shoes: [
           { image: "clothing-images/casual-trainers.jpg", price: 40 },
           { image: "clothing-images/casual-sandals.jpg", price: 15 },
           { image: "clothing-images/casual-boots.jpg" , price: 35 }
        ],
      },     
    party: {
        tops: [
        { image: "clothing-images/party-corset-top.jpg" , price: 20 },
        { image: "clothing-images/party-halter-top.jpg", price: 25 },
        { image: "clothing-images/party-sparkly-cami.jpg", price: 30}
        ],
        bottoms: [
            { image: "clothing-images/party-mini-skirt.jpg", price: 15},
            { image: "clothing-images/party-leather-trousers.jpg", price: 20},
            { image: "clothing-images/party-flared-jeans.jpg", price: 25},
            ],
        shoes: [
            { image: "clothing-images/party-heels.jpg", price: 40},
            { image: "clothing-images/party-strappy-sandals.jpg", price: 25},
            { image: "clothing-images/party-knee-high-boots.jpg", price: 20},        
         ],
        },
  work: {
    tops: [
        { image: "clothing-images/work-aysmmetrical-top.jpg", price: 25},
        { image: "clothing-images/work-button-up-shirt.jpg", price: 20 },
        { image: "clothing-images/work-knit-cardigan.jpg", price: 15}
        ],
    bottoms: [
      { image: "clothing-images/work-straight-leg-trousers.jpg", price: 30},
      { image: "clothing-images/work-tailored-trousers.jpg", price: 25},
      { image:  "clothing-images/work-midi-skirt.jpg", price: 20}
    ],
  shoes: [
     { image: "clothing-images/work-loafers.jpg", price: 25 },
     { image: "clothing-images/work-ankle-boots.jpg", price: 20 },
     { image: "clothing-images/work-block-heels.jpg", price: 15}
    ],
},
};

let currentTops ;
let currentTopIndex = 0;
let topImage = document.getElementById("tops");
let topPrice = document.getElementById("top-price")

let currentBottoms ;
let currentBottomIndex = 0;
let bottomImage = document.getElementById("bottoms");
let bottomPrice = document.getElementById("bottom-price");

let shoeImage = document.getElementById("shoes");
let currentShoes ; 
let currentShoeIndex = 0;
let shoePrice = document.getElementById("shoe-price");

let addOnImage = document.getElementById("addOns");
let currentAddOns ;
let currentAddOnIndex = 0;
let addOnPrice = document.getElementById("addons-price");


// Using type conversion because HTML input field uses string whereas JS the label for price is a number

// Show functions make the current array appear based on chosen path as well as the images and price

function showAddOns(){
    const currentAddOn = currentAddOns[currentAddOnIndex];
    addOnImage.src = currentAddOn.image;
    addOnPrice.textContent = currentAddOn.price;
}

function showTop(){
   const currentTop = currentTops[currentTopIndex];
    topImage.src = currentTop.image;
    topPrice.textContent = currentTop.price; // using text content as we're retrieving data from categories
  //  console.log(currentTop);
  //  console.log(topImage);
  //  topPrice.textContent = currentTop.price;
}

function showBottom(){
    const currentBottom = currentBottoms[currentBottomIndex];
    bottomImage.src = currentBottom.image;
    bottomPrice.textContent = currentBottom.price;
}

function showShoe(){
    const currentShoe = currentShoes[currentShoeIndex];
    shoeImage.src = currentShoe.image;
    shoePrice.textContent = currentShoe.price;
}

// Making sure each caraousel button has a function 

nextBtn0.onclick = function(){
    if(currentAddOnIndex < currentAddOns.length - 1){
   currentAddOnIndex++;
   showAddOns();
} 
}

prevBtn0.onclick = function(){
    if(currentAddOnIndex > 0 ){
   currentAddOnIndex--;
   showAddOns();
  }
}

nextBtn1.onclick = function(){
    if(currentTopIndex < currentTops.length - 1){
   currentTopIndex++;
   showTop();
}   
   else {
    currentTopIndex = 0;
    showTop();
     }   
}
prevBtn1.onclick = function(){
    if(currentTopIndex > 0 ){
   currentTopIndex--;
   showTop();
  }
}
nextBtn2.onclick = function(){
    if(currentBottomIndex < currentBottoms.length - 1){
   currentBottomIndex++;
   showBottom();
}   
   else {
    currentBottomIndex = 0;
    showBottom();
     }   
}
prevBtn2.onclick = function(){
    if(currentBottomIndex > 0 ){
   currentBottomIndex--;
   showBottom();
  }
}
nextBtn3.onclick = function(){
    if(currentShoeIndex < currentShoes.length - 1){
   currentShoeIndex++;
   showShoe();
}   
   else {
    currentShoeIndex = 0;
    showShoe();
     }   
}
prevBtn3.onclick = function(){
    if(currentShoeIndex > 0 ){
   currentShoeIndex--;
   showShoe();
  }
}

const finalLookBtn = document.getElementById("final-look-btn");
const stylingH1 = document.getElementById("styling-h1");
const resultsH1 = document.getElementById("results-h1");

const resultsAddOn = document.getElementById("results-addons");
const resultsTops = document.getElementById("results-tops")
const resultsBottoms = document.getElementById("results-bottoms");
const resultsShoes = document.getElementById("results-shoes");

let totalCost = document.getElementById("total-cost");
const message = document.getElementById("message");

resultsAddOn.remove();
resultsTops.remove();
resultsBottoms.remove();
resultsShoes.remove();

const budgetInput = document.getElementById("budget-input");

finalLookBtn.addEventListener("click" , function(){
 welcomePage.style.display = "none"; 
    questions.style.display = "none"; 
    styling.style.display =  "block";
   stylingH1.style.display = "none";
    finalLook.style.display = "block";
   resultsH1.style.display = "block";
   nextBtn0.style.display = "none";
   prevBtn0.style.display = "none";
    nextBtn1.style.display = "none";
    prevBtn1.style.display = "none";
   nextBtn2.style.display = "none";
    prevBtn2.style.display = "none";
   nextBtn3.style.display = "none";
   prevBtn3.style.display = "none";
   finalLookBtn.style.display = "none"
  addOnPrice.style.display = "none"; 
  topPrice.style.display = "none";
  bottomPrice.style.display = "none";
  shoePrice.style.display = "none";
   userBudget = Number(budgetInput.value); // budgetInput is originally as string so we need to convert it into a number
  totalCost.style.display = "block";
  calculateTotalCost();
  message.style.display = "block";
  showOutfitMessage();

});

// Using an a for loop to calculate total cost of outfit generates
function calculateTotalCost() {
    let total = 0;
    let items = [
        currentTops[currentTopIndex],
        currentBottoms[currentBottomIndex],
        currentShoes[currentShoeIndex]

    ];
    if (yesBtn.checked && currentAddOnIndex !== undefined){
        let discountedAddOn = {
            price: currentAddOns[currentAddOnIndex].price * 0.85
        };
        items.push(discountedAddOn); // use .push() to add discountedAddOn into the array to calculate the total
    }
    for(let i = 0; i < items.length; i++){
        total += items[i].price;
    }
    totalCost.textContent = "Total Cost: £" + total;
    console.log("Total cost: £", total);
    return total;

}


//Original outfit calculator
/*
function calculateTotalCost(){
    let total = 0;
    if (yesBtn.checked) {
    total = currentAddOns[currentAddOnIndex].price * 0.85 
    + currentTops[currentTopIndex].price 
    + currentBottoms[currentBottomIndex].price 
    + currentShoes[currentShoeIndex].price; 
    totalCost.textContent = "Total Cost: £" + total; // contatenation
    } else{
       total = currentTops[currentTopIndex].price 
       + currentBottoms[currentBottomIndex].price 
       + currentShoes[currentShoeIndex].price; 
       totalCost.textContent = "Total Cost: £" + total;
    }
    console.log("Total cost: £", total);
    return total;
}
*/

//calculateTotalCost();

let outfitMessage = false;
function showOutfitMessage (){
   let total = calculateTotalCost();
   if (userBudget >= total ){
     message.textContent = "Cool Outfit!" 
    }  else {
     message.textContent = "cute...but you're over budget"
  } 
  
} 

//showOutfitMessage();

//console.log(finalLookBtn);

const restartBtn = document.getElementById("restart-btn")
 //console.log(restartBtn);
restartBtn.addEventListener("click" , function(){
    window.location.reload();
});


//let resultTopImage = document.getElementById("results-tops");

