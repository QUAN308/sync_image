export function messages() {
  var getMessage = document.querySelector(".message");
  btnDelete.addEventListener("click", () => {
    let i;
    var count = 0;
    for (i = 0; i < checkInput.length; i++) {
      if (checkInput[i].checked == true) {
        count += 1;
      }
    }
    getMessage.style.width = "500px";
    getMessage.innerHTML = "Xoá " + count + " ảnh";
  });
}
