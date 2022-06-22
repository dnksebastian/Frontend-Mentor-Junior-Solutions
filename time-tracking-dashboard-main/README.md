# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/time-tracking-dashboard-html-css-js-vMLbm8IuK9](https://www.frontendmentor.io/solutions/time-tracking-dashboard-html-css-js-vMLbm8IuK9)
- Live Site URL: [https://dnksebastian.github.io/Time-Tracking-Dashboard/](https://dnksebastian.github.io/Time-Tracking-Dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS

### What I learned

```js
Array.from(pickedTimeframeElements).forEach((element, index) => {
          pickedTimeframeElements[index].innerHTML = "Last Week - " + data[index].timeframes.weekly.previous + "hrs"
```



