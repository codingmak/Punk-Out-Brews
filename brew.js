

var template = '{{#data}}<div class="container--beer"><div class="aside"><img src="{{image_url}}"alt="{{name}}"style="height:100%;overflow:0auto;margin-right:auto;margin-left:auto;display:block;"></div><div class="content"><h3>{{name}}</h3><span class="sub">{{tagline}}</span><div class="content--text"><p>{{description}}</p></div><div class="content--list"><ul><li class="list-item">{{food_pairing[0]}}</li><li>{{food_pairing[1]}}</li><li>{{food_pairing[2]}}</li></ul></div></div></div>{{/data}}';
var elem = $('#beer-section');


$.getJSON('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6 ', function(data)
{
	data.forEach(function(beer){
		var html = Mustache.to_html(template, { data: beer });
		elem.innerHtml = elem.innerHtml + html;
	});

});
