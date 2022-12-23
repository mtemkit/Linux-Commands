// Select the template element
const template = document.querySelector('#template');

// Create the cloned elements and append them to the template element
template.innerHTML = data.map(item => {
    var listHtml = "";
    //var linkListedItem = "";
    for (var i = 0; i < Object.keys(item.textList.listedItems).length; i++) {
        listHtml +=
            '<li class="">' +
            `<b><a id="link" data-json="${JSON.stringify(item.textList.listedItems[i])}" href="./${item.textList.listedItems[i].title}.html">` +
            `${item.textList.listedItems[i].title}</a></b></br></br>` +
            item.textList.listedItems[i].explanation +
            '</li></br>';
    }
    return `
        <div class="block">
        <h2 class="block-title"><u>${item.title}</u></h2>
        <div class="block-text">
            <ul>${listHtml}<ul>
        </div>
        </div>
    `;
}).join('');


/*
// Function to create and populate a temporary HTML file
function createTempFile() {

    // Get the value of the data-json attribute
    var jsonData = this.getAttribute('data-json');
  
    // Parse the JSON string into an object
    var currentData = JSON.parse(jsonData);

    // Create a Blob object with the HTML content
    const html = `
      <!doctype html>
      <html>
        <head>
          <title>${currentData.title}</title>
        </head>
        <body>
          <h1>${currentData.title}</h1>
          <p>${currentData.explanation}</p>
        </body>
      </html>
    `;

    const blob = new Blob([html], {
        type: "text/html"
    });

    // Create a temporary URL for the Blob object
    const url = URL.createObjectURL(blob);

    // Create a link element and set its href attribute to the URL of the temporary HTML file
    const link = document.createElement("a");
    link.href = url;

    // Set the target attribute to "_blank" to open the temporary HTML file in a new window
    link.target = "_blank";

    // Add the link to the DOM
    document.body.appendChild(link);

    // Click the link to open the temporary HTML file
    link.click();

    // Revoke the URL once it is no longer needed
    URL.revokeObjectURL(url);
}
*/

    //for more points, add a section in the json file called "moreInfo"
    /*
    var htmlContent = '<ul>';
    data.moreInfo.forEach(function(item) {
    htmlContent += '<li>' + item + '</li>';
    });
    htmlContent += '</ul>';
    document.getElementById('temp').innerHTML = htmlContent;
    */


//document.getElementById('link').addEventListener('click', createTempFile);
