Create a page that displays a mind reader game that:
1. Updates without refreshing.
2. Responds to the screen it appears on.
3. Styled

HTML is a template that contains values for a header, button1, helper text, and a bottom2.
Headers, button1, button2, and helper text change based on the current page.


### **Data Structures and Functions**

#### **Variables**
- Variable page stores the current page.
- Variable header links to the header in html to output what the header is.
- Variable helperText links to the helperText in html to ouput the current helperText.
- Variable button1 links to the button1 in html to output the current button1 text.
- Variable button2 links to the button2 in html to output the current button2 text.
- Variable symbol stores an array of 10 symbols.
- Variable yourSymbol stores a symbol that is assigned radomly to a number divisible by 9.

#### **Fucntions**
- updatePage function: updates the page with the values of header, helperText, button1, and button2 based on the current value of page.
- nextPage function: increases the value of page by 1 and then uses the updatePage function.
- restartPage function: if the value of page is equal to 0, then increases the value of page by 1 and updates the page, else sets the value of page to 0 and then uses the updatePage function.
- randomizeSymbol function: randomizes the array of symbols, using a for loop assigns a radom symbol to each number from 1-99, all numbers divisible by 9 get the same symbol.
- hideButton1 function: a function to hide button 1 if the page value is 0 or 5??? how do i implement this?
- start function: updatePage on start

### **Program**

#### START

init()

CREATE page
CREATE header
CREATE helperText
CREATE button1
CREATE button2

updatePage

if page is equal to 0 populate the page with the current values
header: "I can read your mind"
button1: hideButton! function
helperText: ""
button2: Go, go function?

nextPage

if page is equal to 1 populate the page with the current values
header: "pick a number from 01-99"
button1: "NEXT"
helperText: "when you have your number click next"
button2: @

nextPage

if page is equal to 2 populate the page with the current values
header: "  "
button1: "NEXT"
helperText: "Ex: 14 is 1+4=5 click next to proceed"
button2: @

nextPage

if page is equal to 3 populate the page with the current values
header: "subtract your new number from the original number"
button1: "NEXT"
helperText: "Ex: 14-5=9 click next to proceed"
button2: @

nextPage

if page is equal to 4 populate the page with the current values
header: randomizeSymbol function
button1: "REVEAL"
helperText: "Find your new number. note the symbol beside the number"
button2: @

nextPage

if page is equal 5 to  populate the page with the current values
header: "yourSymbol"
button1: hideButton1
helperText: "your symbol is: yourSymbol"
button2: @
