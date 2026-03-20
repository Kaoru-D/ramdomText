import { useState } from "react";
import data from './data';
import { nanoid } from "nanoid";

const App = () => {

  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const [ setSingleParagraph] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    let amount = Number.parseInt(count);
    setText(data.slice(0,amount));
  }

  const handleRandomOne = ()=>{
    const randomIndex = Math.floor(Math.random() * data.length);
    setCount(randomIndex + 1);
    setText([data[randomIndex]]);
  }

  const handleSingleOne = ()=>{
    const index = Number.parseInt(count) - 1;
    if(index >= 0 && index < data.length){
      setSingleParagraph(true);
      setText([data[index]]);
    }
  }

  return (
    <section className="section-center">
      <h4> ¿Cansado de textos génericos y aburridos? </h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">párrafos</label>
        <input type="number" name="amount" id="amount" min='1' step='1' max={data.length} value={count} onChange={(e)=>{setCount(Number(e.target.value))}}/>
        <button type="submit" className="btn">
          mostrar hasta el párrafo {count}
        </button>
        <button type="button" className="btn" onClick={handleRandomOne}>
          Mostrar párrafo aleatorio
        </button>
        <button type="button" className="btn" onClick={handleSingleOne}>
          mostrar solo el párrafo número {count}
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item)=>{
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  );
};
export default App;
