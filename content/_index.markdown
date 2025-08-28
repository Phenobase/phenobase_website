---
title: Home
---

<div style="
  position: absolute;
  top: 25%;
  left: 10%;
  transform: translateY(-5%);
  width: 90%;
  text-align: left;
">

  <span class="header-title-phenobase" style="color:#fff;font-weight:bold;">Phenobase</span>

<p id="animated-text" style="display:inline-block; height:2.5em; font-size:2em; line-height:2.4em; color:#fff; vertical-align:top; margin:0; padding:0; "></p>

</div>



<script>
(function() {
  var lines = [
    "Observatory phenological data",
    "Contemporary phenological data from images",
    "Historical phenological data from specimens"
  ];
  var el = document.getElementById('animated-text');
  var lineIdx = 0;
  var tx = lines[lineIdx];
  var charIdx = 0;

  function animateLine() {
    if (charIdx <= tx.length) {
      el.innerText = tx.slice(0, charIdx++);
      setTimeout(animateLine, 20);
    } else {
      setTimeout(nextLine, 1000); // Pause before next line
    }
  }

  function nextLine() {
    lineIdx = (lineIdx + 1) % lines.length;
    tx = lines[lineIdx];
    charIdx = 0;
    animateLine();
  }

  animateLine();
})();
</script>
