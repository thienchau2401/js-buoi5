// Bai 1
const KHU_VUC_A = "kvA";
const KHU_VUC_B = "kvB";
const KHU_VUC_C = "kvC";
const DOI_TUONG_1 = "dt1";
const DOI_TUONG_2 = "dt2";
const DOI_TUONG_3 = "dt3";
function diemKhuVuc(khuVuc){
    switch(khuVuc) {
        case(KHU_VUC_A):{
            return 2;
        }
        case(KHU_VUC_B):{
            return 1;
        }
        case(KHU_VUC_C):{
            return 0.5;
        }
        default : return 0;
    };
}
function diemDoiTuong(doiTuong){
    switch(doiTuong) {
        case(DOI_TUONG_1):{
            return 2.5;
        }
        case(DOI_TUONG_2):{
            return 1.5;
        }
        case(DOI_TUONG_3):{
            return 1;
        }
        default : return 0;
    };
}
document.getElementById("btnBai1").onclick = function() {
    var khuVuc = document.getElementById("khuVuc").value;
    console.log(khuVuc);
    var doiTuong = document.getElementById("doiTuong").value;
    var diem1 = document.getElementById("diem_1").value * 1;
    var diem2 = document.getElementById("diem_2").value * 1;
    var diem3 = document.getElementById("diem_3").value * 1;
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var diemTong = diem1 + diem2 + diem3 + diemKhuVuc(khuVuc) + diemDoiTuong(doiTuong);
    if (diemTong < diemChuan) {
        document.getElementById("kQ_1").innerHTML=`Tong diem dat duoc la ${diemTong}. Rat tiec ! Ban da thieu ${diemChuan-diemTong} diem! Nam sau hay thi lai nhe`;
    } else {
        document.getElementById("kQ_1").innerHTML = `Tong diem dat duoc la ${diemTong}. Chuc mung! Ban da vuot qua ki thi!`;
    }
}
// Bai 2
const GIA_50_KM_DAU = 500;
const GIA_50_KM_KE = 650;
const GIA_100_KM_KE = 850;
const GIA_150_KM_KE = 1100;
const GIA_CON_LAI = 1300;
function tinhTienDien(soDien) {
    if (soDien <= 50) {
        return soDien * GIA_50_KM_DAU;
    } else if ( soDien > 50 && soDien <= 100) {
        return 50 * GIA_50_KM_DAU + (soDien - 50) * GIA_50_KM_KE;
    } else if ( soDien > 100 && soDien <= 200) {
        return 50 * GIA_50_KM_DAU + 50 * GIA_50_KM_KE + (soDien - 100)* GIA_100_KM_KE;
    } else if(soDien > 200 && soDien <= 350) {
        return 50 * GIA_50_KM_DAU + 50 * GIA_50_KM_KE + 100* GIA_100_KM_KE + (soDien - 200) * GIA_150_KM_KE;
    } else {
        return 50 * GIA_50_KM_DAU + 50 * GIA_50_KM_KE + 100* GIA_100_KM_KE + 150 * GIA_150_KM_KE + (soDien - 350) * GIA_CON_LAI;
    };
}
document.getElementById("btnBai2").onclick = function(){
    var hoTen = document.getElementById("hoTen").value;
    var soDien = document.getElementById("soDien").value * 1;
    var tienDien = tinhTienDien(soDien);
    tienDien = tienDien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    document.getElementById("kQ_2").innerHTML = `Ho ten : ${hoTen}. So tien dien: ${tienDien}`;
}





// Bai 3
function tinhLaisuat(tongThuNhap) {
    if (tongThuNhap <= 60000000) {
        return 0.05;
    } else if (tongThuNhap > 60000000 && tongThuNhap <= 120000000) {
        return 0.1;
    } else if (tongThuNhap > 120000000 && tongThuNhap <= 210000000) {
        return 0.15;
    } else if (tongThuNhap > 210000000 && tongThuNhap <= 384000000) {
        return 0.2;
    } else if (tongThuNhap > 384000000 && tongThuNhap <= 624000000) {
        return 0.25;
    } else if (tongThuNhap > 624000000 && tongThuNhap <= 960000000) {
        return 0.3;
    } else {
        return 0.35;
    };
}
document.getElementById("btnBai3").onclick= function(){
    var hoTen = document.getElementById("hoTen_2").value;
    var tongThuNhap = document.getElementById("thuNhap").value * 1;
    var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
    var thuNhapChiuThue = tongThuNhap - 4000000 -(soNguoiPhuThuoc*1600000);
    var rate = tinhLaisuat(thuNhapChiuThue);
    var tienThue = thuNhapChiuThue * rate;
    tienThue = tienThue.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    document.getElementById("kQ_3").innerHTML = ` Hoten : ${hoTen} . Thue thu nhap ca nhan : ${tienThue}!`;
}


//Bai 4
const NHA_DAN = "nhaDan";
const DOANH_NGHIEP = 'doanhNghiep';
document.getElementById("loaiKhachHang").onchange = function(){
    if(document.getElementById("loaiKhachHang").value == "doanhNghiep"){
        document.getElementById("ketNoi").classList.remove("d-none");
        document.getElementById("ketNoi").classList.add("d-block");
    }else {
        document.getElementById("ketNoi").classList.remove("d-block");
        document.getElementById("ketNoi").classList.add("d-none");
    }
}

document.getElementById("btnBai4").onclick = function(){
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenh = document.getElementById("soKenh").value * 1;
    var tongTien = 0;
    if (loaiKhachHang == DOANH_NGHIEP) {
        var soKetNoi = document.getElementById("soKetNoi").value * 1;
        tongTien = 15 + ((soKetNoi <=10) ? 75 : 75 + (soKetNoi-10)*5) + 50 * soKenh;
        document.getElementById("kQ_4").innerHTML = `Ma so khach hang : ${maKhachHang}. So tien cap la ${tongTien} `;
    } else {
        tongTien = 4.5 + 20.5 + 7.5 * soKenh;
        document.getElementById("kQ_4").innerHTML = `Ma so khach hang : ${maKhachHang}. So tien cap la ${tongTien} `;
    }
}

