import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import Data from "./data.js"

export default function App() {
  const entryElements = Data.map((element)=>{
    return( <Entry 
           key={element.id}
           element ={element}
          // img ={element.img}
          // title ={element.title}
          // country ={element.country}
          // googleMapsLink ={element.googleMapsLink}
          // date={element.dates}
          // text={element.text}

     />
    )
  })
  return (
    <>
      <Header />
      <main className="container">
      {entryElements}
      </main>
    </>
  );
}

