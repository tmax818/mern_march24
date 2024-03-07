
export const displaySubmitMessage = isSubmitted => {
    return isSubmitted ? "Thanks": "Please fill this out!!"
  }

export const handleInput = (e, setter, errorSetter) => {
    setter(e.target.value);
    if(e.target.value.length < 4){
        errorSetter("dude, what recipe is that")
    } else {
        errorSetter("oh, okay, cool!")
    }
  }

 export const handleSubmit = (e, itemSetter, submitSetter  ) => {
    e.preventDefault();
    console.log((e));
    itemSetter("");
    submitSetter(true);
}