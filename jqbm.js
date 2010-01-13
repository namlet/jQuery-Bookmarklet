javascript:(function(){
	d=document;
	function tn(x) {return d.getElementsByTagName(x);}
	function c(e) { 
		return d.createElementNS ? 
		d.createElementNS('http://www.w3.org/1999/xhtml',e): 
		d.createElement(e); 
	}
	function a(p,e) {p.appendChild(e);}
	function R(f) { 
		if (R.D) return f();
		if (R.t) R.q.push(f); else {
		    R.q = [f];
		    R.t = setInterval(r, 13);
	}	}
	function r() {
	    if (R.D) return false;
	    if ($) {
			clearInterval(R.t);
	        R.t = null; 
	        for (var i=0;i<R.q.length;i++)
	        	R.q[i](); 
	        R.q = null;
	        R.D = true;
	}	}

	var s = c("script");
	s.setAttribute("type","text/javascript");
	s.setAttribute("src","http://bit.ly/1412Bd");
	a(tn("head")[0],s);
})()