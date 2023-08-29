import image1 from '../../public/images/w1.jpg';
import image2 from '../../public/images/w2.jpg';
import image3 from '../../public/images/w3.jpg';

const featuredProducts = [
    { id: 1, name: 'Product 1', price: 19.99, image: image1 },
    { id: 2, name: 'Product 2', price: 29.99, image: image2 },
    { id: 3, name: 'Product 3', price: 14.99, image: image3 },
  ];  

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {featuredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.image.src} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
