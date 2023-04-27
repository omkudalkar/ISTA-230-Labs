function parseScores(scoresString) {
   return scoresString.split(" ");
 }
 
 function buildDistributionArray(scoresArray) {
   const distribution = [0, 0, 0, 0, 0];
   scoresArray.forEach(score => {
     if (score >= 90) {
       distribution[0]++;
     } else if (score >= 80) {
       distribution[1]++;
     } else if (score >= 70) {
       distribution[2]++;
     } else if (score >= 60) {
       distribution[3]++;
     } else {
       distribution[4]++;
     }
   });
   return distribution;
 }
 
 function setTableContent(userInput) {
   const scoresArray = parseScores(userInput);
   const distributionArray = buildDistributionArray(scoresArray);
 
   const firstRow = document.getElementById("firstRow");
   for (let i = 0; i < distributionArray.length; i++) {
     const barHeight = distributionArray[i] * 10;
     const barDiv = document.createElement("div");
     barDiv.style.height = barHeight + "px";
     barDiv.classList.add("bar" + i);
     const td = document.createElement("td");
     td.appendChild(barDiv);
     firstRow.appendChild(td);
   }
 
   const thirdRow = document.getElementById("thirdRow");
   distributionArray.forEach(count => {
     const td = document.createElement("td");
     td.textContent = count;
     thirdRow.appendChild(td);
   });
 }
 
 setTableContent("45 78 98 83 86 99 90 59");
 