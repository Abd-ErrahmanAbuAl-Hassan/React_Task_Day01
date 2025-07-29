import Card from './card';
import '../styles/Sales.css'
import mug from '../assets/images/product_3.webp'
import Plate from '../assets/images/product_6.webp'
import Set from '../assets/images/product_4C.webp'
import Workshops from '../assets/images/Workshop_2.webp'

export function Sales(){
    return(
        <div className='best-saler'>
            <Card src={mug} name='Sara Mug' price='20' />
            <Card src={Plate} name='Moon Plate' price='30' />
            <Card src={Set} name='Silver Set' price='40' />
            <Card src={Workshops} name='Workshops for adults' price='210' />
        </div>
    );
}
