## 📌 Question 1

**Question:** What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll??

**Answer:**  
usually we use only getElementById for selecting the elements using id this is only valid for id we cant use class name here and we can only select one element by it as id is unique now getElementsByClassName is used for only class name we can grab the elements by this using classes and we can grab more then one element by this method. querySelector is used for id name class name we can use both and it grabs element like css selectors as we use # for id selectors and . for classes we use same method here for grabbing elements and this one only grab one element at a time where querySelectorsAll can grab more then one elements.

---

## 📌 Question 2

**Question:** How do you create and insert a new element into the DOM?

**Answer:**  
using document.createElement("h1 or whatever element we want to render") and appending this to a parent node from html.

---

## 📌 Question 3
**Question:** What is Event Bubbling? And how does it work?

**Answer:**  
when a event occurs where the event occurs the event goes to upward element and checks there is any event there and if there is any event on parent then the event also happen there 
...

## 📌 Question 4
**Question:** What is Event Delegation in JavaScript? Why is it useful?

**Answer:**  
when we use a event direct to a parent using the concept of event bubble to make the code cleaner and faster this is what we call event delegation. it is useful because we dont have to put event listener to every child element and so the code runs more smoothly and the performance enhance as we have to write less event listener here it makes the code more cleaner...
...

## 📌 Question 5
**Question:** What is the difference between preventDefault() and stopPropagation() methods?

**Answer:**  
we use preventDefault() to stop the default function of a website and stopPropagation() we use it for stopping the event bubbling to upwards so basically preventDefault() is stop the whole window normal nature where stopPropagation() only used for stop event bubbling
...
