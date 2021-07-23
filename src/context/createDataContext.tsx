import React, { useReducer } from "react";


/* this function automatically creates a provider for any context we want */

export default (reducer, actions, initialState) => {
    const Context = React.createContext({});

    // a generic Provider to create context for any resource we want, it has all action functions in it
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        /* actions = {addBlogPost: (dispatch)=>{return ()=>{//do stuff using dispatch passed as functional argument}}} */

            const boundActions = {};
            // for every action provided for a context, call dispatch
            for(let key in actions){
                boundActions[key] = actions[key](dispatch);
            }
        
        return <Context.Provider value={{ state ,  ...boundActions}}>{children}</Context.Provider>
    }

    return {Context, Provider};
}