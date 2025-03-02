import React from 'react';
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Về chúng tôi</h3>
                        <p className="text-gray-300">
                            Chúng tôi cung cấp các giải pháp tốt nhất cho khách hàng.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-300 hover:text-white">Trang chủ</Link></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Dịch vụ</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Email: huyldph40152@fpt.edu.vn</li>
                            <li>Phone: 0923432223</li>
                            <li>Địa chỉ: Trịnh Văn Bô, Nam Từ liêm, Hà Nội</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-300">© 2023 Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}