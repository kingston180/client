import React from "react";
import Card from "./Card";
function Left() {
  return (
    <div className="left">
      <div className="pleft">
        <div className="pleftI">
          <h1 className="lefth">Find a new pet for you</h1>
          <p>You can find pets or sell them more easily with us.</p>
          </div>
          <img src="https://cdn.pixabay.com/photo/2019/06/13/18/28/dog-4272221_960_720.jpg" alt="img"/>
<div className="combo">
        <div className="quote">
          <p>Pets are humanizing. They remind us we have an
          <br /> obligation and responsibility to preserve and nurture <br />
          and care for all life.</p>
          <br />
          <br />
          <b>James Cromwell</b>
        </div>
        <div className="mid">
          <p className="lefth">We provide our services for listed type of pets</p>
        </div>
        <div className="cardHead">
    
      <div id="carouselExampleIndicators" className="carousel slide car-static" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <Card
        icon="https://cdn.pixabay.com/photo/2022/03/24/17/58/dog-7089570__340.png"
        text="Dog"
      />
    </div>
    <div class="carousel-item">
    <Card
        icon="https://cdn.pixabay.com/photo/2021/11/01/21/36/cartoon-cat-6761858__340.png"
        text="Cat"
      />
    </div>
    <div class="carousel-item">
    <Card
        icon="https://cdn.pixabay.com/photo/2017/01/31/17/10/bunny-2025642_960_720.png"
        text="Rabbit"
      />
    </div>
    <div class="carousel-item">
    <Card
        icon="https://cdn.pixabay.com/photo/2022/05/18/19/18/bird-7206003__340.png"
        text="Bird"
      />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    
    </div>
    <section id="features">
    <div class="row">
      <div class="col-lg-4 clik">
        <i class="fas fa-check-circle fa-5x cm"></i>
        <h3>Easy to use</h3>
        <p>So easy to use, even your dog could do it.</p>
      </div>

      <div class="col-lg-4 clik">
        <i class="fas fa-heart fa-5x cm"></i>
        <h3>Trusted Customers</h3>
        <p>Pet loving customers who cares for adopted pets as they are their first owner.</p>
      </div>

      <div class="col-lg-4 clik clikR">
        <i class="fas fa-bullseye fa-5x cm"></i>
        <h3>Purity Guaranteed</h3>
        <p>Only top quality pets are sold and adopted here.</p>
      </div>
    </div>

  </section>
    </div>
        </div>
    </div>
  );
}

export default Left;
