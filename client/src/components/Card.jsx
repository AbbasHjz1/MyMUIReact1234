import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import CardItem from './CardItem';
const Card = ({ updateLocalForAll }) => {
  const [order, setOrder] = useState([])
  const deleteFromLocal = (_id) => {
    setOrder(order.filter((item) => item._id !== _id))
    localStorage.removeItem(`Item${_id}`)
  }
  let finalPrice = 0;
  let msg = 'You order '
  const sendToWtsp = () => {
    order.map((item) => {
      let str1 = `${item.quantity} ${item.title}, `
      msg = (msg.concat('\n', str1));
    })
    order.map((item) => {
      finalPrice = finalPrice + item.finalPrice
    })
    const whatsappMessage = msg.concat('\nPrice: ', finalPrice)
    var win = window.open(`https://wa.me/71721956?text=${whatsappMessage}`, '_blank');
    localStorage.clear()
    updateMyLocal()

  }
  const updateMyLocal = () => {
    let keys = Object.keys(localStorage)
    console.log(keys)
    var values = [],
      i = keys.length;
    console.log(values)
    while (i--) {
      if (keys[i].startsWith('Item') === true){
      values.push(JSON.parse(localStorage.getItem(keys[i])));
      }
    }
    setOrder(values)
  }
  useEffect(() => {
    updateMyLocal()
  }, [])
  return (
    <>
      {order.length > 0 ?
        <>
          <section className="pt-5 pb-5">
            <div className="container">
              <div className="row w-100">
                <div className="col-lg-12 col-md-12 col-12">
                  <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                  <p className="mb-5 text-center">
                    <i className="text-info font-weight-bold">{order.length}</i> items in your cart</p>
                  <table id="shoppingCart" className="table table-condensed table-responsive">
                    <thead>
                      <tr>
                        <th style={{ width: '60%' }}>Product</th>
                        <th style={{ width: '12%' }}>Price</th>
                        <th style={{ width: '10%' }}>Quantity</th>
                        <th style={{ width: '16%' }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.map((item) => {
                        return (
                          <CardItem key={item._id} item={item} order={order} updateMyLocal={updateMyLocal} deleteFromLocal={deleteFromLocal} updateLocalForAll={updateLocalForAll} />
                        )
                      })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="mt-4 mx-2 d-flex align-items-center justify-content-between">
                <div class="">
                  <Link to='/'>
                    <button class="btn btn-light mb-4 btn-lg pl-5 pr-5">Continue Shopping</button>
                  </Link>
                </div>
                <div class="">
                  <button class="btn btn-primary mb-4 btn-lg pl-5 pr-5" onClick={sendToWtsp}>Checkout</button>
                </div>
              </div>
            </div>
          </section>
          
        </>
        :
        <>
          <div className='text-center'>
            <h2 className='text-center mt-5 '>You are not order <span class="badge bg-secondary text-center">Yet</span> !!</h2>
            <div><h4> <span class="breadcrumb-item"><Link to='/'> <button class="btn btn-primary mt-3 btn-lg pl-5 pr-5">Back Home</button></Link></span></h4></div>
          </div>
        </>}
    </>
  )
}

export default Card