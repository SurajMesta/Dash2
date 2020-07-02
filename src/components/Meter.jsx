import React from 'react'

 const Meter = ({val}) => {
    return (
        <div style={{marginTop:'10px'}}>
            <meter style={{width:'100%',height:'30px'}} min="0" max="100" value={val}></meter>
        </div>
    )
}


export default Meter
