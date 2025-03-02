import React from 'react';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Về chúng tôi</h1>

                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Câu chuyện của chúng tôi</h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-gray-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Tầm nhìn</h3>
                        <p className="text-gray-600">
                            Trở thành công ty hàng đầu trong lĩnh vực, mang đến những giải pháp sáng tạo và
                            hiệu quả cho khách hàng.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold mb-4">Sứ mệnh</h3>
                        <p className="text-gray-600">
                            Cung cấp dịch vụ chất lượng cao, đáp ứng mọi nhu cầu của khách hàng và đóng góp
                            vào sự phát triển của cộng đồng.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold mb-6">Đội ngũ của chúng tôi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                            <h3 className="font-semibold">Nguyễn Văn A</h3>
                            <p className="text-gray-600">Giám đốc</p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                            <h3 className="font-semibold">Trần Thị B</h3>
                            <p className="text-gray-600">Quản lý</p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                            <h3 className="font-semibold">Lê Văn C</h3>
                            <p className="text-gray-600">Kỹ thuật viên</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}