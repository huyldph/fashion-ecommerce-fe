import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
    const { state } = useCart();
    const itemCount = state.items.length;
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const userMenuRef = useRef(null);

    // Xử lý click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        }

        // Thêm event listener
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Hàm xử lý khi click vào menu item
    const handleMenuItemClick = () => {
        setShowUserMenu(false);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Xử lý tìm kiếm ở đây
        console.log('Searching for:', searchQuery);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-800">
                            Logo
                        </Link>
                    </div>

                    {/* Thanh tìm kiếm */}
                    <div className="flex-1 flex items-center justify-center px-6">
                        <form onSubmit={handleSearch} className="w-full max-w-lg">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                                >
                                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center space-x-6">
                        {/* Menu items */}
                        <Link to="/" className="text-gray-600 hover:text-gray-900">
                            Trang chủ
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900">
                            Giới thiệu
                        </Link>
                        <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                            Liên hệ
                        </Link>

                        {/* User Menu */}
                        <div className="relative" ref={userMenuRef}>
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                            >
                                <UserIcon className="h-6 w-6" />
                            </button>
                            
                            {showUserMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <Link
                                        to="/login"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleMenuItemClick}
                                    >
                                        Đăng nhập
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={handleMenuItemClick}
                                    >
                                        Đăng ký
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Cart Icon */}
                        <Link 
                            to="/cart" 
                            className="text-gray-600 hover:text-gray-900 relative"
                            onClick={() => setShowUserMenu(false)}
                        >
                            <ShoppingBagIcon className="w-6 h-6" />
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}