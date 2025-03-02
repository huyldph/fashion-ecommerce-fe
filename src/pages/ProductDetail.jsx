import React from 'react';
import {useParams} from 'react-router-dom';
import {ShoppingCartIcon, HeartIcon, TruckIcon, ArrowPathIcon, ShieldCheckIcon} from '@heroicons/react/24/outline';
import {useCart} from '../contexts/CartContext';

const products = [
    {
        id: 1,
        name: 'Áo Thun Basic',
        price: '199.000đ',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Áo',
        description: 'Áo thun basic với chất liệu cotton 100%, thoáng mát, thấm hút mồ hôi tốt. Thiết kế đơn giản, dễ phối đồ.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Trắng', 'Đen', 'Xám', 'Navy'],
        details: [
            'Chất liệu: Cotton 100%',
            'Form: Regular fit',
            'Xuất xứ: Việt Nam',
            'Bảo quản: Giặt máy ở nhiệt độ thường'
        ]
    },
    {
        id: 2,
        name: 'Quần Jean Nam',
        price: '499.000đ',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'Quần',
        description: 'Quần jean nam cao cấp, form slim fit tôn dáng. Chất jean co giãn thoải mái, không bai xù.',
        sizes: ['29', '30', '31', '32', '33'],
        colors: ['Xanh đậm', 'Xanh nhạt', 'Đen'],
        details: [
            'Chất liệu: 98% cotton, 2% spandex',
            'Form: Slim fit',
            'Xuất xứ: Việt Nam',
            'Bảo quản: Giặt máy với nước lạnh'
        ]
    },
    // ... other products
];

export default function ProductDetail() {
    const {id} = useParams();
    const {dispatch} = useCart();
    const product = products.find(p => p.id === parseInt(id));
    const [selectedSize, setSelectedSize] = React.useState('');
    const [selectedColor, setSelectedColor] = React.useState('');
    const [quantity, setQuantity] = React.useState(1);
    const [error, setError] = React.useState('');

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Không tìm thấy sản phẩm</p>
            </div>
        );
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            setError('Vui lòng chọn kích thước và màu sắc');
            return;
        }
        setError('');

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: selectedSize,
                color: selectedColor,
                quantity: quantity,
            },
        });
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto rounded-lg"
                            />
                            <button
                                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                                <HeartIcon className="w-5 h-5 text-gray-600"/>
                            </button>
                        </div>

                        {/* Product Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="text-2xl font-bold text-blue-600 mb-6">{product.price}</p>

                            {/* Size Selection */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Kích thước</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded-md border ${
                                                selectedSize === size
                                                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                    : 'border-gray-300 hover:border-blue-600'
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Màu sắc</h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.colors.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-2 rounded-md border ${
                                                selectedColor === color
                                                    ? 'border-blue-600 bg-blue-50 text-blue-600'
                                                    : 'border-gray-300 hover:border-blue-600'
                                            }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selection */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-3">Số lượng</h3>
                                <div className="flex items-center space-x-4">
                                    <button
                                        onClick={() => handleQuantityChange(quantity - 1)}
                                        className="px-3 py-1 border rounded-md hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span className="w-12 text-center">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(quantity + 1)}
                                        className="px-3 py-1 border rounded-md hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <p className="text-red-500 mb-4">{error}</p>
                            )}

                            {/* Add to Cart Button */}
                            <div className="flex space-x-4 w-full">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-1/2 bg-blue-100 text-blue-700 px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-50 transition-colors border border-blue-800"
                                >
                                    <ShoppingCartIcon className="w-5 h-5"/>
                                    <span>Thêm vào giỏ</span>
                                </button>
                                <button
                                    className="w-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
                                >
                                    <span>Mua ngay</span>
                                </button>
                            </div>

                            {/* Features */}
                            <div className="pt-6 mt-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex items-center space-x-2">
                                        <TruckIcon className="w-5 h-5 text-blue-600"/>
                                        <span className="text-sm text-gray-600">Miễn phí vận chuyển</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <ArrowPathIcon className="w-5 h-5 text-blue-600"/>
                                        <span className="text-sm text-gray-600">Đổi trả trong 30 ngày</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <ShieldCheckIcon className="w-5 h-5 text-blue-600"/>
                                        <span className="text-sm text-gray-600">Bảo hành chính hãng</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="border-t p-8">
                        <h2 className="text-2xl font-bold mb-4">Chi tiết sản phẩm</h2>
                        <ul className="space-y-2">
                            {product.details.map((detail, index) => (
                                <li key={index} className="text-gray-600">• {detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}