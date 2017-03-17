var links = [];
$("#c397 > p.bodytext a").each(function(){
	links.push($(this).html());
})
$("a").remove();
var temp=[];
var companies=[];
temp = $('#c397 > .bodytext').html().split('<br>');
temp.shift();
temp.pop();
temp.pop();
$.each(temp,function(i,v){
	if(v.length !== 0)
	companies.push(v.replace("&nbsp;"," "));
})

var main = {};
main["@context"] = "http://schema.org";
main["@type"] = "ItemList";
main["numberOfItems"] = companies.Length;
main["itemListElement"] = [];
$.each(companies,function(i,v){
	var eachitem = {};
	eachitem["@type"] = "ListItem";
	eachitem["position"] = i;
	var item = {};
	item["@type"] = "WebSite";
	item["name"] = v.replace("&nbsp;"," ");
	item["url"] = links[0];
	eachitem.item = item;
	main["itemListElement"].push(eachitem);
})
console.log(JSON.stringify(main))
