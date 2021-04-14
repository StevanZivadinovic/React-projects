const AddMedia = () => {

    let turnOffAddMedia = ()=>{
        document.querySelector('.mainMedia').style.display = 'none';

    }
    console.log('haj haj')
    return ( <div className='mainMedia'>
        <div className='addMediaForm'>
            <div className="formMedia">
            <div className='subFormMedia' /*onSubmit={handleSubmit}*/>
                <h2>Select an Image File</h2>
           

            <div className="media">
            <label htmlFor="addMedia">File types:jpg, png</label>
            <input type='text' id='addMedia' />
            </div>

            <div className="buttons">
                <button className='Add' /*onClick={handleSubmit}*/  value='Send'><span><img src="https://img.icons8.com/color/20/000000/checked--v4.png"/>Add</span></button>
                <button className='Cancel'  value='Cancel' onClick={turnOffAddMedia}><span><img src="https://img.icons8.com/color/20/000000/cancel--v1.png"/>Cancel</span></button>
            </div>

            </div>
            </div>
        </div>
    </div> );
}
 
export default AddMedia;