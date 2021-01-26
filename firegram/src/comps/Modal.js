import { motion } from 'framer-motion';

const Modal = ({selectedImage, setSelectedImage}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage(null);//kad kliknes van zumirane slike slika se skloni
        }
      }
    return ( <div>
        <motion.div className='backdrop' onClick={handleClick}
        initial={{ opacity: 0 }}//properti iz motion-a
        animate={{ opacity: 1 }}//properti iz motion-a
        >
            <motion.img src={selectedImage}
            initial={{ y: "-100vh" }}//properti iz motion-a
            animate={{ y: 0 }}//properti iz motion-a
            />
        </motion.div>
    </div> );
}
 
export default Modal;