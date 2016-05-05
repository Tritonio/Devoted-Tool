$(document).ready(function () {
	if (typeof localStorage.extrasubs=="string") {
		var extrasubs=localStorage.extrasubs.split("\n");
	} else {
		var extrasubs=[];
	}
	$.each(extrasubs,function(i){
		if (extrasubs[i]!="") {
			if (!extrasubs[i].match(/\//)) extrasubs[i]="/r/"+extrasubs[i];
			$("#subs").append("<tr><td><a href='https://reddit.com/"+extrasubs[i]+"' target='_blank'>"+extrasubs[i]+"</a>:</td><td><input type='text' class='terms'></td><td><button class='search' data-sub='"+extrasubs[i]+"'>Search</button></td></tr>");
		}
	});
	if (typeof localStorage.extraurls=="string") {
		var extraurls=localStorage.extraurls.split("\n");
	} else {
		var extraurls=[];
	}
	var showextras=false;
	for (i=0;i<extraurls.length;i+=2) {
		if (extraurls[i]!="") {
			var leftname=extraurls[i].split(" ").slice(0,-1).join(" ");
			var lefturl=extraurls[i].split(" ").slice(-1).join(" ");
			var rightname="";
			var righturl="";
			if (i+1<extraurls.length) {
				rightname=extraurls[i+1].split(" ").slice(0,-1).join(" ");
				righturl=extraurls[i+1].split(" ").slice(-1).join(" ");
			}
			showextras=true;
			$("#extras").append("<tr><td><a href='"+lefturl+"' target='_blank'>"+leftname+"</a></td><td><a href='"+righturl+"' target='_blank'>"+rightname+"</a></td></tr>");
		}
	}
	if (showextras) $("#extras").show();
	$(".search").click(function () {
		var sub=$(this).data('sub');
		window.open("https://www.reddit.com/"+sub+"/search?q="+$(this).parent().parent().find('.terms').val()+"&restrict_sr=on&sort=new&t=all","_blank");
	});
	$('.terms').keypress(function(e){
      if(e.keyCode==13) $(this).parent().parent().find(".search").click();
    });
	$("table").css("width",$("table").eq(0).outerWidth()+"px");
});