import './less.less'

// vanilla-lazyload 17
new LazyLoad({callback_error: (el: any) => (el.src = 'https://via.placeholder.com/1x1/?text=') });

// glightbox 3
GLightbox({});

// sweetalert2 11
import { Message } from './message.ts'
import { API } from './api.ts'

import { setupFormValid } from './validation.ts'
setupFormValid();

(<any>window).API = API;
(<any>window).Message = Message;
(<any>window).SetupFormValid = setupFormValid;
(<any>window)._MESSAGE_ = {
  required: 'Xin vui lòng nhập nội dung',
  email: 'Xin vui lòng nhập địa chỉ email hợp lệ!',
  minLengthCheckBox: 'Xin vui lòng chọn ít nhất ',
  minLength: 'Xin vui lòng nhập tối thiểu ',
  maxLength: 'Xin vui lòng nhập không quá ',
  compare: 'Xin vui lòng nhập không quá ',
};





import { setupMenuMobile } from './menu-mobile.ts';
setupMenuMobile(document.getElementsByClassName('handle-menu'));
// swiper 10
import { setupSwiper } from './swiper.ts';
setupSwiper();




const temp = document.getElementById("template-1");
console.log('temp',temp)
if (temp) {
  const template = Handlebars.compile(temp.innerHTML);
  const data = {
    "datass": JSON.stringify({ "name": "Alan", "hometown": "Somewhere, TX", "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]}), 
    "name": "Alan", 
    "hometown": "Somewhere, TX",
    "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}] };
  document.getElementById('text')!.innerHTML = template(data);
}

// Array.from(document.getElementsByClassName('handle-dialog')).forEach((el) => el.addEventListener('click', () =>  {
//   const temp = document.getElementById("template-1");
//   if (temp) {
//     const template = Handlebars.compile(temp.innerHTML);
//     const data = { "name": "Alan", "hometown": "Somewhere, TX",
//       "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
//     Message.html(template(data));
//   }

// }))

// echarts 5
import { setupEchart } from './echart.ts'
setupEchart();

// inputmask 5
Inputmask().mask(document.querySelectorAll("input"));

document.getElementById('success')!.addEventListener('click', () => Message.success({text: 'Success'}))
document.getElementById('warning')!.addEventListener('click', () => Message.warning({text: 'Warning'}))
document.getElementById('confirm')!.addEventListener('click', () => Message.confirm({text: 'Confirm'}))
document.getElementById('error')!.addEventListener('click', () => Message.error({text: 'Error'}))

window.onload = async () => {
  const test = await API.post('/authentication/jwt/login', {
    deviceName:
      "Chrome/116.0.0.0 desktop/mac-os-x-15 ccfeecc0-533f-8a96-f60d-8d6253b60420",
    deviceNo: "Macintosh",
    deviceType: "BROWSER",
    password: "41234231",
    remember: false,
    username: "12342134",
  });
  console.log(test);
};

const time: any = {};
document.querySelectorAll('.handle-collapse').forEach((e: any) => e.addEventListener('click', () => {
  if (!time[e.id]) time[e.id] = gsap.timeline({defaults: {duration: 0.25, ease: 'power1.inOut'}});
  else {
    time[e.id][time[e.id].reversed() ? 'play' : 'reverse']();
    return
  }

  time[e.id]
    .to(e.parentElement.querySelector('.handle-content'), {height: 'auto'}, '0')
  time[e.id]
    .to(e.querySelector('.la-angle-down'), { transform: 'rotate(0deg)'}, '0');

}));
