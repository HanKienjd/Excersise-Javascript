/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
let library = {
    name: name,
    user: user,
    history: history
}
let book = [{
        id: '0',
        name: 'lập trình c',
    },
    {
        id: '1',
        name: 'Javascript',
    }
];
let user = [{
        name: 'Hung',
        id: 'Mb0',
        books: book.id,
        borrowday: '10/02/2019',
        returnday: '13/02/2019'
    },
    {
        name: 'Nga',
        id: 'Mb1',
        books: book.id,
        borrowday: '12/03/2019',
        returnday: '15/03/2019'

    }
];
let history = {
    id: user.id,
    borrowtime: user.borrowday,
    returntime: user.returnday
}