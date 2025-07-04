//your JS code here. If required.
https://www.svgrepo.com/show/345221/three-dots.svg


  const root = document.documentElement;
    const fontSizeInput = document.getElementById("fontsize");
    const fontColorInput = document.getElementById("fontcolor");
    const form = document.getElementById("preferenceForm");

    function getCookie(name) {
      const cookies = document.cookie.split('; ');
      for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
      }
      return null;
    }

    window.onload = () => {
      const savedFontSize = getCookie("fontsize");
      const savedFontColor = getCookie("fontcolor");

      if (savedFontSize) {
        root.style.setProperty("--fontsize", `${savedFontSize}px`);
        fontSizeInput.value = savedFontSize;
      }

      if (savedFontColor) {
        root.style.setProperty("--fontcolor", savedFontColor);
        fontColorInput.value = savedFontColor;
      }
    };

 
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const size = fontSizeInput.value;
      const color = fontColorInput.value;
  
      document.cookie = `fontsize=${size}; path=/`;
      document.cookie = `fontcolor=${color}; path=/`;
     
      root.style.setProperty("--fontsize", `${size}px`);
      root.style.setProperty("--fontcolor", color);
    });