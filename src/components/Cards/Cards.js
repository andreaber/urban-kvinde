import {Card} from '../Card/Card'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'


const cards = [
    {
        id: 1,
        title: 'Vestido Estampado',
        price: '$ 32.500',
        image: image1
    },
    {
        id: 2,
        title: 'Bolso Tela Trébol',
        price: '$ 12.900',
        image: image2
    },
    {
        id: 3,
        title: 'Chaqueta Snow Inn',
        price: '$ 48.000',
        image: image3
    },
]


export const Cards = () => {

    return ( 
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    cards.map((card) => (
                        <div className='col-md-4 mb-5' key={card.id}>
                            <Card title={card.title} imageSource={card.image} price={card.price}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

