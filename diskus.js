var mql = window.matchMedia(&#39;screen and (min-width: 350px)&#39;);if (mql.matches){
var disqus_loaded = false;
var disqus_shortname =&#39;my-hubsch-com-jasa-pembuatan-website-dan-blog&#39;;
var disqus_url = disqus_blogger_current_url;
var disqus_blogger_current_url = &quot;<data:blog.canonicalUrl/>&quot;;
if (!disqus_blogger_current_url.length) {
disqus_blogger_current_url = &quot;<data:blog.url/>&quot;; }
var disqus_blogger_homepage_url = &quot;<data:blog.homepageUrl/>&quot;;
var disqus_blogger_canonical_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
function disqus() {
    if (!disqus_loaded)  {
        disqus_loaded = true;
        var e = document.createElement(&quot;script&quot;);
        e.type = &quot;text/javascript&quot;;
        e.async = true;
        e.src = &quot;//&quot; + disqus_shortname + &quot;.disqus.com/blogger_item.js&quot;;
        (document.getElementsByTagName(&quot;head&quot;)[0] || document.getElementsByTagName(&quot;body&quot;)[0])
        .appendChild(e);
    }
}
//Opens comments when linked to directly
var hash = window.location.hash.substr(1);
if (hash.length &gt; 8) {
    if (hash.substring(0, 8) == &quot;comment-&quot;) {
        disqus();
    }}};
  window.onscroll = function(e) {
    if ((window.innerHeight + window.scrollY) 
        &gt;= document.body.offsetHeight) 
    {
        if (!disqus_loaded) disqus(); 
    }
};
