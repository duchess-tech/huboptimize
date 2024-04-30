const toggleButton = document.getElementById('toggleButton');

const div1 = document.getElementById('homeIntroduction');
const scheduleDemo = document.getElementById('scheduleDemo');

toggleButton.addEventListener('click', function () {
    if (homeIntro.classList.contains('hidden')) {
        homeIntro.classList.remove('hidden');
        scheduleDemo.classList.add('hidden');
        console.log("testing")
    } else {
        homeIntro.classList.add('hidden');
        scheduleDemo.classList.remove('hidden');
    }
})

const NextSchedule = document.getElementById("NextSchedule")
const NextScheduleForm = document.getElementById("NextScheduleForm")
const scheduleDemo2 = document.getElementById('scheduleDemo2');

NextSchedule.addEventListener('click', function () {
    if (NextScheduleForm.classList.contains('hidden')) {
        NextScheduleForm.classList.remove('hidden');
        scheduleDemo2.classList.add('hidden');
        console.log("testing")
    } else {
        NextScheduleForm.classList.add('hidden');
        scheduleDemo2.classList.remove('hidden');
    }
})



const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modal = document.getElementById('modal');
openModalButton.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.remove('hidden');
});
closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');

});


function Openmodal2() {
    const closeModalBtn = document.getElementById('close-modal2');
    const modal2 = document.getElementById('modal2');
    closeModalBtn.addEventListener('click', () => {
        modal2.classList.add('hidden');
    });
}

Openmodal2()

// function OPenContactus(){
//   const contactUs=document.getElementById("contactUs")
//   const homeIntro=document.getElementById("homeIntro")
//   const contactUsBtn=document.getElementById("contactUsBtn")
//   contactUsBtn.addEventListener('click', function() {
//     if (contactUs.classList.contains('hidden')) {
//       contactUs.classList.remove('hidden');
//       homeIntro.classList.add('hidden');
//     }
//   })

// }
// OPenContactus()


// function OPenLoginForm(){
//   const loginForm=document.getElementById("loginForm")
//   const homeIntro=document.getElementById("homeIntro")
//   const LoginBtn=document.getElementById("LoginBtn")
//   LoginBtn.addEventListener('click', function() {
//     if (loginForm.classList.contains('hidden')) {
//       loginForm.classList.remove('hidden');
//       homeIntro.classList.add('hidden');
//     }
//   })

// }
// OPenLoginForm()




document.addEventListener('DOMContentLoaded', function () {
    const homeIntro = document.getElementById("homeIntro");
    const contactUs = document.getElementById("contactUs");
    const loginForm = document.getElementById("loginForm");

    function showSection(sectionToShow, ...sectionsToHide) {
        sectionToShow.classList.remove('hidden');
        sectionsToHide.forEach(section => section.classList.add('hidden'));
    }

    function openContactUs() {
        showSection(contactUs, homeIntro, loginForm);
    }

    function openLoginForm() {
        showSection(loginForm, homeIntro, contactUs);
    }

    function attachButtonClickHandler(buttonId, handler) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', handler);
        } else {
            console.error
        }
    }

    attachButtonClickHandler("contactUsBtn", openContactUs);
    attachButtonClickHandler("loginBtn", openLoginForm);
});
