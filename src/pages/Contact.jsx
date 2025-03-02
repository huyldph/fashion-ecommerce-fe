
export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Liên hệ với chúng tôi</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-semibold mb-6">Gửi tin nhắn cho chúng tôi</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 mb-2">Họ và tên</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="Nhập họ và tên của bạn"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="Nhập email của bạn"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 mb-2">Tin nhắn</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="Nhập tin nhắn của bạn"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Gửi tin nhắn
                            </button>
                        </form>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-900">Địa chỉ</h3>
                                <p className="text-gray-600">Trịnh Văn Bô, Nam Từ liêm, Hà Nội</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Email</h3>
                                <p className="text-gray-600">huyldph40152@fpt.edu.vn</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Điện thoại</h3>
                                <p className="text-gray-600">0923432223</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Giờ làm việc</h3>
                                <p className="text-gray-600">Thứ Hai - Thứ Sáu: 9:00 - 18:00</p>
                                <p className="text-gray-600">Thứ Bảy: 9:00 - 12:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}