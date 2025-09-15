function verificar() {
      let valores = [true, false];
      let esTautologia = true;

      for (let p of valores) {
        if (!(p || !p)) esTautologia = false;
      }

      document.getElementById("resultado").innerText =
        esTautologia ? "✅ Es una tautología" : "❌ No es una tautología";
    }