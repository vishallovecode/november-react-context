import { createPortal } from 'react-dom';
const PopUp  = ()=> {
    return  createPortal(<div>hey</div> ,document.body)
}

export default PopUp;