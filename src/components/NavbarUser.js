import React from "react";
import { Link } from "react-router-dom";

const NavbarUser = () => {
    return(
        <>

  
				<div class="main-nav section_margin">
					<div class="container-fluid">
						<div class="container">
							<div class="row">
								<div class="col-12 col-md-12 main_nav_cover" id="nav">							
									<ul id="main-menu">
											<li><Link to="/" >Home</Link></li>
											<li><Link to="/article-page" >Posts</Link></li>
											<li><Link to="/about-us" >About Us</Link></li>


	
										<li class="menu-item-has-children"><a>Taxation</a>
											<ul class="sub-menu">
												<li><Link to="/" >Income Tax</Link></li>
												<li><Link to="/" >Goods And Service Tax</Link></li>
											</ul>
										</li>
										<li class="menu-item-has-children"><a>Legal</a>
											<ul class="sub-menu">
												<li><Link to="/" >Corporate Law</Link></li>
												<li><Link to="/" >Legal Awareness</Link></li>
											</ul>
										</li>

										{/* <li class="menu-item-has-children"><a>Public Policy</a>
											<ul class="sub-menu">
												<li class="menu-item-has-children"><Link to="/" >RBI Policy</Link></li>
												<li class="menu-item-has-children"><Link to="/" >Economic Policies</Link></li>
														
												
												
											</ul>
										</li>
										<li class="menu-item-has-children"><a>Entrepreneurs</a>
											<ul class="sub-menu">
												<li class="menu-item-has-children"><Link to="/" >MSME's</Link></li>
												<li class="menu-item-has-children"><Link to="/" >Startups</Link></li>
														
												
												
											</ul>
										</li> */}
										<li><Link to="/" >Write for us</Link></li>
										<li><Link to="/contact-us" >Contact Us</Link></li>
										
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>








        </>
    );
}

export default NavbarUser;