function evaluar() {
  let p = document.getElementById("p").value === "true";
  let q = document.getElementById("q").value === "true";
  document.getElementById("resultado").innerHTML = `
    p ∧ q = ${p && q}<br>
    p ∨ q = ${p || q}<br>
    ¬p = ${!p}<br>
    p → q = ${!p || q}
  `;
}
