import Draggable from 'react-draggable';
import './Video.css';
function Move(){
    return (
        <>
        <Draggable>
            <div className='move1'>
                <div className='move'>
                    I can move now.
                </div>
            </div>
        </Draggable>
        <Draggable>
            <div className='move2'>
                <div >
                    I can move now.
                </div>
            </div>
            </Draggable>
        </>
    )
}
export default Move ;