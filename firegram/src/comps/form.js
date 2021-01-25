import {useState} from 'react';
import ProgressBar from './ProgressBar';


const Form = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/jpeg', 'image/png'];

    let handleEvent = (e)=>{
        let selected= e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
            
        }else{
            setFile(null);
            setError('You must choose .png or .jpeg file');
        }

    }
    console.log(file);

    return ( <div className="form">
        <form>
            <input type="file" onChange={handleEvent}/>
            <div className="output">
                {error && <div className='error'>{error}</div> }
                {file && <div>{file.name}</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    </div> );
}
 
export default Form;