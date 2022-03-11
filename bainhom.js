const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan){
    baoquan.addEventListener("click",function(){
        document.querySelector(".conten-bottom-chitiet1").style.display = "none";
        document.querySelector(".conten-bottom-b").style.display = "bloch";
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".conten-bottom-chitiet1").style.display = "bloch";
        document.querySelector(".conten-bottom-b").style.display = "none";
    })
}



// slide tu thay doi

var index = 1;
changeimg = function() {
    var imgs = ["./logo-icon-slider/anh-bia.jpg","./logo-icon-slider/anh-bia2.jpg","./logo-icon-slider/anh-bia3.jpg"];
	document.getElementById("img-anh-bia").src = imgs[index];
	index++;
	if(index==3){
		index = 0;
	}
}
setInterval(changeimg,4000);


// form phieu mua hang

function send() {
    var arr = document.getElementsByTagName('input');
    var name = arr[0].value;
    var diachi = arr[1].value;
    var sdt = arr[2].value;
    var mahang = arr[3].value;
    var ghichu = arr[4].value;
    if(name == "" || diachi == "" || sdt == "" || mahang == "" || ghichu == ""){
        alert("Không được để trống !");
        return;
    }

    if(isNaN(sdt)){
        alert("Số điện thoại phải là số !");
        return;
    }

    confirm('Thông tin đơn hàng:'+'\n'+'Họ Tên:  '+name+'\n'+'Địa chỉ: '+diachi+'\n'+'Số điện thoại: '+sdt+'\n'+'Mã hàng: '+mahang+'\n'+'Ghi chú: '+ghichu);
}