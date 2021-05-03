/* eslint-disable no-unused-vars, no-console */
function setup() {
  // Get the main div
  const content = document.getElementById('content');

  // create an element
  let element = document.createElement('div');
  // set it's class
  element.setAttribute('class', 'class1');
  // set it's id
  element.setAttribute('id', 'div1');
  // Add element to the main div
  content.appendChild(element);

  const inner = document.createElement('div');
  inner.setAttribute('class', 'class1');
  element.textContent = 'Hello World!';
  element.appendChild(inner);

  // create an element
  element = document.createElement('button');
  // set it's class
  element.setAttribute('class', 'class1');
  // set it's id
  element.setAttribute('id', 'button1');
  // set it's text
  element.textContent = 'Press me';
  // Add element to the main div
  content.appendChild(element);
}

function lesson3() {
  // Different ways to get elements
  const class1 = document.getElementsByClassName('class1');
  const button1 = document.getElementById('button1');
  const divs = document.getElementsByTagName('DIV');
  const first = document.querySelector('.class1');
  const all = document.querySelectorAll('.class1');
  const div1 = document.getElementById('div1');
  const innerDivs = div1.getElementsByClassName('class1');
  console.log(innerDivs[0].innerHTML);
}

function lesson4() {
  const div1 = document.getElementById('div1');
  const div1class = div1.getAttribute('class');
  const div1html = div1.innerHTML;
  const noValueDiv1Color = div1.style.backgroundColor;
  // option 1
  const div1Color = window.getComputedStyle(div1).backgroundColor;

  // option 2 (doesn't work?)
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log(div1.style.backgroundColor);
  });

  // set attributes
  div1.setAttribute('class', 'class2');
  const div1NewClass = div1.getAttribute('class');
  div1.innerHTML = 'Goodbye';
  // div1.style.backgroundColor = '#0000FF';
  // div1.setAttribute('style', 'height: 100px; background-color: #0000FF;');
}

function lesson5() {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = 'Hello there!';

  const div1 = document.getElementById('div1');
  div1.appendChild(newDiv);
  document.body.removeChild(div1);
}

function lesson6() {
  const button1 = document.getElementById('button1');
  button1.addEventListener('click', (event) => {
    document.getElementById('div1').innerHTML = 'Button Pressed!';
    const { target } = event;
    if (target.innerText === 'On') {
      target.innerText = 'Off';
    } else {
      target.innerText = 'On';
    }
  });
  document.getElementById('div1').addEventListener('mouseover', (event) => {
    console.log('mouse entered', event.target);
    event.target.style.backgroundColor = '#0000FF';
  });
}

function lesson7() {
  const form = document.getElementById('form1');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const textInput = form.elements[0];
    alert(textInput.value);
  })
}

lesson7();
