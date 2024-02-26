# [React.js](https://login.codingdojo.com/m/754/16722/124548)

## Learning Objectives

- Recognize the benefits of using the React library compared to other JavaScript frameworks
- Explore React's ability to create user interfaces for various mediums
- Explain the architecture of React and its use of client-side rendering and the Virtual DOM to optimize performance in single-page applications

## What is React?

- [tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## React

>React.js (more commonly referred to simply as React) is a JavaScript library for building user interfaces (UIs) for various devices and platforms.



## A Library, At Heart

>React, being a library, gives it a multitude of advantages over its peers. One of the primary advantages is its flexibility. 

## Customization is Key

>The React library is agnostic in that it can create UIs for almost any digital medium with various architectural structures using tools of a developer’s choosing. 


## Performance through Architecture

>First, React is used to build __SPAs (single-page applications)__. This structure involves loading a single HTML page into the client machine and dynamically updating content in the browser's DOM as changes occur.

>In __client-server architecture__, the client machine typically sends a request to the server machine whenever a change is made that necessitates a DOM update. The server receives the request and responds with the new page and the required updates - this is __server-side rendering__.

>Using __client-side rendering__ to dynamically update the DOM, SPAs can produce lightning-fast changes between “pages” without waiting for the server to respond. The SPA build architecture is used to deliver the seamless experiences seen from technological marvels, such as Gmail, Google Maps, Netflix, and many more.



## Components, Props, and State

__Components__ 
- React's core building blocks 
- encapsulates specific functionalities of the UI 
- multiple components used together form complex React user interfaces

__props__
- input for components
- a hybrid of a standard function's __parameters__ and an HTML element's __attributes__ that allow data to be passed into a component.

__state__
- a components internal __data__
- __Updating the value of a component's state triggers the component to rerender, which updates the DOM and UI.__

## Monitoring with the Virtual DOM

__Virtual DOM__
- a lightweight copy of the browser's DOM.
- __diffing__
