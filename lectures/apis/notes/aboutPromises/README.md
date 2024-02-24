# [About Promises](https://login.codingdojo.com/m/754/16730/124646)


## Learning Objectives

- Introduce JavaScript __Promises__
- Learn the __three basic states__ of a Promise

## [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Breaking it down

### Promises have three states.

1. __Pending__: This is the initial state of a promise. It means that the asynchronous operation associated with the promise is still in progress and has not been fulfilled or rejected yet.
1. __Fulfilled__: When a promise successfully completes its associated asynchronous operation, it transitions to the fulfilled state. At this point, the promise is considered resolved, and any data or value resulting from the operation is available.
1. __Rejected__: If an error or failure occurs during the execution of the asynchronous operation, the promise enters the rejected state. This indicates that the operation did not complete successfully, and an error reason or rejection message is typically provided.

## Consuming Promises