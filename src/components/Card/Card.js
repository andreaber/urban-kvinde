

export const Card = ({title, imageSource, price}) => {

    return (
        <div className='card text-center border-0'>
            <img src={imageSource} alt=""/>
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
                <p className='card-text text-center text-black-50'>{price}</p>
                <a href='#!' className='btn btn-outline-secondary rounded-0'>
                    Agregar al carrito
                </a>
            </div>
        </div>
    )
}