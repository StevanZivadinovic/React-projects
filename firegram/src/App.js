import { useState } from "react";
import Title from "./comps/Title";
//npm install node-sass --save moras ovo da instaliras da bi .sass radio
/* ako ne koristis sass nego css onda kucaj kod u index.css, ne treba nista da
se instalira ako koristis css niti da se importuje */
import "./style/style.css";
import Form from "./comps/form";
import ImageGrid from "./comps/imageGrid";
import Modal from "./comps/Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Title />
      <Form></Form>
      <ImageGrid setSelectedImage={setSelectedImage}></ImageGrid>
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        ></Modal>
      )}
    </div>
  );
}

export default App;
