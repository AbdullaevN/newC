import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function CarouselSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 image-slide"
          src="https://img2.goodfon.com/wallpaper/nbig/a/ed/asics-gel-lyte-3-krossovki-6671.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  image-slide"
          src="https://outmaxshop.ru/components/com_jshopping/files/img_products/4795/asics-gel-lyte-v-4795-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  image-slide"
          src="https://houseofheat.co/app/uploads/2019/03/nike-air-force-1-07-prm-2-white-yellow-at4143-100-mood-1-min.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;
