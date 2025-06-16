<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Simulateur d'Orientation</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
      line-height: 1.6;
    }
    h1, h2 {
      color: #2c3e50;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 25px;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: center;
    }
    th {
      background-color: #e0e0e0;
    }
    input[type="number"] {
      width: 60px;
    }
    #resultFinal {
      font-size: 1.5em;
      color: #27ae60;
      font-weight: bold;
    }
    button {
      padding: 10px 20px;
      background-color: #2980b9;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #1f5f89;
    }
  </style>
</head>
<body>
  <h1>🧠 Simulateur de Moyenne d'Orientation</h1>

  <h2>Étape 1 : Moyennes Annuelles (MA)</h2>
  <table>
    <tr>
      <th>Matière</th>
      <th>Trim 1</th>
      <th>Trim 2</th>
      <th>Trim 3</th>
      <th>MA/20</th>
    </tr>
    <tr>
      <td>Math</td>
      <td><input type="number" id="math1"></td>
      <td><input type="number" id="math2"></td>
      <td><input type="number" id="math3"></td>
      <td id="maMath"></td>
    </tr>
    <tr>
      <td>Français</td>
      <td><input type="number" id="fr1"></td>
      <td><input type="number" id="fr2"></td>
      <td><input type="number" id="fr3"></td>
      <td id="maFr"></td>
    </tr>
    <tr>
      <td>Anglais</td>
      <td><input type="number" id="ang1"></td>
      <td><input type="number" id="ang2"></td>
      <td><input type="number" id="ang3"></td>
      <td id="maAng"></td>
    </tr>
    <tr>
      <td>Physique Chimie</td>
      <td><input type="number" id="pc1"></td>
      <td><input type="number" id="pc2"></td>
      <td><input type="number" id="pc3"></td>
      <td id="maPc"></td>
    </tr>
  </table>

  <h2>Étape 2 : Notes au BEPC</h2>
  <table>
    <tr>
      <th>Matière</th>
      <th>Note BEPC</th>
      <th>Oral (si Anglais)</th>
      <th>Note Finale BEPC</th>
    </tr>
    <tr>
      <td>Math</td>
      <td><input type="number" id="bepcMath"></td>
      <td>-</td>
      <td id="bepcMathFinal"></td>
    </tr>
    <tr>
      <td>Français</td>
      <td><input type="number" id="bepcFr"></td>
      <td>-</td>
      <td id="bepcFrFinal"></td>
    </tr>
    <tr>
      <td>Physique Chimie</td>
      <td><input type="number" id="bepcPc"></td>
      <td>-</td>
      <td id="bepcPcFinal"></td>
    </tr>
    <tr>
      <td>Anglais</td>
      <td><input type="number" id="bepcAngEcrit"></td>
      <td><input type="number" id="bepcAngOral"></td>
      <td id="bepcAngFinal"></td>
    </tr>
  </table>

  <h2>Étape 3 : MA + BEPC</h2>
  <table>
    <tr>
      <th>Matière</th>
      <th>MA</th>
      <th>BEPC</th>
      <th>Total</th>
    </tr>
    <tr>
      <td>Math</td>
      <td id="mathMa3"></td>
      <td id="mathBepc3"></td>
      <td id="mathTotal3"></td>
    </tr>
    <tr>
      <td>Français</td>
      <td id="frMa3"></td>
      <td id="frBepc3"></td>
      <td id="frTotal3"></td>
    </tr>
    <tr>
      <td>Physique Chimie</td>
      <td id="pcMa3"></td>
      <td id="pcBepc3"></td>
      <td id="pcTotal3"></td>
    </tr>
    <tr>
      <td>Anglais</td>
      <td id="angMa3"></td>
      <td id="angBepc3"></td>
      <td id="angTotal3"></td>
    </tr>
  </table>

  <h2>Étape 4 : Application des Coefficients</h2>
  <table>
    <tr>
      <th>Matière</th>
      <th>MA + BEPC</th>
      <th>Coefficient</th>
      <th>Note Coefficientée</th>
    </tr>
    <tr>
      <td>Math</td>
      <td id="mathTotal4"></td>
      <td>2</td>
      <td id="mathCoef"></td>
    </tr>
    <tr>
      <td>Français</td>
      <td id="frTotal4"></td>
      <td>2</td>
      <td id="frCoef"></td>
    </tr>
    <tr>
      <td>Physique Chimie</td>
      <td id="pcTotal4"></td>
      <td>1</td>
      <td id="pcCoef"></td>
    </tr>
    <tr>
      <td>Anglais</td>
      <td id="angTotal4"></td>
      <td>1</td>
      <td id="angCoef"></td>
    </tr>
  </table>

  <h2>Étape 5 : Moyenne d’Orientation</h2>
  <p id="resultFinal">🟦 Ta moyenne s'affichera ici 🎯</p>

  <button onclick="calculer()">Calculer la Moyenne Finale</button>

  <script>
    function getValue(id) {
      return parseFloat(document.getElementById(id).value) || 0;
    }

    function updateMA() {
      const matières = ['math', 'fr', 'ang', 'pc'];
      matières.forEach(m => {
        const t1 = getValue(m + '1');
        const t2 = getValue(m + '2');
        const t3 = getValue(m + '3');
        const ma = (t1 + 2 * t2 + 2 * t3) / 5;
        document.getElementById('ma' + m.charAt(0).toUpperCase() + m.slice(1)).innerText = ma.toFixed(2);
      });
    }

    function calculer() {
      updateMA();

      const maMath = (getValue('math1') + 2*getValue('math2') + 2*getValue('math3')) / 5;
      const maFr = (getValue('fr1') + 2*getValue('fr2') + 2*getValue('fr3')) / 5;
      const maAng = (getValue('ang1') + 2*getValue('ang2') + 2*getValue('ang3')) / 5;
      const maPc = (getValue('pc1') + 2*getValue('pc2') + 2*getValue('pc3')) / 5;

      const bepcMath = getValue('bepcMath');
      const bepcFr = getValue('bepcFr');
      const bepcPc = getValue('bepcPc');
      const bepcAng = (getValue('bepcAngEcrit') + getValue('bepcAngOral')) / 2;

      document.getElementById('bepcMathFinal').innerText = bepcMath;
      document.getElementById('bepcFrFinal').innerText = bepcFr;
      document.getElementById('bepcPcFinal').innerText = bepcPc;
      document.getElementById('bepcAngFinal').innerText = bepcAng.toFixed(2);

      // Étape 3
      document.getElementById('mathMa3').innerText = maMath.toFixed(2);
      document.getElementById('mathBepc3').innerText = bepcMath;
      document.getElementById('mathTotal3').innerText = (maMath + bepcMath).toFixed(2);

      document.getElementById('frMa3').innerText = maFr.toFixed(2);
      document.getElementById('frBepc3').innerText = bepcFr;
      document.getElementById('frTotal3').innerText = (maFr + bepcFr).toFixed(2);

      document.getElementById('angMa3').innerText = maAng.toFixed(2);
      document.getElementById('angBepc3').innerText = bepcAng.toFixed(2);
      document.getElementById('angTotal3').innerText = (maAng + bepcAng).toFixed(2);

      document.getElementById('pcMa3').innerText = maPc.toFixed(2);
      document.getElementById('pcBepc3').innerText = bepcPc;
      document.getElementById('pcTotal3').innerText = (maPc + bepcPc).toFixed(2);

      // Étape 4
      const mathNote = (maMath + bepcMath);
      const frNote = (maFr + bepcFr);
      const angNote = (maAng + bepcAng);
      const pcNote = (maPc + bepcPc);

      document.getElementById('mathTotal4').innerText = mathNote.toFixed(2);
      document.getElementById('frTotal4').innerText = frNote.toFixed(2);
      document.getElementById('angTotal4').innerText = angNote.toFixed(2);
      document.getElementById('pcTotal4').innerText = pcNote.toFixed(2);

      const mathCoef = mathNote * 2;
      const frCoef = frNote * 2;
      const angCoef = angNote * 1;
      const pcCoef = pcNote * 1;

      document.getElementById('mathCoef').innerText = mathCoef.toFixed(2);
      document.getElementById('frCoef').innerText = frCoef.toFixed(2);
      document.getElementById('angCoef').innerText = angCoef.toFixed(2);
      document.getElementById('pcCoef').innerText = pcCoef.toFixed(2);

      const total = mathCoef + frCoef + angCoef + pcCoef;
      const moyenne = total / 12;

      document.getElementById('resultFinal').innerText = `💥 Ta Moyenne d’Orientation est de : ${moyenne.toFixed(2)} / 20 🎯`;
    }

    // Écouteur pour MA auto
    document.querySelectorAll('input[type=number]').forEach(input => {
      input.addEventListener('input', updateMA);
    });
  </script>
</body>
</html>