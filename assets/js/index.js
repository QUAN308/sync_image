var items = document.querySelector(".item_detail");

var closeSetting = document.querySelector(".bg_setting");
var frameSetting = document.querySelector(".setting_frame");
var btnSetting = document.querySelector(".setting");
var btnChat = document.querySelector(".btn_trash");
var btnDelete = document.querySelector(".delete_count");
var btnDeleteAll = document.querySelector(".delete_all");
var checkInput = document.querySelectorAll(".check_input");

var getMessage = document.querySelector(".message");
var mess = document.querySelector(".message p");
var btnAccept = document.querySelector(".accept");
var btnReject = document.querySelector(".reject");

var count = 0;
function countItemDelete() {
  let i;
  for (i = 0; i < checkInput.length; i++) {
    if (checkInput[i].checked == true) {
      count += 1;
    }
  }
}

function message(count) {
  getMessage.style.width = "500px";
  btnAccept.style.display = "block";
  btnReject.style.display = "block";
  if (count > 0) {
    mess.innerHTML = "Xoá " + count + " ảnh";
  } else {
    mess.innerHTML = "Không có ảnh nào được chọn";
  }
}

btnSetting.addEventListener("click", () => {
  frameSetting.style.visibility = "visible";
});
closeSetting.addEventListener("click", () => {
  frameSetting.style.visibility = "hidden";
});

var st = false;
btnChat.addEventListener("click", () => {
  let i;
  st = !st;
  if (st == true) {
    for (i = 0; i < checkInput.length; i++) {
      checkInput[i].style.display = "block";
    }
    btnDelete.style.visibility = "visible";
    btnDeleteAll.style.visibility = "visible";
    btnChat.style.backgroundColor = "#4ea56b";
    btnChat.style.color = "#ffffff";
  } else {
    btnDelete.style.visibility = "hidden";
    btnDeleteAll.style.visibility = "hidden";
    btnChat.style.backgroundColor = "#ffffff";
    getMessage.style.width = "0px";
    btnAccept.style.display = "none";
    btnReject.style.display = "none";
    btnChat.style.color = "black";
    for (i = 0; i < checkInput.length; i++) {
      if (checkInput[i].checked == true) {
        checkInput[i].checked = false;
        count = 0;
      }
      checkInput[i].style.display = "none";
    }
  }
});

btnDelete.addEventListener("click", () => {
  count = 0;
  countItemDelete();
  message(count);
});
var stDelAll = false;
btnDeleteAll.addEventListener("click", () => {
  stDelAll = !stDelAll;
  if (stDelAll == true) {
    for (let i = 0; i < checkInput.length; i++) {
      if (checkInput[i].checked == false) {
        checkInput[i].checked = true;
      }
    }
  } else {
    for (let i = 0; i < checkInput.length; i++) {
      if (checkInput[i].checked == true) {
        checkInput[i].checked = false;
        count = 0;
      }
    }
  }
});

btnAccept.addEventListener("click", () => {
  getMessage.style.width = "0px";
  btnAccept.style.display = "none";
  btnReject.style.display = "none";
  mess.innerHTML = "Xoá " + count + " ảnh";
});
btnReject.addEventListener("click", () => {
  getMessage.style.width = "0px";
  btnAccept.style.display = "none";
  btnReject.style.display = "none";
  mess.innerHTML = "Xoá " + count + " ảnh";
});
