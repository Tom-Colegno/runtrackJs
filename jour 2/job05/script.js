window.addEventListener('scroll', function() {
    var scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('footer').style.backgroundColor = `hsl(${scrollPercent}, 100%, 50%)`;
  });