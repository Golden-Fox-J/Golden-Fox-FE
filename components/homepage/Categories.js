import Image from 'next/image';

const categories = [
  { id: 1, name: 'Houses', icon: 'c1.png' },
  { id: 2, name: 'Garden Tools', icon: 'c2.png' },
  { id: 3, name: 'kitchenware', icon: 'c3.png' },
  { id: 4, name: 'Computers', icon: 'c4.png' },
  { id: 5, name: 'Smart Phones', icon: 'c5.png' },
  { id: 6, name: 'Vehicles', icon: 'c6.png' },
  { id: 7, name: 'Books', icon: 'c7.png' },
  { id: 8, name: 'Furniture', icon: 'c8.png' },
  { id: 9, name: 'light fixtures', icon: 'c9.png' },
  { id: 10, name: 'Motorcyles', icon: 'c10.png' },
  { id: 11, name: 'House Electronics', icon: 'c11.png' },
];

function Categories() {
  return (
    <section className="categories">
      <h2>Explore Categories</h2>
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category">
            <Image src={`/icons/${category.icon}`} alt={category.name} width={48} height={48} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
