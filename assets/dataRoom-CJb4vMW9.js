import{i as Kt}from"./nav-HNmldmSY.js";import{l as Wt,i as At,a as Xt,b as Nt,c as Jt,s as Qt,p as ne,r as te,d as ee}from"./integration-index-DEHz1ehx.js";import{i as ot}from"./cite-export-DEokB0N9.js";function ie(n,t){let i,e;for(const r of n)r!=null&&(i===void 0?r>=r&&(i=e=r):(i>r&&(i=r),e<r&&(e=r)));return[i,e]}class en{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){const i=this._partials;let e=0;for(let r=0;r<this._n&&r<32;r++){const o=i[r],s=t+o,u=Math.abs(t)<Math.abs(o)?t-(s-o):o-(s-t);u&&(i[e++]=u),t=s}return i[e]=t,this._n=e+1,this}valueOf(){const t=this._partials;let i=this._n,e,r,o,s=0;if(i>0){for(s=t[--i];i>0&&(e=s,r=t[--i],s=e+r,o=r-(s-e),!o););i>0&&(o<0&&t[i-1]<0||o>0&&t[i-1]>0)&&(r=o*2,e=s+r,r==e-s&&(s=e))}return s}}function*re(n){for(const t of n)yield*t}function It(n){return Array.from(re(n))}function oe(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);if(!(n.status===204||n.status===205))return n.json()}function ae(n,t){return fetch(n,t).then(oe)}var D=1e-6,N=Math.PI,O=N/2,at=N/4,V=N*2,J=180/N,B=N/180,z=Math.abs,le=Math.atan,un=Math.atan2,F=Math.cos,U=Math.sin,se=Math.sign||function(n){return n>0?1:n<0?-1:0},nn=Math.sqrt;function ue(n){return n>1?0:n<-1?N:Math.acos(n)}function rn(n){return n>1?O:n<-1?-O:Math.asin(n)}function H(){}function Rn(n,t){n&&st.hasOwnProperty(n.type)&&st[n.type](n,t)}var lt={Feature:function(n,t){Rn(n.geometry,t)},FeatureCollection:function(n,t){for(var i=n.features,e=-1,r=i.length;++e<r;)Rn(i[e].geometry,t)}},st={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var i=n.coordinates,e=-1,r=i.length;++e<r;)n=i[e],t.point(n[0],n[1],n[2])},LineString:function(n,t){kn(n.coordinates,t,0)},MultiLineString:function(n,t){for(var i=n.coordinates,e=-1,r=i.length;++e<r;)kn(i[e],t,0)},Polygon:function(n,t){ut(n.coordinates,t)},MultiPolygon:function(n,t){for(var i=n.coordinates,e=-1,r=i.length;++e<r;)ut(i[e],t)},GeometryCollection:function(n,t){for(var i=n.geometries,e=-1,r=i.length;++e<r;)Rn(i[e],t)}};function kn(n,t,i){var e=-1,r=n.length-i,o;for(t.lineStart();++e<r;)o=n[e],t.point(o[0],o[1],o[2]);t.lineEnd()}function ut(n,t){var i=-1,e=n.length;for(t.polygonStart();++i<e;)kn(n[i],t,1);t.polygonEnd()}function ln(n,t){n&&lt.hasOwnProperty(n.type)?lt[n.type](n,t):Rn(n,t)}function On(n){return[un(n[1],n[0]),rn(n[2])]}function cn(n){var t=n[0],i=n[1],e=F(i);return[e*F(t),e*U(t),U(i)]}function _n(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Mn(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Dn(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function $n(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Hn(n){var t=nn(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Vn(n,t){function i(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(i.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),i}function Yn(n,t){return z(n)>N&&(n-=Math.round(n/V)*V),[n,t]}Yn.invert=Yn;function ce(n,t,i){return(n%=V)?t||i?Vn(ft(n),pt(t,i)):ft(n):t||i?pt(t,i):Yn}function ct(n){return function(t,i){return t+=n,z(t)>N&&(t-=Math.round(t/V)*V),[t,i]}}function ft(n){var t=ct(n);return t.invert=ct(-n),t}function pt(n,t){var i=F(n),e=U(n),r=F(t),o=U(t);function s(u,h){var p=F(h),l=F(u)*p,a=U(u)*p,c=U(h),d=c*i+l*e;return[un(a*r-d*o,l*i-c*e),rn(d*r+a*o)]}return s.invert=function(u,h){var p=F(h),l=F(u)*p,a=U(u)*p,c=U(h),d=c*r-a*o;return[un(a*r+c*o,l*i+d*e),rn(d*i-l*e)]},s}function fe(n,t,i,e,r,o){if(i){var s=F(t),u=U(t),h=e*i;r==null?(r=t+e*V,o=t-h/2):(r=dt(s,r),o=dt(s,o),(e>0?r<o:r>o)&&(r+=e*V));for(var p,l=r;e>0?l>o:l<o;l-=h)p=On([s,-u*F(l),-u*U(l)]),n.point(p[0],p[1])}}function dt(n,t){t=cn(t),t[0]-=n,Hn(t);var i=ue(-t[1]);return((-t[2]<0?-i:i)+V-D)%V}function Tt(){var n=[],t;return{point:function(i,e,r){t.push([i,e,r])},lineStart:function(){n.push(t=[])},lineEnd:H,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var i=n;return n=[],t=null,i}}}function Pn(n,t){return z(n[0]-t[0])<D&&z(n[1]-t[1])<D}function bn(n,t,i,e){this.x=n,this.z=t,this.o=i,this.e=e,this.v=!1,this.n=this.p=null}function xt(n,t,i,e,r){var o=[],s=[],u,h;if(n.forEach(function(g){if(!((E=g.length-1)<=0)){var E,m=g[0],_=g[E],y;if(Pn(m,_)){if(!m[2]&&!_[2]){for(r.lineStart(),u=0;u<E;++u)r.point((m=g[u])[0],m[1]);r.lineEnd();return}_[0]+=2*D}o.push(y=new bn(m,g,null,!0)),s.push(y.o=new bn(m,null,y,!1)),o.push(y=new bn(_,g,null,!1)),s.push(y.o=new bn(_,null,y,!0))}}),!!o.length){for(s.sort(t),gt(o),gt(s),u=0,h=s.length;u<h;++u)s[u].e=i=!i;for(var p=o[0],l,a;;){for(var c=p,d=!0;c.v;)if((c=c.n)===p)return;l=c.z,r.lineStart();do{if(c.v=c.o.v=!0,c.e){if(d)for(u=0,h=l.length;u<h;++u)r.point((a=l[u])[0],a[1]);else e(c.x,c.n.x,1,r);c=c.n}else{if(d)for(l=c.p.z,u=l.length-1;u>=0;--u)r.point((a=l[u])[0],a[1]);else e(c.x,c.p.x,-1,r);c=c.p}c=c.o,l=c.z,d=!d}while(!c.v);r.lineEnd()}}}function gt(n){if(t=n.length){for(var t,i=0,e=n[0],r;++i<t;)e.n=r=n[i],r.p=e,e=r;e.n=r=n[0],r.p=e}}function Fn(n){return z(n[0])<=N?n[0]:se(n[0])*((z(n[0])+N)%V-N)}function pe(n,t){var i=Fn(t),e=t[1],r=U(e),o=[U(i),-F(i),0],s=0,u=0,h=new en;r===1?e=O+D:r===-1&&(e=-O-D);for(var p=0,l=n.length;p<l;++p)if(c=(a=n[p]).length)for(var a,c,d=a[c-1],g=Fn(d),E=d[1]/2+at,m=U(E),_=F(E),y=0;y<c;++y,g=S,m=w,_=T,d=$){var $=a[y],S=Fn($),b=$[1]/2+at,w=U(b),T=F(b),L=S-g,A=L>=0?1:-1,x=A*L,v=x>N,I=m*w;if(h.add(un(I*A*U(x),_*T+I*F(x))),s+=v?L+A*V:L,v^g>=i^S>=i){var M=Mn(cn(d),cn($));Hn(M);var R=Mn(o,M);Hn(R);var f=(v^L>=0?-1:1)*rn(R[2]);(e>f||e===f&&(M[0]||M[1]))&&(u+=v^L>=0?1:-1)}}return(s<-D||s<D&&h<-1e-12)^u&1}function Dt(n,t,i,e){return function(r){var o=t(r),s=Tt(),u=t(s),h=!1,p,l,a,c={point:d,lineStart:E,lineEnd:m,polygonStart:function(){c.point=_,c.lineStart=y,c.lineEnd=$,l=[],p=[]},polygonEnd:function(){c.point=d,c.lineStart=E,c.lineEnd=m,l=It(l);var S=pe(p,e);l.length?(h||(r.polygonStart(),h=!0),xt(l,ge,S,i,r)):S&&(h||(r.polygonStart(),h=!0),r.lineStart(),i(null,null,1,r),r.lineEnd()),h&&(r.polygonEnd(),h=!1),l=p=null},sphere:function(){r.polygonStart(),r.lineStart(),i(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(S,b){n(S,b)&&r.point(S,b)}function g(S,b){o.point(S,b)}function E(){c.point=g,o.lineStart()}function m(){c.point=d,o.lineEnd()}function _(S,b){a.push([S,b]),u.point(S,b)}function y(){u.lineStart(),a=[]}function $(){_(a[0][0],a[0][1]),u.lineEnd();var S=u.clean(),b=s.result(),w,T=b.length,L,A,x;if(a.pop(),p.push(a),a=null,!!T){if(S&1){if(A=b[0],(L=A.length-1)>0){for(h||(r.polygonStart(),h=!0),r.lineStart(),w=0;w<L;++w)r.point((x=A[w])[0],x[1]);r.lineEnd()}return}T>1&&S&2&&b.push(b.pop().concat(b.shift())),l.push(b.filter(de))}}return c}}function de(n){return n.length>1}function ge(n,t){return((n=n.x)[0]<0?n[1]-O-D:O-n[1])-((t=t.x)[0]<0?t[1]-O-D:O-t[1])}const vt=Dt(function(){return!0},ve,me,[-N,-O]);function ve(n){var t=NaN,i=NaN,e=NaN,r;return{lineStart:function(){n.lineStart(),r=1},point:function(o,s){var u=o>0?N:-N,h=z(o-t);z(h-N)<D?(n.point(t,i=(i+s)/2>0?O:-O),n.point(e,i),n.lineEnd(),n.lineStart(),n.point(u,i),n.point(o,i),r=0):e!==u&&h>=N&&(z(t-e)<D&&(t-=e*D),z(o-u)<D&&(o-=u*D),i=he(t,i,o,s),n.point(e,i),n.lineEnd(),n.lineStart(),n.point(u,i),r=0),n.point(t=o,i=s),e=u},lineEnd:function(){n.lineEnd(),t=i=NaN},clean:function(){return 2-r}}}function he(n,t,i,e){var r,o,s=U(n-i);return z(s)>D?le((U(t)*(o=F(e))*U(i)-U(e)*(r=F(t))*U(n))/(r*o*s)):(t+e)/2}function me(n,t,i,e){var r;if(n==null)r=i*O,e.point(-N,r),e.point(0,r),e.point(N,r),e.point(N,0),e.point(N,-r),e.point(0,-r),e.point(-N,-r),e.point(-N,0),e.point(-N,r);else if(z(n[0]-t[0])>D){var o=n[0]<t[0]?N:-N;r=i*o/2,e.point(-o,r),e.point(0,r),e.point(o,r)}else e.point(t[0],t[1])}function Se(n){var t=F(n),i=2*B,e=t>0,r=z(t)>D;function o(l,a,c,d){fe(d,n,i,c,l,a)}function s(l,a){return F(l)*F(a)>t}function u(l){var a,c,d,g,E;return{lineStart:function(){g=d=!1,E=1},point:function(m,_){var y=[m,_],$,S=s(m,_),b=e?S?0:p(m,_):S?p(m+(m<0?N:-N),_):0;if(!a&&(g=d=S)&&l.lineStart(),S!==d&&($=h(a,y),(!$||Pn(a,$)||Pn(y,$))&&(y[2]=1)),S!==d)E=0,S?(l.lineStart(),$=h(y,a),l.point($[0],$[1])):($=h(a,y),l.point($[0],$[1],2),l.lineEnd()),a=$;else if(r&&a&&e^S){var w;!(b&c)&&(w=h(y,a,!0))&&(E=0,e?(l.lineStart(),l.point(w[0][0],w[0][1]),l.point(w[1][0],w[1][1]),l.lineEnd()):(l.point(w[1][0],w[1][1]),l.lineEnd(),l.lineStart(),l.point(w[0][0],w[0][1],3)))}S&&(!a||!Pn(a,y))&&l.point(y[0],y[1]),a=y,d=S,c=b},lineEnd:function(){d&&l.lineEnd(),a=null},clean:function(){return E|(g&&d)<<1}}}function h(l,a,c){var d=cn(l),g=cn(a),E=[1,0,0],m=Mn(d,g),_=_n(m,m),y=m[0],$=_-y*y;if(!$)return!c&&l;var S=t*_/$,b=-t*y/$,w=Mn(E,m),T=$n(E,S),L=$n(m,b);Dn(T,L);var A=w,x=_n(T,A),v=_n(A,A),I=x*x-v*(_n(T,T)-1);if(!(I<0)){var M=nn(I),R=$n(A,(-x-M)/v);if(Dn(R,T),R=On(R),!c)return R;var f=l[0],P=a[0],G=l[1],C=a[1],q;P<f&&(q=f,f=P,P=q);var pn=P-f,W=z(pn-N)<D,tn=W||pn<D;if(!W&&C<G&&(q=G,G=C,C=q),tn?W?G+C>0^R[1]<(z(R[0]-f)<D?G:C):G<=R[1]&&R[1]<=C:pn>N^(f<=R[0]&&R[0]<=P)){var X=$n(A,(-x+M)/v);return Dn(X,T),[R,On(X)]}}}function p(l,a){var c=e?n:N-n,d=0;return l<-c?d|=1:l>c&&(d|=2),a<-c?d|=4:a>c&&(d|=8),d}return Dt(s,u,o,e?[0,-n]:[-N,n-N])}function ye(n,t,i,e,r,o){var s=n[0],u=n[1],h=t[0],p=t[1],l=0,a=1,c=h-s,d=p-u,g;if(g=i-s,!(!c&&g>0)){if(g/=c,c<0){if(g<l)return;g<a&&(a=g)}else if(c>0){if(g>a)return;g>l&&(l=g)}if(g=r-s,!(!c&&g<0)){if(g/=c,c<0){if(g>a)return;g>l&&(l=g)}else if(c>0){if(g<l)return;g<a&&(a=g)}if(g=e-u,!(!d&&g>0)){if(g/=d,d<0){if(g<l)return;g<a&&(a=g)}else if(d>0){if(g>a)return;g>l&&(l=g)}if(g=o-u,!(!d&&g<0)){if(g/=d,d<0){if(g>a)return;g>l&&(l=g)}else if(d>0){if(g<l)return;g<a&&(a=g)}return l>0&&(n[0]=s+l*c,n[1]=u+l*d),a<1&&(t[0]=s+a*c,t[1]=u+a*d),!0}}}}}var dn=1e9,wn=-dn;function Ee(n,t,i,e){function r(p,l){return n<=p&&p<=i&&t<=l&&l<=e}function o(p,l,a,c){var d=0,g=0;if(p==null||(d=s(p,a))!==(g=s(l,a))||h(p,l)<0^a>0)do c.point(d===0||d===3?n:i,d>1?e:t);while((d=(d+a+4)%4)!==g);else c.point(l[0],l[1])}function s(p,l){return z(p[0]-n)<D?l>0?0:3:z(p[0]-i)<D?l>0?2:1:z(p[1]-t)<D?l>0?1:0:l>0?3:2}function u(p,l){return h(p.x,l.x)}function h(p,l){var a=s(p,1),c=s(l,1);return a!==c?a-c:a===0?l[1]-p[1]:a===1?p[0]-l[0]:a===2?p[1]-l[1]:l[0]-p[0]}return function(p){var l=p,a=Tt(),c,d,g,E,m,_,y,$,S,b,w,T={point:L,lineStart:I,lineEnd:M,polygonStart:x,polygonEnd:v};function L(f,P){r(f,P)&&l.point(f,P)}function A(){for(var f=0,P=0,G=d.length;P<G;++P)for(var C=d[P],q=1,pn=C.length,W=C[0],tn,X,En=W[0],an=W[1];q<pn;++q)tn=En,X=an,W=C[q],En=W[0],an=W[1],X<=e?an>e&&(En-tn)*(e-X)>(an-X)*(n-tn)&&++f:an<=e&&(En-tn)*(e-X)<(an-X)*(n-tn)&&--f;return f}function x(){l=a,c=[],d=[],w=!0}function v(){var f=A(),P=w&&f,G=(c=It(c)).length;(P||G)&&(p.polygonStart(),P&&(p.lineStart(),o(null,null,1,p),p.lineEnd()),G&&xt(c,u,f,o,p),p.polygonEnd()),l=p,c=d=g=null}function I(){T.point=R,d&&d.push(g=[]),b=!0,S=!1,y=$=NaN}function M(){c&&(R(E,m),_&&S&&a.rejoin(),c.push(a.result())),T.point=L,S&&l.lineEnd()}function R(f,P){var G=r(f,P);if(d&&g.push([f,P]),b)E=f,m=P,_=G,b=!1,G&&(l.lineStart(),l.point(f,P));else if(G&&S)l.point(f,P);else{var C=[y=Math.max(wn,Math.min(dn,y)),$=Math.max(wn,Math.min(dn,$))],q=[f=Math.max(wn,Math.min(dn,f)),P=Math.max(wn,Math.min(dn,P))];ye(C,q,n,t,i,e)?(S||(l.lineStart(),l.point(C[0],C[1])),l.point(q[0],q[1]),G||l.lineEnd(),w=!1):G&&(l.lineStart(),l.point(f,P),w=!1)}y=f,$=P,S=G}return T}}const jn=n=>n;var Un=new en,Zn=new en,Ft,Ut,Kn,Wn,Q={point:H,lineStart:H,lineEnd:H,polygonStart:function(){Q.lineStart=_e,Q.lineEnd=be},polygonEnd:function(){Q.lineStart=Q.lineEnd=Q.point=H,Un.add(z(Zn)),Zn=new en},result:function(){var n=Un/2;return Un=new en,n}};function _e(){Q.point=$e}function $e(n,t){Q.point=zt,Ft=Kn=n,Ut=Wn=t}function zt(n,t){Zn.add(Wn*n-Kn*t),Kn=n,Wn=t}function be(){zt(Ft,Ut)}var fn=1/0,Ln=fn,Sn=-fn,An=Sn,Nn={point:we,lineStart:H,lineEnd:H,polygonStart:H,polygonEnd:H,result:function(){var n=[[fn,Ln],[Sn,An]];return Sn=An=-(Ln=fn=1/0),n}};function we(n,t){n<fn&&(fn=n),n>Sn&&(Sn=n),t<Ln&&(Ln=t),t>An&&(An=t)}var Xn=0,Jn=0,gn=0,In=0,Tn=0,sn=0,Qn=0,nt=0,vn=0,Gt,Ct,Z,K,k={point:on,lineStart:ht,lineEnd:mt,polygonStart:function(){k.lineStart=Me,k.lineEnd=Le},polygonEnd:function(){k.point=on,k.lineStart=ht,k.lineEnd=mt},result:function(){var n=vn?[Qn/vn,nt/vn]:sn?[In/sn,Tn/sn]:gn?[Xn/gn,Jn/gn]:[NaN,NaN];return Xn=Jn=gn=In=Tn=sn=Qn=nt=vn=0,n}};function on(n,t){Xn+=n,Jn+=t,++gn}function ht(){k.point=Pe}function Pe(n,t){k.point=Re,on(Z=n,K=t)}function Re(n,t){var i=n-Z,e=t-K,r=nn(i*i+e*e);In+=r*(Z+n)/2,Tn+=r*(K+t)/2,sn+=r,on(Z=n,K=t)}function mt(){k.point=on}function Me(){k.point=Ae}function Le(){Bt(Gt,Ct)}function Ae(n,t){k.point=Bt,on(Gt=Z=n,Ct=K=t)}function Bt(n,t){var i=n-Z,e=t-K,r=nn(i*i+e*e);In+=r*(Z+n)/2,Tn+=r*(K+t)/2,sn+=r,r=K*n-Z*t,Qn+=r*(Z+n),nt+=r*(K+t),vn+=r*3,on(Z=n,K=t)}function qt(n){this._context=n}qt.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:{this._context.moveTo(n,t),this._point=1;break}case 1:{this._context.lineTo(n,t);break}default:{this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,V);break}}},result:H};var tt=new en,zn,kt,Ot,hn,mn,yn={point:H,lineStart:function(){yn.point=Ne},lineEnd:function(){zn&&Ht(kt,Ot),yn.point=H},polygonStart:function(){zn=!0},polygonEnd:function(){zn=null},result:function(){var n=+tt;return tt=new en,n}};function Ne(n,t){yn.point=Ht,kt=hn=n,Ot=mn=t}function Ht(n,t){hn-=n,mn-=t,tt.add(nn(hn*hn+mn*mn)),hn=n,mn=t}let St,xn,yt,Et;class _t{constructor(t){this._append=t==null?Vt:Ie(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,i){switch(this._point){case 0:{this._append`M${t},${i}`,this._point=1;break}case 1:{this._append`L${t},${i}`;break}default:{if(this._append`M${t},${i}`,this._radius!==yt||this._append!==xn){const e=this._radius,r=this._;this._="",this._append`m0,${e}a${e},${e} 0 1,1 0,${-2*e}a${e},${e} 0 1,1 0,${2*e}z`,yt=e,xn=this._append,Et=this._,this._=r}this._+=Et;break}}}result(){const t=this._;return this._="",t.length?t:null}}function Vt(n){let t=1;this._+=n[0];for(const i=n.length;t<i;++t)this._+=arguments[t]+n[t]}function Ie(n){const t=Math.floor(n);if(!(t>=0))throw new RangeError(`invalid digits: ${n}`);if(t>15)return Vt;if(t!==St){const i=10**t;St=t,xn=function(r){let o=1;this._+=r[0];for(const s=r.length;o<s;++o)this._+=Math.round(arguments[o]*i)/i+r[o]}}return xn}function Te(n,t){let i=3,e=4.5,r,o;function s(u){return u&&(typeof e=="function"&&o.pointRadius(+e.apply(this,arguments)),ln(u,r(o))),o.result()}return s.area=function(u){return ln(u,r(Q)),Q.result()},s.measure=function(u){return ln(u,r(yn)),yn.result()},s.bounds=function(u){return ln(u,r(Nn)),Nn.result()},s.centroid=function(u){return ln(u,r(k)),k.result()},s.projection=function(u){return arguments.length?(r=u==null?(n=null,jn):(n=u).stream,s):n},s.context=function(u){return arguments.length?(o=u==null?(t=null,new _t(i)):new qt(t=u),typeof e!="function"&&o.pointRadius(e),s):t},s.pointRadius=function(u){return arguments.length?(e=typeof u=="function"?u:(o.pointRadius(+u),+u),s):e},s.digits=function(u){if(!arguments.length)return i;if(u==null)i=null;else{const h=Math.floor(u);if(!(h>=0))throw new RangeError(`invalid digits: ${u}`);i=h}return t===null&&(o=new _t(i)),s},s.projection(n).digits(i).context(t)}function it(n){return function(t){var i=new et;for(var e in n)i[e]=n[e];return i.stream=t,i}}function et(){}et.prototype={constructor:et,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function rt(n,t,i){var e=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),e!=null&&n.clipExtent(null),ln(i,n.stream(Nn)),t(Nn.result()),e!=null&&n.clipExtent(e),n}function Yt(n,t,i){return rt(n,function(e){var r=t[1][0]-t[0][0],o=t[1][1]-t[0][1],s=Math.min(r/(e[1][0]-e[0][0]),o/(e[1][1]-e[0][1])),u=+t[0][0]+(r-s*(e[1][0]+e[0][0]))/2,h=+t[0][1]+(o-s*(e[1][1]+e[0][1]))/2;n.scale(150*s).translate([u,h])},i)}function xe(n,t,i){return Yt(n,[[0,0],t],i)}function De(n,t,i){return rt(n,function(e){var r=+t,o=r/(e[1][0]-e[0][0]),s=(r-o*(e[1][0]+e[0][0]))/2,u=-o*e[0][1];n.scale(150*o).translate([s,u])},i)}function Fe(n,t,i){return rt(n,function(e){var r=+t,o=r/(e[1][1]-e[0][1]),s=-o*e[0][0],u=(r-o*(e[1][1]+e[0][1]))/2;n.scale(150*o).translate([s,u])},i)}var $t=16,Ue=F(30*B);function bt(n,t){return+t?Ge(n,t):ze(n)}function ze(n){return it({point:function(t,i){t=n(t,i),this.stream.point(t[0],t[1])}})}function Ge(n,t){function i(e,r,o,s,u,h,p,l,a,c,d,g,E,m){var _=p-e,y=l-r,$=_*_+y*y;if($>4*t&&E--){var S=s+c,b=u+d,w=h+g,T=nn(S*S+b*b+w*w),L=rn(w/=T),A=z(z(w)-1)<D||z(o-a)<D?(o+a)/2:un(b,S),x=n(A,L),v=x[0],I=x[1],M=v-e,R=I-r,f=y*M-_*R;(f*f/$>t||z((_*M+y*R)/$-.5)>.3||s*c+u*d+h*g<Ue)&&(i(e,r,o,s,u,h,v,I,A,S/=T,b/=T,w,E,m),m.point(v,I),i(v,I,A,S,b,w,p,l,a,c,d,g,E,m))}}return function(e){var r,o,s,u,h,p,l,a,c,d,g,E,m={point:_,lineStart:y,lineEnd:S,polygonStart:function(){e.polygonStart(),m.lineStart=b},polygonEnd:function(){e.polygonEnd(),m.lineStart=y}};function _(L,A){L=n(L,A),e.point(L[0],L[1])}function y(){a=NaN,m.point=$,e.lineStart()}function $(L,A){var x=cn([L,A]),v=n(L,A);i(a,c,l,d,g,E,a=v[0],c=v[1],l=L,d=x[0],g=x[1],E=x[2],$t,e),e.point(a,c)}function S(){m.point=_,e.lineEnd()}function b(){y(),m.point=w,m.lineEnd=T}function w(L,A){$(r=L,A),o=a,s=c,u=d,h=g,p=E,m.point=$}function T(){i(a,c,l,d,g,E,o,s,r,u,h,p,$t,e),m.lineEnd=S,S()}return m}}var Ce=it({point:function(n,t){this.stream.point(n*B,t*B)}});function Be(n){return it({point:function(t,i){var e=n(t,i);return this.stream.point(e[0],e[1])}})}function qe(n,t,i,e,r){function o(s,u){return s*=e,u*=r,[t+n*s,i-n*u]}return o.invert=function(s,u){return[(s-t)/n*e,(i-u)/n*r]},o}function wt(n,t,i,e,r,o){if(!o)return qe(n,t,i,e,r);var s=F(o),u=U(o),h=s*n,p=u*n,l=s/n,a=u/n,c=(u*i-s*t)/n,d=(u*t+s*i)/n;function g(E,m){return E*=e,m*=r,[h*E-p*m+t,i-p*E-h*m]}return g.invert=function(E,m){return[e*(l*E-a*m+c),r*(d-a*E-l*m)]},g}function ke(n){return Oe(function(){return n})()}function Oe(n){var t,i=150,e=480,r=250,o=0,s=0,u=0,h=0,p=0,l,a=0,c=1,d=1,g=null,E=vt,m=null,_,y,$,S=jn,b=.5,w,T,L,A,x;function v(f){return L(f[0]*B,f[1]*B)}function I(f){return f=L.invert(f[0],f[1]),f&&[f[0]*J,f[1]*J]}v.stream=function(f){return A&&x===f?A:A=Ce(Be(l)(E(w(S(x=f)))))},v.preclip=function(f){return arguments.length?(E=f,g=void 0,R()):E},v.postclip=function(f){return arguments.length?(S=f,m=_=y=$=null,R()):S},v.clipAngle=function(f){return arguments.length?(E=+f?Se(g=f*B):(g=null,vt),R()):g*J},v.clipExtent=function(f){return arguments.length?(S=f==null?(m=_=y=$=null,jn):Ee(m=+f[0][0],_=+f[0][1],y=+f[1][0],$=+f[1][1]),R()):m==null?null:[[m,_],[y,$]]},v.scale=function(f){return arguments.length?(i=+f,M()):i},v.translate=function(f){return arguments.length?(e=+f[0],r=+f[1],M()):[e,r]},v.center=function(f){return arguments.length?(o=f[0]%360*B,s=f[1]%360*B,M()):[o*J,s*J]},v.rotate=function(f){return arguments.length?(u=f[0]%360*B,h=f[1]%360*B,p=f.length>2?f[2]%360*B:0,M()):[u*J,h*J,p*J]},v.angle=function(f){return arguments.length?(a=f%360*B,M()):a*J},v.reflectX=function(f){return arguments.length?(c=f?-1:1,M()):c<0},v.reflectY=function(f){return arguments.length?(d=f?-1:1,M()):d<0},v.precision=function(f){return arguments.length?(w=bt(T,b=f*f),R()):nn(b)},v.fitExtent=function(f,P){return Yt(v,f,P)},v.fitSize=function(f,P){return xe(v,f,P)},v.fitWidth=function(f,P){return De(v,f,P)},v.fitHeight=function(f,P){return Fe(v,f,P)};function M(){var f=wt(i,0,0,c,d,a).apply(null,t(o,s)),P=wt(i,e-f[0],r-f[1],c,d,a);return l=ce(u,h,p),T=Vn(t,P),L=Vn(l,T),w=bt(T,b),R()}function R(){return A=x=null,v}return function(){return t=n.apply(this,arguments),v.invert=t.invert&&I,M()}}function He(n){return function(t,i){var e=F(t),r=F(i),o=n(e*r);return o===1/0?[2,0]:[o*r*U(t),o*U(i)]}}function Ve(n){return function(t,i){var e=nn(t*t+i*i),r=n(e),o=U(r),s=F(r);return[un(t*o,e*s),rn(e&&i*o/e)]}}var jt=He(function(n){return nn(2/(1+n))});jt.invert=Ve(function(n){return 2*rn(n/2)});function Ye(){return ke(jt).scale(124.75).clipAngle(180-.001)}function je(){var n=0,t=1,i,e,r,o,s=At,u=!1,h;function p(a){return a==null||isNaN(a=+a)?h:s(r===0?.5:(a=(o(a)-i)*r,u?Math.max(0,Math.min(1,a)):a))}p.domain=function(a){return arguments.length?([n,t]=a,i=o(n=+n),e=o(t=+t),r=i===e?0:1/(e-i),p):[n,t]},p.clamp=function(a){return arguments.length?(u=!!a,p):u},p.interpolator=function(a){return arguments.length?(s=a,p):s};function l(a){return function(c){var d,g;return arguments.length?([d,g]=c,s=a(d,g),p):[s(0),s(1)]}}return p.range=l(Nt),p.rangeRound=l(Jt),p.unknown=function(a){return arguments.length?(h=a,p):h},function(a){return o=a,i=a(n),e=a(t),r=i===e?0:1/(e-i),p}}function Ze(n,t){return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())}function Zt(){var n=Wt(je()(At));return n.copy=function(){return Ze(n,Zt())},Xt.apply(n,arguments)}const Ke="modulepreload",We=function(n){return"/federal-eu-project/"+n},Pt={},Xe=function(t,i,e){let r=Promise.resolve();if(i&&i.length>0){let h=function(p){return Promise.all(p.map(l=>Promise.resolve(l).then(a=>({status:"fulfilled",value:a}),a=>({status:"rejected",reason:a}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),u=s?.nonce||s?.getAttribute("nonce");r=h(i.map(p=>{if(p=We(p),p in Pt)return;Pt[p]=!0;const l=p.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${a}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Ke,l||(c.as="script"),c.crossOrigin="",c.href=p,u&&c.setAttribute("nonce",u),document.head.appendChild(c),l)return new Promise((d,g)=>{c.addEventListener("load",d),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(s){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=s,window.dispatchEvent(u),!u.defaultPrevented)throw s}return r.then(s=>{for(const u of s||[])u.status==="rejected"&&o(u.reason);return t().catch(o)})},Gn=new Set(["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GR","HR","HU","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK"]),Cn={"040":"AT","056":"BE",100:"BG",196:"CY",203:"CZ",276:"DE",208:"DK",233:"EE",724:"ES",246:"FI",250:"FR",300:"GR",191:"HR",348:"HU",372:"IE",380:"IT",440:"LT",442:"LU",428:"LV",470:"MT",528:"NL",616:"PL",620:"PT",642:"RO",752:"SE",705:"SI",703:"SK",578:"NO",756:"CH",826:"GB",804:"UA",792:"TR",643:"RU","008":"AL","070":"BA",688:"RS",499:"ME",807:"MK"},Bn="#0B1F3A",Je="#B9942F",Rt="#C9C2B2",Mt="#F6F3EA",Lt="#4A5568",qn="'IBM Plex Mono', monospace";async function Qe(n,t){const i=document.querySelector(n);if(!i)return;const e=new Map(t.members.map(v=>[v.code,{value:v.gdpBn,unit:"bn EUR",label:"GDP"}])),r=new Map(t.members.map(v=>[v.code,{value:v.defenceGdpPct*v.gdpBn/100,unit:"bn EUR",label:"Defence spend"}])),o=new Map,s=t.euTotal,u=t.members.reduce((v,I)=>v+I.defenceGdpPct*I.gdpBn/100,0).toFixed(0),h="[NEEDS SOURCE]",p={gdp:{map:e,label:"GDP",unit:"bn EUR",aggregate:s,aggregateLabel:`€${s.toLocaleString()} bn`},defence:{map:r,label:"Defence spend",unit:"bn EUR",aggregate:u,aggregateLabel:`€${u} bn`},pop:{map:o,label:"Population",unit:"m",aggregate:h,aggregateLabel:h}};let l="gdp",a="fragmented";const c=i.clientWidth||720,d=Math.round(c*.62),g=Ye().rotate([-15,-52,0]).scale(c*1.05).translate([c/2,d/2]).clipAngle(180-.001).precision(.1),E=Te(g);i.innerHTML=`
    <div class="toggle-map__controls">
      <div class="toggle-map__view-switch" role="group" aria-label="Map view">
        <button class="view-btn active" data-view="fragmented" id="btn-fragmented">
          27 Member States
        </button>
        <button class="view-btn" data-view="federal" id="btn-federal">
          EU as Federal Bloc
        </button>
      </div>
      <div class="toggle-map__layer-switch" role="group" aria-label="Data layer">
        <button class="layer-btn active" data-layer="gdp">GDP</button>
        <button class="layer-btn" data-layer="defence">Defence</button>
        <button class="layer-btn" data-layer="pop">Population</button>
      </div>
    </div>
    <div class="toggle-map__svg-wrapper" id="toggle-svg-wrapper" style="position:relative;">
      <!-- SVG rendered here -->
      <div class="toggle-map__federal-overlay" id="federal-overlay"
           style="display:none;position:absolute;inset:0;display:none;
                  align-items:center;justify-content:center;flex-direction:column;
                  background:rgba(246,243,234,0.0);">
        <div id="federal-stat" class="federal-stat"></div>
        <p class="federal-label" style="font-family:${qn};font-size:11px;color:${Lt};margin:0;">
          EU aggregate — real arithmetic on Eurostat / SIPRI figures
        </p>
      </div>
    </div>
    <div class="toggle-map__tooltip" id="map-tooltip"
         style="display:none;position:absolute;pointer-events:none;
                background:var(--paper);border:1px solid var(--rule-grey);
                border-left:3px solid var(--accent-bronze);
                padding:0.4rem 0.6rem;font-family:${qn};font-size:11px;color:${Bn};">
    </div>
  `;const m=i.querySelector("#toggle-svg-wrapper"),_=i.querySelector("#map-tooltip");let y;try{y=await ae("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")}catch{m.innerHTML='<p class="needs-source">Map geodata could not be loaded.</p>';return}const{feature:$}=await Xe(async()=>{const{feature:v}=await import("./index-COW6Jx4U.js");return{feature:v}},[]),S=$(y,y.objects.countries),b=Qt(m).insert("svg",":first-child").attr("viewBox",`0 0 ${c} ${d}`).attr("role","img").attr("aria-label","Toggle map: EU member states vs. EU as a federal bloc");b.append("title").text("Toggle map — 27 member states vs. EU as a federal bloc");const w=b.append("g").attr("class","countries");function T(v){if(!Gn.has(v))return Rt;const I=p[l],M=I.map.get(v);if(!M||!M.value)return"#B0B8C4";const R=Array.from(I.map.values()).map(P=>P.value).filter(Boolean);return Zt().domain(ie(R)).interpolator(Nt("#C4D0DC",Bn))(M.value)}function L(){w.selectAll("path").data(S.features).join("path").attr("d",v=>E(v)||"").attr("fill",v=>{const I=Cn[String(v.id).padStart(3,"0")];return T(I)}).attr("stroke",Mt).attr("stroke-width",.5).on("mousemove",function(v,I){const M=Cn[String(I.id).padStart(3,"0")];if(!M||!Gn.has(M)){_.style.display="none";return}const R=p[l],f=R.map.get(M);if(!f){_.style.display="none";return}const[P,G]=ne(v,i);_.style.display="block",_.style.left=`${P+12}px`,_.style.top=`${G-8}px`,_.innerHTML=`<strong>${f.label?`${M}`:M}</strong><br>${f.value?f.value.toLocaleString():"—"} ${R.unit}`}).on("mouseleave",()=>{_.style.display="none"})}function A(){w.selectAll("path").data(S.features).join("path").attr("d",R=>E(R)||"").attr("fill",R=>{const f=Cn[String(R.id).padStart(3,"0")];return Gn.has(f)?Je:Rt}).attr("stroke",Mt).attr("stroke-width",.5).on("mousemove",null).on("mouseleave",null),_.style.display="none";const v=i.querySelector("#federal-overlay"),I=i.querySelector("#federal-stat"),M=p[l];v.style.display="flex",I.innerHTML=`
      <span style="font-family:'Source Serif 4',serif;font-size:clamp(1.5rem,4vw,2.5rem);font-weight:700;color:${Bn};display:block;text-align:center;">
        ${M.aggregateLabel!=="[NEEDS SOURCE]"?M.aggregateLabel:"[NEEDS SOURCE]"}
      </span>
      <span style="font-family:${qn};font-size:11px;color:${Lt};display:block;text-align:center;margin-top:0.25rem;">
        EU aggregate ${M.label}
        <mark class="illustrative-label" title="Real arithmetic on Eurostat/SIPRI figures — not an existing EU institutional budget">EU aggregate</mark>
      </span>
    `}function x(){const v=i.querySelector("#federal-overlay");a==="fragmented"?(v.style.display="none",L()):A()}i.querySelectorAll(".view-btn").forEach(v=>{v.addEventListener("click",()=>{i.querySelectorAll(".view-btn").forEach(I=>I.classList.remove("active")),v.classList.add("active"),a=v.dataset.view,x()})}),i.querySelectorAll(".layer-btn").forEach(v=>{v.addEventListener("click",()=>{i.querySelectorAll(".layer-btn").forEach(I=>I.classList.remove("active")),v.classList.add("active"),l=v.dataset.layer,x()})}),x()}const Y="'IBM Plex Mono', monospace",j="#4A5568";function ni(n,t){const i=document.querySelector(n);if(!i||!t?.sliders)return;const{baselines:e,sliders:r}=t,{defence_pooling:o,fiscal_transfer:s}=r;i.innerHTML=`
    <div class="scenario-grid">

      <!-- ===== SLIDER 1: Defence Pooling ===== -->
      <div class="scenario-panel" id="panel-defence">
        <div class="scenario-panel__header">
          <span class="section-label">Scenario A</span>
          <h3 class="scenario-panel__title">${o.label}</h3>
          <p class="scenario-panel__baseline" style="font-family:${Y};font-size:11px;color:${j};">
            Baseline (${t.year}):
            <strong>${o.default}%</strong>
            — ${o.default_label}
          </p>
        </div>

        <div class="scenario-slider-row">
          <span class="slider-bound" style="font-family:${Y};font-size:10px;color:${j};">0%</span>
          <div class="slider-track">
            <input type="range"
                   id="${o.id}"
                   min="${o.min}"
                   max="${o.max}"
                   step="${o.step}"
                   value="${o.default}"
                   aria-label="${o.label}"
                   aria-valuetext="${o.default}%">
          </div>
          <span class="slider-bound" style="font-family:${Y};font-size:10px;color:${j};">100%</span>
        </div>

        <div class="scenario-stat-block" id="stat-defence">
          <!-- updated by JS -->
        </div>

        <!-- Formula disclosure -->
        <details class="accordion-item formula-disclosure" style="margin-top:0.75rem;">
          <summary class="accordion-item__trigger" style="font-size:0.875rem;">
            Show formula &amp; methodology
          </summary>
          <div class="accordion-item__body formula-body">
            <p style="font-family:${Y};font-size:11px;color:${j};line-height:1.6;">
              <strong>Formula:</strong><br>
              Pooled budget = (slider / 100) × EU27 defence spend<br>
              EU27 defence spend = <strong>€${e.eu27_defence_spend_bn_eur.value} bn</strong>
              (${e.eu27_defence_spend_bn_eur.source})<br><br>
              The slider's starting value (${o.default}%) reflects the
              current level of EDA collaborative procurement
              (${e.eda_collab_pct.source}).<br><br>
              Any value above ${o.default}% is a user-adjustable
              <mark class="illustrative-label">illustrative</mark> projection —
              not a policy proposal or forecast.
              Reference: US DoD budget ≈ ${o.reference.label}
              (${o.reference.source}).
            </p>
          </div>
        </details>
      </div>

      <!-- ===== SLIDER 2: Fiscal Transfer ===== -->
      <div class="scenario-panel" id="panel-fiscal">
        <div class="scenario-panel__header">
          <span class="section-label">Scenario B</span>
          <h3 class="scenario-panel__title">${s.label}</h3>
          <p class="scenario-panel__baseline" style="font-family:${Y};font-size:11px;color:${j};">
            Baseline (${t.year}):
            <strong>${s.default}% of GDP</strong>
            — ${s.default_label}
          </p>
        </div>

        <div class="scenario-slider-row">
          <span class="slider-bound" style="font-family:${Y};font-size:10px;color:${j};">0%</span>
          <div class="slider-track">
            <input type="range"
                   id="${s.id}"
                   min="${s.min}"
                   max="${s.max}"
                   step="${s.step}"
                   value="${s.default}"
                   aria-label="${s.label}"
                   aria-valuetext="${s.default}% of GDP">
          </div>
          <span class="slider-bound" style="font-family:${Y};font-size:10px;color:${j};">25%</span>
        </div>

        <div class="scenario-stat-block" id="stat-fiscal">
          <!-- updated by JS -->
        </div>

        <!-- Formula disclosure -->
        <details class="accordion-item formula-disclosure" style="margin-top:0.75rem;">
          <summary class="accordion-item__trigger" style="font-size:0.875rem;">
            Show formula &amp; methodology
          </summary>
          <div class="accordion-item__body formula-body">
            <p style="font-family:${Y};font-size:11px;color:${j};line-height:1.6;">
              <strong>Formula:</strong><br>
              EU fiscal capacity = (slider / 100) × EU27 GDP<br>
              EU27 GDP = <strong>€${e.eu27_gdp_bn_eur.value.toLocaleString()} bn</strong>
              (${e.eu27_gdp_bn_eur.source})<br><br>
              Current EU budget = <strong>€${e.eu_budget_bn_eur.value} bn</strong>
              (${e.eu_budget_bn_eur.source}) — the slider starts here.<br><br>
              Any value above ${s.default}% of GDP is
              <mark class="illustrative-label">illustrative</mark>.
              Federal reference: US federal budget =
              <strong>${e.us_federal_budget_pct_gdp.value}% of GDP</strong>
              (${e.us_federal_budget_pct_gdp.source}).
            </p>
          </div>
        </details>
      </div>

    </div>
  `;function u(a){const c=(a/100*e.eu27_defence_spend_bn_eur.value).toFixed(0),d=(e.eu27_defence_spend_bn_eur.value-c).toFixed(0),g=parseFloat(a)>parseFloat(o.default),E=o.reference.value_bn_eur;document.querySelector("#stat-defence").innerHTML=`
      <div class="scenario-stat">
        <span class="scenario-stat__num">€${Number(c).toLocaleString()} bn</span>
        <span class="scenario-stat__label">
          ${o.output_label}
          ${g?'<mark class="illustrative-label">illustrative</mark>':""}
        </span>
        <span class="scenario-stat__sub" style="font-family:${Y};font-size:10px;color:${j};">
          vs. ${o.reference.label}: €${E.toLocaleString()} bn
          &nbsp;|&nbsp;
          Remaining national: €${Number(d).toLocaleString()} bn
        </span>
      </div>
    `}function h(a){const c=(parseFloat(a)/100*e.eu27_gdp_bn_eur.value).toFixed(0),d=parseFloat(a)>parseFloat(s.default),g=s.reference.value_pct,E=(g/100*e.eu27_gdp_bn_eur.value).toFixed(0);document.querySelector("#stat-fiscal").innerHTML=`
      <div class="scenario-stat">
        <span class="scenario-stat__num">€${Number(c).toLocaleString()} bn</span>
        <span class="scenario-stat__label">
          ${s.output_label}
          ${d?'<mark class="illustrative-label">illustrative</mark>':""}
        </span>
        <span class="scenario-stat__sub" style="font-family:${Y};font-size:10px;color:${j};">
          vs. US federal equivalent at ${g}% of EU27 GDP: €${Number(E).toLocaleString()} bn
        </span>
      </div>
    `}const p=document.querySelector(`#${o.id}`),l=document.querySelector(`#${s.id}`);p.addEventListener("input",a=>{u(a.target.value),a.target.setAttribute("aria-valuetext",`${a.target.value}%`)}),l.addEventListener("input",a=>{h(a.target.value),a.target.setAttribute("aria-valuetext",`${a.target.value}% of GDP`)}),u(o.default),h(s.default)}Kt();Promise.all([fetch("./src/data/integration-index.json").then(n=>n.json()),fetch("./src/data/gdp.json").then(n=>n.json()),fetch("./src/data/competence-matrix.json").then(n=>n.json()),fetch("./src/data/scenario-slider.json").then(n=>n.json())]).then(([n,t,i,e])=>{te("#index-chart-wrapper",n,{height:420}),document.querySelector("#index-legend").innerHTML=ee(),ot("#dl-csv-index",n.series,"integration-index.csv",{title:"European Integration Index Data",publisher:"Federal Vision",year:"2024"}),Qe("#toggle-map-container",t),ot("#dl-csv-map",t.members,"eu-gdp-defence.csv",{title:"EU GDP and Defence Spend (2022)",publisher:"Eurostat / SIPRI",year:"2022"});const r=document.querySelector("#matrix-tbody");r&&i?.rows&&(r.innerHTML=i.rows.map(o=>`
          <tr>
            <td>${o.domain}</td>
            <td class="matrix-cell">
              <span class="matrix-status matrix-status--${o.a.status}">${o.a.status.replace(/-/g," ")}</span><br>
              ${o.a.text}
              <cite class="matrix-cite">${o.a.cite}</cite>
            </td>
            <td class="matrix-cell">
              <span class="matrix-status matrix-status--${o.b.status}">${o.b.status}</span><br>
              ${o.b.text}
              <cite class="matrix-cite">${o.b.cite}</cite>
            </td>
            <td class="matrix-cell">
              <span class="matrix-status matrix-status--${o.c.status}">${o.c.status}</span><br>
              ${o.c.text}
            </td>
          </tr>
        `).join("")),ni("#slider-section",e)}).catch(n=>{console.error("Data Room: failed to load data",n)});
