fetch("data.json")
  .then(r => r.json())
  .then(data => {
    document.getElementById("bar").style.width = data.percent + "%";
    document.getElementById("percent").textContent = data.percent + "%";

    const ul = document.getElementById("names");
    ul.innerHTML = "";
    data.names.forEach(name => {
      const li = document.createElement("li");
      li.textContent = name;
      ul.appendChild(li);
    });
  });
