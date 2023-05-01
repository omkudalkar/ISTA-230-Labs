window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   const xhr = new XMLHttpRequest();
   xhr.responseType = 'json';
   xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
         if (xhr.status === 200) {
            responseReceivedHandler(xhr.response);
         } else {
            document.querySelector("#quotes").textContent = `Error: ${xhr.response.error}`;
         }
      }
   };
   xhr.open('GET', `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`);
   xhr.send();
}

function responseReceivedHandler(response) {
   let html = "<ol>";
   response.forEach((quote, index) => {
      html += `<li>${quote.quote} - ${quote.source}</li>`;
   });
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
}ere