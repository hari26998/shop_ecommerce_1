
const initState={
    products:[
         
            {id: 0,name: 'men t-shirt',brand:'Nautica', image: '1.jpg', price: 140, discount: 3, discountPrice: 140  - 3 / 100 * 140, quantity: 1,size: "S M L XL", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id: 1,name: 'women jacket ',brand:'The north face' ,image: '2.jpg', price: 400, discount: 5, discountPrice: 400  - 5 / 100 * 400, quantity: 1,size: "S M L XL", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id: 2,name: 'men trouser',brand:'boss', image: '3.jpg', price: 1200, discount: 3, discountPrice: 1200  - 3 / 100 * 1200, quantity: 1, size: "S M L XL",desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id: 3,name: 'formal shoes',brand:'max-air' ,image: '4.jpg', price: 1700, discount: 4, discountPrice: 1700  - 4 / 100 * 1700, quantity: 1,size: "S M L XL", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id: 4,name: 'women skirt', brand:'zara',image: '5.jpg', price: 2500, discount: 2, discountPrice: 2500  - 2 / 100 * 2500, quantity: 1,size: "S M L XL", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id: 5,name: 'wommen jeans', brand:'levis',image: '6.jpg', price: 2800, discount: 6, discountPrice: 2800  - 6 / 100 * 2800, quantity: 1,size: "S M L XL", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id: 6,name: 'men joggers',brand:'nike' ,image: '7.jpg', price: 3500, discount: 2, discountPrice: 3500  - 2 / 100 * 3500, quantity: 1,size: "S M L XL", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id: 7,name: 'men jacket',brand:'USPA',image: '8.jpg', price: 4500, discount: 7, discountPrice: 4500  - 7 / 100 * 4500, quantity: 1,size: "S M L XL", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id: 8,name: 'men shirt',brand:'peter-england' ,image: '9.jpg', price: 3000, discount: 4, discountPrice: 3000  - 4 / 100 * 3000, quantity: 1,size: "S M L XL", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},        
            {id: 9,name: 'men winter jacket', brand:'nike',image: '10.jpg', price: 4600, discount: 3, discountPrice: 4600  - 3 / 100 * 4600, quantity: 1,size: "S M L XL", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},   
            {id:10,name:'men 3/4th sleeved tshirt',brand:'flying machine',image:'11.jpg',price:2300,discount:3,dicountPrice:  2300  - 3 / 100 * 2300,quantity:1,size: "S M L XL",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id:11,name:'men full sleeved tshirt',brand:'adidas',image:'12.jpg',price:2600,discount:4,discountPrice: 2600  - 4 / 100 * 2600,quantity:1,size: "S M L XL",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id:12,name:'women winter sweater',brand:'dolce',image:'13.jpg',price:6700,discount:5,discountPrice: 6700  - 5 / 100 * 6700,quantity:1,size: "S M L XL",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            {id:13,name:'women sports wear',brand:'puma',image:'14.jpg',price:1650,discount:3,discountPrice: 1650  - 3 / 100 * 1650,quantity:1,size: "S M L XL",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            // {id:14,name:'men stylish jacket',brand:'max',image:'15.jpg',price:4750,discount:4,discountPrice: 4750  - 4 / 100 * 4750,quantity:1,size: "S M L XL",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
            // {id:15,name:'blue bagpack',brand:'bluelagoon',image:'16.jpg',price:1850,discount:5,discountPrice: 1850  - 5 / 100 * 1850,quantity:1,size:"" ,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente laboriosam quia! Aliquam, vel soluta?"},
     
         
        ] ,
    product:{}
}

const ProductsReducers=(state=initState,action)=>{ 

    switch(action.type){
        case "PRODUCT":
            return{...state,product :state.products.find(product=>product.id===parseInt(action.id))}
        case"FILTER":
        return{
            ...state,product :state.products.filter((g)=>g.id !== state.products.id)
        }

        default:
            return state ;
    }


}

export default ProductsReducers;