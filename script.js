function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  var link = document.createElement('a');

link.href = url;

link.download = 'assets\NAGENDERSINGHCHAUHAN2.pdf';

link.dispatchEvent(new MouseEvent('click'));