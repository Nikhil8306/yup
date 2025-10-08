import "./Accentwall.css";

import Button from "../UI/Button/Button";
import Heading from "../Heading.jsx";
import Description from "../Description.jsx";

function AccentWall({title, subtitle, description, onClick, images, btn="Hire a Pro"}){
  return (
    <section className="aw">
      <div className="aw__inner">
        <div className="aw__copy">
          <Heading >{title}</Heading>
          <p className="aw__subtitle">{subtitle}</p> <br />
          <Description className="aw__desc">{description}</Description>
          <br /><br />
          <Button className="btn" backgroundColor={"var(--c2)"} type="button" onClick={onClick}>
            {btn}
          </Button>
        </div>

        <div className="aw__gallery" aria-label="Accent wall inspiration gallery">
          <div className="aw__card aw__card--tall">
            <img src={images[0]} alt="Vertical panel accent wall with pendant light" />
          </div>
          <div className="aw__card aw__card--wide">
            <img src={images[1]} alt="Curved arch painted accent wall with chair" />
          </div>
          <div className="aw__card aw__card--small1">
            <img src={images[2]} alt="Classic wainscoting accent wall" />
          </div>
          <div className="aw__card aw__card--small2">
            <img src={images[3]} alt="Green paneled accent wall in bedroom" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccentWall;