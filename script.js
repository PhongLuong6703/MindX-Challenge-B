

//Con Số Trúng Thưởng Hiện Tại Là 12


let back = document.querySelector(".back");
let container = document.querySelector(".container");
let reward = document.querySelector(".reward");
let number = document.querySelector(".number");
let errorText = document.querySelector(".errorText");
let btn = document.querySelector(".btn");
let click = 0;

btn.addEventListener("click", function () {
    click += 1;
    if (number.value != "12") {
        if (click > 3) {
            errorText.innerHTML = "Rất Tiếc, Bạn Đã Đoán Sai Quá 3 Lần. Kết Quả Là 12.";
        } else {
            errorText.innerHTML = "Số Bạn Đoán Chưa Chính Xác. Xin Mời Nhập Lại."
        }
        return false;
    } else if (Number(number.value) < 1 || Number(number.value) > 20) {
        errorText.innerHTML = "Số Bạn Vừa Nhập Không Hợp Lệ. Vui Lòng Nhập Lại!";
        return false;
    } else if (number.value == "12") {
        container.style.display = "none";
        reward.style.display = "flex";
        return true;
    }
})

back.addEventListener("click", function () {
    container.style.display = "block";
    reward.style.display = "none";
})
