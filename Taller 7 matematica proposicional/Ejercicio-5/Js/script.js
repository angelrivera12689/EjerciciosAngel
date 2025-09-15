function comprobar() {
      let valores = [true, false];
      let equivalentes = true;

      for (let p of valores) {
        for (let q of valores) {
          let a = (!p || q); // p → q
          let b = (!p || q); // ¬p ∨ q
          if (a !== b) equivalentes = false;
        }
      }

      document.getElementById("resultado").innerText =
        equivalentes ? "✅ Son equivalentes" : "❌ No son equivalentes";
    }