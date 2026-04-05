# Outfit Builder Web App 

**Zayda's Closet** helps you create an outfit based on your preferences.

## My web app features:
- Choosing an outfit based on your occasion e.g. work.
- Selecting whether you want accessories included.
- Entering your budget
- A notification on discounted accessories, if you have selected acessories.
- Browsing through different clothes using caraousel buttons *(next/prev)*.
- Viewing item options.
- View your final look.
- See the total outfit cost.
- Recieve a message based on your budget.

---

## How to use it
1. Click the start button.
2. Select your occasion.
3. Select whether you want accessories or not.
4. Enter your budget.
5. Browse through clothes I selected using the next/previous buttons.
6. Click 'Show the final look'.
7. The final look appears without any buttons and shows your total outfit cost and a message.
8. Restart button if you want to try again!

---

## JavaScript concepts used for Web App

### Boolean values and If statements
I used a boolean value and if statement to determine the message the user recieves based on whether they were within their budget or went over budget.

- If the user was within the budget, the message will return as true and print the message `Cool Outfit!`.
- If the user was over budget, the message will return as false and will print the message `cute...but you're over budget`.

### Data Structure
To store my images of clothes I used an array to store the values of images as well as price.

- I stored the array specifically based on clothing occasion.
- To access the array I assigned to variable e.g. `currentShoes = categories.party.shoes;`.

### Loops

Originally, for outfit calculator I used just if statements however, the structure wasn't as clean so I used `for` loop. Structure of my loops:

- I declared the total to `0`.
- I declared `items` and assigned an array of current items to the variable.
- I used `if` statement to check whether the user selected the yes checkbox and whether user selected an accessory.
- If those 2 requirements meet the code will execute the discount formula and push accessory into the array of items to calculate.
- The initaliser is set to `0` which is the starting point of the loop which is the first item in the array.
- The condition I used `i < items.length` is a condition which keeps looping, if initialiser is less than total number of items meaning, it will go through my clothing items and add them up without going over the maximum.
- `i++` is a modifier which is tell the initialiser to increase by 1.
- I declared `total` to equal each current clothing added together.
- The calculator returns the total of the outfit created.

### Functions to make code reusable

I made various functions to make my code reusable for example `function showBottom()`.
 - Within the script it contains the index within the array, current image, and the current price.
 - Then, I applied `showBottom()` to display current bottoms within the selected pathway for the occasion.

### Console.log() to display messages
I used console.log to display various message such as:
- I used console.log to display the outfit total.
- I used `console.log("alert")` to display the alert that there is a discount on accessories.

### HTML & CSS

I've used HTML tags such as:
- `<body></body>`
- `<button></button>`
- `<p></p>`
-`<h2></h2>`
Examples of CSS I used:
- 
```CSS
    button:hover{
    background-color: #e14d84; 
}
```

I used `button:hover` to make the buttons change colour when the cursor was on the button.
- `flex-direction: column` to make everything within the `questions-container` presented in a column rather than a row.

### Get input from the user on a web page

For my outfit builder I get input from the user in different ways including:
- The user choosing their **occassion**.
- The user choosing if they want **accessories** or not.
- The user inputting their **budget** for the outfit.

### Making changes to the HTML using JavaScript

A way of me making changes to the HTML using JavaScript (JS) was using `.remove()` to get rid of containers for the results section as it was interferring with the style section.

### Making changes to the CSS using JavaScript

I frequently used, `variable.style.display` to determine whether I wanted a section appear on the screen or not by either using `block` (appear) or `none` (disappear.)

### Use an event to trigger a change to a web page

A simple example of me using an event trigger to change my app web page was my restart button:
- I declared the restart button as well as link the button to my HTML.
- I used `.addEventListener("click" , function()` to listen out for the click enable to execute the code within the function.
- I used `window.location.reload();` which reloads current location of the browser, meaning everything resets. I was able to use this code as my web app only has **1** page.

---

## Reflection

### What I've learned

I have learned and improved my understanding of working with functions, arrays and DOM manipulation e.g. accessing elements.

### Challenges

- The challenge I struggled the most was making sure I use the correct variables to execute the code. At times when I was making an if statement or function I was using the incorrect variables leading to a lot of errors. 
- Another challenge I had was linking user's budget and the total cost as I realised after, the user inputted a string not a number which resulted in `outfitMessage` not appearing as it required a number for the condition.

### How I solved the challenges


- I broke things down by understanding the difference between certain variables e.g. `currentTops` is a variable that can be assigned to anything whereas `currentTopIndex` is a number that is assigned to the image in the array.
- I went step by step to make sure I was on track, which reduced the amount of errors I made.
- When I ran into an error, I didn't just try debugging anything I took certain steps e.g. checking whether the last line of code caused the issue, is their any open tags or extra closed tags, noting out lines one by one to find the issue.
- I also researched certain things if I didn't  have a full understanding.

### What I would improve

What I would learn for next time to make this outfit builder better, is maybe have cleaner structure or find a way of making code a bit simplier so it is more readable as the function for my final look button is quite lengthy due to styling.





