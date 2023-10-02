const confettiButton = document.querySelector(".party");
const confettiContainer = confettiButton.querySelector('.confetti');

confettiButton.addEventListener('click', () => {
    confettiContainer.classList.add('explosion');

    confettiContainer.addEventListener(
      'animationend',
       () => {
         confettiContainer.classList.remove('explosion');
       },
       {once: true}
    );
});