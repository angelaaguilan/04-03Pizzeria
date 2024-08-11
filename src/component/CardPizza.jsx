import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import PizzaTrozo from '../assets/imgs/PizzaTrozo.png';
import carroCompra from '../assets/imgs/carroCompra.png';
import eyes from '../assets/imgs/eyes.png';

const CardPizza = ({name, price, ingredients, img}) => { 
    const styleCard = {width: '25%', height: '100%', margin: '30px 0px'}
    const precio = Intl.NumberFormat("de-DE").format(price)
    
    ingredients = ingredients.toString() 
    let ingredientes = ingredients.replace(/,/g, ', ');

    return (
        <>
          <Card style={styleCard}>
            <Card.Header>
                <Card.Img variant="top" src={img} style={{ width: '100%' }} />
                <Card.Title className='mt-3'>Pizza {name}</Card.Title>
            </Card.Header>
            <Card.Body className='text-center'>
                <Card.Text className='h5 mb-2'>Ingredientes: </Card.Text>
                <Card.Text><Image src={PizzaTrozo}/> {ingredientes}</Card.Text>
            </Card.Body>
            <Card.Footer className='p-4 text-center'>
                <Card.Text className='h4 mb-4'> Precio: ${precio}</Card.Text>
                <Button variant="outline-dark" className="mx-5">Ver más <Image src={eyes}/></Button>
                <Button variant="dark" className="mx-5">Añadir <Image src={carroCompra}/></Button>
            </Card.Footer>
        </Card>
        </>
      );
    }

export default CardPizza;
