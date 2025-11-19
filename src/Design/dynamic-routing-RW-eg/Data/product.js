import shoe1 from '../Images/shoe1.jpg'
import shoe2 from '../Images/shoe2.jpg'

import heel from '../Images/heel2.jpg'
import heel2 from '../Images/heel3.jpg'



export const products = [
    {
        id: 1,
        Image:shoe1,
        title: "Mens's Shoe DN 23x, New Product",
        category: "LIFESTYLE",
        Price: 4690,
        oldPrice: 5999,
        rating: 4,
        offer: 25,
        description: "This is a high quality men's shoe perfect for Everyday Use.",
        gallery:[shoe1,shoe2]
    },
    {
        id: 2,
        iamge:heel,
        title: "Womens's Heel DN 23x, New Product",
        category: "LIFESTYLE",
        Price: 2999,
        oldPrice: 4999,
        rating: 5,
        offer: 20,
        description: "This is a high quality women's heel perfect for Party Occasions.",
        gallery: [heel,heel2]
    }
]