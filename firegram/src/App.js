import Title from './comps/Title';
//npm install node-sass --save moras ovo da instaliras da bi .sass radio
/* ako ne koristis sass nego css onda kucaj kod u index.css, ne treba nista da
se instalira ako koristis css niti da se inportuje */
import './style/style.css';
import Form from './comps/form';

function App() {
  return (
    <div className="App">
      <Title/>
    <Form></Form>
    </div>
  );
}

export default App;   
