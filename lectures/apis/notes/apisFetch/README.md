# [APIs and `fetch()`](https://login.codingdojo.com/m/754/16730/124648)

## Learning Objectives

- Introduce the concept of APIs serving data
- Use `.fetch()` for triggering simple API requests in any JavaScript environment.

## Fetch


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id = "root"></div>
    <script>
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
    </script>
</body>
</html>

```

![](gretchen-mean-girls.gif)
---




## APIs

>An API (Application Programming Interface) at its most simple level is just a bridge that allows two different applications to communicate with each other. 

## In Practice