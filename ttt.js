function openCity(a, b) {
     var c, d, e; 
     for (d = document.getElementsByClassName("tabcontent"), 
     c = 0; c < d.length; c++)d[c].style.display = "none"; 
     for (e = document.getElementsByClassName("tablinks"), c = 0; c < e.length; c++)e[c].className = e[c].className.replace(" active", ""); 
     document.getElementById(b).style.display = "block", a.currentTarget.className += " active" } var d = new Date; d = d.toLocaleTimeString(), 
     strDate = d, arr = strDate.split(":"); 
     var rightNow = new Date, res = rightNow.toISOString().slice(8, 10).replace(/-/g, ""); res = 2 * res / 2, hour = parseInt(arr[0]), 
     min = parseInt(arr[1]), hour < 10 ? hour = "0" + hour : hour, min < 10 ? min = "0" + min : min, ds = Number(res + "" + hour + min), ds *= 1.18, ds = ds.toFixed(2),
      document.getElementById("anID").textContent = ds; 
      var random = (.4 * Math.random() + .1).toFixed(2),
       counters = Number(document.getElementById("anID").innerHTML).toFixed(2); setInterval(function () { counters = Number(counters) + Number(random), 
        formatted = counters.toFixed(2).replace(/(\d)(?=(\d{3})+\.\d\d$)/g, "$1,"), 
        document.getElementById("anID").textContent = formatted }, 1e3), 
        document.getElementById("defaultOpen").click();