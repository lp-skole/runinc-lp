import React from 'react'
import ShopSection from '../components/Layout/Shop/ShopSection'

const Shop = () =>{
  return (
    <article className="shop-page">
      <section className="title">
        <h2>shop</h2>
      </section>
      <aside className="content-card">
        <h3>shop</h3>
        <ul>
          <li>runinc shop</li>
          <p>Gratis fragt ved over kr. 500,-</p>
          <a href="#">Nike</a>
          <a href="#">Adidas</a>
          <a href="#">Puma</a>
          <a href="#">Asics</a>
          <a href="#">Hummel</a>
        </ul>
      </aside>
      <ShopSection/>
    </article>
  )
}
export default Shop
