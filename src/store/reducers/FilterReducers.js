const initState={
    
     tagNames : [
        {id:0,name:"Nautica"},
        {id:1,name: "The north face"},
        {id:2,name: "boss"},
        {id:3,name:"max-air"},
        {id:4,name : "zara"},
        {id:5,name:"levis"},
        {id:6,name:"nike"},
        {id:7,name:"USPA"},
        {id:8,name: "peter-england"},
        {id:9,name:"flying machine"},
        {id:10,name:"adidas"},
        {id:11,name:"dolce"},
        {id:12,name:"puma"},
        {id:13,name:"max"},
        {id:14,name:"bluelagoon"}
        ],
     tagName:[],

    }


const FilterReducers=(state=initState,action)=>{ 

    switch(action.type){
        case"FILTER": 
        let b;
        // let selectedBrands;
        return{
            ...state,tagNames :[state.tagName.filter((g)=>g.id !== state.tagNames.id)],tagName:[state.tagName,b],
        }

        default:
            return state ;
    }


}

export default FilterReducers;