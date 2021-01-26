const Modal = ({selectedImage, setSelectedImage}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage(null);//kad kliknes van zumirane slike slika se skloni
        }
      }
    return ( <div>
        <div className='backdrop' onClick={handleClick}>
            <img src={selectedImage}/>
        </div>
    </div> );
}
 
export default Modal;