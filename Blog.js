var arr=[];
var main = {};
main["@context"] = "http://schema.org";
main["@type"] = "Blog";
$('.togglediv.blog-list .togglewrap').each(function(){
	var obj = {};
	obj["@type"] = "BlogPosting";
	obj.headline=$(this).find('.toggleh2.blogh2 a').prop('title');
	obj.datePublished=$(this).find('p').html().split('.').join('/');
	obj.url=$(this).find('.blogimage a').prop('href');
	obj.mainEntityOfPage = $(this).find('.blogimage a').prop('href');
	if($(this).find('img').prop('src')!=null){
	obj.image = {};
	obj.image["@type"] = "ImageObject";
	obj.image["url"] = $(this).find('img').prop('src');
	obj.image["width"] = "120";
	obj.image["height"] = "80";
    }
	obj.author ={};
	obj.author["@type"] = "Organization";
	obj.author["name"] = "Waldhart Software";
	obj.author["url"] = "https://www.waldhart.at/firma/impressum.html";
	obj.author.image={};
	obj.author.image["@type"]= "ImageObject"
	obj.author.image["url"]= "https://www.waldhart.at/fileadmin/templates/images/logo.png";
	obj.author.image["width"]= "126";
	obj.author.image["height"] = "41.78";
	obj.publisher = {};
	obj.publisher["@type"] = "Organization";
	obj.publisher["name"] = "Waldhart Software";
	obj.publisher["url"] = "https://www.waldhart.at/firma/impressum.html";
	obj.publisher.logo = {};
	obj.publisher.logo["@type"] = "ImageObject";
	obj.publisher.logo["url"] = "https://www.waldhart.at/fileadmin/templates/images/logo.png";
	obj.publisher.logo["width"] = "126";
	obj.publisher.logo["height"] = "41.78";
	arr.push(obj);
});
main.blogPost = arr;
console.log(JSON.stringify(main));
