 function generarTabla() {
      let valores = [true, false];
      let tabla = "<tr><th>p</th><th>q</th><th>p → q</th><th>p ↔ q</th></tr>";

      for (let p of valores) {
        for (let q of valores) {
          tabla += `<tr>
            <td>${p}</td>
            <td>${q}</td>
            <td>${!p || q}</td>
            <td>${p === q}</td>
          </tr>`;
        }
      }

      document.getElementById("tabla").innerHTML = tabla;
    }