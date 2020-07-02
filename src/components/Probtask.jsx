import React from 'react'

 const Probtask = () => {
    return (
        <div >
     
               
             <div className="card" style={{padding:"25px",backgroundColor:'white'}}>
                <div className="card-title text-center" style={{color:'blue'}}>Project Budget</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div>Coming Soon..</div>
                            <br/>
                                <div >

                                    <div style={{display:'flex'}}>
                                        <div style={{backgroundColor: 'black',width:'5%',height:'8%',padding:'4%'}}></div> 
                                           &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{fontSize:'0.8rem'}}>Total Budget</span>
                                    </div>
                               
                                    <div style={{display:'flex'}}>
                                        <div style={{backgroundColor: 'green',width:'5%',height:'8%',padding:'4%'}}></div> 
                                           &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{fontSize:'0.8rem'}}>Budget Amount Used</span>
                                    </div>
                                        
                                        <div style={{display:'flex'}}>
                                        <div style={{backgroundColor: 'darkslategray',width:'5%',height:'8%',padding:'4%'}}></div> 
                                           &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{fontSize:'0.8rem'}}>Target Amount Used</span>
                                    </div>
                       
                           
                           
                            
                                </div>
                        </div>
                        <div className="col-sm-6">
                         <p>Total Budget: &nbsp;&nbsp; {58000}</p>
                         <p>Remaining: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {89222}</p>
                      <div>
                          <div style={{display:'flex',justifyContent:'space-around'}}>
                           <div style={{backgroundColor: 'red',width:'5%',height:'8%',borderRadius:'50%',padding:'4%'}}></div> 
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                             <p>Currently</p>
                             &nbsp;&nbsp;&nbsp;&nbsp;
                             <p style={{color:'red'}}>8.1% Over Target</p>
                      </div>
                      </div>
                      
                      

           
    
                      
                        
                    
                    </div>

                </div>
            </div>
               
            </div>
            </div>
         
            
       
    )
}

export default Probtask
