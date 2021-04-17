import {useState} from 'react';


const AddMedia = (props) => {

    const [file, setFile] = useState(null);
    const [authorized, setAuthorized] = useState(['image/jpeg','image/png'])
    let turnOffAddMedia = ()=>{
        document.querySelector('.mainMedia').style.display = 'none';

    }

    let addFile = (e)=>{
        setFile(e.target.files[0])
    }

    let isAuthorized =(fileName)=> { 
        if(authorized.includes(fileName)){
        return true
    }
    }
    let sendFile = () =>{
        
        if(file!==null){
            if(isAuthorized(file.type)){
                const metadata = {contentType: file.type}
                props.uploadFile(file,metadata);
                props.closeModal();
                setFile(null);
                document.querySelector('#addMedia').value = '';

            }
        }
    }

    // console.log(file)

    return ( <div className='mainMedia'>
        <div className='addMediaForm'>
            <div className="formMedia">
            <div className='subFormMedia' /*onSubmit={handleSubmit}*/>
                <h2>Select an Image File</h2>
           

            <div className="media">
            <label htmlFor="addMedia">File types:jpg, png</label>
            <input onChange={addFile} type='file' id='addMedia' />
            </div>

            <div className="buttons">
                <button  className='Add' onClick={props.sendMessage} onClick={sendFile} value='Send'><span><img src="https://img.icons8.com/color/20/000000/checked--v4.png"/>Add</span></button>
                <button className='Cancel'  value='Cancel' onClick={turnOffAddMedia}><span><img src="https://img.icons8.com/color/20/000000/cancel--v1.png"/>Cancel</span></button>
            </div>

            </div>
            </div>
        </div>
    </div> );
}
 
export default AddMedia;