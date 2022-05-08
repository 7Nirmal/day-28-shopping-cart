import {useState} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';

function App() {
  const[Data] = useState([
    {
      id:1,
      name: "Fancy product",
      oldprice: 40.00,
      newprice: 80.00,
      isbadge:false,
      israting:false,
      isbtnname:"View options",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:2,
      name: "Special Item",
      oldprice: "$20.00",
      newprice: 18.00,
      isbadge:true,
      israting: true,
      isbtnname:"Add to cart",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:3,
      name: "Sale Item",
      oldprice: "$50.00",
      newprice: 25.00,
      isbadge:false,
      israting: false,
      isbtnname:"Add to cart",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

    },
    {
      id:4,
      name: "Popular Item",
      oldprice: "",
      newprice: 40.00,
      isbadge: false,
      israting: true,
      isbtnname:"Add to cart",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:5,
      name: "Sale Item",
      oldprice: 50.00,
      newprice: 25.00,
      isbadge: false,
      israting: false,
      isbtnname:"Add to cart",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:6,
      name: "Fancy product",
      oldprice: 120.00,
      newprice: 280.00,
      isbadge: false,
      israting: false,
      isbtnname:"Add to cart",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    },
    {
      id:7,
      name: "Special Item",
      oldprice: "$20.00",
      newprice: 18.00,
      isbadge:true,
      israting: true,
      isbtnname:"View options",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

    },
    {
      id:8,
      name: "Popular Item",
      oldprice: "",
      newprice: 40.00,
      isbadge: false,
      israting: true,
      isbtnname:"Add to cart",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    }]);
    const [Cart,setcart] = useState ([]);
    const [total,settotal] = useState (0);
    // const [toggle,settoggle] = useState (true);

    let Addtocart = (items) => {
      setcart([...Cart,items])
      settotal (total+items.newprice)
    }
    //console.log (Addtocart);

    let Removecart = (items) => {
      let itemindex = Cart.findIndex(obj => items.id === obj.id);
      Cart.splice(itemindex,1);
      setcart([...Cart])
      settotal (total- items.newprice);
    }
    // let togglebutton = (toggle) => {
    //   settoggle (!toggle);
    // }

    return (
    <div className="App">
  <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
      <Navbar Cart = {Cart} Removecart ={Removecart} total = {total}></Navbar>
      </nav>
      <header class="bg-dark py-5">
        <Header></Header>
      </header>
      <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    Data.map((Product,index)=>{
                      return <Card Product = {Product} index = {index} Addcart= {Addtocart} ></Card>
                    })
                  }
                  </div>
                  </div>
                  </section>

  
        <Footer></Footer>
    

</div>
  );
}

export default App;
