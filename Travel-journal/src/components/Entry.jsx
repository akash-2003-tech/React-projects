
import marker from "../assets/marker.png";


export default function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={props.element.img.src}
          alt={props.element.img.alt}
        ></img>
      </div>

      <div>
        <img
          className="marker"
          src={marker}
          alt="marker icon"
        />

        <span className="country">{props.element.country}</span>

        <a 
          href={props.element.googleMapsLink}
        >
          view on Google Maps
        </a>

        <h2 className="entry-list">{props.element.title}</h2>

        <p className="trip-date">{props.element.dates}</p>

        <p className="entry-text">
          {props.element.text}
        </p>
      </div>
    </article>
  );
}
