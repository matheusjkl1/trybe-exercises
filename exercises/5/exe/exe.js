window.onload = function() {
  function setFontColor(color) {
    let paragraphs = document.querySelectorAll(".paragraph")
    for (let i = 0; i < paragraphs.length; i += 1) {
      paragraphs[i].style.color = color
    }
    localStorage.setItem("fontColor", color)
  }
  let fontColorButtons = document.querySelectorAll("#font-color>button")
    for (let i = 0; i < fontColorButtons.length; i += 1) {
      fontColorButtons[i].addEventListener("click", function(event) {
        setFontColor(event.target.innerHTML)
      })
    }

    function initialize() {
      let fontColor = localStorage.getItem("fontColor")
      if (fontColor) setFontColor(fontColor)
    initialize()
  }
}