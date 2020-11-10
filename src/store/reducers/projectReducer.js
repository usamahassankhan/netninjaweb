const initState={
projects:[
    {id:'1',title:'help me bro',content:'blah blah blah'},
    {id:'2',title:'dnt help me',content:'blah1 blah1 blah1'},
    {id:'3',title:'collect all the stars',content:'blah2 blah2 blah2'}
]
}

const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log("createdproject",action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err);
            return state;
          default:
              return state;  
        }
 
}
export default projectReducer