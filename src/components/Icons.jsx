import React from 'react'

 const Icons = () => {
    return (
        <div className="row" >
            <div className="col-sm-3"> <span  ><i className="fas fa-balance-scale-right"></i>&nbsp;  <span className="text-info">Loan Balance</span> </span> </div>
         <div className="col-sm-3">  <span ><i className="fas fa-clipboard-list"></i>&nbsp; <span className="text-info">EMI Viewer</span></span></div>
         <div className="col-sm-3"><span ><i class="fas fa-calculator"></i>&nbsp; <span className="text-info">Loan Calculator</span></span></div>
           <div className="col-sm-3"><span ><i class="fas fa-sign-out-alt"></i>&nbsp; <span className="text-info">Logout</span></span></div>
          
       
         
        </div>
    )
}

export default Icons
