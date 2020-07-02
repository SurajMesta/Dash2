import React from 'react'

 const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Manage Users <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Share</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Request</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Admin</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">My Setting</a>
      </li>

       <li class="nav-item">
        <a class="nav-link" href="#">Apps</a>
      </li>
   
    </ul>
  </div>
</nav>
        </div>
    )
}


export default Navbar
