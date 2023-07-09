import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function CardCarousel({product}) {
  let cards = [];
  for (let i = 0; i < 5; i++) {
    cards.push({key: uuidv4(),
          content: (
            <Card imagen={`http://localhost:5000/uploads/images/${product.images[i%(product.images.length)]}`} />
          )})
  }

  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default CardCarousel;
