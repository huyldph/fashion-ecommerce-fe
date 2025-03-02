import React, {useEffect} from 'react';
import {ShoppingCartIcon, HeartIcon} from '@heroicons/react/24/outline';
import {Link} from 'react-router-dom';
import {useCart} from "../contexts/CartContext.jsx";

const products = [
    {
        id: 1,
        name: 'Áo Thun Basic',
        price: '199000đ',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Áo',
        purchases: 10,
    },
    {
        id: 2,
        name: 'Quần Jean Nam',
        price: '499000đ',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Quần',
        purchases: 20,
    },
    {
        id: 3,
        name: 'Áo Sơ Mi Trắng',
        price: '299000đ',
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Áo',
        purchases: 30,
    },
    {
        id: 4,
        name: 'Váy Đầm Dự Tiệc',
        price: '799000đ',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Váy',
        purchases: 40,
    },
    {
        id: 5,
        name: 'Áo Khoác Denim',
        price: '599000đ',
        image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Áo',
        purchases: 50,
    },
    {
        id: 6,
        name: 'Quần Short Nữ',
        price: '249000đ',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Quần',
        purchases: 60,
    },
    {
        id: 7,
        name: 'Áo Sơ Mi Trắng',
        price: '299000đ',
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Áo',
        purchases: 70,
    },
    {
        id: 8,
        name: 'Váy Đầm Dự Tiệc',
        price: '799000đ',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Váy',
        purchases: 80,
    },
    {
        id: 9,
        name: 'Áo Khoác Denim',
        price: '599000đ',
        image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Áo',
        purchases: 90,
    },
    {
        id: 10,
        name: 'Quần Short Nữ',
        price: '249000đ',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Quần',
        purchases: 100,
    },
    {
        id: 11,
        name: 'Áo Sơ Mi Trắng',
        price: '299000đ',
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Áo',
        purchases: 110,
    },
    {
        id: 12,
        name: 'Váy Đầm Dự Tiệc',
        price: '799000đ',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Váy',
        purchases: 120,
    },
    {
        id: 13,
        name: 'Áo Khoác Denim',
        price: '599000đ',
        image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Áo',
        purchases: 130,
    },
    {
        id: 14,
        name: 'Quần Short Nữ',
        price: '249000đ',
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Quần',
        purchases: 140,
    },
];

const categories = ['Tất cả', 'Áo', 'Quần', 'Váy'];

const slides = [
    {
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
        title: "Thời Trang Cho Mọi Người",
        description: "Khám phá bộ sưu tập mới nhất với các xu hướng thời trang 2024"
    },
    {
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
        title: "Bộ Sưu Tập Mùa Hè",
        description: "Thoải mái và phong cách với những thiết kế mới nhất"
    },
    {
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
        title: "Xu Hướng 2024",
        description: "Cập nhật những xu hướng thời trang mới nhất"
    }
];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = React.useState('Tất cả');
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const productsPerPage = 12; // Số sản phẩm trên mỗi trang
    const { dispatch } = useCart();

    const filteredProducts = selectedCategory === 'Tất cả'
        ? products
        : products.filter(product => product.category === selectedCategory);

    // Auto slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset về trang 1 khi đổi category
    };

    // Tính toán sản phẩm cho trang hiện tại
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Hàm xử lý chuyển trang
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section Slideshow */}
            <div className="relative h-[500px]">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                    style={{backgroundImage: `url(${slides[currentSlide].image})`}}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50">
                        <div
                            className="max-w-7xl mx-auto px-4 py-16 relative h-full flex flex-col justify-center text-white">
                            <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h1>
                            <p className="text-xl mb-8">{slides[currentSlide].description}</p>
                            <button
                                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit">
                                Mua sắm ngay
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-8xl mx-auto px-8 py-8">
                <div className="flex space-x-4 mb-8">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 rounded-full ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {currentProducts.length > 0 ? (
                        currentProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                                <Link to={`/product/${product.id}`} className="block">
                                    <div className="relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 right-4 flex space-x-2">
                                            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                                                <HeartIcon className="w-5 h-5 text-gray-600"/>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                        <p className="text-gray-600 mb-4">{product.category}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-blue-600 font-bold">{product.price}</span>
                                            <p>Đã bán {product.purchases}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-8 text-gray-500">
                            Không tìm thấy sản phẩm nào trong danh mục này
                        </div>
                    )}
                </div>

                {/* Pagination Controls - Chỉ hiển thị khi có nhiều hơn 1 trang */}
                {totalPages > 1 && (
                    <div className="flex justify-center space-x-2 mt-12 mb-2">
                        {Array.from({length: totalPages}, (_, i) => i + 1).map((number) => (
                            <button
                                key={number}
                                onClick={() => handlePageChange(number)}
                                className={`px-4 py-2 rounded ${
                                    currentPage === number
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Features Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div
                                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Miễn phí vận chuyển</h3>
                            <p className="text-gray-600">Cho đơn hàng trên 499.000đ</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Đảm bảo chất lượng</h3>
                            <p className="text-gray-600">Cam kết chính hãng 100%</p>
                        </div>
                        <div className="text-center">
                            <div
                                className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Đổi trả dễ dàng</h3>
                            <p className="text-gray-600">30 ngày đổi trả miễn phí</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}