<script type="text/javascript">
  	window.onload = function(){						
  		var blogDomain = "http%3A%2F%2Fmnive93.github.io%2FPersonalBlog%2F";
  		var pageTitle = "{{ page.title }}";
  		var pageTitleDashes = pageTitle.replace(/ /g, '-') + "%2F&amp;";
  		var pageTitleSpaces = pageTitle.replace(/ /g, '%20') + "&amp;";
        var pageDateShort = "{{ page.dateShort }}";
 		var pageDateShortSlashes = pageDateShort.replace(/-/g, '%2F') + "%2F";

  		
 		var twitterPartOne = "https://twitter.com/intent/tweet?original_referer=";
 		var twitterPartTwo = "text=";
 		var twitterPartThree = "tw_p=tweetbutton&amp;url=";
 		var twitterPartFour = "via=mnive93";
 		var twitterUrl = twitterPartOne + blogDomain + pageDateShortSlashes + pageTitleDashes + twitterPartTwo + pageTitleSpaces + twitterPartThree + blogDomain + pageDateShortSlashes + pageTitleDashes + twitterPartFour;
		var twitterLink = document.getElementById("twitter-link");
 		twitterLink.onclick = function() {popUp=window.open(twitterUrl, 'popupwindow', 'scrollbars=yes,width=600,height=400');popUp.focus();return false };
 		
 		var linkedinPartOne = "http://www.linkedin.com/shareArticle?mini=true&url=";
 		var linkedinPartTwo = "&title=";
 		var linkedinPartThree = "&summary=";
 		var linkedinPartFour = "&source=";
 		var linkedinUrl = linkedinPartOne + blogDomain + pageDateShortSlashes + pageTitleDashes + linkedinPartTwo + pageTitleSpaces + linkedinPartFour + "@mnive93";
 		var linkedInLink = document.getElementById("linkedin-link");
 		linkedInLink.onclick = function() {popUp=window.open(linkedinUrl, 'popupwindow', 'scrollbars=yes,width=600,height=400');popUp.focus();return false };
 		
 		var googlePlusPartOne = "https://plus.google.com/share?url=";
 		var googlePlusUrl = googlePlusPartOne + blogDomain + pageDateShortSlashes + pageTitleDashes;
 		var googlePlusLink = document.getElementById("googleplus-link");
 		googlePlusLink.onclick = function() {popUp=window.open(googlePlusUrl, 'popupwindow', 'scrollbars=yes,width=600,height=400');popUp.focus();return false };
 	};
 </script>