

export const defaultThing = {StringProperty: "", NumberProperty: 0, BooleanProperty: false}


export const initState = {
  StringProperty: '',
  NumberProperty: 0,
  BooleanProperty: false
}

export const reducer = (state, action) => {
  switch(action.type){
    case "SET_STRING_PROPERTY":
      return {...state, StringProperty: action.payload}
    case "SET_NUMBER_PROPERTY":
      return {...state, NumberProperty: action.payload}
    case "SET_BOOLEAN_PROPERTY":
      return {...state, BooleanProperty: action.payload}
    default:
      return state;
  }
}

export const formActions = {
  SET_STRING_PROPERTY: "SET_STRING_PROPERTY",
  SET_NUMBER_PROPERTY: "SET_NUMBER_PROPERTY",
  SET_BOOLEAN_PROPERTY: "SET_BOOLEAN_PROPERTY",
}