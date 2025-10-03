  let checkbox = document.getElementById('cbox');
  let box1=document.querySelector(".box1");
  let box2=document.querySelector(".box2");
  let box3=document.querySelector(".box3");
  let hback=document.querySelector("hback");
  let box4=document.querySelector(".box4");
  let a=document.querySelectorAll("a");

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        document.body.style.backgroundColor = '#181818';
        document.body.style.color = 'white';
        box1.style.backgroundColor="#417748";
        box2.style.backgroundColor="#416C77";
        box3.style.backgroundColor="#767741";
        box4.style.backgroundColor="#77414F";
        hback.style.backgroundColor="#3E3E3E";
        a.style.color="#5CAFFF";
      } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        box1.style.backgroundColor="#8EF39A";
        box2.style.backgroundColor="#94B5EC";
        box3.style.backgroundColor="#FFD996";
        box4.style.backgroundColor="#FF9B96";
        hback.style.backgroundColor="#EBEBEB";
        a.style.color="#000099";
      }
    });
