import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
    const { state, dispatch } = useCart();

    const updateQuantity = (item, newQuantity) => {
        if (newQuantity < 1) return;

        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { ...item, quantity: newQuantity },
        });
    };

    const removeItem = (item) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: item,
        });
    };

    const calculateTotal = () => {
        return state.items.reduce((total, item) => {
            const price = parseInt(item.price.replace(/\D/g, ''));
            return total + price * item.quantity;
        }, 0);
    };

    if (state.items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Giỏ hàng trống</h2>
                        <p className="text-gray-600 mb-8">Hãy thêm sản phẩm vào giỏ hàng của bạn</p>
                        <Link
                            to="/"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Giỏ hàng của bạn</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md">
                            {state.items.map((item, index) => (
                                <div
                                    key={`${item.id}-${item.size}-${item.color}`}
                                    className={`p-6 ${
                                        index !== state.items.length - 1 ? 'border-b' : ''
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        <div className="ml-4 flex-grow">
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-2">
                                                {item.size} | {item.color}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => updateQuantity(item, item.quantity - 1)}
                                                        className="px-2 py-1 border rounded-md"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item, item.quantity + 1)}
                                                        className="px-2 py-1 border rounded-md"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <span className="text-blue-600 font-bold">
                          {parseInt(item.price.replace(/\D/g, ''))}.000đ
                        </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item)}
                                            className="ml-4 p-2 text-gray-400 hover:text-red-500"
                                        >
                                            <TrashIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">
                                Tổng đơn hàng
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tạm tính</span>
                                    <span className="font-semibold">{calculateTotal()}.000đ</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Phí vận chuyển</span>
                                    <span className="font-semibold">0đ</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-lg font-semibold">Tổng cộng</span>
                                        <span className="text-lg text-blue-600 font-bold">
                      {calculateTotal()}.000đ
                    </span>
                                    </div>
                                </div>
                                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}