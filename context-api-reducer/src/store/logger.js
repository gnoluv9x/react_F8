
function logger( reducer ) {

    return ( prevState , actions ) => {

        // const newState = reducer( prevState , actions)
        const newState = reducer( prevState , actions)
    
        console.group( actions.type)
    
            console.log('Prev State: ' , prevState);
            console.log('Action : ' , actions);
            console.log('New State: ' , newState);
    
        console.groupEnd( actions.type)

        return newState
    }

}

export default logger;
