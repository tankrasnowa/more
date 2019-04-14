function func() { 
   header_btn.onclick = function(){
	   let maenu = document.getElementById("header_btn");
	   let elem = document.getElementById("header_btn_block")
	   header_btn.classList.toggle("active");
	   header_btn_block.classList.toggle("active");
   }
}
