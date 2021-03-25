//npm install semantic-ui-react semantic-ui-css
import {Loader, Dimmer} from 'semantic-ui-react';


const Spinner = ()=>{
    return(

    <Dimmer active>{/**daje crnu boju pozadine */}
    <Loader size='huge' content={'Preparing chat'}/>
    </Dimmer>
    )
}

export default Spinner;