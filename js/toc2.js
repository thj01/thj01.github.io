/*
 * Dynamic Table of Contents script
 * by Matt Whitlock <http://www.whitsoftdev.com/>
 * 
 * http://www.whitsoftdev.com/articles/toc.html
 * 
 */
 

function createLink(href, innerHTML) {
	var a = document.createElement("a");
	a.setAttribute("href", href);
	a.innerHTML = innerHTML;
	return a;
}

function generateTOC(toc) {
	var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
	toc = toc.appendChild(document.createElement("ul"));
	for (var i = 0; i < document.body.childNodes.length; ++i) {
		var node = document.body.childNodes[i];
		var tagName = node.nodeName.toLowerCase();
		


		if (tagName == "h5") {
			++i5;
			if (i5 == 1) toc.lastChild.lastChild.lastChild.lastChild.appendChild(document.createElement("ul"));
			var section = i1 + "." + i2 + "." + i3 + "." + i4 + "." + i5;
			node.insertBefore(document.createTextNode(section + " "), node.firstChild);
			node.id = "section" + section;
			toc.lastChild.lastChild.lastChild.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
		}

		else if (tagName == "h4") {
			++i4, i5 =0;
			if (i4 == 1) toc.lastChild.lastChild.lastChild.appendChild(document.createElement("ul"));
			var section = i1 + "." + i2 + "." + i3 + "." + i4;
			node.insertBefore(document.createTextNode(section + " "), node.firstChild);
			node.id = "section" + section;
			toc.lastChild.lastChild.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
		}
		else if (tagName == "h3") {
			++i3, i4 = 0, i5 =0;
			if (i3 == 1) toc.lastChild.lastChild.appendChild(document.createElement("ul"));
			var section = i1 + "." + i2 + "." + i3;
			node.insertBefore(document.createTextNode(section + " "), node.firstChild);
			node.id = "section" + section;
			toc.lastChild.lastChild.lastChild.appendChild(document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
		}
		else if (tagName == "h2") {
			++i2, i3 = 0, i4 = 0, i5 =0;
			if (i2 == 1) toc.lastChild.appendChild(document.createElement("ul"));
			var section = i1 + "." + i2 ;
			node.insertBefore(document.createTextNode(section + " "), node.firstChild);
			node.id = "section" + section;
			toc.lastChild.lastChild.appendChild(h2item = document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
		}
		else if (tagName == "h1") {
			++i1, i2 = 0, i3 = 0, i4 = 0, i5 =0;
			if (i1 == 1) toc.appendChild(document.createElement("ul"));
			var section = i1;
			node.insertBefore(document.createTextNode(section + "  "), node.firstChild);
			node.id = "section" + section;
			toc.lastChild.appendChild(h2item = document.createElement("li")).appendChild(createLink("#section" + section, node.innerHTML));
		}
	}

}


