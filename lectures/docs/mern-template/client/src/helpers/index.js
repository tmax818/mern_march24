

export const defaultThing = {stringProperty: "", numberProperty: 0, booleanProperty: false}


export const initState = {
  stringProperty: '',
  numberProperty: 0,
  booleanProperty: false
}

export const reducer = (state, action) => {
  switch(action.type){
    case "SET_string_PROPERTY":
      return {...state, stringProperty: action.payload}
    case "SET_number_PROPERTY":
      return {...state, numberProperty: action.payload}
    case "SET_boolean_PROPERTY":
      return {...state, booleanProperty: action.payload}
    default:
      return state;
  }
}

export const formActions = {
  SET_string_PROPERTY: "SET_string_PROPERTY",
  SET_number_PROPERTY: "SET_number_PROPERTY",
  SET_boolean_PROPERTY: "SET_boolean_PROPERTY",
}