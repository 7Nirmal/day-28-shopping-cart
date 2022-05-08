import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Card (props) {
    console.log(props);
    return (
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3 mb-5">
                        <div class="card h-100 border-2">
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>{props.Product.isbadge ? "Sale":""}</div>
                            <img class="image-fluid card-img-top book" src={props.Product.image} alt="..." />
                            <hr class="border-2"></hr>
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder fs-4">{props.Product.name}</h5>
                                {props.Product.israting ?
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill fs-6"></div>
                                    <div class="bi-star-fill fs-6"></div>
                                    <div class="bi-star-fill fs-6"></div>
                                    <div class="bi-star-fill fs-6"></div>
                                    <div class="bi-star-fill fs-6"></div>
                                </div> : ""} 
                                    <span class="text-muted text-decoration-line-through fs-5">{props.Product.oldprice}</span>
                                    <span class="fs-5"> &nbsp; ${props.Product.newprice}</span> 
                                     
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            {props.Product.isbtnname === "View options"?
                                                   <div class="text-center"><button 
                                                    href="#" class="btn btn-outline-primary mt-auto">View options</button></div>
                                :
                                <div class="text-center"><button  onClick={() => {
                                    props.Addcart(props.Product)
                                }} href="#" class="btn btn-outline-primary mt-auto">Add to cart</button></div>


                            }
                          
                            </div>
                        </div>         
                    </div>
    );
}

export default Card;
