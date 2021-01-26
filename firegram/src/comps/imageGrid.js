import useFirebase from "../firebase/useFirebase";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirebase("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <div
              className="img-wrap"
              key={doc.id}
              onClick={()=>setSelectedImage(doc.url)}
            >
              <img src={doc.url} />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
