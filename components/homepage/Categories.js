import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { id: 2, name: 'Houses', icon: 'c1.png' },
  { id: 14, name: 'Garden Tools', icon: 'c2.png' },
  { id: 15, name: 'kitchenware', icon: 'c3.png' },
  { id: 10, name: 'Computers', icon: 'c4.png' },
  { id: 3, name: 'Smart Phones', icon: 'c5.png' },
  { id: 1, name: 'cars', icon: 'c6.png' },
  { id: 12, name: 'Books', icon: 'c7.png' },
  { id: 13, name: 'Furniture', icon: 'c8.png' },
  { id: 16, name: 'light fixtures', icon: 'c9.png' },
  { id: 17, name: 'Motorcyles', icon: 'c10.png' },
  { id: 7, name: 'electronics', icon: 'c11.png' },
];

function Categories() {

  function handleCategoryId(id,category_type){
    localStorage.setItem("categoryId",id)
    localStorage.setItem("category_type",category_type)
    
  }


  
  return (
    <section className="categories">
      <h2>Explore Categories</h2>
      <div className="category-list">
        {categories.map(category => (
          <Link className='catLink' href="/productOnCategory">
          <div key={category.id} className="category" onClick={()=>handleCategoryId(category.id,category.name)}>
            <Image src={`/icons/${category.icon}`} alt={category.name} width={48} height={48} />
            <h3>{category.name}</h3>
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
