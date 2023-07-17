const programs = document.querySelectorAll('.programs');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes () {
 const triggerBottom = window.innerHeight / 5 * 4;

 programs.forEach (prog => {
  const progLeft = prog.getBoundingClientRect().top;

  if (progLeft < triggerBottom) {
   prog.classList.add('show');
  } else {
   prog.classList.remove('show');
  };
 });
};