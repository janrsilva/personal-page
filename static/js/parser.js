var $ = function (id) { return document.getElementById(id); };
var request = new XMLHttpRequest();
request.open("GET", "/CURRICULO.md", true);
request.send();
request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
		var data = request.responseText;
		$("content").innerHTML = markdown.toHTML(data, "Maruku");
	}
}