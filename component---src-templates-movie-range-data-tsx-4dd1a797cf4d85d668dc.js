(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7xRa":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return y}));a("rGqo"),a("yt8O"),a("Btvt"),a("hhXQ");var n=a("q1tI"),r=a.n(n),l=a("9Dj+"),s=a("H8eV"),i=(a("KKXr"),a("lNQm")),m=function(e){var t=e.split(" ");return t[2]+"-"+function(e){switch(e){case"Jan":return"01";case"Feb":return"02";case"Mar":return"03";case"Apr":return"04";case"May":return"05";case"Jun":return"06";case"Jul":return"07";case"Aug":return"08";case"Sep":return"09";case"Oct":return"10";case"Nov":return"11";case"Dec":return"12";default:throw Error('The format of the month value "'+e+'" is incorrect.')}}(t[1])+"-"+t[0]},c=function(e){var t=e.dateTime,a=e.timeValue;return r.a.createElement("time",{dateTime:t,className:"highlight"},a)},o=function(e){var t=e.fromDate,a=e.untilDate,n=e.numberOfMoviesWatched,l=e.totalDaysSinceFirstMovie,s=e.totalDaysSpentWatchingMovies,o=e.percentOfTimeSpentWatchingMovies,u=e.hoursAndMinutesSpentWatchingMovies;return r.a.createElement(i.a,{id:"time-spent"},r.a.createElement("section",null,r.a.createElement("p",null,r.a.createElement("span",null,"From "),r.a.createElement(c,{dateTime:m(t),timeValue:t}),r.a.createElement("span",null," until "),r.a.createElement(c,{dateTime:m(a),timeValue:a}),r.a.createElement("span",null,", I've watched "),r.a.createElement("strong",{className:"highlight"},n," movies"),r.a.createElement("span",null,"."))),r.a.createElement("section",{className:"mt-4 pt-4 border-t-2 border-dashed"},r.a.createElement("p",null,r.a.createElement("span",null,"Out of "),r.a.createElement(c,{dateTime:l+"d",timeValue:l}),r.a.createElement("span",null," days, I've spent "),r.a.createElement(c,{dateTime:s+"d",timeValue:s}),r.a.createElement("span",null," watching films. That's "),r.a.createElement("span",{className:"highlight"},o,"%"),r.a.createElement("span",null," of my time."))),r.a.createElement("section",{className:"mt-4 pt-4 border-t-2 border-dashed"},r.a.createElement("h1",{className:"font-bold text-center pb-2"},"More precisely"),r.a.createElement(c,{dateTime:u[0]+"h",timeValue:u[0]+" hours"}),"0"!=u[1]&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null," and "),r.a.createElement(c,{dateTime:u[1]+"m",timeValue:"\n                                "+u[1]+("1"===u[1]?" minute":" minutes")})),r.a.createElement("span",null,".")))},u=(a("Oyvg"),a("pIFo"),a("Wbzz")),p=function(e){var t=e.movieRanges,a=e.maxListLength,n=void 0===a?7:a;return t.slice(0,n).map((function(e){var t=e[0],a=e[1];return r.a.createElement("li",{key:t+a,className:"my-2"},r.a.createElement(u.Link,{to:m(t)+"_until_"+m(a),className:"p-2 rounded-sm hover:bg-purple hover:text-gray focus:bg-purple focus:text-gray"},t+" - "+a))}))},g=function(e){var t=e.listOfRanges,a=e.movieRangeSearchValue,n=e.setMovieRangeSearchValue,l=function(e,t){var a=t.replace(/\s/g,".*"),n=RegExp(".*"+a+".*","i");return e.filter((function(e){var t=e.join(" ");if(n.test(t))return e}))}(t,a);return r.a.createElement("form",{className:"w-8/12 mx-auto relative text-center",onReset:function(){return n("")}},r.a.createElement("label",{htmlFor:"movie-range-search",className:"block bg-yellow border-2 border-b-0 text-purple p-1 rounded-t-sm font-bold cursor-pointer"},"Select movie data range"),r.a.createElement("input",{id:"movie-range-search","aria-label":"search box",type:"text",className:"w-full p-2 border-2 border-purple",onFocus:function(){""===a&&n(" ")},onChange:function(e){var t=e.target.value;setTimeout((function(){n(t)}),500)}}),r.a.createElement("button",{type:"reset","aria-label":"clear search box",className:"absolute p-2 border-2 border-l-0 border-purple bg-yellow"},"✕"),""!=a&&r.a.createElement("ul",{"aria-label":"movie-ranges",className:"w-full absolute z-10 text-sm py-2 bg-gray text-purple border-t-0 border-2 border-purple"},0===l.length&&r.a.createElement("li",null,"No Results"),l.length>0&&r.a.createElement(p,{movieRanges:l}),l.length>7&&r.a.createElement("span",null,"and some more"),l.length<7&&l.length>0&&r.a.createElement("span",null,"and that's all")))},d=function(e){var t,a,n=e.sectionTitle,l=e.movieTitle,s=e.movieRuntimeHours,i=e.movieRuntimeMinutes;switch(s){case"0":t="0 hours";break;case"1":t="1 hour";break;default:t=s+" hours"}switch(i){case"0":a="";break;case"1":a=" and 1 minute";break;default:a=" and "+i+" minutes"}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"font-bold text-center pb-2"},n),r.a.createElement(c,{dateTime:s+"H"+i+"M",timeValue:t+a}),""!==l&&r.a.createElement("h2",null,r.a.createElement("abbr",{title:"for example"},"e.g."),r.a.createElement("em",null," ",l)))},E=function(e){var t=e.longestMovie,a=e.shortestMovie,n=e.movieOfAverageLength,l=t[0],s=a[0],m=n[0],c=t[1].split(":"),o=a[1].split(":"),u=n[1].split(":");return r.a.createElement(i.a,{id:"movie-length"},r.a.createElement("section",{className:"mb-4 pb-4 border-b-2 border-dashed"},r.a.createElement(d,{sectionTitle:"Longest runtime",movieTitle:l,movieRuntimeHours:c[0],movieRuntimeMinutes:c[1]})),r.a.createElement("section",{className:"mb-4 pb-4 border-b-2 border-dashed"},r.a.createElement(d,{sectionTitle:"Shortest runtime",movieTitle:s,movieRuntimeHours:o[0],movieRuntimeMinutes:o[1]})),r.a.createElement("section",null,r.a.createElement(d,{sectionTitle:"Average runtime",movieTitle:m,movieRuntimeHours:u[0],movieRuntimeMinutes:u[1]})))},h=(a("a1Th"),function(e){var t=e.listSummary,a=e.listHeading,n=e.list;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mb-4 pb-4 border-b-2 border-dashed"},t),r.a.createElement("section",null,r.a.createElement("h1",{className:"font-bold text-center"},a),r.a.createElement("ul",null,n.map((function(e,t){var a=e[0],n=e[1];return r.a.createElement("li",{key:a+t.toString(),className:"py-2 flex justify-between border-b border-dotted"},r.a.createElement("em",null,a),r.a.createElement("strong",null,n))})))))}),v=function(e){var t;switch(e){case"Sublime Lettuce":t="Sublime Lettuces";break;case"Amazing Savory":t="Amazing Savories";break;case"Great Onion":t="Great Onions";break;case"Good Tomato":t="Good Tomatoes";break;case"Decent Carrot":t="Decent Carrots";break;case"Bad Eggplant":t="Bad Eggplants";break;default:throw Error(e+" is not a valid rating value.")}return r.a.createElement("p",null,r.a.createElement("span",null,"I watch a lot of "),r.a.createElement("span",{className:"highlight"},t),r.a.createElement("span",null,"."))},b=function(e){var t,a,n,l,s,m,c=e.listType,o=e.list,u=e.miscSummaryData,p=void 0===u?"":u,g=o[0][0];switch(c){case"genres":return r.a.createElement(i.a,{id:"movie-genres"},r.a.createElement(h,{listSummary:(m=g,r.a.createElement("p",null,r.a.createElement("span",null,"I mostly watch "),r.a.createElement("span",{className:"highlight"},m),r.a.createElement("span",null," movies, but I'm open to every genre."))),listHeading:"Number of movies per genre",list:o}));case"directors":return r.a.createElement(i.a,{id:"movie-directors"},r.a.createElement(h,{listSummary:(s=g,r.a.createElement("p",null,r.a.createElement("span",{className:"highlight"},s),r.a.createElement("span",null," stands out as a director."))),listHeading:"Number of movies directed by",list:o}));case"actors":return r.a.createElement(i.a,{id:"movie-actors"},r.a.createElement(h,{listSummary:(l=g,r.a.createElement("p",null,r.a.createElement("span",null,"Looks like "),r.a.createElement("span",{className:"highlight"},l),r.a.createElement("span",null," is popular."))),listHeading:"Number of movies starring",list:o}));case"decades":return r.a.createElement(i.a,{id:"movie-decades"},r.a.createElement(h,{listSummary:(a=p,n=g,r.a.createElement("p",null,r.a.createElement("span",null,"I seem to prefer "),r.a.createElement("span",{className:"highlight"},a),r.a.createElement("span",null," movies, from the "),r.a.createElement("span",{className:"highlight"},n),r.a.createElement("span",null,"."))),listHeading:"Number of movies per decade",list:o}));case"rating system":return r.a.createElement(i.a,{id:"movie-rating-system"},r.a.createElement(h,{listSummary:r.a.createElement("p",null,r.a.createElement("span",null,"I have a "),r.a.createElement("span",{className:"highlight"},"food inspired"),r.a.createElement("span",null," rating system.")),listHeading:"My ratings compared to IMDb stars",list:o}));case"my ratings":return r.a.createElement(i.a,{id:"my-ratings"},r.a.createElement(h,{listSummary:v(g),listHeading:"Number of movies per my rating system",list:o}));case"imdb ratings":return r.a.createElement(i.a,{id:"imdb-ratings"},r.a.createElement(h,{listSummary:(t=p,r.a.createElement("p",null,r.a.createElement("span",null,"Compared to me, IMDb users give movies "),r.a.createElement("span",{className:"highlight"},t),r.a.createElement("span",null," ratings."))),listHeading:"Number of movies per IMDb rating (translated to my rating system)",list:o}));default:return null}},f=function(){return r.a.createElement("footer",{className:"mx-auto text-center mb-5"},r.a.createElement("h1",{className:"font-bold"},"Contact"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"inline-block my-1 bg-purple text-gray p-2 rounded-sm",href:"mailto:jc@jagdcake.com"},"jc@jagdcake.com")),r.a.createElement("li",null,r.a.createElement("a",{className:"inline-block my-1 bg-purple text-gray p-2 rounded-sm",href:"https://github.com/JagdCake/movie-data"},"GitHub repository"))))},y="664760991";t.default=function(e){var t=e.data,a=e.pageContext,n=a.movieDateRange[0],i=a.movieDateRange[1],m=Object.values(t.postgres.timeSpent).map((function(e){return String(e)})),c=m[0],u=m[1],p=m[2],d=m[3],h=m[4],v=m[5],y=" from "+n+" until "+i,N=[];a.movieDateRanges.map((function(e,t,a){for(var n=e,r=t+1;r<a.length;r++){var l=a[r];N.push([n,l])}}));var S=r.a.useState(""),T=S[0],M=S[1],x=t.postgres.movieLength,R=x.longestMovie,D=x.shortestMovie,k=x.movieOfAverageLength,w=t.postgres.lists.top10Genres,O=t.postgres.lists.top10Directors,H=t.postgres.lists.top10Actors,A=t.postgres.lists.top10Decades,V=t.postgres.lists.movieAgePreference,F=t.postgres.lists.myTopRatings,I=t.postgres.lists.imdbRatingsComparedToMine,L=t.postgres.lists.top10TranslatedImdbRatings;return r.a.createElement(l.a,null,r.a.createElement(s.a,{title:y}),r.a.createElement(g,{listOfRanges:N,movieRangeSearchValue:T,setMovieRangeSearchValue:M}),r.a.createElement(o,{fromDate:n,untilDate:i,numberOfMoviesWatched:c,totalDaysSinceFirstMovie:u,totalDaysSpentWatchingMovies:p,percentOfTimeSpentWatchingMovies:d,hoursAndMinutesSpentWatchingMovies:[h,v]}),r.a.createElement(E,{longestMovie:R,shortestMovie:D,movieOfAverageLength:k}),r.a.createElement(b,{listType:"genres",list:w}),r.a.createElement(b,{listType:"directors",list:O}),r.a.createElement(b,{listType:"actors",list:H}),r.a.createElement(b,{listType:"decades",list:A,miscSummaryData:V}),r.a.createElement(b,{listType:"rating system",list:[["Sublime Lettuce","9–10"],["Amazing Savory","7.9–8.9"],["Great Onion","6–7.8"],["Good Tomato","5–5.9"],["Decent Carrot","4–4.9"],["Bad Eggplant","1–3.9"]]}),r.a.createElement(b,{listType:"my ratings",list:F}),r.a.createElement(b,{listType:"imdb ratings",list:L,miscSummaryData:I}),r.a.createElement(f,null))}},UExd:function(e,t,a){var n=a("nh4g"),r=a("DVgA"),l=a("aCFj"),s=a("UqcF").f;e.exports=function(e){return function(t){for(var a,i=l(t),m=r(i),c=m.length,o=0,u=[];c>o;)a=m[o++],n&&!s.call(i,a)||u.push(e?[a,i[a]]:i[a]);return u}}},hhXQ:function(e,t,a){var n=a("XKFU"),r=a("UExd")(!1);n(n.S,"Object",{values:function(e){return r(e)}})}}]);
//# sourceMappingURL=component---src-templates-movie-range-data-tsx-4dd1a797cf4d85d668dc.js.map