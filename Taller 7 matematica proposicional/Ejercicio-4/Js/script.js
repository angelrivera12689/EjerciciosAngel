function verificar() {
      let respuesta = document.getElementById("respuesta").value === "true";
      let p = true, q = false;
      let proposicion = p && !q;

      document.getElementById("resultado").innerText =
        respuesta === proposicion ? "🎉 Correcto" : "❌ Incorrecto";
    }