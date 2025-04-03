document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadButton").addEventListener("click", function() { 
        var dwldFunc = document.createElement("a");
        dwldFunc.href = "resume.pdf";
        dwldFunc.download = "resume.pdf";
        document.body.appendChild(dwldFunc);
        dwldFunc.click();
        document.body.removeChild(dwldFunc);
    });
}); 