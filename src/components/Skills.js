import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Nos Chiffres clés</h2>
                        <p>Notre performance financière
Premier exportateur mondial de phosphate durable, nous avons généré plus de 50 milliards de dirhams de chiffre d’affaires au cours de l'année 2020.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" variant="dark">
                            <div className="item" variant="dark">
                                <img src={meter1} alt="Image" />
                                <h5>Capitaux propres consolidés </h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Endettement financier net</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Dividende par action </h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5> Dividende par action </h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
