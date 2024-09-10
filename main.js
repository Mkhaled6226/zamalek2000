const insta = document.querySelector(".instagram");

insta.addEventListener('click', () => {
  window.open('https://www.instagram.com/zscofficial/?hl=ar', '_blank');
});

const x = document.querySelector(".x");

x.addEventListener('click', () => {
  window.open('https://twitter.com/ZSCOfficial', '_blank');
});

const youtube = document.querySelector(".youtube");

youtube.addEventListener('click', () => {
  window.open('https://www.youtube.com/@ZamalekTV', '_blank');
});


const burger = document.querySelector('.burger')
const list = document.querySelector('.clicklist')

burger.addEventListener('click',()=>{
list.classList.toggle('show')
// document.body.classList.toggle('noscroll')
})

const kits = document.querySelectorAll('.kit img')

kits.forEach((kit)=>{
  kit.addEventListener('mouseover',()=>{
    kits.forEach((k)=>{
      k.classList.add('dark')
    })
    kit.classList.add('active')
  })
  kit.addEventListener('mouseout',()=>{
    kits.forEach((k)=>{
      k.classList.remove('dark')
      k.classList.remove('active')
    })
  })
  // kit.addEventListener('mouseout',()=>{
  //   kit.style.opacity = '1'
  // })
})

// const uno = document.querySelector('.uno')
// console.log(uno)

// uno.addEventListener('click',()=>{
//   // window.open('http://127.0.0.1:5501/index.html', '_blank');
//   const userAgent = navigator.userAgent;

// if (userAgent.match(/Android|iPhone|iPad/i)) {
//   window.open('http://192.168.1.2:5501/index.html', '_blank');
// } else {
//   window.open('http://127.0.0.1:5501/index.html', '_blank');
// }
// })

// const email = document.querySelector('.email');
// const press = document.querySelector('.press');
// const press2 = document.querySelector('.press2');

// console.log(email.value)

// Get a reference to the input element

const menu = document.querySelectorAll('.clicklist li')
// console.log(menu)

menu.forEach((li)=>{
  li.addEventListener('click',()=>{
    list.classList.toggle('show');
    // document.body.classList.toggle('noscroll')
  })
})




