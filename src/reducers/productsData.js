import ApparuleImg from '../icons/home/apparule.svg';
import CuepriseImg from "../icons/home/cueprise.svg";
import CuepayImg from "../icons/home/cuepay.svg";

const initialState = {
    data: [
        { 
            img: ApparuleImg,
            brand: 'Apparule',
            desc: 'Design Product'
         },
         { 
            img: CuepriseImg,
            brand: 'Cueprise',
            desc: 'Design Product'
         },
         { 
            img: CuepayImg,
            brand: 'Cuepay',
            desc: 'Design Product'
         }
    ],
};

export default function productsData(state = initialState, action) {
   switch (action.type) {
     default:
       return state;
   }
 }