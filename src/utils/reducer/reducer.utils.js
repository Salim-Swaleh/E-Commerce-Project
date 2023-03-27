export const createAction = (type, payload) => ({type, payload});

//This function is typically used to create Redux actions, which are plain JavaScript objects that describe changes to the application state.
// The type property is used to identify the action, while the payload property is used to store any data associated with the action.

//This code defines a function called createAction, which takes two parameters: type and payload.
// It returns an object that has two properties: type and payload. The type property is set to the value of the type parameter, 
//while the payload property is set to the value of the payload parameter.

//By calling this function with the appropriate type and payload values, 
//a new action object can be created and dispatched to the Redux store using the dispatch method. 
//This can trigger a corresponding update to the application state, depending on the way the reducer function(s) are set u