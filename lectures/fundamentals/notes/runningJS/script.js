const add = (
    function(){
    let counter = 0;
    return function(){
        counter += 1;
        console.log("the counter is now", counter)
        return counter}
  })();


  function myFunc(){
    console.log("this is my function")
    // alert("these are so annoying!!")
  }


  myFunc()


  console.dir(this)