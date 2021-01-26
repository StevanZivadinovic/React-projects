import useFirebase from "../firebase/useFirebase";
import { motion } from "framer-motion"

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirebase("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout//propperty iz motion-a
                whileHover={{ opacity: 1 }}s//propperty iz motion-a
              onClick={()=>setSelectedImage(doc.url)}
            >
              <img src={doc.url}
               initial={{ opacity: 0 }}//propperty iz motion-a
               animate={{ opacity: 1 }}//propperty iz motion-a
               transition={{ delay: 1 }}/> 
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
