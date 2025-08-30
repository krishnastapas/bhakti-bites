export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-orange-700">Bhakti Bites</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#values">Our Values</a></li>
        <li><a href="#story">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
