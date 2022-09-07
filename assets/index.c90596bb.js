(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="143",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uu=0,bo=1,Bu=2,rc=1,ku=2,dr=3,br=0,Ht=1,Xi=2,Gu=1,Bn=0,ki=1,ba=2,wo=3,To=4,Vu=5,Ni=100,Hu=101,Wu=102,Eo=103,Ao=104,qu=200,Xu=201,Yu=202,ju=203,sc=204,ac=205,Zu=206,$u=207,Ku=208,Ju=209,Qu=210,eh=0,th=1,nh=2,wa=3,ih=4,rh=5,sh=6,ah=7,oc=0,oh=1,lh=2,Sn=0,ch=1,uh=2,hh=3,fh=4,dh=5,lc=300,Yi=301,ji=302,Ta=303,Ea=304,Ms=306,Aa=1e3,Kt=1001,Ca=1002,mt=1003,Co=1004,Lo=1005,zt=1006,ph=1007,Ss=1008,ci=1009,mh=1010,gh=1011,cc=1012,_h=1013,ei=1014,ti=1015,wr=1016,xh=1017,vh=1018,Gi=1020,yh=1021,Mh=1022,sn=1023,Sh=1024,bh=1025,ri=1026,Zi=1027,wh=1028,Th=1029,Eh=1030,Ah=1031,Ch=1033,Fs=33776,Os=33777,Ns=33778,zs=33779,Po=35840,Do=35841,Ro=35842,Io=35843,Lh=36196,Fo=37492,Oo=37496,No=37808,zo=37809,Uo=37810,Bo=37811,ko=37812,Go=37813,Vo=37814,Ho=37815,Wo=37816,qo=37817,Xo=37818,Yo=37819,jo=37820,Zo=37821,$o=36492,ui=3e3,Ve=3001,Ph=3200,Dh=3201,Rh=0,Ih=1,_n="srgb",ni="srgb-linear",Us=7680,Fh=519,Ko=35044,Jo="300 es",La=1035;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bs=Math.PI/180,Qo=180/Math.PI;function Fr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(lt[o&255]+lt[o>>8&255]+lt[o>>16&255]+lt[o>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function gt(o,e,t){return Math.max(e,Math.min(t,o))}function Oh(o,e){return(o%e+e)%e}function ks(o,e,t){return(1-t)*o+t*e}function el(o){return(o&o-1)===0&&o!==0}function Pa(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],y=i[1],S=i[4],M=i[7],v=i[2],A=i[5],L=i[8];return r[0]=a*d+s*y+c*v,r[3]=a*p+s*S+c*A,r[6]=a*_+s*M+c*L,r[1]=l*d+u*y+h*v,r[4]=l*p+u*S+h*A,r[7]=l*_+u*M+h*L,r[2]=f*d+m*y+g*v,r[5]=f*p+m*S+g*A,r[8]=f*_+m*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*s*l-n*r*u+n*s*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=u*a-s*l,f=s*c-u*r,m=l*r-a*c,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*l-u*n)*d,e[2]=(s*n-i*a)*d,e[3]=f*d,e[4]=(u*t-i*c)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*c-l*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*s)+a+e,-i*l,i*c,-i*(-l*a+c*s)+s+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],s=i[6],c=i[1],l=i[4],u=i[7];return i[0]=t*r+n*c,i[3]=t*a+n*l,i[6]=t*s+n*u,i[1]=-n*r+t*c,i[4]=-n*a+t*l,i[7]=-n*s+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function uc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function Tr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function si(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ls(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Gs={[_n]:{[ni]:si},[ni]:{[_n]:ls}},Yt={legacyMode:!0,get workingColorSpace(){return ni},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Gs[e]&&Gs[e][t]!==void 0){const n=Gs[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},jt={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Vs(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function kr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ni){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ni){if(e=Oh(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vs(a,r,e+1/3),this.g=Vs(a,r,e),this.b=Vs(a,r,e-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(e,t=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Yt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Yt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Yt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Yt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=_n){const n=hc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Yt.fromWorkingColorSpace(kr(this,Qe),e),gt(Qe.r*255,0,255)<<16^gt(Qe.g*255,0,255)<<8^gt(Qe.b*255,0,255)<<0}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ni){Yt.fromWorkingColorSpace(kr(this,Qe),t);const n=Qe.r,i=Qe.g,r=Qe.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const u=(s+a)/2;if(s===a)c=0,l=0;else{const h=a-s;switch(l=u<=.5?h/(a+s):h/(2-a-s),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ni){return Yt.fromWorkingColorSpace(kr(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=_n){return Yt.fromWorkingColorSpace(kr(this,Qe),e),e!==_n?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=n,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(Br);const n=ks(jt.h,Br.h,t),i=ks(jt.s,Br.s,t),r=ks(jt.l,Br.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ze.NAMES=hc;let Mi;class fc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=Tr("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class dc{constructor(e=null){this.isSource=!0,this.uuid=Fr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Hs(i[a].image)):r.push(Hs(i[a]))}else r=Hs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?fc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nh=0;class Wt extends pi{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Kt,i=Kt,r=zt,a=Ss,s=sn,c=ci,l=1,u=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Fr(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=lc;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],d=c[2],p=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,M=(m+1)/2,v=(_+1)/2,A=(u+f)/4,L=(h+d)/4,x=(g+p)/4;return S>M&&S>v?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=L/n):M>v?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=L/r,i=x/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-d)/y,this.z=(f-u)/y,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hi extends pi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pc extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=mt,this.minFilter=mt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||c!==f||l!==m||u!==g){let p=1-s;const _=c*f+l*m+u*g+h*d,y=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const v=Math.sqrt(S),A=Math.atan2(v,_*y);p=Math.sin(p*A)/v,s=Math.sin(s*A)/v}const M=s*y;if(c=c*p+f*M,l=l*p+m*M,u=u*p+g*M,h=h*p+d*M,p===1-s){const v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=s*g+u*h+c*m-l*f,e[t+1]=c*g+u*f+l*h-s*m,e[t+2]=l*g+u*m+s*f-c*h,e[t+3]=u*g-s*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(i/2),h=s(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*s+i*l-r*c,this._y=i*u+a*c+r*s-n*l,this._z=r*u+a*l+n*c-i*s,this._w=a*u-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,c=e.w,l=c*t+a*i-s*n,u=c*n+s*t-r*i,h=c*i+r*n-a*t,f=-r*t-a*n-s*i;return this.x=l*c+f*-r+u*-s-h*-a,this.y=u*c+f*-a+h*-r-l*-s,this.z=h*c+f*-s+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*a-n*c,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new F,tl=new fi;class Or{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],f=e[c+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),f=e.getZ(c);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)qn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(qn)}else n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox),qs.applyMatrix4(e.matrixWorld),this.union(qs);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Gr.subVectors(this.max,cr),Si.subVectors(e.a,cr),bi.subVectors(e.b,cr),wi.subVectors(e.c,cr),Ln.subVectors(bi,Si),Pn.subVectors(wi,bi),Xn.subVectors(Si,wi);let t=[0,-Ln.z,Ln.y,0,-Pn.z,Pn.y,0,-Xn.z,Xn.y,Ln.z,0,-Ln.x,Pn.z,0,-Pn.x,Xn.z,0,-Xn.x,-Ln.y,Ln.x,0,-Pn.y,Pn.x,0,-Xn.y,Xn.x,0];return!Xs(t,Si,bi,wi,Gr)||(t=[1,0,0,0,1,0,0,0,1],!Xs(t,Si,bi,wi,Gr))?!1:(Vr.crossVectors(Ln,Pn),t=[Vr.x,Vr.y,Vr.z],Xs(t,Si,bi,wi,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new F,new F,new F,new F,new F,new F,new F,new F],qn=new F,qs=new Or,Si=new F,bi=new F,wi=new F,Ln=new F,Pn=new F,Xn=new F,cr=new F,Gr=new F,Vr=new F,Yn=new F;function Xs(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){Yn.fromArray(o,r);const s=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),c=e.dot(Yn),l=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Uh=new Or,nl=new F,Hr=new F,Ys=new F;class bs{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ys.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Hr.set(0,0,1).multiplyScalar(e.radius):Hr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(nl.copy(e.center).add(Hr)),this.expandByPoint(nl.copy(e.center).sub(Hr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new F,js=new F,Wr=new F,Dn=new F,Zs=new F,qr=new F,$s=new F;class Ja{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.direction).multiplyScalar(t).add(this.origin),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){js.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(js);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),s=Dn.dot(this.direction),c=-Dn.dot(Wr),l=Dn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*c-s,f=a*s-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*s)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Wr).multiplyScalar(f).add(js),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,c=n+a;return s<0&&c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,i,r){Zs.subVectors(t,e),qr.subVectors(n,e),$s.crossVectors(Zs,qr);let a=this.direction.dot($s),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const c=s*this.direction.dot(qr.crossVectors(Dn,qr));if(c<0)return null;const l=s*this.direction.dot(Zs.cross(Dn));if(l<0||c+l>a)return null;const u=-s*Dn.dot($s);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,c,l,u,h,f,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*h,g=s*u,d=s*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-d*l,t[9]=-s*c,t[2]=d-f*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,g=l*u,d=l*h;t[0]=f+d*s,t[4]=g*s-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=d+f*s,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,g=l*u,d=l*h;t[0]=f-d*s,t[4]=-a*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=d-f*s,t[2]=-a*l,t[6]=s,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=s*u,d=s*h;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+d,t[1]=c*h,t[5]=d*l+f,t[9]=m*l-g,t[2]=-l,t[6]=s*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=s*c,d=s*l;t[0]=c*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-s*u,t[2]=-l*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*c,m=a*l,g=s*c,d=s*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+d,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bh,e,kh)}lookAt(e,t,n){const i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),Rn.crossVectors(n,wt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),Rn.crossVectors(n,wt)),Rn.normalize(),Xr.crossVectors(wt,Rn),i[0]=Rn.x,i[4]=Xr.x,i[8]=wt.x,i[1]=Rn.y,i[5]=Xr.y,i[9]=wt.y,i[2]=Rn.z,i[6]=Xr.z,i[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],y=n[3],S=n[7],M=n[11],v=n[15],A=i[0],L=i[4],x=i[8],T=i[12],R=i[1],I=i[5],K=i[9],X=i[13],D=i[2],G=i[6],z=i[10],k=i[14],q=i[3],U=i[7],H=i[11],Q=i[15];return r[0]=a*A+s*R+c*D+l*q,r[4]=a*L+s*I+c*G+l*U,r[8]=a*x+s*K+c*z+l*H,r[12]=a*T+s*X+c*k+l*Q,r[1]=u*A+h*R+f*D+m*q,r[5]=u*L+h*I+f*G+m*U,r[9]=u*x+h*K+f*z+m*H,r[13]=u*T+h*X+f*k+m*Q,r[2]=g*A+d*R+p*D+_*q,r[6]=g*L+d*I+p*G+_*U,r[10]=g*x+d*K+p*z+_*H,r[14]=g*T+d*X+p*k+_*Q,r[3]=y*A+S*R+M*D+v*q,r[7]=y*L+S*I+M*G+v*U,r[11]=y*x+S*K+M*z+v*H,r[15]=y*T+S*X+M*k+v*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*c*h-i*l*h-r*s*f+n*l*f+i*s*m-n*c*m)+d*(+t*c*m-t*l*f+r*a*f-i*a*m+i*l*u-r*c*u)+p*(+t*l*h-t*s*m-r*a*h+n*a*m+r*s*u-n*l*u)+_*(-i*s*u-t*c*h+t*s*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],y=h*p*l-d*f*l+d*c*m-s*p*m-h*c*_+s*f*_,S=g*f*l-u*p*l-g*c*m+a*p*m+u*c*_-a*f*_,M=u*d*l-g*h*l+g*s*m-a*d*m-u*s*_+a*h*_,v=g*h*c-u*d*c-g*s*f+a*d*f+u*s*p-a*h*p,A=t*y+n*S+i*M+r*v;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=y*L,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*L,e[2]=(s*p*r-d*c*r+d*i*l-n*p*l-s*i*_+n*c*_)*L,e[3]=(h*c*r-s*f*r-h*i*l+n*f*l+s*i*m-n*c*m)*L,e[4]=S*L,e[5]=(u*p*r-g*f*r+g*i*m-t*p*m-u*i*_+t*f*_)*L,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*_-t*c*_)*L,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*m+t*c*m)*L,e[8]=M*L,e[9]=(g*h*r-u*d*r-g*n*m+t*d*m+u*n*_-t*h*_)*L,e[10]=(a*d*r-g*s*r+g*n*l-t*d*l-a*n*_+t*s*_)*L,e[11]=(u*s*r-a*h*r-u*n*l+t*h*l+a*n*m-t*s*m)*L,e[12]=v*L,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*p+t*h*p)*L,e[14]=(g*s*i-a*d*i-g*n*c+t*d*c+a*n*p-t*s*p)*L,e[15]=(a*h*i-u*s*i+u*n*c-t*h*c-a*n*f+t*s*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,c=e.z,l=r*a,u=r*s;return this.set(l*a+n,l*s-i*c,l*c+i*s,0,l*s+i*c,u*s+n,u*c-i*a,0,l*c-i*s,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,c=t._w,l=r+r,u=a+a,h=s+s,f=r*l,m=r*u,g=r*h,d=a*u,p=a*h,_=s*h,y=c*l,S=c*u,M=c*h,v=n.x,A=n.y,L=n.z;return i[0]=(1-(d+_))*v,i[1]=(m+M)*v,i[2]=(g-S)*v,i[3]=0,i[4]=(m-M)*A,i[5]=(1-(f+_))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+S)*L,i[9]=(p-y)*L,i[10]=(1-(f+d))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ti.set(i[0],i[1],i[2]).length();const a=Ti.set(i[4],i[5],i[6]).length(),s=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const l=1/r,u=1/a,h=1/s;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,c=1/(t-e),l=1/(n-i),u=1/(a-r),h=(t+e)*c,f=(n+i)*l,m=(a+r)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new F,Zt=new tt,Bh=new F(0,0,0),kh=new F(1,1,1),Rn=new F,Xr=new F,wt=new F,il=new tt,rl=new fi;class Nr{constructor(e=0,t=0,n=0,i=Nr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Nr.DefaultOrder="XYZ";Nr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gh=0;const sl=new F,Ei=new fi,pn=new tt,Yr=new F,ur=new F,Vh=new F,Hh=new fi,al=new F(1,0,0),ol=new F(0,1,0),ll=new F(0,0,1),Wh={type:"added"},cl={type:"removed"};class qt extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DefaultUp.clone();const e=new F,t=new Nr,n=new fi,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Bt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=qt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(al,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return sl.copy(e).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(al,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(ur,Yr,this.up):pn.lookAt(Yr,ur,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(pn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(cl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(e.animations,c))}}if(t){const s=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DefaultUp=new F(0,1,0);qt.DefaultMatrixAutoUpdate=!0;const $t=new F,mn=new F,Ks=new F,gn=new F,Ai=new F,Ci=new F,ul=new F,Js=new F,Qs=new F,ea=new F;class yn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$t.subVectors(e,t),i.cross($t);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$t.subVectors(i,t),mn.subVectors(n,t),Ks.subVectors(e,t);const a=$t.dot($t),s=$t.dot(mn),c=$t.dot(Ks),l=mn.dot(mn),u=mn.dot(Ks),h=a*l-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(l*c-s*u)*f,g=(a*u-s*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,i,r,a,s,c){return this.getBarycoord(e,t,n,i,gn),c.set(0,0),c.addScaledVector(r,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(s,gn.z),c}static isFrontFacing(e,t,n,i){return $t.subVectors(n,t),mn.subVectors(e,t),$t.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),$t.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return yn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Ai.subVectors(i,n),Ci.subVectors(r,n),Js.subVectors(e,n);const c=Ai.dot(Js),l=Ci.dot(Js);if(c<=0&&l<=0)return t.copy(n);Qs.subVectors(e,i);const u=Ai.dot(Qs),h=Ci.dot(Qs);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ai,a);ea.subVectors(e,r);const m=Ai.dot(ea),g=Ci.dot(ea);if(g>=0&&m<=g)return t.copy(r);const d=m*l-c*g;if(d<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(n).addScaledVector(Ci,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return ul.subVectors(r,i),s=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(ul,s);const _=1/(p+d+f);return a=d*_,s=f*_,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ci,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let qh=0;class zr extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=ki,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sc,this.blendDst=ac,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Gu;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const c=r[s];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class eo extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ze=new F,jr=new we;class an{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ko,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new ze),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new we),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new F),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new rt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ko&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class mc extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gc extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xh=0;const Ft=new tt,ta=new qt,Li=new F,Tt=new Or,hr=new Or,it=new F;class un extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uc(e)?gc:mc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Tt.setFromBufferAttribute(r),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];hr.setFromBufferAttribute(s),this.morphTargetsRelative?(it.addVectors(Tt.min,hr.min),Tt.expandByPoint(it),it.addVectors(Tt.max,hr.max),Tt.expandByPoint(it)):(Tt.expandByPoint(hr.min),Tt.expandByPoint(hr.max))}Tt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)it.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(it));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)it.fromBufferAttribute(s,l),c&&(Li.fromBufferAttribute(e,l),it.add(Li)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<s;R++)l[R]=new F,u[R]=new F;const h=new F,f=new F,m=new F,g=new we,d=new we,p=new we,_=new F,y=new F;function S(R,I,K){h.fromArray(i,R*3),f.fromArray(i,I*3),m.fromArray(i,K*3),g.fromArray(a,R*2),d.fromArray(a,I*2),p.fromArray(a,K*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const X=1/(d.x*p.y-p.x*d.y);!isFinite(X)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(X),y.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(X),l[R].add(_),l[I].add(_),l[K].add(_),u[R].add(y),u[I].add(y),u[K].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let R=0,I=M.length;R<I;++R){const K=M[R],X=K.start,D=K.count;for(let G=X,z=X+D;G<z;G+=3)S(n[G+0],n[G+1],n[G+2])}const v=new F,A=new F,L=new F,x=new F;function T(R){L.fromArray(r,R*3),x.copy(L);const I=l[R];v.copy(I),v.sub(L.multiplyScalar(L.dot(I))).normalize(),A.crossVectors(x,I);const X=A.dot(u[R])<0?-1:1;c[R*4]=v.x,c[R*4+1]=v.y,c[R*4+2]=v.z,c[R*4+3]=X}for(let R=0,I=M.length;R<I;++R){const K=M[R],X=K.start,D=K.count;for(let G=X,z=X+D;G<z;G+=3)T(n[G+0]),T(n[G+1]),T(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,a=new F,s=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,p),s.add(u),c.add(u),l.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,s=e.attributes[i],c=s.array,l=s.itemSize*t,u=Math.min(c.length,a.length-l);for(let h=0,f=l;h<u;h++,f++)a[f]=c[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,h=s.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let d=0,p=c.length;d<p;d++){s.isInterleavedBufferAttribute?m=c[d]*s.data.stride+s.offset:m=c[d]*u;for(let _=0;_<u;_++)f[g++]=l[m++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=e(c,n);t.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const l=a[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new tt,Pi=new Ja,na=new bs,In=new F,Fn=new F,On=new F,ia=new F,ra=new F,sa=new F,Zr=new F,$r=new F,Kr=new F,Jr=new we,Qr=new we,es=new we,aa=new F,ts=new F;class Jt extends qt{constructor(e=new un,t=new eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),e.ray.intersectsSphere(na)===!1)||(hl.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(hl),n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(s!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],y=i[_.materialIndex],S=Math.max(_.start,g.start),M=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let v=S,A=M;v<A;v+=3){const L=s.getX(v),x=s.getX(v+1),T=s.getX(v+2);a=ns(this,y,e,Pi,c,l,u,h,f,L,x,T),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let _=d,y=p;_<y;_+=3){const S=s.getX(_),M=s.getX(_+1),v=s.getX(_+2);a=ns(this,i,e,Pi,c,l,u,h,f,S,M,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],y=i[_.materialIndex],S=Math.max(_.start,g.start),M=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let v=S,A=M;v<A;v+=3){const L=v,x=v+1,T=v+2;a=ns(this,y,e,Pi,c,l,u,h,f,L,x,T),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(c.count,g.start+g.count);for(let _=d,y=p;_<y;_+=3){const S=_,M=_+1,v=_+2;a=ns(this,i,e,Pi,c,l,u,h,f,S,M,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Yh(o,e,t,n,i,r,a,s){let c;if(e.side===Ht?c=n.intersectTriangle(a,r,i,!0,s):c=n.intersectTriangle(i,r,a,e.side!==Xi,s),c===null)return null;ts.copy(s),ts.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(ts);return l<t.near||l>t.far?null:{distance:l,point:ts.clone(),object:o}}function ns(o,e,t,n,i,r,a,s,c,l,u,h){In.fromBufferAttribute(i,l),Fn.fromBufferAttribute(i,u),On.fromBufferAttribute(i,h);const f=o.morphTargetInfluences;if(r&&f){Zr.set(0,0,0),$r.set(0,0,0),Kr.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(ia.fromBufferAttribute(_,l),ra.fromBufferAttribute(_,u),sa.fromBufferAttribute(_,h),a?(Zr.addScaledVector(ia,p),$r.addScaledVector(ra,p),Kr.addScaledVector(sa,p)):(Zr.addScaledVector(ia.sub(In),p),$r.addScaledVector(ra.sub(Fn),p),Kr.addScaledVector(sa.sub(On),p)))}In.add(Zr),Fn.add($r),On.add(Kr)}o.isSkinnedMesh&&(o.boneTransform(l,In),o.boneTransform(u,Fn),o.boneTransform(h,On));const m=Yh(o,e,t,n,In,Fn,On,aa);if(m){s&&(Jr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,u),es.fromBufferAttribute(s,h),m.uv=yn.getUV(aa,In,Fn,On,Jr,Qr,es,new we)),c&&(Jr.fromBufferAttribute(c,l),Qr.fromBufferAttribute(c,u),es.fromBufferAttribute(c,h),m.uv2=yn.getUV(aa,In,Fn,On,Jr,Qr,es,new we));const g={a:l,b:u,c:h,normal:new F,materialIndex:0};yn.getNormal(In,Fn,On,g.normal),m.face=g}return m}class sr extends un{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2));function g(d,p,_,y,S,M,v,A,L,x,T){const R=M/L,I=v/x,K=M/2,X=v/2,D=A/2,G=L+1,z=x+1;let k=0,q=0;const U=new F;for(let H=0;H<z;H++){const Q=H*I-X;for(let $=0;$<G;$++){const J=$*R-K;U[d]=J*y,U[p]=Q*S,U[_]=D,l.push(U.x,U.y,U.z),U[d]=0,U[p]=0,U[_]=A>0?1:-1,u.push(U.x,U.y,U.z),h.push($/L),h.push(1-H/x),k+=1}}for(let H=0;H<x;H++)for(let Q=0;Q<L;Q++){const $=f+Q+G*H,J=f+Q+G*(H+1),ae=f+(Q+1)+G*(H+1),fe=f+(Q+1)+G*H;c.push($,J,fe),c.push(J,ae,fe),q+=6}s.addGroup(m,q,T),m+=q,f+=k}}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ct(o){const e={};for(let t=0;t<o.length;t++){const n=$i(o[t]);for(const i in n)e[i]=n[i]}return e}function jh(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const Zh={clone:$i,merge:ct};var $h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$h,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class _c extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ut extends _c{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=90,Ri=1;class Jh extends qt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ut(Di,Ri,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new F(1,0,0)),this.add(i);const r=new Ut(Di,Ri,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(-1,0,0)),this.add(r);const a=new Ut(Di,Ri,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new F(0,1,0)),this.add(a);const s=new Ut(Di,Ri,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new F(0,-1,0)),this.add(s);const c=new Ut(Di,Ri,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new F(0,0,1)),this.add(c);const l=new Ut(Di,Ri,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class xc extends Wt{constructor(e,t,n,i,r,a,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,n,i,r,a,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qh extends hi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new sr(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Bn});r.uniforms.tEquirect.value=t;const a=new Jt(i,r),s=t.minFilter;return t.minFilter===Ss&&(t.minFilter=zt),new Jh(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const oa=new F,ef=new F,tf=new Bt;class $n{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=oa.subVectors(n,t).cross(ef.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tf.getNormalMatrix(e),i=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new bs,is=new F;class vc{constructor(e=new $n,t=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],y=n[14],S=n[15];return t[0].setComponents(s-i,h-c,d-f,S-p).normalize(),t[1].setComponents(s+i,h+c,d+f,S+p).normalize(),t[2].setComponents(s+r,h+l,d+m,S+_).normalize(),t[3].setComponents(s-r,h-l,d-m,S-_).normalize(),t[4].setComponents(s-a,h-u,d-g,S-y).normalize(),t[5].setComponents(s+a,h+u,d+g,S+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(is.x=i.normal.x>0?e.max.x:e.min.x,is.y=i.normal.y>0?e.max.y:e.min.y,is.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yc(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function nf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,l),m.count===-1?o.bufferSubData(h,0,f):(t?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(o.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:s,update:c}}class to extends un{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),c=Math.floor(i),l=s+1,u=c+1,h=e/s,f=t/c,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const y=_*f-a;for(let S=0;S<l;S++){const M=S*h-r;g.push(M,-y,0),d.push(0,0,1),p.push(S/s),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let y=0;y<s;y++){const S=y+l*_,M=y+l*(_+1),v=y+1+l*(_+1),A=y+1+l*_;m.push(S,M,A),m.push(M,v,A)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2))}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}var rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf="vec3 transformed = vec3( position );",hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,df=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Vf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,_d=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Od=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xd=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Yd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,jd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Zd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,$d=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Kd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Jd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Qd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:rf,alphamap_pars_fragment:sf,alphatest_fragment:af,alphatest_pars_fragment:of,aomap_fragment:lf,aomap_pars_fragment:cf,begin_vertex:uf,beginnormal_vertex:hf,bsdfs:ff,iridescence_fragment:df,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:xf,color_fragment:vf,color_pars_fragment:yf,color_pars_vertex:Mf,color_vertex:Sf,common:bf,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Ef,displacementmap_vertex:Af,emissivemap_fragment:Cf,emissivemap_pars_fragment:Lf,encodings_fragment:Pf,encodings_pars_fragment:Df,envmap_fragment:Rf,envmap_common_pars_fragment:If,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Xf,envmap_vertex:Nf,fog_vertex:zf,fog_pars_vertex:Uf,fog_fragment:Bf,fog_pars_fragment:kf,gradientmap_pars_fragment:Gf,lightmap_fragment:Vf,lightmap_pars_fragment:Hf,lights_lambert_vertex:Wf,lights_pars_begin:qf,lights_toon_fragment:Yf,lights_toon_pars_fragment:jf,lights_phong_fragment:Zf,lights_phong_pars_fragment:$f,lights_physical_fragment:Kf,lights_physical_pars_fragment:Jf,lights_fragment_begin:Qf,lights_fragment_maps:ed,lights_fragment_end:td,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:id,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:sd,map_fragment:ad,map_pars_fragment:od,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:hd,morphcolor_vertex:fd,morphnormal_vertex:dd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:gd,normal_fragment_maps:_d,normal_pars_fragment:xd,normal_pars_vertex:vd,normal_vertex:yd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:bd,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Td,output_fragment:Ed,packing:Ad,premultiplied_alpha_fragment:Cd,project_vertex:Ld,dithering_fragment:Pd,dithering_pars_fragment:Dd,roughnessmap_fragment:Rd,roughnessmap_pars_fragment:Id,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Od,shadowmap_vertex:Nd,shadowmask_pars_fragment:zd,skinbase_vertex:Ud,skinning_pars_vertex:Bd,skinning_vertex:kd,skinnormal_vertex:Gd,specularmap_fragment:Vd,specularmap_pars_fragment:Hd,tonemapping_fragment:Wd,tonemapping_pars_fragment:qd,transmission_fragment:Xd,transmission_pars_fragment:Yd,uv_pars_fragment:jd,uv_pars_vertex:Zd,uv_vertex:$d,uv2_pars_fragment:Kd,uv2_pars_vertex:Jd,uv2_vertex:Qd,worldpos_vertex:ep,background_vert:tp,background_frag:np,cube_vert:ip,cube_frag:rp,depth_vert:sp,depth_frag:ap,distanceRGBA_vert:op,distanceRGBA_frag:lp,equirect_vert:cp,equirect_frag:up,linedashed_vert:hp,linedashed_frag:fp,meshbasic_vert:dp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:_p,meshmatcap_frag:xp,meshnormal_vert:vp,meshnormal_frag:yp,meshphong_vert:Mp,meshphong_frag:Sp,meshphysical_vert:bp,meshphysical_frag:wp,meshtoon_vert:Tp,meshtoon_frag:Ep,points_vert:Ap,points_frag:Cp,shadow_vert:Lp,shadow_frag:Pp,sprite_vert:Dp,sprite_frag:Rp},re={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Bt},uv2Transform:{value:new Bt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Bt}}},nn={basic:{uniforms:ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:ct([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:ct([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:ct([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ze(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:ct([re.points,re.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:ct([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:ct([re.common,re.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:ct([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:ct([re.sprite,re.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null}},vertexShader:be.background_vert,fragmentShader:be.background_frag},cube:{uniforms:ct([re.envmap,{opacity:{value:1}}]),vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:ct([re.common,re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:ct([re.lights,re.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};nn.physical={uniforms:ct([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};function Ip(o,e,t,n,i,r){const a=new ze(0);let s=i===!0?0:1,c,l,u=null,h=0,f=null;function m(d,p){let _=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=e.get(y));const S=o.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?g(a,s):y&&y.isColor&&(g(y,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ms)?(l===void 0&&(l=new Jt(new sr(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:$i(nn.cube.uniforms),vertexShader:nn.cube.vertexShader,fragmentShader:nn.cube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||h!==y.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Jt(new to(2,2),new bn({name:"BackgroundMaterial",uniforms:$i(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=o.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),s=p,g(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,g(a,s)},render:m}}function Fp(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},c=p(null);let l=c,u=!1;function h(D,G,z,k,q){let U=!1;if(a){const H=d(k,z,G);l!==H&&(l=H,m(l.object)),U=_(D,k,z,q),U&&y(D,k,z,q)}else{const H=G.wireframe===!0;(l.geometry!==k.id||l.program!==z.id||l.wireframe!==H)&&(l.geometry=k.id,l.program=z.id,l.wireframe=H,U=!0)}q!==null&&t.update(q,34963),(U||u)&&(u=!1,x(D,G,z,k),q!==null&&o.bindBuffer(34963,t.get(q).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function d(D,G,z){const k=z.wireframe===!0;let q=s[D.id];q===void 0&&(q={},s[D.id]=q);let U=q[G.id];U===void 0&&(U={},q[G.id]=U);let H=U[k];return H===void 0&&(H=p(f()),U[k]=H),H}function p(D){const G=[],z=[],k=[];for(let q=0;q<i;q++)G[q]=0,z[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:z,attributeDivisors:k,object:D,attributes:{},index:null}}function _(D,G,z,k){const q=l.attributes,U=G.attributes;let H=0;const Q=z.getAttributes();for(const $ in Q)if(Q[$].location>=0){const ae=q[$];let fe=U[$];if(fe===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;H++}return l.attributesNum!==H||l.index!==k}function y(D,G,z,k){const q={},U=G.attributes;let H=0;const Q=z.getAttributes();for(const $ in Q)if(Q[$].location>=0){let ae=U[$];ae===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),q[$]=fe,H++}l.attributes=q,l.attributesNum=H,l.index=k}function S(){const D=l.newAttributes;for(let G=0,z=D.length;G<z;G++)D[G]=0}function M(D){v(D,0)}function v(D,G){const z=l.newAttributes,k=l.enabledAttributes,q=l.attributeDivisors;z[D]=1,k[D]===0&&(o.enableVertexAttribArray(D),k[D]=1),q[D]!==G&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),q[D]=G)}function A(){const D=l.newAttributes,G=l.enabledAttributes;for(let z=0,k=G.length;z<k;z++)G[z]!==D[z]&&(o.disableVertexAttribArray(z),G[z]=0)}function L(D,G,z,k,q,U){n.isWebGL2===!0&&(z===5124||z===5125)?o.vertexAttribIPointer(D,G,z,q,U):o.vertexAttribPointer(D,G,z,k,q,U)}function x(D,G,z,k){if(n.isWebGL2===!1&&(D.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const q=k.attributes,U=z.getAttributes(),H=G.defaultAttributeValues;for(const Q in U){const $=U[Q];if($.location>=0){let J=q[Q];if(J===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const ae=J.normalized,fe=J.itemSize,Y=t.get(J);if(Y===void 0)continue;const Pe=Y.buffer,pe=Y.type,_e=Y.bytesPerElement;if(J.isInterleavedBufferAttribute){const he=J.data,Re=he.stride,ye=J.offset;if(he.isInstancedInterleavedBuffer){for(let de=0;de<$.locationSize;de++)v($.location+de,he.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let de=0;de<$.locationSize;de++)M($.location+de);o.bindBuffer(34962,Pe);for(let de=0;de<$.locationSize;de++)L($.location+de,fe/$.locationSize,pe,ae,Re*_e,(ye+fe/$.locationSize*de)*_e)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<$.locationSize;he++)v($.location+he,J.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<$.locationSize;he++)M($.location+he);o.bindBuffer(34962,Pe);for(let he=0;he<$.locationSize;he++)L($.location+he,fe/$.locationSize,pe,ae,fe*_e,fe/$.locationSize*he*_e)}}else if(H!==void 0){const ae=H[Q];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv($.location,ae);break;case 3:o.vertexAttrib3fv($.location,ae);break;case 4:o.vertexAttrib4fv($.location,ae);break;default:o.vertexAttrib1fv($.location,ae)}}}}A()}function T(){K();for(const D in s){const G=s[D];for(const z in G){const k=G[z];for(const q in k)g(k[q].object),delete k[q];delete G[z]}delete s[D]}}function R(D){if(s[D.id]===void 0)return;const G=s[D.id];for(const z in G){const k=G[z];for(const q in k)g(k[q].object),delete k[q];delete G[z]}delete s[D.id]}function I(D){for(const G in s){const z=s[G];if(z[D.id]===void 0)continue;const k=z[D.id];for(const q in k)g(k[q].object),delete k[q];delete z[D.id]}}function K(){X(),u=!0,l!==c&&(l=c,m(l.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:K,resetDefaultState:X,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:M,disableUnusedAttributes:A}}function Op(o,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function s(l,u){o.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=c}function Np(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),y=o.getParameter(36349),S=f>0,M=a||e.has("OES_texture_float"),v=S&&M,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:M,floatVertexTextures:v,maxSamples:A}}function zp(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new $n,s=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const y=r?0:n,S=y*4;let M=_.clippingState||null;c.value=M,M=u(g,f,S,m);for(let v=0;v!==S;++v)M[v]=t[v];_.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=c.value,g!==!0||p===null){const _=m+d*4,y=f.matrixWorldInverse;s.getNormalMatrix(y),(p===null||p.length<_)&&(p=new Float32Array(_));for(let S=0,M=m;S!==d;++S,M+=4)a.copy(h[S]).applyMatrix4(y,s),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Up(o){let e=new WeakMap;function t(a,s){return s===Ta?a.mapping=Yi:s===Ea&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Ta||s===Ea)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Qh(c.height/2);return l.fromEquirectangularTexture(o,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Bp extends _c{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,fl=[.125,.215,.35,.446,.526,.582],Qn=20,la=new Bp,dl=new ze;let ca=null;const Kn=(1+Math.sqrt(5))/2,Fi=1/Kn,pl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Kn,Fi),new F(0,Kn,-Fi),new F(Fi,0,Kn),new F(-Fi,0,Kn),new F(Kn,Fi,0),new F(-Kn,Fi,0)];class ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ca=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:wr,format:sn,encoding:ui,depthBuffer:!1},i=gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kp(r)),this._blurMaterial=Gp(r,e,t)}return i}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,n,i){const s=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(dl),u.toneMapping=Sn,u.autoClear=!1;const m=new eo({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Jt(new sr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(dl),d=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(s.up.set(0,c[_],0),s.lookAt(l[_],0,0)):y===1?(s.up.set(0,0,c[_]),s.lookAt(0,l[_],0)):(s.up.set(0,c[_],0),s.lookAt(0,0,l[_]));const S=this._cubeSize;rs(i,y*S,_>2?S:0,S,S),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Yi||e.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const c=this._cubeSize;rs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,la)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=pl[(i-1)%pl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jt(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Qn-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):Qn;p>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);const _=[];let y=0;for(let L=0;L<Qn;++L){const x=L/d,T=Math.exp(-x*x/2);_.push(T),L===0?y+=T:L<p&&(y+=2*T)}for(let L=0;L<_.length;L++)_[L]=_[L]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const M=this._sizeLods[i],v=3*M*(i>S-zi?i-S+zi:0),A=4*(this._cubeSize-M);rs(t,v,A,3*M,2*M),c.setRenderTarget(t),c.render(h,la)}}function kp(o){const e=[],t=[],n=[];let i=o;const r=o-zi+1+fl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let c=1/s;a>o-zi?c=fl[a-o+zi-1]:a===0&&(c=0),n.push(c);const l=1/(s-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,y=new Float32Array(d*g*m),S=new Float32Array(p*g*m),M=new Float32Array(_*g*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,x=A>2?0:-1,T=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];y.set(T,d*g*A),S.set(f,p*g*A);const R=[A,A,A,A,A,A];M.set(R,_*g*A)}const v=new un;v.setAttribute("position",new an(y,d)),v.setAttribute("uv",new an(S,p)),v.setAttribute("faceIndex",new an(M,_)),e.push(v),i>zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gl(o,e,t){const n=new hi(o,e,t);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Gp(o,e,t){const n=new Float32Array(Qn),i=new F(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function _l(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function xl(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function no(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vp(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===Ta||c===Ea,u=c===Yi||c===ji;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new ml(o)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ml(o));const f=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hp(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wp(o,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const y=m.array;d=m.version;for(let S=0,M=y.length;S<M;S+=3){const v=y[S+0],A=y[S+1],L=y[S+2];f.push(v,A,A,L,L,v)}}else{const y=g.array;d=g.version;for(let S=0,M=y.length/3-1;S<M;S+=3){const v=S+0,A=S+1,L=S+2;f.push(v,A,A,L,L,v)}}const p=new(uc(f)?gc:mc)(f,1);p.version=d;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:s,update:c,getWireframeAttribute:u}}function qp(o,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,c;function l(f){s=f.type,c=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*c),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*c,g),t.update(m,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function Xp(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yp(o,e){return o[0]-e[0]}function jp(o,e){return Math.abs(e[1])-Math.abs(o[1])}function ua(o,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(t)}function Zp(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new rt,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,h,f){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let z=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var g=z;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let R=0;M===!0&&(R=1),v===!0&&(R=2),A===!0&&(R=3);let I=u.attributes.position.count*R,K=1;I>e.maxTextureSize&&(K=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const X=new Float32Array(I*K*4*p),D=new pc(X,I,K,p);D.type=ti,D.needsUpdate=!0;const G=R*4;for(let k=0;k<p;k++){const q=L[k],U=x[k],H=T[k],Q=I*K*4*k;for(let $=0;$<q.count;$++){const J=$*G;M===!0&&(a.fromBufferAttribute(q,$),q.normalized===!0&&ua(a,q),X[Q+J+0]=a.x,X[Q+J+1]=a.y,X[Q+J+2]=a.z,X[Q+J+3]=0),v===!0&&(a.fromBufferAttribute(U,$),U.normalized===!0&&ua(a,U),X[Q+J+4]=a.x,X[Q+J+5]=a.y,X[Q+J+6]=a.z,X[Q+J+7]=0),A===!0&&(a.fromBufferAttribute(H,$),H.normalized===!0&&ua(a,H),X[Q+J+8]=a.x,X[Q+J+9]=a.y,X[Q+J+10]=a.z,X[Q+J+11]=H.itemSize===4?a.w:1)}}_={count:p,texture:D,size:new we(I,K)},r.set(u,_),u.addEventListener("dispose",z)}let y=0;for(let M=0;M<m.length;M++)y+=m[M];const S=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(o,"morphTargetBaseInfluence",S),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const A=p[v];A[0]=v,A[1]=m[v]}p.sort(jp);for(let v=0;v<8;v++)v<d&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(Yp);const _=u.morphAttributes.position,y=u.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const A=s[v],L=A[0],x=A[1];L!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[L]&&u.setAttribute("morphTarget"+v,_[L]),y&&u.getAttribute("morphNormal"+v)!==y[L]&&u.setAttribute("morphNormal"+v,y[L]),i[v]=x,S+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),y&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const M=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(o,"morphTargetBaseInfluence",M),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function $p(o,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Mc=new Wt,Sc=new pc,bc=new zh,wc=new xc,vl=[],yl=[],Ml=new Float32Array(16),Sl=new Float32Array(9),bl=new Float32Array(4);function ar(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=vl[i];if(r===void 0&&(r=new Float32Array(i),vl[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function dt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function pt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function ws(o,e){let t=yl[e];t===void 0&&(t=new Int32Array(e),yl[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Kp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Jp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;o.uniform2fv(this.addr,e),pt(t,e)}}function Qp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;o.uniform3fv(this.addr,e),pt(t,e)}}function em(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;o.uniform4fv(this.addr,e),pt(t,e)}}function tm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;bl.set(n),o.uniformMatrix2fv(this.addr,!1,bl),pt(t,n)}}function nm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Sl.set(n),o.uniformMatrix3fv(this.addr,!1,Sl),pt(t,n)}}function im(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Ml.set(n),o.uniformMatrix4fv(this.addr,!1,Ml),pt(t,n)}}function rm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function sm(o,e){const t=this.cache;dt(t,e)||(o.uniform2iv(this.addr,e),pt(t,e))}function am(o,e){const t=this.cache;dt(t,e)||(o.uniform3iv(this.addr,e),pt(t,e))}function om(o,e){const t=this.cache;dt(t,e)||(o.uniform4iv(this.addr,e),pt(t,e))}function lm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function cm(o,e){const t=this.cache;dt(t,e)||(o.uniform2uiv(this.addr,e),pt(t,e))}function um(o,e){const t=this.cache;dt(t,e)||(o.uniform3uiv(this.addr,e),pt(t,e))}function hm(o,e){const t=this.cache;dt(t,e)||(o.uniform4uiv(this.addr,e),pt(t,e))}function fm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Mc,i)}function dm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bc,i)}function pm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wc,i)}function mm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sc,i)}function gm(o){switch(o){case 5126:return Kp;case 35664:return Jp;case 35665:return Qp;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return rm;case 35667:case 35671:return sm;case 35668:case 35672:return am;case 35669:case 35673:return om;case 5125:return lm;case 36294:return cm;case 36295:return um;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(o,e){o.uniform1fv(this.addr,e)}function xm(o,e){const t=ar(e,this.size,2);o.uniform2fv(this.addr,t)}function vm(o,e){const t=ar(e,this.size,3);o.uniform3fv(this.addr,t)}function ym(o,e){const t=ar(e,this.size,4);o.uniform4fv(this.addr,t)}function Mm(o,e){const t=ar(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Sm(o,e){const t=ar(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function bm(o,e){const t=ar(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function wm(o,e){o.uniform1iv(this.addr,e)}function Tm(o,e){o.uniform2iv(this.addr,e)}function Em(o,e){o.uniform3iv(this.addr,e)}function Am(o,e){o.uniform4iv(this.addr,e)}function Cm(o,e){o.uniform1uiv(this.addr,e)}function Lm(o,e){o.uniform2uiv(this.addr,e)}function Pm(o,e){o.uniform3uiv(this.addr,e)}function Dm(o,e){o.uniform4uiv(this.addr,e)}function Rm(o,e,t){const n=e.length,i=ws(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Mc,i[r])}function Im(o,e,t){const n=e.length,i=ws(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||bc,i[r])}function Fm(o,e,t){const n=e.length,i=ws(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||wc,i[r])}function Om(o,e,t){const n=e.length,i=ws(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Sc,i[r])}function Nm(o){switch(o){case 5126:return _m;case 35664:return xm;case 35665:return vm;case 35666:return ym;case 35674:return Mm;case 35675:return Sm;case 35676:return bm;case 5124:case 35670:return wm;case 35667:case 35671:return Tm;case 35668:case 35672:return Em;case 35669:case 35673:return Am;case 5125:return Cm;case 36294:return Lm;case 36295:return Pm;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}class zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=gm(t.type)}}class Um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Nm(t.type)}}class Bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function wl(o,e){o.seq.push(e),o.map[e.id]=e}function km(o,e,t){const n=o.name,i=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),a=ha.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&a+2===i){wl(t,l===void 0?new zm(s,o,e):new Um(s,o,e));break}else{let h=t.map[s];h===void 0&&(h=new Bm(s),wl(t,h)),t=h}}}class cs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);km(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Tl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Gm=0;function Vm(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function Hm(o){switch(o){case ui:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function El(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Vm(o.getShaderSource(e),a)}else return i}function Wm(o,e){const t=Hm(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qm(o,e){let t;switch(e){case ch:t="Linear";break;case uh:t="Reinhard";break;case hh:t="OptimizedCineon";break;case fh:t="ACESFilmic";break;case dh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Xm(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function Ym(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jm(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function pr(o){return o!==""}function Al(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(o){return o.replace(Zm,$m)}function $m(o,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Da(t)}const Km=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(o){return o.replace(Jm,Tc).replace(Km,Qm)}function Qm(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Tc(o,e,t,n)}function Tc(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function tg(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Yi:case ji:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ng(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function ig(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case oc:e="ENVMAP_BLENDING_MULTIPLY";break;case oh:e="ENVMAP_BLENDING_MIX";break;case lh:e="ENVMAP_BLENDING_ADD";break}return e}function rg(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sg(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const c=eg(t),l=tg(t),u=ng(t),h=ig(t),f=rg(t),m=t.isWebGL2?"":Xm(t),g=Ym(r),d=i.createProgram();let p,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(pr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(pr).join(`
`),_.length>0&&(_+=`
`)):(p=[Pl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),_=[m,Pl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?be.tonemapping_pars_fragment:"",t.toneMapping!==Sn?qm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Wm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),a=Da(a),a=Al(a,t),a=Cl(a,t),s=Da(s),s=Al(s,t),s=Cl(s,t),a=Ll(a),s=Ll(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=y+p+a,M=y+_+s,v=Tl(i,35633,S),A=Tl(i,35632,M);if(i.attachShader(d,v),i.attachShader(d,A),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const T=i.getProgramInfoLog(d).trim(),R=i.getShaderInfoLog(v).trim(),I=i.getShaderInfoLog(A).trim();let K=!0,X=!0;if(i.getProgramParameter(d,35714)===!1){K=!1;const D=El(i,v,"vertex"),G=El(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+D+`
`+G)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||I==="")&&(X=!1);X&&(this.diagnostics={runnable:K,programLog:T,vertexShader:{log:R,prefix:p},fragmentShader:{log:I,prefix:_}})}i.deleteShader(v),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new cs(i,d)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=jm(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Gm++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=A,this}let ag=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new lg(e);t.set(e,n)}return t.get(e)}}class lg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function cg(o,e,t,n,i,r,a){const s=new Qa,c=new og,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,T,R,I,K){const X=I.fog,D=K.geometry,G=x.isMeshStandardMaterial?I.environment:null,z=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),k=!!z&&z.mapping===Ms?z.image.height:null,q=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const U=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,H=U!==void 0?U.length:0;let Q=0;D.morphAttributes.position!==void 0&&(Q=1),D.morphAttributes.normal!==void 0&&(Q=2),D.morphAttributes.color!==void 0&&(Q=3);let $,J,ae,fe;if(q){const Re=nn[q];$=Re.vertexShader,J=Re.fragmentShader}else $=x.vertexShader,J=x.fragmentShader,c.update(x),ae=c.getVertexShaderID(x),fe=c.getFragmentShaderID(x);const Y=o.getRenderTarget(),Pe=x.alphaTest>0,pe=x.clearcoat>0,_e=x.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:x.type,vertexShader:$,fragmentShader:J,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?o.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:ui,map:!!x.map,matcap:!!x.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:k,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Ih,tangentSpaceNormalMap:x.normalMapType===Rh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ve,clearcoat:pe,clearcoatMap:pe&&!!x.clearcoatMap,clearcoatRoughnessMap:pe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!x.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!x.iridescenceMap,iridescenceThicknessMap:_e&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ki,alphaMap:!!x.alphaMap,alphaTest:Pe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!X,useFog:x.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Sn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xi,flipSided:x.side===Ht,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(T,x),y(T,x),T.push(o.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function _(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.map&&s.enable(4),T.matcap&&s.enable(5),T.envMap&&s.enable(6),T.lightMap&&s.enable(7),T.aoMap&&s.enable(8),T.emissiveMap&&s.enable(9),T.bumpMap&&s.enable(10),T.normalMap&&s.enable(11),T.objectSpaceNormalMap&&s.enable(12),T.tangentSpaceNormalMap&&s.enable(13),T.clearcoat&&s.enable(14),T.clearcoatMap&&s.enable(15),T.clearcoatRoughnessMap&&s.enable(16),T.clearcoatNormalMap&&s.enable(17),T.iridescence&&s.enable(18),T.iridescenceMap&&s.enable(19),T.iridescenceThicknessMap&&s.enable(20),T.displacementMap&&s.enable(21),T.specularMap&&s.enable(22),T.roughnessMap&&s.enable(23),T.metalnessMap&&s.enable(24),T.gradientMap&&s.enable(25),T.alphaMap&&s.enable(26),T.alphaTest&&s.enable(27),T.vertexColors&&s.enable(28),T.vertexAlphas&&s.enable(29),T.vertexUvs&&s.enable(30),T.vertexTangents&&s.enable(31),T.uvsVertexOnly&&s.enable(32),T.fog&&s.enable(33),x.push(s.mask),s.disableAll(),T.useFog&&s.enable(0),T.flatShading&&s.enable(1),T.logarithmicDepthBuffer&&s.enable(2),T.skinning&&s.enable(3),T.morphTargets&&s.enable(4),T.morphNormals&&s.enable(5),T.morphColors&&s.enable(6),T.premultipliedAlpha&&s.enable(7),T.shadowMapEnabled&&s.enable(8),T.physicallyCorrectLights&&s.enable(9),T.doubleSided&&s.enable(10),T.flipSided&&s.enable(11),T.useDepthPacking&&s.enable(12),T.dithering&&s.enable(13),T.specularIntensityMap&&s.enable(14),T.specularColorMap&&s.enable(15),T.transmission&&s.enable(16),T.transmissionMap&&s.enable(17),T.thicknessMap&&s.enable(18),T.sheen&&s.enable(19),T.sheenColorMap&&s.enable(20),T.sheenRoughnessMap&&s.enable(21),T.decodeVideoTexture&&s.enable(22),T.opaque&&s.enable(23),x.push(s.mask)}function S(x){const T=g[x.type];let R;if(T){const I=nn[T];R=Zh.clone(I.uniforms)}else R=x.uniforms;return R}function M(x,T){let R;for(let I=0,K=l.length;I<K;I++){const X=l[I];if(X.cacheKey===T){R=X,++R.usedTimes;break}}return R===void 0&&(R=new sg(o,T,x,r),l.push(R)),R}function v(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),x.destroy()}}function A(x){c.remove(x)}function L(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:v,releaseShaderCache:A,programs:l,dispose:L}}function ug(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function hg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Dl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Rl(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let _=o[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},o[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),e++,_}function s(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(h,f){t.length>1&&t.sort(h||hg),n.length>1&&n.sort(f||Dl),i.length>1&&i.sort(f||Dl)}function u(){for(let h=e,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:u,sort:l}}function fg(){let o=new WeakMap;function e(n,i){let r;return o.has(n)===!1?(r=new Rl,o.set(n,[r])):i>=o.get(n).length?(r=new Rl,o.get(n).push(r)):r=o.get(n)[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function dg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ze};break;case"SpotLight":t={position:new F,direction:new F,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new F,halfWidth:new F,halfHeight:new F};break}return o[e.id]=t,t}}}function pg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let mg=0;function gg(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function _g(o,e){const t=new dg,n=pg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,a=new tt,s=new tt;function c(u,h){let f=0,m=0,g=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,p=0,_=0,y=0,S=0,M=0,v=0,A=0;u.sort(gg);const L=h!==!0?Math.PI:1;for(let T=0,R=u.length;T<R;T++){const I=u[T],K=I.color,X=I.intensity,D=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=K.r*X*L,m+=K.g*X*L,g+=K.b*X*L;else if(I.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],X);else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*L),I.castShadow){const k=I.shadow,q=n.get(I);q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=I.shadow.matrix,M++}i.directional[d]=z,d++}else if(I.isSpotLight){const z=t.get(I);if(z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(K).multiplyScalar(X*L),z.distance=D,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,I.castShadow){const k=I.shadow,q=n.get(I);q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=G,i.spotShadowMatrix[_]=I.shadow.matrix,A++}i.spot[_]=z,_++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(K).multiplyScalar(X),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=z,y++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity*L),z.distance=I.distance,z.decay=I.decay,I.castShadow){const k=I.shadow,q=n.get(I);q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=G,i.pointShadowMatrix[p]=I.shadow.matrix,v++}i.point[p]=z,p++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(X*L),z.groundColor.copy(I.groundColor).multiplyScalar(X*L),i.hemi[S]=z,S++}}y>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const x=i.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==y||x.hemiLength!==S||x.numDirectionalShadows!==M||x.numPointShadows!==v||x.numSpotShadows!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=y,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotShadowMatrix.length=A,x.directionalLength=d,x.pointLength=p,x.spotLength=_,x.rectAreaLength=y,x.hemiLength=S,x.numDirectionalShadows=M,x.numPointShadows=v,x.numSpotShadows=A,i.version=mg++)}function l(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let y=0,S=u.length;y<S;y++){const M=u[y];if(M.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(M.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const v=i.rectArea[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),s.identity(),a.copy(M.matrixWorld),a.premultiply(_),s.extractRotation(a),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(M.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(_),m++}else if(M.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:i}}function Il(o,e){const t=new _g(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:s}}function xg(o,e){let t=new WeakMap;function n(r,a=0){let s;return t.has(r)===!1?(s=new Il(o,e),t.set(r,[s])):a>=t.get(r).length?(s=new Il(o,e),t.get(r).push(s)):s=t.get(r)[a],s}function i(){t=new WeakMap}return{get:n,dispose:i}}class vg extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yg extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bg(o,e,t){let n=new vc;const i=new we,r=new we,a=new rt,s=new vg({depthPacking:Dh}),c=new yg,l={},u=t.maxTextureSize,h={0:Ht,1:br,2:Xi},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Jt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc,this.render=function(M,v,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const L=o.getRenderTarget(),x=o.getActiveCubeFace(),T=o.getActiveMipmapLevel(),R=o.state;R.setBlending(Bn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let I=0,K=M.length;I<K;I++){const X=M[I],D=X.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const G=D.getFrameExtents();if(i.multiply(G),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/G.x),i.x=r.x*G.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/G.y),i.y=r.y*G.y,D.mapSize.y=r.y)),D.map===null){const k=this.type!==dr?{minFilter:mt,magFilter:mt}:{};D.map=new hi(i.x,i.y,k),D.map.texture.name=X.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const z=D.getViewportCount();for(let k=0;k<z;k++){const q=D.getViewport(k);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),R.viewport(a),D.updateMatrices(X,k),n=D.getFrustum(),S(v,A,D.camera,X,this.type)}D.isPointLightShadow!==!0&&this.type===dr&&_(D,A),D.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(L,x,T)};function _(M,v){const A=e.update(d);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new hi(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(v,null,A,f,d,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(v,null,A,m,d,null)}function y(M,v,A,L,x,T){let R=null;const I=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0?R=I:R=A.isPointLight===!0?c:s,o.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const K=R.uuid,X=v.uuid;let D=l[K];D===void 0&&(D={},l[K]=D);let G=D[X];G===void 0&&(G=R.clone(),D[X]=G),R=G}return R.visible=v.visible,R.wireframe=v.wireframe,T===dr?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:h[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaTest,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,A.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(A.matrixWorld),R.nearDistance=L,R.farDistance=x),R}function S(M,v,A,L,x){if(M.visible===!1)return;if(M.layers.test(v.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===dr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const I=e.update(M),K=M.material;if(Array.isArray(K)){const X=I.groups;for(let D=0,G=X.length;D<G;D++){const z=X[D],k=K[z.materialIndex];if(k&&k.visible){const q=y(M,k,L,A.near,A.far,x);o.renderBufferDirect(A,null,I,q,M,z)}}}else if(K.visible){const X=y(M,K,L,A.near,A.far,x);o.renderBufferDirect(A,null,I,X,M,null)}}const R=M.children;for(let I=0,K=R.length;I<K;I++)S(R[I],v,A,L,x)}}function wg(o,e,t){const n=t.isWebGL2;function i(){let P=!1;const ie=new rt;let V=null;const ue=new rt(0,0,0,0);return{setMask:function(ce){V!==ce&&!P&&(o.colorMask(ce,ce,ce,ce),V=ce)},setLocked:function(ce){P=ce},setClear:function(ce,Ce,nt,qe,An){An===!0&&(ce*=qe,Ce*=qe,nt*=qe),ie.set(ce,Ce,nt,qe),ue.equals(ie)===!1&&(o.clearColor(ce,Ce,nt,qe),ue.copy(ie))},reset:function(){P=!1,V=null,ue.set(-1,0,0,0)}}}function r(){let P=!1,ie=null,V=null,ue=null;return{setTest:function(ce){ce?Pe(2929):pe(2929)},setMask:function(ce){ie!==ce&&!P&&(o.depthMask(ce),ie=ce)},setFunc:function(ce){if(V!==ce){if(ce)switch(ce){case eh:o.depthFunc(512);break;case th:o.depthFunc(519);break;case nh:o.depthFunc(513);break;case wa:o.depthFunc(515);break;case ih:o.depthFunc(514);break;case rh:o.depthFunc(518);break;case sh:o.depthFunc(516);break;case ah:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);V=ce}},setLocked:function(ce){P=ce},setClear:function(ce){ue!==ce&&(o.clearDepth(ce),ue=ce)},reset:function(){P=!1,ie=null,V=null,ue=null}}}function a(){let P=!1,ie=null,V=null,ue=null,ce=null,Ce=null,nt=null,qe=null,An=null;return{setTest:function(ke){P||(ke?Pe(2960):pe(2960))},setMask:function(ke){ie!==ke&&!P&&(o.stencilMask(ke),ie=ke)},setFunc:function(ke,hn,Rt){(V!==ke||ue!==hn||ce!==Rt)&&(o.stencilFunc(ke,hn,Rt),V=ke,ue=hn,ce=Rt)},setOp:function(ke,hn,Rt){(Ce!==ke||nt!==hn||qe!==Rt)&&(o.stencilOp(ke,hn,Rt),Ce=ke,nt=hn,qe=Rt)},setLocked:function(ke){P=ke},setClear:function(ke){An!==ke&&(o.clearStencil(ke),An=ke)},reset:function(){P=!1,ie=null,V=null,ue=null,ce=null,Ce=null,nt=null,qe=null,An=null}}}const s=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,y=null,S=null,M=null,v=null,A=null,L=null,x=null,T=!1,R=null,I=null,K=null,X=null,D=null;const G=o.getParameter(35661);let z=!1,k=0;const q=o.getParameter(7938);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=k>=2);let U=null,H={};const Q=o.getParameter(3088),$=o.getParameter(2978),J=new rt().fromArray(Q),ae=new rt().fromArray($);function fe(P,ie,V){const ue=new Uint8Array(4),ce=o.createTexture();o.bindTexture(P,ce),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let Ce=0;Ce<V;Ce++)o.texImage2D(ie+Ce,0,6408,1,1,0,6408,5121,ue);return ce}const Y={};Y[3553]=fe(3553,3553,1),Y[34067]=fe(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pe(2929),c.setFunc(wa),Ke(!1),Mt(bo),Pe(2884),Ye(Bn);function Pe(P){f[P]!==!0&&(o.enable(P),f[P]=!0)}function pe(P){f[P]!==!1&&(o.disable(P),f[P]=!1)}function _e(P,ie){return m[P]!==ie?(o.bindFramebuffer(P,ie),m[P]=ie,n&&(P===36009&&(m[36160]=ie),P===36160&&(m[36009]=ie)),!0):!1}function he(P,ie){let V=d,ue=!1;if(P)if(V=g.get(ie),V===void 0&&(V=[],g.set(ie,V)),P.isWebGLMultipleRenderTargets){const ce=P.texture;if(V.length!==ce.length||V[0]!==36064){for(let Ce=0,nt=ce.length;Ce<nt;Ce++)V[Ce]=36064+Ce;V.length=ce.length,ue=!0}}else V[0]!==36064&&(V[0]=36064,ue=!0);else V[0]!==1029&&(V[0]=1029,ue=!0);ue&&(t.isWebGL2?o.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Re(P){return p!==P?(o.useProgram(P),p=P,!0):!1}const ye={[Ni]:32774,[Hu]:32778,[Wu]:32779};if(n)ye[Eo]=32775,ye[Ao]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ye[Eo]=P.MIN_EXT,ye[Ao]=P.MAX_EXT)}const de={[qu]:0,[Xu]:1,[Yu]:768,[sc]:770,[Qu]:776,[Ku]:774,[Zu]:772,[ju]:769,[ac]:771,[Ju]:775,[$u]:773};function Ye(P,ie,V,ue,ce,Ce,nt,qe){if(P===Bn){_===!0&&(pe(3042),_=!1);return}if(_===!1&&(Pe(3042),_=!0),P!==Vu){if(P!==y||qe!==T){if((S!==Ni||A!==Ni)&&(o.blendEquation(32774),S=Ni,A=Ni),qe)switch(P){case ki:o.blendFuncSeparate(1,771,1,771);break;case ba:o.blendFunc(1,1);break;case wo:o.blendFuncSeparate(0,769,0,1);break;case To:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ki:o.blendFuncSeparate(770,771,1,771);break;case ba:o.blendFunc(770,1);break;case wo:o.blendFuncSeparate(0,769,0,1);break;case To:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,v=null,L=null,x=null,y=P,T=qe}return}ce=ce||ie,Ce=Ce||V,nt=nt||ue,(ie!==S||ce!==A)&&(o.blendEquationSeparate(ye[ie],ye[ce]),S=ie,A=ce),(V!==M||ue!==v||Ce!==L||nt!==x)&&(o.blendFuncSeparate(de[V],de[ue],de[Ce],de[nt]),M=V,v=ue,L=Ce,x=nt),y=P,T=null}function at(P,ie){P.side===Xi?pe(2884):Pe(2884);let V=P.side===Ht;ie&&(V=!V),Ke(V),P.blending===ki&&P.transparent===!1?Ye(Bn):Ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),s.setMask(P.colorWrite);const ue=P.stencilWrite;l.setTest(ue),ue&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pe(32926):pe(32926)}function Ke(P){R!==P&&(P?o.frontFace(2304):o.frontFace(2305),R=P)}function Mt(P){P!==Uu?(Pe(2884),P!==I&&(P===bo?o.cullFace(1029):P===Bu?o.cullFace(1028):o.cullFace(1032))):pe(2884),I=P}function Je(P){P!==K&&(z&&o.lineWidth(P),K=P)}function Ie(P,ie,V){P?(Pe(32823),(X!==ie||D!==V)&&(o.polygonOffset(ie,V),X=ie,D=V)):pe(32823)}function Dt(P){P?Pe(3089):pe(3089)}function St(P){P===void 0&&(P=33984+G-1),U!==P&&(o.activeTexture(P),U=P)}function C(P,ie){U===null&&St();let V=H[U];V===void 0&&(V={type:void 0,texture:void 0},H[U]=V),(V.type!==P||V.texture!==ie)&&(o.bindTexture(P,ie||Y[P]),V.type=P,V.texture=ie)}function b(){const P=H[U];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function w(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(P){J.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function se(P){ae.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),ae.copy(P))}function ge(P,ie){let V=h.get(ie);V===void 0&&(V=new WeakMap,h.set(ie,V));let ue=V.get(P);ue===void 0&&(ue=o.getUniformBlockIndex(ie,P.name),V.set(P,ue))}function Te(P,ie){const ue=h.get(ie).get(P);u.get(P)!==ue&&(o.uniformBlockBinding(ie,ue,P.__bindingPointIndex),u.set(P,ue))}function Ue(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},U=null,H={},m={},g=new WeakMap,d=[],p=null,_=!1,y=null,S=null,M=null,v=null,A=null,L=null,x=null,T=!1,R=null,I=null,K=null,X=null,D=null,J.set(0,0,o.canvas.width,o.canvas.height),ae.set(0,0,o.canvas.width,o.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:Pe,disable:pe,bindFramebuffer:_e,drawBuffers:he,useProgram:Re,setBlending:Ye,setMaterial:at,setFlipSided:Ke,setCullFace:Mt,setLineWidth:Je,setPolygonOffset:Ie,setScissorTest:Dt,activeTexture:St,bindTexture:C,unbindTexture:b,compressedTexImage2D:W,texImage2D:Z,texImage3D:ne,updateUBOMapping:ge,uniformBlockBinding:Te,texStorage2D:me,texStorage3D:w,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:oe,scissor:le,viewport:se,reset:Ue}}function Tg(o,e,t,n,i,r,a){const s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return _?new OffscreenCanvas(C,b):Tr("canvas")}function S(C,b,W,ee){let te=1;if((C.width>ee||C.height>ee)&&(te=ee/Math.max(C.width,C.height)),te<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=b?Pa:Math.floor,me=oe(te*C.width),w=oe(te*C.height);d===void 0&&(d=y(me,w));const Z=W?y(me,w):d;return Z.width=me,Z.height=w,Z.getContext("2d").drawImage(C,0,0,me,w),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+me+"x"+w+")."),Z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return el(C.width)&&el(C.height)}function v(C){return s?!1:C.wrapS!==Kt||C.wrapT!==Kt||C.minFilter!==mt&&C.minFilter!==zt}function A(C,b){return C.generateMipmaps&&b&&C.minFilter!==mt&&C.minFilter!==zt}function L(C){o.generateMipmap(C)}function x(C,b,W,ee,te=!1){if(s===!1)return b;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=b;return b===6403&&(W===5126&&(oe=33326),W===5131&&(oe=33325),W===5121&&(oe=33321)),b===33319&&(W===5126&&(oe=33328),W===5131&&(oe=33327),W===5121&&(oe=33323)),b===6408&&(W===5126&&(oe=34836),W===5131&&(oe=34842),W===5121&&(oe=ee===Ve&&te===!1?35907:32856),W===32819&&(oe=32854),W===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function T(C,b,W){return A(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==mt&&C.minFilter!==zt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){return C===mt||C===Co||C===Lo?9728:9729}function I(C){const b=C.target;b.removeEventListener("dispose",I),X(b),b.isVideoTexture&&g.delete(b)}function K(C){const b=C.target;b.removeEventListener("dispose",K),G(b)}function X(C){const b=n.get(C);if(b.__webglInit===void 0)return;const W=C.source,ee=p.get(W);if(ee){const te=ee[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&D(C),Object.keys(ee).length===0&&p.delete(W)}n.remove(C)}function D(C){const b=n.get(C);o.deleteTexture(b.__webglTexture);const W=C.source,ee=p.get(W);delete ee[b.__cacheKey],a.memory.textures--}function G(C){const b=C.texture,W=n.get(C),ee=n.get(b);if(ee.__webglTexture!==void 0&&(o.deleteTexture(ee.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)o.deleteFramebuffer(W.__webglFramebuffer[te]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[te]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let te=0;te<W.__webglColorRenderbuffer.length;te++)W.__webglColorRenderbuffer[te]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[te]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,oe=b.length;te<oe;te++){const me=n.get(b[te]);me.__webglTexture&&(o.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(b[te])}n.remove(b),n.remove(C)}let z=0;function k(){z=0}function q(){const C=z;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),z+=1,C}function U(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function H(C,b){const W=n.get(C);if(C.isVideoTexture&&Dt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(W,C,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,W.__webglTexture)}function Q(C,b){const W=n.get(C);if(C.version>0&&W.__version!==C.version){pe(W,C,b);return}t.activeTexture(33984+b),t.bindTexture(35866,W.__webglTexture)}function $(C,b){const W=n.get(C);if(C.version>0&&W.__version!==C.version){pe(W,C,b);return}t.activeTexture(33984+b),t.bindTexture(32879,W.__webglTexture)}function J(C,b){const W=n.get(C);if(C.version>0&&W.__version!==C.version){_e(W,C,b);return}t.activeTexture(33984+b),t.bindTexture(34067,W.__webglTexture)}const ae={[Aa]:10497,[Kt]:33071,[Ca]:33648},fe={[mt]:9728,[Co]:9984,[Lo]:9986,[zt]:9729,[ph]:9985,[Ss]:9987};function Y(C,b,W){if(W?(o.texParameteri(C,10242,ae[b.wrapS]),o.texParameteri(C,10243,ae[b.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,ae[b.wrapR]),o.texParameteri(C,10240,fe[b.magFilter]),o.texParameteri(C,10241,fe[b.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(b.wrapS!==Kt||b.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,R(b.magFilter)),o.texParameteri(C,10241,R(b.minFilter)),b.minFilter!==mt&&b.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(b.type===ti&&e.has("OES_texture_float_linear")===!1||s===!1&&b.type===wr&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Pe(C,b){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",I));const ee=b.source;let te=p.get(ee);te===void 0&&(te={},p.set(ee,te));const oe=U(b);if(oe!==C.__cacheKey){te[oe]===void 0&&(te[oe]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),te[oe].usedTimes++;const me=te[C.__cacheKey];me!==void 0&&(te[C.__cacheKey].usedTimes--,me.usedTimes===0&&D(b)),C.__cacheKey=oe,C.__webglTexture=te[oe].texture}return W}function pe(C,b,W){let ee=3553;b.isDataArrayTexture&&(ee=35866),b.isData3DTexture&&(ee=32879);const te=Pe(C,b),oe=b.source;if(t.activeTexture(33984+W),t.bindTexture(ee,C.__webglTexture),oe.version!==oe.__currentVersion||te===!0){o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const me=v(b)&&M(b.image)===!1;let w=S(b.image,me,!1,u);w=St(b,w);const Z=M(w)||s,ne=r.convert(b.format,b.encoding);let le=r.convert(b.type),se=x(b.internalFormat,ne,le,b.encoding,b.isVideoTexture);Y(ee,b,Z);let ge;const Te=b.mipmaps,Ue=s&&b.isVideoTexture!==!0,P=oe.__currentVersion===void 0||te===!0,ie=T(b,w,Z);if(b.isDepthTexture)se=6402,s?b.type===ti?se=36012:b.type===ei?se=33190:b.type===Gi?se=35056:se=33189:b.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ri&&se===6402&&b.type!==cc&&b.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ei,le=r.convert(b.type)),b.format===Zi&&se===6402&&(se=34041,b.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Gi,le=r.convert(b.type))),P&&(Ue?t.texStorage2D(3553,1,se,w.width,w.height):t.texImage2D(3553,0,se,w.width,w.height,0,ne,le,null));else if(b.isDataTexture)if(Te.length>0&&Z){Ue&&P&&t.texStorage2D(3553,ie,se,Te[0].width,Te[0].height);for(let V=0,ue=Te.length;V<ue;V++)ge=Te[V],Ue?t.texSubImage2D(3553,V,0,0,ge.width,ge.height,ne,le,ge.data):t.texImage2D(3553,V,se,ge.width,ge.height,0,ne,le,ge.data);b.generateMipmaps=!1}else Ue?(P&&t.texStorage2D(3553,ie,se,w.width,w.height),t.texSubImage2D(3553,0,0,0,w.width,w.height,ne,le,w.data)):t.texImage2D(3553,0,se,w.width,w.height,0,ne,le,w.data);else if(b.isCompressedTexture){Ue&&P&&t.texStorage2D(3553,ie,se,Te[0].width,Te[0].height);for(let V=0,ue=Te.length;V<ue;V++)ge=Te[V],b.format!==sn?ne!==null?Ue?t.compressedTexSubImage2D(3553,V,0,0,ge.width,ge.height,ne,ge.data):t.compressedTexImage2D(3553,V,se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,V,0,0,ge.width,ge.height,ne,le,ge.data):t.texImage2D(3553,V,se,ge.width,ge.height,0,ne,le,ge.data)}else if(b.isDataArrayTexture)Ue?(P&&t.texStorage3D(35866,ie,se,w.width,w.height,w.depth),t.texSubImage3D(35866,0,0,0,0,w.width,w.height,w.depth,ne,le,w.data)):t.texImage3D(35866,0,se,w.width,w.height,w.depth,0,ne,le,w.data);else if(b.isData3DTexture)Ue?(P&&t.texStorage3D(32879,ie,se,w.width,w.height,w.depth),t.texSubImage3D(32879,0,0,0,0,w.width,w.height,w.depth,ne,le,w.data)):t.texImage3D(32879,0,se,w.width,w.height,w.depth,0,ne,le,w.data);else if(b.isFramebufferTexture){if(P)if(Ue)t.texStorage2D(3553,ie,se,w.width,w.height);else{let V=w.width,ue=w.height;for(let ce=0;ce<ie;ce++)t.texImage2D(3553,ce,se,V,ue,0,ne,le,null),V>>=1,ue>>=1}}else if(Te.length>0&&Z){Ue&&P&&t.texStorage2D(3553,ie,se,Te[0].width,Te[0].height);for(let V=0,ue=Te.length;V<ue;V++)ge=Te[V],Ue?t.texSubImage2D(3553,V,0,0,ne,le,ge):t.texImage2D(3553,V,se,ne,le,ge);b.generateMipmaps=!1}else Ue?(P&&t.texStorage2D(3553,ie,se,w.width,w.height),t.texSubImage2D(3553,0,0,0,ne,le,w)):t.texImage2D(3553,0,se,ne,le,w);A(b,Z)&&L(ee),oe.__currentVersion=oe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function _e(C,b,W){if(b.image.length!==6)return;const ee=Pe(C,b),te=b.source;if(t.activeTexture(33984+W),t.bindTexture(34067,C.__webglTexture),te.version!==te.__currentVersion||ee===!0){o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,w=[];for(let V=0;V<6;V++)!oe&&!me?w[V]=S(b.image[V],!1,!0,l):w[V]=me?b.image[V].image:b.image[V],w[V]=St(b,w[V]);const Z=w[0],ne=M(Z)||s,le=r.convert(b.format,b.encoding),se=r.convert(b.type),ge=x(b.internalFormat,le,se,b.encoding),Te=s&&b.isVideoTexture!==!0,Ue=te.__currentVersion===void 0||ee===!0;let P=T(b,Z,ne);Y(34067,b,ne);let ie;if(oe){Te&&Ue&&t.texStorage2D(34067,P,ge,Z.width,Z.height);for(let V=0;V<6;V++){ie=w[V].mipmaps;for(let ue=0;ue<ie.length;ue++){const ce=ie[ue];b.format!==sn?le!==null?Te?t.compressedTexSubImage2D(34069+V,ue,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(34069+V,ue,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+V,ue,0,0,ce.width,ce.height,le,se,ce.data):t.texImage2D(34069+V,ue,ge,ce.width,ce.height,0,le,se,ce.data)}}}else{ie=b.mipmaps,Te&&Ue&&(ie.length>0&&P++,t.texStorage2D(34067,P,ge,w[0].width,w[0].height));for(let V=0;V<6;V++)if(me){Te?t.texSubImage2D(34069+V,0,0,0,w[V].width,w[V].height,le,se,w[V].data):t.texImage2D(34069+V,0,ge,w[V].width,w[V].height,0,le,se,w[V].data);for(let ue=0;ue<ie.length;ue++){const Ce=ie[ue].image[V].image;Te?t.texSubImage2D(34069+V,ue+1,0,0,Ce.width,Ce.height,le,se,Ce.data):t.texImage2D(34069+V,ue+1,ge,Ce.width,Ce.height,0,le,se,Ce.data)}}else{Te?t.texSubImage2D(34069+V,0,0,0,le,se,w[V]):t.texImage2D(34069+V,0,ge,le,se,w[V]);for(let ue=0;ue<ie.length;ue++){const ce=ie[ue];Te?t.texSubImage2D(34069+V,ue+1,0,0,le,se,ce.image[V]):t.texImage2D(34069+V,ue+1,ge,le,se,ce.image[V])}}}A(b,ne)&&L(34067),te.__currentVersion=te.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function he(C,b,W,ee,te){const oe=r.convert(W.format,W.encoding),me=r.convert(W.type),w=x(W.internalFormat,oe,me,W.encoding);n.get(b).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,w,b.width,b.height,b.depth,0,oe,me,null):t.texImage2D(te,0,w,b.width,b.height,0,oe,me,null)),t.bindFramebuffer(36160,C),Ie(b)?f.framebufferTexture2DMultisampleEXT(36160,ee,te,n.get(W).__webglTexture,0,Je(b)):o.framebufferTexture2D(36160,ee,te,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function Re(C,b,W){if(o.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let ee=33189;if(W||Ie(b)){const te=b.depthTexture;te&&te.isDepthTexture&&(te.type===ti?ee=36012:te.type===ei&&(ee=33190));const oe=Je(b);Ie(b)?f.renderbufferStorageMultisampleEXT(36161,oe,ee,b.width,b.height):o.renderbufferStorageMultisample(36161,oe,ee,b.width,b.height)}else o.renderbufferStorage(36161,ee,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const ee=Je(b);W&&Ie(b)===!1?o.renderbufferStorageMultisample(36161,ee,35056,b.width,b.height):Ie(b)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let te=0;te<ee.length;te++){const oe=ee[te],me=r.convert(oe.format,oe.encoding),w=r.convert(oe.type),Z=x(oe.internalFormat,me,w,oe.encoding),ne=Je(b);W&&Ie(b)===!1?o.renderbufferStorageMultisample(36161,ne,Z,b.width,b.height):Ie(b)?f.renderbufferStorageMultisampleEXT(36161,ne,Z,b.width,b.height):o.renderbufferStorage(36161,Z,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function ye(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const ee=n.get(b.depthTexture).__webglTexture,te=Je(b);if(b.depthTexture.format===ri)Ie(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):o.framebufferTexture2D(36160,36096,3553,ee,0);else if(b.depthTexture.format===Zi)Ie(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):o.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function de(C){const b=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ye(b.__webglFramebuffer,C)}else if(W){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]=o.createRenderbuffer(),Re(b.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Re(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Ye(C,b,W){const ee=n.get(C);b!==void 0&&he(ee.__webglFramebuffer,C,C.texture,36064,3553),W!==void 0&&de(C)}function at(C){const b=C.texture,W=n.get(C),ee=n.get(b);C.addEventListener("dispose",K),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture()),ee.__version=b.version,a.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,me=M(C)||s;if(te){W.__webglFramebuffer=[];for(let w=0;w<6;w++)W.__webglFramebuffer[w]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),oe)if(i.drawBuffers){const w=C.texture;for(let Z=0,ne=w.length;Z<ne;Z++){const le=n.get(w[Z]);le.__webglTexture===void 0&&(le.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&Ie(C)===!1){const w=oe?b:[b];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let Z=0;Z<w.length;Z++){const ne=w[Z];W.__webglColorRenderbuffer[Z]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[Z]);const le=r.convert(ne.format,ne.encoding),se=r.convert(ne.type),ge=x(ne.internalFormat,le,se,ne.encoding),Te=Je(C);o.renderbufferStorageMultisample(36161,Te,ge,C.width,C.height),o.framebufferRenderbuffer(36160,36064+Z,36161,W.__webglColorRenderbuffer[Z])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Re(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),Y(34067,b,me);for(let w=0;w<6;w++)he(W.__webglFramebuffer[w],C,b,36064,34069+w);A(b,me)&&L(34067),t.unbindTexture()}else if(oe){const w=C.texture;for(let Z=0,ne=w.length;Z<ne;Z++){const le=w[Z],se=n.get(le);t.bindTexture(3553,se.__webglTexture),Y(3553,le,me),he(W.__webglFramebuffer,C,le,36064+Z,3553),A(le,me)&&L(3553)}t.unbindTexture()}else{let w=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?w=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(w,ee.__webglTexture),Y(w,b,me),he(W.__webglFramebuffer,C,b,36064,w),A(b,me)&&L(w),t.unbindTexture()}C.depthBuffer&&de(C)}function Ke(C){const b=M(C)||s,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,te=W.length;ee<te;ee++){const oe=W[ee];if(A(oe,b)){const me=C.isWebGLCubeRenderTarget?34067:3553,w=n.get(oe).__webglTexture;t.bindTexture(me,w),L(me),t.unbindTexture()}}}function Mt(C){if(s&&C.samples>0&&Ie(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,ee=C.height;let te=16384;const oe=[],me=C.stencilBuffer?33306:36096,w=n.get(C),Z=C.isWebGLMultipleRenderTargets===!0;if(Z)for(let ne=0;ne<b.length;ne++)t.bindFramebuffer(36160,w.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ne,36161,null),t.bindFramebuffer(36160,w.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ne,3553,null,0);t.bindFramebuffer(36008,w.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,w.__webglFramebuffer);for(let ne=0;ne<b.length;ne++){oe.push(36064+ne),C.depthBuffer&&oe.push(me);const le=w.__ignoreDepthValues!==void 0?w.__ignoreDepthValues:!1;if(le===!1&&(C.depthBuffer&&(te|=256),C.stencilBuffer&&(te|=1024)),Z&&o.framebufferRenderbuffer(36008,36064,36161,w.__webglColorRenderbuffer[ne]),le===!0&&(o.invalidateFramebuffer(36008,[me]),o.invalidateFramebuffer(36009,[me])),Z){const se=n.get(b[ne]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,se,0)}o.blitFramebuffer(0,0,W,ee,0,0,W,ee,te,9728),m&&o.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let ne=0;ne<b.length;ne++){t.bindFramebuffer(36160,w.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ne,36161,w.__webglColorRenderbuffer[ne]);const le=n.get(b[ne]).__webglTexture;t.bindFramebuffer(36160,w.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ne,3553,le,0)}t.bindFramebuffer(36009,w.__webglMultisampledFramebuffer)}}function Je(C){return Math.min(h,C.samples)}function Ie(C){const b=n.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Dt(C){const b=a.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function St(C,b){const W=C.encoding,ee=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===La||W!==ui&&(W===Ve?s===!1?e.has("EXT_sRGB")===!0&&ee===sn?(C.format=La,C.minFilter=zt,C.generateMipmaps=!1):b=fc.sRGBToLinear(b):(ee!==sn||te!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),b}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=Q,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=Ye,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ie}function Eg(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===ci)return 5121;if(r===xh)return 32819;if(r===vh)return 32820;if(r===mh)return 5120;if(r===gh)return 5122;if(r===cc)return 5123;if(r===_h)return 5124;if(r===ei)return 5125;if(r===ti)return 5126;if(r===wr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===yh)return 6406;if(r===sn)return 6408;if(r===Sh)return 6409;if(r===bh)return 6410;if(r===ri)return 6402;if(r===Zi)return 34041;if(r===wh)return 6403;if(r===Mh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===La)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Th)return 36244;if(r===Eh)return 33319;if(r===Ah)return 33320;if(r===Ch)return 36249;if(r===Fs||r===Os||r===Ns||r===zs)if(a===Ve)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ns)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Po||r===Do||r===Ro||r===Io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Po)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Do)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fo||r===Oo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Fo)return a===Ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Oo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===No||r===zo||r===Uo||r===Bo||r===ko||r===Go||r===Vo||r===Ho||r===Wo||r===qo||r===Xo||r===Yo||r===jo||r===Zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===No)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ko)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Go)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ho)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Wo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zo)return a===Ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===$o)return a===Ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Gi?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Ag extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mr extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cg={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(l.joints[d.jointName]===void 0){const y=new mr;y.matrixAutoUpdate=!1,y.visible=!1,l.joints[d.jointName]=y,l.add(y)}const _=l.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}}class Lg extends Wt{constructor(e,t,n,i,r,a,s,c,l,u){if(u=u!==void 0?u:ri,u!==ri&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ri&&(n=ei),n===void 0&&u===Zi&&(n=Gi),super(null,i,r,a,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:mt,this.minFilter=c!==void 0?c:mt,this.flipY=!1,this.generateMipmaps=!1}}class Pg extends pi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",c=null,l=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],y=[],S=new Ut;S.layers.enable(1),S.viewport=new rt;const M=new Ut;M.layers.enable(2),M.viewport=new rt;const v=[S,M],A=new Ag;A.layers.enable(1),A.layers.enable(2);let L=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let H=_[U];return H===void 0&&(H=new fa,_[U]=H),H.getTargetRaySpace()},this.getControllerGrip=function(U){let H=_[U];return H===void 0&&(H=new fa,_[U]=H),H.getGripSpace()},this.getHand=function(U){let H=_[U];return H===void 0&&(H=new fa,_[U]=H),H.getHandSpace()};function T(U){const H=y.indexOf(U.inputSource);if(H===-1)return;const Q=_[H];Q!==void 0&&Q.dispatchEvent({type:U.type,data:U.inputSource})}function R(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",I);for(let U=0;U<_.length;U++){const H=y[U];H!==null&&(y[U]=null,_[U].disconnect(H))}L=null,x=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",R),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:f}),p=new hi(f.framebufferWidth,f.framebufferHeight,{format:sn,type:ci,encoding:e.outputEncoding})}else{let H=null,Q=null,$=null;g.depth&&($=g.stencil?35056:33190,H=g.stencil?Zi:ri,Q=g.stencil?Gi:ei);const J={colorFormat:32856,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(J),i.updateRenderState({layers:[h]}),p=new hi(h.textureWidth,h.textureHeight,{format:sn,type:ci,depthTexture:new Lg(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ae=e.properties.get(p);ae.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(s),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(U){for(let H=0;H<U.removed.length;H++){const Q=U.removed[H],$=y.indexOf(Q);$>=0&&(y[$]=null,_[$].dispatchEvent({type:"disconnected",data:Q}))}for(let H=0;H<U.added.length;H++){const Q=U.added[H];let $=y.indexOf(Q);if($===-1){for(let ae=0;ae<_.length;ae++)if(ae>=y.length){y.push(Q),$=ae;break}else if(y[ae]===null){y[ae]=Q,$=ae;break}if($===-1)break}const J=_[$];J&&J.dispatchEvent({type:"connected",data:Q})}}const K=new F,X=new F;function D(U,H,Q){K.setFromMatrixPosition(H.matrixWorld),X.setFromMatrixPosition(Q.matrixWorld);const $=K.distanceTo(X),J=H.projectionMatrix.elements,ae=Q.projectionMatrix.elements,fe=J[14]/(J[10]-1),Y=J[14]/(J[10]+1),Pe=(J[9]+1)/J[5],pe=(J[9]-1)/J[5],_e=(J[8]-1)/J[0],he=(ae[8]+1)/ae[0],Re=fe*_e,ye=fe*he,de=$/(-_e+he),Ye=de*-_e;H.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ye),U.translateZ(de),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const at=fe+de,Ke=Y+de,Mt=Re-Ye,Je=ye+($-Ye),Ie=Pe*Y/Ke*at,Dt=pe*Y/Ke*at;U.projectionMatrix.makePerspective(Mt,Je,Ie,Dt,at,Ke)}function G(U,H){H===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(H.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;A.near=M.near=S.near=U.near,A.far=M.far=S.far=U.far,(L!==A.near||x!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,x=A.far);const H=U.parent,Q=A.cameras;G(A,H);for(let J=0;J<Q.length;J++)G(Q[J],H);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),U.position.copy(A.position),U.quaternion.copy(A.quaternion),U.scale.copy(A.scale),U.matrix.copy(A.matrix),U.matrixWorld.copy(A.matrixWorld);const $=U.children;for(let J=0,ae=$.length;J<ae;J++)$[J].updateMatrixWorld(!0);Q.length===2?D(A,S,M):A.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){h!==null&&(h.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let z=null;function k(U,H){if(l=H.getViewerPose(c||a),m=H,l!==null){const Q=l.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let $=!1;Q.length!==A.cameras.length&&(A.cameras.length=0,$=!0);for(let J=0;J<Q.length;J++){const ae=Q[J];let fe=null;if(f!==null)fe=f.getViewport(ae);else{const Pe=u.getViewSubImage(h,ae);fe=Pe.viewport,J===0&&(e.setRenderTargetTextures(p,Pe.colorTexture,h.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(p))}let Y=v[J];Y===void 0&&(Y=new Ut,Y.layers.enable(J),Y.viewport=new rt,v[J]=Y),Y.matrix.fromArray(ae.transform.matrix),Y.projectionMatrix.fromArray(ae.projectionMatrix),Y.viewport.set(fe.x,fe.y,fe.width,fe.height),J===0&&A.matrix.copy(Y.matrix),$===!0&&A.cameras.push(Y)}}for(let Q=0;Q<_.length;Q++){const $=y[Q],J=_[Q];$!==null&&J!==void 0&&J.update($,H,c||a)}z&&z(U,H),m=null}const q=new yc;q.setAnimationLoop(k),this.setAnimationLoop=function(U){z=U},this.dispose=function(){}}}function Dg(o,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),l(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,S)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,_,y):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Ht&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Ht&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uv2Transform.value.copy(S.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,y){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=y*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ht&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Rg(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function c(y,S){const M=S.program;n.uniformBlockBinding(y,M)}function l(y,S){let M=i[y.id];M===void 0&&(g(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",p));const v=S.program;n.updateUBOMapping(y,v);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function u(y){const S=h();y.__bindingPointIndex=S;const M=o.createBuffer(),v=y.__size,A=y.usage;return o.bindBuffer(35345,M),o.bufferData(35345,v,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,S,M),M}function h(){for(let y=0;y<s;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=i[y.id],M=y.uniforms,v=y.__cache;o.bindBuffer(35345,S);for(let A=0,L=M.length;A<L;A++){const x=M[A];if(m(x,A,v)===!0){const T=x.value,R=x.__offset;typeof T=="number"?(x.__data[0]=T,o.bufferSubData(35345,R,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):T.toArray(x.__data),o.bufferSubData(35345,R,x.__data))}}o.bindBuffer(35345,null)}function m(y,S,M){const v=y.value;if(M[S]===void 0)return typeof v=="number"?M[S]=v:M[S]=v.clone(),!0;if(typeof v=="number"){if(M[S]!==v)return M[S]=v,!0}else{const A=M[S];if(A.equals(v)===!1)return A.copy(v),!0}return!1}function g(y){const S=y.uniforms;let M=0;const v=16;let A=0;for(let L=0,x=S.length;L<x;L++){const T=S[L],R=d(T);if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,L>0){A=M%v;const I=v-A;A!==0&&I-R.boundary<0&&(M+=v-A,T.__offset=M)}M+=R.storage}return A=M%v,A>0&&(M+=v-A),y.__size=M,y.__cache={},this}function d(y){const S=y.value,M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(y){const S=y.target;S.removeEventListener("dispose",p);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function _(){for(const y in i)o.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:_}}function Ig(){const o=Tr("canvas");return o.style.display="block",o}function Ec(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Ig(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",l=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ui,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,y=0,S=null,M=-1,v=null;const A=new rt,L=new rt;let x=null,T=e.width,R=e.height,I=1,K=null,X=null;const D=new rt(0,0,T,R),G=new rt(0,0,T,R);let z=!1;const k=new vc;let q=!1,U=!1,H=null;const Q=new tt,$=new we,J=new F,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return S===null?I:1}let Y=t;function Pe(E,O){for(let B=0;B<E.length;B++){const N=E[B],j=e.getContext(N,O);if(j!==null)return j}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ka}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",Ue,!1),Y===null){const O=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&O.shift(),Y=Pe(O,E),Y===null)throw Pe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let pe,_e,he,Re,ye,de,Ye,at,Ke,Mt,Je,Ie,Dt,St,C,b,W,ee,te,oe,me,w,Z,ne;function le(){pe=new Hp(Y),_e=new Np(Y,pe,o),pe.init(_e),w=new Eg(Y,pe,_e),he=new wg(Y,pe,_e),Re=new Xp,ye=new ug,de=new Tg(Y,pe,he,ye,_e,w,Re),Ye=new Up(d),at=new Vp(d),Ke=new nf(Y,_e),Z=new Fp(Y,pe,Ke,_e),Mt=new Wp(Y,Ke,Re,Z),Je=new $p(Y,Mt,Ke,Re),te=new Zp(Y,_e,de),b=new zp(ye),Ie=new cg(d,Ye,at,pe,_e,Z,b),Dt=new Dg(d,ye),St=new fg,C=new xg(pe,_e),ee=new Ip(d,Ye,he,Je,u,a),W=new bg(d,Je,_e),ne=new Rg(Y,Re,_e,he),oe=new Op(Y,pe,Re,_e),me=new qp(Y,pe,Re,_e),Re.programs=Ie.programs,d.capabilities=_e,d.extensions=pe,d.properties=ye,d.renderLists=St,d.shadowMap=W,d.state=he,d.info=Re}le();const se=new Pg(d,Y);this.xr=se,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const E=pe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=pe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(T,R,!1))},this.getSize=function(E){return E.set(T,R)},this.setSize=function(E,O,B){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,R=O,e.width=Math.floor(E*I),e.height=Math.floor(O*I),B!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(T*I,R*I).floor()},this.setDrawingBufferSize=function(E,O,B){T=E,R=O,I=B,e.width=Math.floor(E*B),e.height=Math.floor(O*B),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(D)},this.setViewport=function(E,O,B,N){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,O,B,N),he.viewport(A.copy(D).multiplyScalar(I).floor())},this.getScissor=function(E){return E.copy(G)},this.setScissor=function(E,O,B,N){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,O,B,N),he.scissor(L.copy(G).multiplyScalar(I).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(E){he.setScissorTest(z=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,O=!0,B=!0){let N=0;E&&(N|=16384),O&&(N|=256),B&&(N|=1024),Y.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",Ue,!1),St.dispose(),C.dispose(),ye.dispose(),Ye.dispose(),at.dispose(),Je.dispose(),Z.dispose(),ne.dispose(),Ie.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ce),se.removeEventListener("sessionend",nt),H&&(H.dispose(),H=null),qe.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Re.autoReset,O=W.enabled,B=W.autoUpdate,N=W.needsUpdate,j=W.type;le(),Re.autoReset=E,W.enabled=O,W.autoUpdate=B,W.needsUpdate=N,W.type=j}function Ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function P(E){const O=E.target;O.removeEventListener("dispose",P),ie(O)}function ie(E){V(E),ye.remove(E)}function V(E){const O=ye.get(E).programs;O!==void 0&&(O.forEach(function(B){Ie.releaseProgram(B)}),E.isShaderMaterial&&Ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,B,N,j,xe){O===null&&(O=ae);const ve=j.isMesh&&j.matrixWorld.determinant()<0,Se=Fu(E,O,B,N,j);he.setMaterial(N,ve);let Me=B.index;const Fe=B.attributes.position;if(Me===null){if(Fe===void 0||Fe.count===0)return}else if(Me.count===0)return;let Ae=1;N.wireframe===!0&&(Me=Mt.getWireframeAttribute(B),Ae=2),Z.setup(j,N,Se,B,Me);let Le,Ge=oe;Me!==null&&(Le=Ke.get(Me),Ge=me,Ge.setIndex(Le));const Wn=Me!==null?Me.count:Fe.count,gi=B.drawRange.start*Ae,_i=B.drawRange.count*Ae,tn=xe!==null?xe.start*Ae:0,De=xe!==null?xe.count*Ae:1/0,xi=Math.max(gi,tn),je=Math.min(Wn,gi+_i,tn+De)-1,It=Math.max(0,je-xi+1);if(It!==0){if(j.isMesh)N.wireframe===!0?(he.setLineWidth(N.wireframeLinewidth*fe()),Ge.setMode(1)):Ge.setMode(4);else if(j.isLine){let Cn=N.linewidth;Cn===void 0&&(Cn=1),he.setLineWidth(Cn*fe()),j.isLineSegments?Ge.setMode(1):j.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else j.isPoints?Ge.setMode(0):j.isSprite&&Ge.setMode(4);if(j.isInstancedMesh)Ge.renderInstances(xi,It,j.count);else if(B.isInstancedBufferGeometry){const Cn=Math.min(B.instanceCount,B._maxInstanceCount);Ge.renderInstances(xi,It,Cn)}else Ge.render(xi,It)}},this.compile=function(E,O){f=C.get(E),f.init(),g.push(f),E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(d.physicallyCorrectLights),E.traverse(function(B){const N=B.material;if(N)if(Array.isArray(N))for(let j=0;j<N.length;j++){const xe=N[j];Ps(xe,E,B)}else Ps(N,E,B)}),g.pop(),f=null};let ue=null;function ce(E){ue&&ue(E)}function Ce(){qe.stop()}function nt(){qe.start()}const qe=new yc;qe.setAnimationLoop(ce),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(E){ue=E,se.setAnimationLoop(E),E===null?qe.stop():qe.start()},se.addEventListener("sessionstart",Ce),se.addEventListener("sessionend",nt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(O),O=se.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,O,S),f=C.get(E,g.length),f.init(),g.push(f),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),k.setFromProjectionMatrix(Q),U=this.localClippingEnabled,q=b.init(this.clippingPlanes,U,O),h=St.get(E,m.length),h.init(),m.push(h),An(E,O,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(K,X),q===!0&&b.beginShadows();const B=f.state.shadowsArray;if(W.render(B,E,O),q===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,E),f.setupLights(d.physicallyCorrectLights),O.isArrayCamera){const N=O.cameras;for(let j=0,xe=N.length;j<xe;j++){const ve=N[j];ke(h,E,ve,ve.viewport)}}else ke(h,E,O);S!==null&&(de.updateMultisampleRenderTarget(S),de.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(d,E,O),Z.resetDefaultState(),M=-1,v=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function An(E,O,B,N){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){N&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const ve=Je.update(E),Se=E.material;Se.visible&&h.push(E,ve,Se,B,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Re.render.frame&&(E.skeleton.update(),E.skeleton.frame=Re.render.frame),!E.frustumCulled||k.intersectsObject(E))){N&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Q);const ve=Je.update(E),Se=E.material;if(Array.isArray(Se)){const Me=ve.groups;for(let Fe=0,Ae=Me.length;Fe<Ae;Fe++){const Le=Me[Fe],Ge=Se[Le.materialIndex];Ge&&Ge.visible&&h.push(E,ve,Ge,B,J.z,Le)}}else Se.visible&&h.push(E,ve,Se,B,J.z,null)}}const xe=E.children;for(let ve=0,Se=xe.length;ve<Se;ve++)An(xe[ve],O,B,N)}function ke(E,O,B,N){const j=E.opaque,xe=E.transmissive,ve=E.transparent;f.setupLightsView(B),xe.length>0&&hn(j,O,B),N&&he.viewport(A.copy(N)),j.length>0&&Rt(j,O,B),xe.length>0&&Rt(xe,O,B),ve.length>0&&Rt(ve,O,B),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function hn(E,O,B){const N=_e.isWebGL2;H===null&&(H=new hi(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?wr:ci,minFilter:Ss,samples:N&&r===!0?4:0})),d.getDrawingBufferSize($),N?H.setSize($.x,$.y):H.setSize(Pa($.x),Pa($.y));const j=d.getRenderTarget();d.setRenderTarget(H),d.clear();const xe=d.toneMapping;d.toneMapping=Sn,Rt(E,O,B),d.toneMapping=xe,de.updateMultisampleRenderTarget(H),de.updateRenderTargetMipmap(H),d.setRenderTarget(j)}function Rt(E,O,B){const N=O.isScene===!0?O.overrideMaterial:null;for(let j=0,xe=E.length;j<xe;j++){const ve=E[j],Se=ve.object,Me=ve.geometry,Fe=N===null?ve.material:N,Ae=ve.group;Se.layers.test(B.layers)&&Iu(Se,O,B,Me,Fe,Ae)}}function Iu(E,O,B,N,j,xe){E.onBeforeRender(d,O,B,N,j,xe),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(d,O,B,N,E,xe),j.transparent===!0&&j.side===Xi?(j.side=Ht,j.needsUpdate=!0,d.renderBufferDirect(B,O,N,j,E,xe),j.side=br,j.needsUpdate=!0,d.renderBufferDirect(B,O,N,j,E,xe),j.side=Xi):d.renderBufferDirect(B,O,N,j,E,xe),E.onAfterRender(d,O,B,N,j,xe)}function Ps(E,O,B){O.isScene!==!0&&(O=ae);const N=ye.get(E),j=f.state.lights,xe=f.state.shadowsArray,ve=j.state.version,Se=Ie.getParameters(E,j.state,xe,O,B),Me=Ie.getProgramCacheKey(Se);let Fe=N.programs;N.environment=E.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(E.isMeshStandardMaterial?at:Ye).get(E.envMap||N.environment),Fe===void 0&&(E.addEventListener("dispose",P),Fe=new Map,N.programs=Fe);let Ae=Fe.get(Me);if(Ae!==void 0){if(N.currentProgram===Ae&&N.lightsStateVersion===ve)return Mo(E,Se),Ae}else Se.uniforms=Ie.getUniforms(E),E.onBuild(B,Se,d),E.onBeforeCompile(Se,d),Ae=Ie.acquireProgram(Se,Me),Fe.set(Me,Ae),N.uniforms=Se.uniforms;const Le=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=b.uniform),Mo(E,Se),N.needsLights=Nu(E),N.lightsStateVersion=ve,N.needsLights&&(Le.ambientLightColor.value=j.state.ambient,Le.lightProbe.value=j.state.probe,Le.directionalLights.value=j.state.directional,Le.directionalLightShadows.value=j.state.directionalShadow,Le.spotLights.value=j.state.spot,Le.spotLightShadows.value=j.state.spotShadow,Le.rectAreaLights.value=j.state.rectArea,Le.ltc_1.value=j.state.rectAreaLTC1,Le.ltc_2.value=j.state.rectAreaLTC2,Le.pointLights.value=j.state.point,Le.pointLightShadows.value=j.state.pointShadow,Le.hemisphereLights.value=j.state.hemi,Le.directionalShadowMap.value=j.state.directionalShadowMap,Le.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Le.spotShadowMap.value=j.state.spotShadowMap,Le.spotShadowMatrix.value=j.state.spotShadowMatrix,Le.pointShadowMap.value=j.state.pointShadowMap,Le.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ge=Ae.getUniforms(),Wn=cs.seqWithValue(Ge.seq,Le);return N.currentProgram=Ae,N.uniformsList=Wn,Ae}function Mo(E,O){const B=ye.get(E);B.outputEncoding=O.outputEncoding,B.instancing=O.instancing,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function Fu(E,O,B,N,j){O.isScene!==!0&&(O=ae),de.resetTextureUnits();const xe=O.fog,ve=N.isMeshStandardMaterial?O.environment:null,Se=S===null?d.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:ui,Me=(N.isMeshStandardMaterial?at:Ye).get(N.envMap||ve),Fe=N.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ae=!!N.normalMap&&!!B.attributes.tangent,Le=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,Wn=!!B.morphAttributes.color,gi=N.toneMapped?d.toneMapping:Sn,_i=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,tn=_i!==void 0?_i.length:0,De=ye.get(N),xi=f.state.lights;if(q===!0&&(U===!0||E!==v)){const bt=E===v&&N.id===M;b.setState(N,E,bt)}let je=!1;N.version===De.__version?(De.needsLights&&De.lightsStateVersion!==xi.state.version||De.outputEncoding!==Se||j.isInstancedMesh&&De.instancing===!1||!j.isInstancedMesh&&De.instancing===!0||j.isSkinnedMesh&&De.skinning===!1||!j.isSkinnedMesh&&De.skinning===!0||De.envMap!==Me||N.fog===!0&&De.fog!==xe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==b.numPlanes||De.numIntersection!==b.numIntersection)||De.vertexAlphas!==Fe||De.vertexTangents!==Ae||De.morphTargets!==Le||De.morphNormals!==Ge||De.morphColors!==Wn||De.toneMapping!==gi||_e.isWebGL2===!0&&De.morphTargetsCount!==tn)&&(je=!0):(je=!0,De.__version=N.version);let It=De.currentProgram;je===!0&&(It=Ps(N,O,j));let Cn=!1,or=!1,Ds=!1;const ft=It.getUniforms(),lr=De.uniforms;if(he.useProgram(It.program)&&(Cn=!0,or=!0,Ds=!0),N.id!==M&&(M=N.id,or=!0),Cn||v!==E){if(ft.setValue(Y,"projectionMatrix",E.projectionMatrix),_e.logarithmicDepthBuffer&&ft.setValue(Y,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),v!==E&&(v=E,or=!0,Ds=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const bt=ft.map.cameraPosition;bt!==void 0&&bt.setValue(Y,J.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ft.setValue(Y,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||j.isSkinnedMesh)&&ft.setValue(Y,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){ft.setOptional(Y,j,"bindMatrix"),ft.setOptional(Y,j,"bindMatrixInverse");const bt=j.skeleton;bt&&(_e.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),ft.setValue(Y,"boneTexture",bt.boneTexture,de),ft.setValue(Y,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rs=B.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&_e.isWebGL2===!0)&&te.update(j,B,N,It),(or||De.receiveShadow!==j.receiveShadow)&&(De.receiveShadow=j.receiveShadow,ft.setValue(Y,"receiveShadow",j.receiveShadow)),or&&(ft.setValue(Y,"toneMappingExposure",d.toneMappingExposure),De.needsLights&&Ou(lr,Ds),xe&&N.fog===!0&&Dt.refreshFogUniforms(lr,xe),Dt.refreshMaterialUniforms(lr,N,I,R,H),cs.upload(Y,De.uniformsList,lr,de)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(cs.upload(Y,De.uniformsList,lr,de),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ft.setValue(Y,"center",j.center),ft.setValue(Y,"modelViewMatrix",j.modelViewMatrix),ft.setValue(Y,"normalMatrix",j.normalMatrix),ft.setValue(Y,"modelMatrix",j.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const bt=N.uniformsGroups;for(let Is=0,zu=bt.length;Is<zu;Is++)if(_e.isWebGL2){const So=bt[Is];ne.update(So,It),ne.bind(So,It)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return It}function Ou(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Nu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,O,B){ye.get(E.texture).__webglTexture=O,ye.get(E.depthTexture).__webglTexture=B;const N=ye.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=B===void 0,N.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const B=ye.get(E);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,B=0){S=E,_=O,y=B;let N=!0;if(E){const Me=ye.get(E);Me.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),N=!1):Me.__webglFramebuffer===void 0?de.setupRenderTarget(E):Me.__hasExternalTextures&&de.rebindTextures(E,ye.get(E.texture).__webglTexture,ye.get(E.depthTexture).__webglTexture)}let j=null,xe=!1,ve=!1;if(E){const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture)&&(ve=!0);const Fe=ye.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=Fe[O],xe=!0):_e.isWebGL2&&E.samples>0&&de.useMultisampledRTT(E)===!1?j=ye.get(E).__webglMultisampledFramebuffer:j=Fe,A.copy(E.viewport),L.copy(E.scissor),x=E.scissorTest}else A.copy(D).multiplyScalar(I).floor(),L.copy(G).multiplyScalar(I).floor(),x=z;if(he.bindFramebuffer(36160,j)&&_e.drawBuffers&&N&&he.drawBuffers(E,j),he.viewport(A),he.scissor(L),he.setScissorTest(x),xe){const Me=ye.get(E.texture);Y.framebufferTexture2D(36160,36064,34069+O,Me.__webglTexture,B)}else if(ve){const Me=ye.get(E.texture),Fe=O||0;Y.framebufferTextureLayer(36160,36064,Me.__webglTexture,B||0,Fe)}M=-1},this.readRenderTargetPixels=function(E,O,B,N,j,xe,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ye.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){he.bindFramebuffer(36160,Se);try{const Me=E.texture,Fe=Me.format,Ae=Me.type;if(Fe!==sn&&w.convert(Fe)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Ae===wr&&(pe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Ae!==ci&&w.convert(Ae)!==Y.getParameter(35738)&&!(Ae===ti&&(_e.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-N&&B>=0&&B<=E.height-j&&Y.readPixels(O,B,N,j,w.convert(Fe),w.convert(Ae),xe)}finally{const Me=S!==null?ye.get(S).__webglFramebuffer:null;he.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(E,O,B=0){const N=Math.pow(2,-B),j=Math.floor(O.image.width*N),xe=Math.floor(O.image.height*N);de.setTexture2D(O,0),Y.copyTexSubImage2D(3553,B,0,0,E.x,E.y,j,xe),he.unbindTexture()},this.copyTextureToTexture=function(E,O,B,N=0){const j=O.image.width,xe=O.image.height,ve=w.convert(B.format),Se=w.convert(B.type);de.setTexture2D(B,0),Y.pixelStorei(37440,B.flipY),Y.pixelStorei(37441,B.premultiplyAlpha),Y.pixelStorei(3317,B.unpackAlignment),O.isDataTexture?Y.texSubImage2D(3553,N,E.x,E.y,j,xe,ve,Se,O.image.data):O.isCompressedTexture?Y.compressedTexSubImage2D(3553,N,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,ve,O.mipmaps[0].data):Y.texSubImage2D(3553,N,E.x,E.y,ve,Se,O.image),N===0&&B.generateMipmaps&&Y.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(E,O,B,N,j=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=E.max.x-E.min.x+1,ve=E.max.y-E.min.y+1,Se=E.max.z-E.min.z+1,Me=w.convert(N.format),Fe=w.convert(N.type);let Ae;if(N.isData3DTexture)de.setTexture3D(N,0),Ae=32879;else if(N.isDataArrayTexture)de.setTexture2DArray(N,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,N.flipY),Y.pixelStorei(37441,N.premultiplyAlpha),Y.pixelStorei(3317,N.unpackAlignment);const Le=Y.getParameter(3314),Ge=Y.getParameter(32878),Wn=Y.getParameter(3316),gi=Y.getParameter(3315),_i=Y.getParameter(32877),tn=B.isCompressedTexture?B.mipmaps[0]:B.image;Y.pixelStorei(3314,tn.width),Y.pixelStorei(32878,tn.height),Y.pixelStorei(3316,E.min.x),Y.pixelStorei(3315,E.min.y),Y.pixelStorei(32877,E.min.z),B.isDataTexture||B.isData3DTexture?Y.texSubImage3D(Ae,j,O.x,O.y,O.z,xe,ve,Se,Me,Fe,tn.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Ae,j,O.x,O.y,O.z,xe,ve,Se,Me,tn.data)):Y.texSubImage3D(Ae,j,O.x,O.y,O.z,xe,ve,Se,Me,Fe,tn),Y.pixelStorei(3314,Le),Y.pixelStorei(32878,Ge),Y.pixelStorei(3316,Wn),Y.pixelStorei(3315,gi),Y.pixelStorei(32877,_i),j===0&&N.generateMipmaps&&Y.generateMipmap(Ae),he.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?de.setTextureCube(E,0):E.isData3DTexture?de.setTexture3D(E,0):E.isDataArrayTexture?de.setTexture2DArray(E,0):de.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){_=0,y=0,S=null,he.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Fg extends Ec{}Fg.prototype.isWebGL1Renderer=!0;class Og extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Ac extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fl=new tt,Ra=new Ja,ss=new bs,as=new F;class Ng extends qt{constructor(e=new un,t=new Ac){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(i),ss.radius+=r,e.ray.intersectsSphere(ss)===!1)return;Fl.copy(i).invert(),Ra.copy(e.ray).applyMatrix4(Fl);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,d=m;g<d;g++){const p=l.getX(g);as.fromBufferAttribute(h,p),Ol(as,p,c,i,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,d=m;g<d;g++)as.fromBufferAttribute(h,g),Ol(as,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Ol(o,e,t,n,i,r,a){const s=Ra.distanceSqToPoint(o);if(s<t){const c=new F;Ra.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:e,face:null,object:a})}}class Ts extends un{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+s,Math.PI);let l=0;const u=[],h=new F,f=new F,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const y=[],S=_/n;let M=0;_==0&&a==0?M=.5/t:_==n&&c==Math.PI&&(M=-.5/t);for(let v=0;v<=t;v++){const A=v/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+S*s),h.y=e*Math.cos(a+S*s),h.z=e*Math.sin(i+A*r)*Math.sin(a+S*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(A+M,1-S),y.push(l++)}u.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const S=u[_][y+1],M=u[_][y],v=u[_+1][y],A=u[_+1][y+1];(_!==0||a>0)&&m.push(S,M,A),(_!==n-1||c<Math.PI)&&m.push(M,v,A)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2))}static fromJSON(e){return new Ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Nl={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class zg{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Ug=new zg;class Cc{constructor(e){this.manager=e!==void 0?e:Ug,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Bg extends Cc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Nl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=Tr("img");function c(){u(),Nl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class kg extends Cc{constructor(e){super(e)}load(e,t,n,i){const r=new Wt,a=new Bg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Gg{constructor(e,t,n=0,i=1/0){this.ray=new Ja(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ia(e,this,n,t),n.sort(zl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ia(e[i],this,n,t);return n.sort(zl),n}}function zl(o,e){return o.distance-e.distance}function Ia(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,a=i.length;r<a;r++)Ia(i[r],e,t,!0)}}class Ul{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);const Bl={type:"change"},da={type:"start"},kl={type:"end"};class Vg extends pi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",St),this._domElementKeyEvents=w},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bl),n.update(),r=i.NONE},this.update=function(){const w=new F,Z=new fi().setFromUnitVectors(e.up,new F(0,1,0)),ne=Z.clone().invert(),le=new F,se=new fi,ge=2*Math.PI;return function(){const Ue=n.object.position;w.copy(Ue).sub(n.target),w.applyQuaternion(Z),s.setFromVector3(w),n.autoRotate&&r===i.NONE&&T(L()),n.enableDamping?(s.theta+=c.theta*n.dampingFactor,s.phi+=c.phi*n.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let P=n.minAzimuthAngle,ie=n.maxAzimuthAngle;return isFinite(P)&&isFinite(ie)&&(P<-Math.PI?P+=ge:P>Math.PI&&(P-=ge),ie<-Math.PI?ie+=ge:ie>Math.PI&&(ie-=ge),P<=ie?s.theta=Math.max(P,Math.min(ie,s.theta)):s.theta=s.theta>(P+ie)/2?Math.max(P,s.theta):Math.min(ie,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=l,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),w.setFromSpherical(s),w.applyQuaternion(ne),Ue.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||le.distanceToSquared(n.object.position)>a||8*(1-se.dot(n.object.quaternion))>a?(n.dispatchEvent(Bl),le.copy(n.object.position),se.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",Mt),n.domElement.removeEventListener("wheel",Dt),n.domElement.removeEventListener("pointermove",at),n.domElement.removeEventListener("pointerup",Ke),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",St)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Ul,c=new Ul;let l=1;const u=new F;let h=!1;const f=new we,m=new we,g=new we,d=new we,p=new we,_=new we,y=new we,S=new we,M=new we,v=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function T(w){c.theta-=w}function R(w){c.phi-=w}const I=function(){const w=new F;return function(ne,le){w.setFromMatrixColumn(le,0),w.multiplyScalar(-ne),u.add(w)}}(),K=function(){const w=new F;return function(ne,le){n.screenSpacePanning===!0?w.setFromMatrixColumn(le,1):(w.setFromMatrixColumn(le,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(ne),u.add(w)}}(),X=function(){const w=new F;return function(ne,le){const se=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;w.copy(ge).sub(n.target);let Te=w.length();Te*=Math.tan(n.object.fov/2*Math.PI/180),I(2*ne*Te/se.clientHeight,n.object.matrix),K(2*le*Te/se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(ne*(n.object.right-n.object.left)/n.object.zoom/se.clientWidth,n.object.matrix),K(le*(n.object.top-n.object.bottom)/n.object.zoom/se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(w){n.object.isPerspectiveCamera?l/=w:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*w)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(w){n.object.isPerspectiveCamera?l*=w:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/w)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(w){f.set(w.clientX,w.clientY)}function k(w){y.set(w.clientX,w.clientY)}function q(w){d.set(w.clientX,w.clientY)}function U(w){m.set(w.clientX,w.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;T(2*Math.PI*g.x/Z.clientHeight),R(2*Math.PI*g.y/Z.clientHeight),f.copy(m),n.update()}function H(w){S.set(w.clientX,w.clientY),M.subVectors(S,y),M.y>0?D(x()):M.y<0&&G(x()),y.copy(S),n.update()}function Q(w){p.set(w.clientX,w.clientY),_.subVectors(p,d).multiplyScalar(n.panSpeed),X(_.x,_.y),d.copy(p),n.update()}function $(w){w.deltaY<0?G(x()):w.deltaY>0&&D(x()),n.update()}function J(w){let Z=!1;switch(w.code){case n.keys.UP:X(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:X(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:X(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:X(-n.keyPanSpeed,0),Z=!0;break}Z&&(w.preventDefault(),n.update())}function ae(){if(v.length===1)f.set(v[0].pageX,v[0].pageY);else{const w=.5*(v[0].pageX+v[1].pageX),Z=.5*(v[0].pageY+v[1].pageY);f.set(w,Z)}}function fe(){if(v.length===1)d.set(v[0].pageX,v[0].pageY);else{const w=.5*(v[0].pageX+v[1].pageX),Z=.5*(v[0].pageY+v[1].pageY);d.set(w,Z)}}function Y(){const w=v[0].pageX-v[1].pageX,Z=v[0].pageY-v[1].pageY,ne=Math.sqrt(w*w+Z*Z);y.set(0,ne)}function Pe(){n.enableZoom&&Y(),n.enablePan&&fe()}function pe(){n.enableZoom&&Y(),n.enableRotate&&ae()}function _e(w){if(v.length==1)m.set(w.pageX,w.pageY);else{const ne=me(w),le=.5*(w.pageX+ne.x),se=.5*(w.pageY+ne.y);m.set(le,se)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;T(2*Math.PI*g.x/Z.clientHeight),R(2*Math.PI*g.y/Z.clientHeight),f.copy(m)}function he(w){if(v.length===1)p.set(w.pageX,w.pageY);else{const Z=me(w),ne=.5*(w.pageX+Z.x),le=.5*(w.pageY+Z.y);p.set(ne,le)}_.subVectors(p,d).multiplyScalar(n.panSpeed),X(_.x,_.y),d.copy(p)}function Re(w){const Z=me(w),ne=w.pageX-Z.x,le=w.pageY-Z.y,se=Math.sqrt(ne*ne+le*le);S.set(0,se),M.set(0,Math.pow(S.y/y.y,n.zoomSpeed)),D(M.y),y.copy(S)}function ye(w){n.enableZoom&&Re(w),n.enablePan&&he(w)}function de(w){n.enableZoom&&Re(w),n.enableRotate&&_e(w)}function Ye(w){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",at),n.domElement.addEventListener("pointerup",Ke)),ee(w),w.pointerType==="touch"?C(w):Je(w))}function at(w){n.enabled!==!1&&(w.pointerType==="touch"?b(w):Ie(w))}function Ke(w){te(w),v.length===0&&(n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",at),n.domElement.removeEventListener("pointerup",Ke)),n.dispatchEvent(kl),r=i.NONE}function Mt(w){te(w)}function Je(w){let Z;switch(w.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case vi.DOLLY:if(n.enableZoom===!1)return;k(w),r=i.DOLLY;break;case vi.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;q(w),r=i.PAN}else{if(n.enableRotate===!1)return;z(w),r=i.ROTATE}break;case vi.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;z(w),r=i.ROTATE}else{if(n.enablePan===!1)return;q(w),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(da)}function Ie(w){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;U(w);break;case i.DOLLY:if(n.enableZoom===!1)return;H(w);break;case i.PAN:if(n.enablePan===!1)return;Q(w);break}}function Dt(w){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(w.preventDefault(),n.dispatchEvent(da),$(w),n.dispatchEvent(kl))}function St(w){n.enabled===!1||n.enablePan===!1||J(w)}function C(w){switch(oe(w),v.length){case 1:switch(n.touches.ONE){case yi.ROTATE:if(n.enableRotate===!1)return;ae(),r=i.TOUCH_ROTATE;break;case yi.PAN:if(n.enablePan===!1)return;fe(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(),r=i.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(da)}function b(w){switch(oe(w),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(w),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(w),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(w),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(w),n.update();break;default:r=i.NONE}}function W(w){n.enabled!==!1&&w.preventDefault()}function ee(w){v.push(w)}function te(w){delete A[w.pointerId];for(let Z=0;Z<v.length;Z++)if(v[Z].pointerId==w.pointerId){v.splice(Z,1);return}}function oe(w){let Z=A[w.pointerId];Z===void 0&&(Z=new we,A[w.pointerId]=Z),Z.set(w.pageX,w.pageY)}function me(w){const Z=w.pointerId===v[0].pointerId?v[1]:v[0];return A[Z.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",Mt),n.domElement.addEventListener("wheel",Dt,{passive:!1}),this.update()}}function xn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Lc(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ct={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ki={duration:.5,overwrite:!1,delay:0},io,en,$e,kt=1e8,Ne=1/kt,Fa=Math.PI*2,Hg=Fa/4,Wg=0,Pc=Math.sqrt,qg=Math.cos,Xg=Math.sin,st=function(e){return typeof e=="string"},We=function(e){return typeof e=="function"},wn=function(e){return typeof e=="number"},ro=function(e){return typeof e>"u"},cn=function(e){return typeof e=="object"},xt=function(e){return e!==!1},Dc=function(){return typeof window<"u"},os=function(e){return We(e)||st(e)},Rc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ht=Array.isArray,Oa=/(?:-?\.?\d|\.)+/gi,Ic=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ui=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fc=/[+-]=-?[.\d]+/,Oc=/[^,'"\[\]\s]+/gi,Yg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,Nt,Na,so,Lt={},fs={},Nc,zc=function(e){return(fs=di(e,Lt))&&Pt},ao=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ds=function(e,t){return!t&&console.warn(e)},Uc=function(e,t){return e&&(Lt[e]=t)&&fs&&(fs[e]=t)||Lt},Er=function(){return 0},jg={suppressEvents:!0,isStart:!0},xr={suppressEvents:!0},oo={},kn=[],za={},Bc,Et={},ma={},Gl=30,us=[],lo="",co=function(e){var t=e[0],n,i;if(cn(t)||We(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=us.length;i--&&!us[i].targetTest(t););n=us[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ou(e[i],n)))||e.splice(i,1);return e},ai=function(e){return e._gsap||co(Gt(e))[0]._gsap},kc=function(e,t,n){return(n=e[t])&&We(n)?e[t]():ro(n)&&e.getAttribute&&e.getAttribute(t)||n},vt=function(e,t){return(e=e.split(",")).forEach(t)||e},Xe=function(e){return Math.round(e*1e5)/1e5||0},ot=function(e){return Math.round(e*1e7)/1e7||0},Vi=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Zg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ps=function(){var e=kn.length,t=kn.slice(0),n,i;for(za={},kn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Gc=function(e,t,n,i){kn.length&&ps(),e.render(t,n,i||en),kn.length&&ps()},Vc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Oc).length<2?t:st(e)?e.trim():e},Hc=function(e){return e},Xt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$g=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},di=function(e,t){for(var n in t)e[n]=t[n];return e},Vl=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=cn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},ms=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},vr=function(e){var t=e.parent||Be,n=e.keyframes?$g(ht(e.keyframes)):Xt;if(xt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Kg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Wc=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Es=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Tn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},oi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Jg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ua=function(e,t,n,i){return e._startAt&&(en?e._startAt.revert(xr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Qg=function o(e){return!e||e._ts&&o(e.parent)},Hl=function(e){return e._repeat?Ji(e._tTime,e=e.duration()+e._rDelay)*e:0},Ji=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},gs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},As=function(e){return e._end=ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ne)||0))},Cs=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),As(e),n._dirty||oi(n,e)),e},qc=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=gs(e.rawTime(),t),(!t._dur||Ur(0,t.totalDuration(),n)-t._tTime>Ne)&&t.render(n,!0)),oi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ne}},rn=function(e,t,n,i){return t.parent&&Tn(t),t._start=ot((wn(n)?n:n||e!==Be?Ot(e,n,t):e._time)+t._delay),t._end=ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Wc(e,t,"_first","_last",e._sort?"_start":0),Ba(t)||(e._recent=t),i||qc(e,t),e._ts<0&&Cs(e,e._tTime),e},Xc=function(e,t){return(Lt.ScrollTrigger||ao("scrollTrigger",t))&&Lt.ScrollTrigger.create(t,e)},Yc=function(e,t,n,i){if(ho(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bc!==At.frame)return kn.push(e),e._lazy=[t,i],1},e_=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Ba=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},t_=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&e_(e)&&!(!e._initted&&Ba(e))||(e._ts<0||e._dp._ts<0)&&!Ba(e))?0:1,s=e._rDelay,c=0,l,u,h;if(s&&e._repeat&&(c=Ur(0,e._tDur,t),u=Ji(c,s),e._yoyo&&u&1&&(a=1-a),u!==Ji(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||en||i||e._zTime===Ne||!t&&e._zTime){if(!e._initted&&Yc(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?Ne:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Ua(e,t,n,!0),e._onUpdate&&!n&&Vt(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Vt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Tn(e,1),n||(Vt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},n_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Qi=function(e,t,n,i){var r=e._repeat,a=ot(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ot(a*(r+1)+e._rDelay*r):a,s>0&&!i?Cs(e,e._tTime=e._tDur*s):e.parent&&As(e),n||oi(e.parent,e),e},Wl=function(e){return e instanceof _t?oi(e):Qi(e,e._dur)},i_={_start:0,endTime:Er,totalDuration:Er},Ot=function o(e,t,n){var i=e.labels,r=e._recent||i_,a=e.duration()>=kt?r.endTime(!1):e._dur,s,c,l;return st(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",s=t.indexOf("="),c==="<"||c===">"?(s>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(s-1)+t.substr(s+1)),l&&n&&(c=c/100*(ht(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+c:a+c)):t==null?a:+t},yr=function(e,t,n){var i=wn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,c=n;c&&!("immediateRender"in s);)s=c.vars.defaults||{},c=xt(c.vars.inherit)&&c.parent;a.immediateRender=xt(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new et(t[0],a,t[r+1])},Hn=function(e,t){return e||e===0?t(e):t},Ur=function(e,t,n){return n<e?e:n>t?t:n},ut=function(e,t){return!st(e)||!(t=Yg.exec(e))?"":t[1]},r_=function(e,t,n){return Hn(n,function(i){return Ur(e,t,i)})},ka=[].slice,jc=function(e,t){return e&&cn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&cn(e[0]))&&!e.nodeType&&e!==Nt},s_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return st(i)&&!t||jc(i,1)?(r=n).push.apply(r,Gt(i)):n.push(i)})||n},Gt=function(e,t,n){return $e&&!t&&$e.selector?$e.selector(e):st(e)&&!n&&(Na||!er())?ka.call((t||so).querySelectorAll(e),0):ht(e)?s_(e,n):jc(e)?ka.call(e,0):e?[e]:[]},Ga=function(e){return e=Gt(e)[0]||ds("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Gt(t,n.querySelectorAll?n:n===e?ds("Invalid scope")||so.createElement("div"):e)}},Zc=function(e){return e.sort(function(){return .5-Math.random()})},$c=function(e){if(We(e))return e;var t=cn(e)?e:{each:e},n=li(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,c=isNaN(i)||s,l=t.axis,u=i,h=i;return st(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&c&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=a[d],_,y,S,M,v,A,L,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,kt])[1],!T){for(L=-kt;L<(L=g[T++].getBoundingClientRect().left)&&T<d;);T--}for(p=a[d]=[],_=c?Math.min(T,d)*u-.5:i%T,y=T===kt?0:c?d*h/T-.5:i/T|0,L=0,x=kt,A=0;A<d;A++)S=A%T-_,M=y-(A/T|0),p[A]=v=l?Math.abs(l==="y"?M:S):Pc(S*S+M*M),v>L&&(L=v),v<x&&(x=v);i==="random"&&Zc(p),p.max=L-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:l?l==="y"?d/T:T:Math.max(T,d/T))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=ut(t.amount||t.each)||0,n=n&&d<0?ru(n):n}return d=(p[f]-p.min)/p.max||0,ot(p.b+(n?n(d):d)*p.v)+p.u}},Va=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wn(n)?0:ut(n))}},Kc=function(e,t){var n=ht(e),i,r;return!n&&cn(e)&&(i=n=e.radius||kt,e.values?(e=Gt(e.values),(r=!wn(e[0]))&&(i*=i)):e=Va(e.increment)),Hn(t,n?We(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=kt,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-s,m=e[h].y-c,f=f*f+m*m):f=Math.abs(e[h]-s),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:a,r||u===a||wn(a)?u:u+ut(a)}:Va(e))},Jc=function(e,t,n,i){return Hn(ht(e)?!t:n===!0?!!(n=0):!i,function(){return ht(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},a_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},o_=function(e,t){return function(n){return e(parseFloat(n))+(t||ut(n))}},l_=function(e,t,n){return eu(e,t,0,1,n)},Qc=function(e,t,n){return Hn(n,function(i){return e[~~t(i)]})},c_=function o(e,t,n){var i=t-e;return ht(e)?Qc(e,o(0,e.length),t):Hn(n,function(r){return(i+(r-e)%i)%i+e})},u_=function o(e,t,n){var i=t-e,r=i*2;return ht(e)?Qc(e,o(0,e.length-1),t):Hn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Ar=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Oc:Oa),n+=e.substr(t,i-t)+Jc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},eu=function(e,t,n,i,r){var a=t-e,s=i-n;return Hn(r,function(c){return n+((c-e)/a*s||0)})},h_=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=st(e),s={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(ht(e)&&!ht(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(o(e[l-1],e[l]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=di(ht(e)?[]:{},e));if(!u){for(c in t)uo.call(s,e,c,"get",t[c]);r=function(g){return mo(g,s)||(a?e.p:e)}}}return Hn(n,r)},ql=function(e,t,n){var i=e.labels,r=kt,a,s,c;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(c=a,r=s);return c},Vt=function(e,t,n){var i=e.vars,r=i[t],a=$e,s=e._ctx,c,l,u;if(!!r)return c=i[t+"Params"],l=i.callbackScope||e,n&&kn.length&&ps(),s&&($e=s),u=c?r.apply(l,c):r.call(l),$e=a,u},gr=function(e){return Tn(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Vt(e,"onInterrupt"),e},Bi,f_=function(e){e=!e.name&&e.default||e;var t=e.name,n=We(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Er,render:mo,add:uo,kill:C_,modifier:A_,rawVars:0},a={targetTest:0,get:0,getSetter:po,aliases:{},register:0};if(er(),e!==i){if(Et[t])return;Xt(i,Xt(ms(e,r),a)),di(i.prototype,di(r,ms(e,a))),Et[i.prop=t]=i,e.targetTest&&(us.push(i),oo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Uc(t,i),e.register&&e.register(Pt,i,yt)},Oe=255,_r={aqua:[0,Oe,Oe],lime:[0,Oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Oe],navy:[0,0,128],white:[Oe,Oe,Oe],olive:[128,128,0],yellow:[Oe,Oe,0],orange:[Oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Oe,0,0],pink:[Oe,192,203],cyan:[0,Oe,Oe],transparent:[Oe,Oe,Oe,0]},ga=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Oe+.5|0},tu=function(e,t,n){var i=e?wn(e)?[e>>16,e>>8&Oe,e&Oe]:0:_r.black,r,a,s,c,l,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_r[e])i=_r[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Oe,i&Oe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Oe,e&Oe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Oa),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=ga(c+1/3,r,a),i[1]=ga(c,r,a),i[2]=ga(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Ic),n&&i.length<4&&(i[3]=1),i}else i=e.match(Oa)||_r.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Oe,a=i[1]/Oe,s=i[2]/Oe,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?c=l=0:(m=h-f,l=u>.5?m/(2-h-f):m/(h+f),c=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},nu=function(e){var t=[],n=[],i=-1;return e.split(Gn).forEach(function(r){var a=r.match(Ui)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Xl=function(e,t,n){var i="",r=(e+i).match(Gn),a=t?"hsla(":"rgba(",s=0,c,l,u,h;if(!r)return e;if(r=r.map(function(f){return(f=tu(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=nu(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Gn,"1").split(Ui),h=l.length-1;s<h;s++)i+=l[s]+(~c.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Gn),h=l.length-1;s<h;s++)i+=l[s]+r[s];return i+l[h]},Gn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _r)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),d_=/hsl[a]?\(/,iu=function(e){var t=e.join(" "),n;if(Gn.lastIndex=0,Gn.test(t))return n=d_.test(t),e[1]=Xl(e[1],n),e[0]=Xl(e[0],n,nu(e[1])),!0},Cr,At=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],c,l,u,h,f,m,g=function d(p){var _=o()-i,y=p===!0,S,M,v,A;if(_>e&&(n+=_-t),i+=_,v=i-n,S=v-a,(S>0||y)&&(A=++h.frame,f=v-h.time*1e3,h.time=v=v/1e3,a+=S+(S>=r?4:r-S),M=1),y||(c=l(d)),M)for(m=0;m<s.length;m++)s[m](v,f,A,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Nc&&(!Na&&Dc()&&(Nt=Na=window,so=Nt.document||{},Lt.gsap=Pt,(Nt.gsapVersions||(Nt.gsapVersions=[])).push(Pt.version),zc(fs||Nt.GreenSockGlobals||!Nt.gsap&&Nt||{}),u=Nt.requestAnimationFrame),c&&h.sleep(),l=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Cr=1,g(2))},sleep:function(){(u?Nt.cancelAnimationFrame:clearTimeout)(c),Cr=0,l=Er},lagSmoothing:function(p,_){e=p||1/Ne,t=Math.min(_,e,0)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,_,y){var S=_?function(M,v,A,L){p(M,v,A,L),h.remove(S)}:p;return h.remove(p),s[y?"unshift":"push"](S),er(),S},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},h}(),er=function(){return!Cr&&At.wake()},Ee={},p_=/^[\d.\-M][\d.\-,\s]/,m_=/["']/g,g_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,c,l;r<a;r++)c=n[r],s=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,s),t[i]=isNaN(l)?l.replace(m_,"").trim():+l,i=c.substr(s+1).trim();return t},__=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},x_=function(e){var t=(e+"").split("("),n=Ee[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[g_(t[1])]:__(e).split(",").map(Vc)):Ee._CE&&p_.test(e)?Ee._CE("",e):n},ru=function(e){return function(t){return 1-e(1-t)}},su=function o(e,t){for(var n=e._first,i;n;)n instanceof _t?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},li=function(e,t){return e&&(We(e)?e:Ee[e]||x_(e))||t},mi=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return vt(e,function(s){Ee[s]=Lt[s]=r,Ee[a=s.toLowerCase()]=n;for(var c in r)Ee[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ee[s+"."+c]=r[c]}),r},au=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_a=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Fa*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Xg((u-a)*r)+1},c=e==="out"?s:e==="in"?function(l){return 1-s(1-l)}:au(s);return r=Fa/r,c.config=function(l,u){return o(e,l,u)},c},xa=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:au(n);return i.config=function(r){return o(e,r)},i};vt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;mi(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ee.Linear.easeNone=Ee.none=Ee.Linear.easeIn;mi("Elastic",_a("in"),_a("out"),_a());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};mi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);mi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});mi("Circ",function(o){return-(Pc(1-o*o)-1)});mi("Sine",function(o){return o===1?1:-qg(o*Hg)+1});mi("Back",xa("in"),xa("out"),xa());Ee.SteppedEase=Ee.steps=Lt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ne;return function(s){return((i*Ur(0,a,s)|0)+r)*n}}};Ki.ease=Ee["quad.out"];vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return lo+=o+","+o+"Params,"});var ou=function(e,t){this.id=Wg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:kc,this.set=t?t.getSetter:po},tr=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qi(this,+t.duration,1,1),this.data=t.data,$e&&(this._ctx=$e,$e.data.push(this)),Cr||At.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Qi(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(er(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Cs(this,n),!r._dp||r.parent||qc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&rn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ne||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gc(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ji(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ne?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?gs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ne?0:this._rts,this.totalTime(Ur(-this._delay,this._tDur,i),!0),As(this),Jg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(er(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ne&&(this._tTime-=Ne)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&rn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gs(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=xr);var i=en;return en=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&Tn(this),en=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wl(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ot(this,n),xt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ne:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ne,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ne)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=We(n)?n:Hc,s=function(){var l=i.then;i.then=null,We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){gr(this)},o}();Xt(tr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ne,_prom:0,_ps:!1,_rts:1});var _t=function(o){Lc(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=xt(n.sortChildren),Be&&rn(n.parent||Be,xn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Xc(xn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return yr(0,arguments,this),this},t.from=function(i,r,a){return yr(1,arguments,this),this},t.fromTo=function(i,r,a,s){return yr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,vr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new et(i,r,Ot(this,a),1),this},t.call=function(i,r,a){return rn(this,et.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,c,l,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new et(i,a,Ot(this,c)),this},t.staggerFrom=function(i,r,a,s,c,l,u){return a.runBackwards=1,vr(a).immediateRender=xt(a.immediateRender),this.staggerTo(i,r,a,s,c,l,u)},t.staggerFromTo=function(i,r,a,s,c,l,u,h){return s.startAt=a,vr(s).immediateRender=xt(s.immediateRender),this.staggerTo(i,r,s,c,l,u,h)},t.render=function(i,r,a){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:ot(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,m,g,d,p,_,y,S,M,v,A,L;if(this!==Be&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(s!==this._time&&l&&(u+=this._time-s,i+=this._time-s),f=u,M=this._start,S=this._ts,_=!S,h&&(l||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=ot(u%p),u===c?(d=this._repeat,f=l):(d=~~(u/p),d&&d===u/p&&(f=l,d--),f>l&&(f=l)),v=Ji(this._tTime,p),!s&&this._tTime&&v!==d&&(v=d),A&&d&1&&(f=l-f,L=1),d!==v&&!this._lock){var x=A&&v&1,T=x===(A&&d&1);if(d<v&&(x=!x),s=x?0:l,this._lock=1,this.render(s||(L?0:ot(d*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&Vt(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,T&&(this._lock=2,s=x?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;su(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=n_(this,ot(s),ot(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&(Vt(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-Ne);break}}m=g}else{a=a||en,m=this._last;for(var R=i<0?i:f;m;){if(g=m._prev,(m._act||R<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(R-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(R-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=R?-Ne:Ne);break}}m=g}}if(y&&!r&&(this.pause(),y.render(f>=s?0:-Ne)._zTime=f>=s?1:-1,this._ts))return this._start=M,As(this),this.render(i,r,a);this._onUpdate&&!r&&Vt(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Tn(this,1),!r&&!(i<0&&!s)&&(u||s||!c)&&(Vt(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(wn(r)||(r=Ot(this,r,i)),!(i instanceof tr)){if(ht(i))return i.forEach(function(s){return a.add(s,r)}),this;if(st(i))return this.addLabel(i,r);if(We(i))i=et.delayedCall(0,i);else return this}return this!==i?rn(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-kt);for(var c=[],l=this._first;l;)l._start>=s&&(l instanceof et?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return st(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(Es(this,i),i===this._recent&&(this._recent=this._last),oi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ot(At.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Ot(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=et.delayedCall(0,r||Er,a);return s.data="isPause",this._hasPause=1,rn(this,s,Ot(this,i))},t.removePause=function(i){var r=this._first;for(i=Ot(this,i);r;)r._start===i&&r.data==="isPause"&&Tn(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),c=s.length;c--;)Nn!==s[c]&&s[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Gt(i),c=this._first,l=wn(r),u;c;)c instanceof et?Zg(c._targets,s)&&(l?(!Nn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(s,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=Ot(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,m,g=et.to(a,Xt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||Ne,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&Qi(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Xt({startAt:{time:Ot(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ql(this,Ot(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ql(this,Ot(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ne)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,c=this.labels,l;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return oi(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return o.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),oi(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,c=kt,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>c&&a._sort&&s._ts&&!a._lock?(a._lock=1,rn(a,s,u-s._delay,1)._lock=0):c=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),s._end>r&&s._ts&&(r=s._end),s=l;Qi(a,a===Be&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Be._ts&&(Gc(Be,gs(i,Be)),Bc=At.frame),At.frame>=Gl){Gl+=Ct.autoSleep||120;var r=Be._first;if((!r||!r._ts)&&Ct.autoSleep&&At._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||At.sleep()}}},e}(tr);Xt(_t.prototype,{_lock:0,_hasPause:0,_forcing:0});var v_=function(e,t,n,i,r,a,s){var c=new yt(this._pt,e,t,0,1,du,null,r),l=0,u=0,h,f,m,g,d,p,_,y;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ar(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),f=n.match(pa)||[];h=pa.exec(i);)g=h[0],d=i.substring(l,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Vi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=pa.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=s,(Fc.test(i)||_)&&(c.e=0),this._pt=c,c},uo=function(e,t,n,i,r,a,s,c,l,u){We(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:We(h)?l?e[t.indexOf("set")||!We(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,m=We(h)?l?w_:hu:fo,g;if(st(i)&&(~i.indexOf("random(")&&(i=Ar(i)),i.charAt(1)==="="&&(g=Vi(f,i)+(ut(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ha)return!isNaN(f*i)&&i!==""?(g=new yt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?E_:fu,0,m),l&&(g.fp=l),s&&g.modifier(s,this,e),this._pt=g):(!h&&!(t in e)&&ao(t,i),v_.call(this,e,t,f,i,m,c||Ct.stringFilter,l))},y_=function(e,t,n,i,r){if(We(e)&&(e=Mr(e,r,t,n,i)),!cn(e)||e.style&&e.nodeType||ht(e)||Rc(e))return st(e)?Mr(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=Mr(e[s],r,t,n,i);return a},lu=function(e,t,n,i,r,a){var s,c,l,u;if(Et[e]&&(s=new Et[e]).init(r,s.rawVars?t[e]:y_(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new yt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Bi))for(l=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)l[s._props[u]]=c;return s},Nn,Ha,ho=function o(e,t){var n=e.vars,i=n.ease,r=n.startAt,a=n.immediateRender,s=n.lazy,c=n.onUpdate,l=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,f=n.yoyoEase,m=n.keyframes,g=n.autoRevert,d=e._dur,p=e._startAt,_=e._targets,y=e.parent,S=y&&y.data==="nested"?y.parent._targets:_,M=e._overwrite==="auto"&&!io,v=e.timeline,A,L,x,T,R,I,K,X,D,G,z,k,q;if(v&&(!m||!i)&&(i="none"),e._ease=li(i,Ki.ease),e._yEase=f?ru(li(f===!0?i:f,Ki.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!n.runBackwards,!v||m&&!n.stagger){if(X=_[0]?ai(_[0]).harness:0,k=X&&n[X.prop],A=ms(n,oo),p&&(p.revert(h&&d?xr:jg),p._lazy=0),r){if(Tn(e._startAt=et.set(_,Xt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:xt(s),startAt:null,delay:0,onUpdate:c,onUpdateParams:l,callbackScope:u,stagger:0},r))),t<0&&(en||!a&&!g)&&e._startAt.revert(xr),a&&d&&t<=0){t&&(e._zTime=t);return}}else if(h&&d&&!p){if(t&&(a=!1),x=Xt({overwrite:!1,data:"isFromStart",lazy:a&&xt(s),immediateRender:a,stagger:0,parent:y},A),k&&(x[X.prop]=k),Tn(e._startAt=et.set(_,x)),t<0&&(en?e._startAt.revert(xr):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,Ne);else if(!t)return}for(e._pt=e._ptCache=0,s=d&&xt(s)||s&&!d,L=0;L<_.length;L++){if(R=_[L],K=R._gsap||co(_)[L]._gsap,e._ptLookup[L]=G={},za[K.id]&&kn.length&&ps(),z=S===_?L:S.indexOf(R),X&&(D=new X).init(R,k||A,e,z,S)!==!1&&(e._pt=T=new yt(e._pt,R,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(U){G[U]=T}),D.priority&&(I=1)),!X||k)for(x in A)Et[x]&&(D=lu(x,A,e,z,R,S))?D.priority&&(I=1):G[x]=T=uo.call(e,R,x,"get",A[x],z,S,0,n.stringFilter);e._op&&e._op[L]&&e.kill(R,e._op[L]),M&&e._pt&&(Nn=e,Be.killTweensOf(R,G,e.globalTime(t)),q=!e.parent,Nn=0),e._pt&&s&&(za[K.id]=1)}I&&pu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,m&&t<=0&&v.render(kt,!0,!0)},M_=function(e,t,n,i,r,a,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(l=h[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Ha=1,e.vars[t]="+=0",ho(e,s),Ha=0,1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(i||i===0)&&!r?i:l.s+(i||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Xe(n)+ut(u.e)),u.b&&(u.b=l.s+ut(u.b))},S_=function(e,t){var n=e[0]?ai(e[0]).harness:0,i=n&&n.aliases,r,a,s,c;if(!i)return t;r=di({},t);for(a in i)if(a in r)for(c=i[a].split(","),s=c.length;s--;)r[c[s]]=r[a];return r},b_=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(ht(t))s=n[e]||(n[e]=[]),t.forEach(function(c,l){return s.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},Mr=function(e,t,n,i,r){return We(e)?e.call(t,n,i,r):st(e)&&~e.indexOf("random(")?Ar(e):e},cu=lo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",uu={};vt(cu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return uu[o]=1});var et=function(o){Lc(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:vr(i))||this;var c=s.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,m=c.overwrite,g=c.keyframes,d=c.defaults,p=c.scrollTrigger,_=c.yoyoEase,y=i.parent||Be,S=(ht(n)||Rc(n)?wn(n[0]):"length"in i)?[n]:Gt(n),M,v,A,L,x,T,R,I;if(s._targets=S.length?co(S):ds("GSAP target "+n+" not found. https://greensock.com",!Ct.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||os(l)||os(u)){if(i=s.vars,M=s.timeline=new _t({data:"nested",defaults:d||{}}),M.kill(),M.parent=M._dp=xn(s),M._start=0,f||os(l)||os(u)){if(L=S.length,R=f&&$c(f),cn(f))for(x in f)~cu.indexOf(x)&&(I||(I={}),I[x]=f[x]);for(v=0;v<L;v++)A=ms(i,uu),A.stagger=0,_&&(A.yoyoEase=_),I&&di(A,I),T=S[v],A.duration=+Mr(l,xn(s),v,T,S),A.delay=(+Mr(u,xn(s),v,T,S)||0)-s._delay,!f&&L===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),M.to(T,A,R?R(v,T,S):0),M._ease=Ee.none;M.duration()?l=u=0:s.timeline=0}else if(g){vr(Xt(M.vars.defaults,{ease:"none"})),M._ease=li(g.ease||i.ease||"none");var K=0,X,D,G;if(ht(g))g.forEach(function(z){return M.to(S,z,">")}),M.duration();else{A={};for(x in g)x==="ease"||x==="easeEach"||b_(x,g[x],A,g.easeEach);for(x in A)for(X=A[x].sort(function(z,k){return z.t-k.t}),K=0,v=0;v<X.length;v++)D=X[v],G={ease:D.e,duration:(D.t-(v?X[v-1].t:0))/100*l},G[x]=D.v,M.to(S,G,K),K+=G.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||s.duration(l=M.duration())}else s.timeline=0;return m===!0&&!io&&(Nn=xn(s),Be.killTweensOf(S),Nn=0),rn(y,xn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!l&&!g&&s._start===ot(y._time)&&xt(h)&&Qg(xn(s))&&y.data!=="nested")&&(s._tTime=-Ne,s.render(Math.max(0,-u))),p&&Xc(xn(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Ne&&!u?c:i<Ne?0:i,f,m,g,d,p,_,y,S,M;if(!l)t_(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,S=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=ot(h%d),h===c?(g=this._repeat,f=l):(g=~~(h/d),g&&g===h/d&&(f=l,g--),f>l&&(f=l)),_=this._yoyo&&g&1,_&&(M=this._yEase,f=l-f),p=Ji(this._tTime,d),f===s&&!a&&this._initted)return this._tTime=h,this;g!==p&&(S&&this._yEase&&su(S,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(ot(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Yc(this,u?i:f,a,r))return this._tTime=0,this;if(s!==this._time)return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(f/l),this._from&&(this.ratio=y=1-y),f&&!s&&!r&&(Vt(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;S&&S.render(i<0?i:!f&&_?-Ne:S._dur*S._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ua(this,i,r,a),Vt(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Vt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ua(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Tn(this,1),!r&&!(u&&!s)&&(h||s)&&(Vt(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},t.resetTo=function(i,r,a,s){Cr||At.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||ho(this,c),l=this._ease(c/this._dur),M_(this,i,r,a,s,l,c)?this.resetTo(i,r,a,s):(Cs(this,0),this.parent||Wc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?gr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Nn&&Nn.vars.overwrite!==!0)._first||gr(this),this.parent&&a!==this.timeline.totalDuration()&&Qi(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,c=i?Gt(i):s,l=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&Kg(s,c))return r==="all"&&(this._pt=0),gr(this);for(h=this._op=this._op||[],r!=="all"&&(st(r)&&(d={},vt(r,function(y){return d[y]=1}),r=d),r=S_(s,r)),_=s.length;_--;)if(~c.indexOf(s[_])){f=l[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Es(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&gr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return yr(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return yr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Be.killTweensOf(i,r,a)},e}(tr);Xt(et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vt("staggerTo,staggerFrom,staggerFromTo",function(o){et[o]=function(){var e=new _t,t=ka.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var fo=function(e,t,n){return e[t]=n},hu=function(e,t,n){return e[t](n)},w_=function(e,t,n,i){return e[t](i.fp,n)},T_=function(e,t,n){return e.setAttribute(t,n)},po=function(e,t){return We(e[t])?hu:ro(e[t])&&e.setAttribute?T_:fo},fu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},E_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},du=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},mo=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},A_=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},C_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Es(this,t,"_pt"):t.dep||(n=1),t=i;return!n},L_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},pu=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},yt=function(){function o(t,n,i,r,a,s,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||fu,this.d=c||this,this.set=l||fo,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=L_,this.m=n,this.mt=r,this.tween=i},o}();vt(lo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return oo[o]=1});Lt.TweenMax=Lt.TweenLite=et;Lt.TimelineLite=Lt.TimelineMax=_t;Be=new _t({sortChildren:!1,defaults:Ki,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ct.stringFilter=iu;var nr=[],hs={},P_=[],Yl=0,va=function(e){return(hs[e]||P_).map(function(t){return t()})},Wa=function(){var e=Date.now(),t=[];e-Yl>2&&(va("matchMediaInit"),nr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,c,l;for(s in i)a=Nt.matchMedia(i[s]).matches,a&&(c=1),a!==r[s]&&(r[s]=a,l=1);l&&(n.revert(),c&&t.push(n))}),va("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Yl=e,va("matchMedia"))},mu=function(){function o(t,n){this.selector=n&&Ga(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){We(n)&&(r=i,i=n,n=We);var a=this,s=function(){var l=$e,u=a.selector,h;return l&&l.data.push(a),r&&(a.selector=Ga(r)),$e=a,h=i.apply(a,arguments),We(h)&&a._r.push(h),$e=l,a.selector=u,a.isReverted=!1,h};return a.last=s,n===We?s(a):n?a[n]=s:s},e.ignore=function(n){var i=$e;$e=null,n(this),$e=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof et&&i._targets[0]!==i.vars.onComplete&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(this.getTweens().map(function(s){return{g:s.globalTime(0),t:s}}).sort(function(s,c){return c.g-s.g||-1}).forEach(function(s){return s.t.revert(n)}),this.data.forEach(function(s){return!(s instanceof tr)&&s.revert&&s.revert(n)}),this._r.forEach(function(s){return s(n,r)}),this.isReverted=!0):this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i){var a=nr.indexOf(this);~a&&nr.splice(a,1)}},e.revert=function(n){this.kill(n||{})},o}(),D_=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){cn(n)||(n={matches:n});var a=new mu(0,r||this.scope),s=a.conditions={},c,l,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=Nt.matchMedia(n[l]),c&&(nr.indexOf(a)<0&&nr.push(a),(s[l]=c.matches)&&(u=1),c.addListener?c.addListener(Wa):c.addEventListener("change",Wa)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),_s={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return f_(i)})},timeline:function(e){return new _t(e)},getTweensOf:function(e,t){return Be.getTweensOf(e,t)},getProperty:function(e,t,n,i){st(e)&&(e=Gt(e)[0]);var r=ai(e||{}).get,a=n?Hc:Vc;return n==="native"&&(n=""),e&&(t?a((Et[t]&&Et[t].get||r)(e,t,n,i)):function(s,c,l){return a((Et[s]&&Et[s].get||r)(e,s,c,l))})},quickSetter:function(e,t,n){if(e=Gt(e),e.length>1){var i=e.map(function(u){return Pt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Et[t],s=ai(e),c=s.harness&&(s.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;Bi._pt=0,h.init(e,n?u+n:u,Bi,0,[e]),h.render(1,h),Bi._pt&&mo(1,Bi)}:s.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=Pt.to(e,di((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,u){return r.resetTo(t,c,l,u)};return a.tween=r,a},isTweening:function(e){return Be.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=li(e.ease,Ki.ease)),Vl(Ki,e||{})},config:function(e){return Vl(Ct,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Et[s]&&!Lt[s]&&ds(t+" effect requires "+s+" plugin.")}),ma[t]=function(s,c,l){return n(Gt(s),Xt(c||{},r),l)},a&&(_t.prototype[t]=function(s,c,l){return this.add(ma[t](s,cn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ee[e]=li(t)},parseEase:function(e,t){return arguments.length?li(e,t):Ee},getById:function(e){return Be.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _t(e),i,r;for(n.smoothChildTiming=xt(e.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,i=Be._first;i;)r=i._next,(t||!(!i._dur&&i instanceof et&&i.vars.onComplete===i._targets[0]))&&rn(n,i,i._start-i._delay),i=r;return rn(Be,n,0),n},context:function(e,t){return e?new mu(e,t):$e},matchMedia:function(e){return new D_(e)},matchMediaRefresh:function(){return nr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Wa()},addEventListener:function(e,t){var n=hs[e]||(hs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=hs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:c_,wrapYoyo:u_,distribute:$c,random:Jc,snap:Kc,normalize:l_,getUnit:ut,clamp:r_,splitColor:tu,toArray:Gt,selector:Ga,mapRange:eu,pipe:a_,unitize:o_,interpolate:h_,shuffle:Zc},install:zc,effects:ma,ticker:At,updateRoot:_t.updateRoot,plugins:Et,globalTimeline:Be,core:{PropTween:yt,globals:Uc,Tween:et,Timeline:_t,Animation:tr,getCache:ai,_removeLinkedListItem:Es,reverting:function(){return en},context:function(e){return e&&$e&&($e.data.push(e),e._ctx=$e),$e},suppressOverwrites:function(e){return io=e}}};vt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return _s[o]=et[o]});At.add(_t.updateRoot);Bi=_s.to({},{duration:0});var R_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},I_=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=R_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},ya=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var c,l;if(st(r)&&(c={},vt(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}I_(s,r)}}}},Pt=_s.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ya("roundProps",Va),ya("modifiers"),ya("snap",Kc))||_s;et.version=_t.version=Pt.version="3.11.0";Nc=1;Dc()&&er();Ee.Power0;Ee.Power1;Ee.Power2;Ee.Power3;Ee.Power4;Ee.Linear;Ee.Quad;Ee.Cubic;Ee.Quart;Ee.Quint;Ee.Strong;Ee.Elastic;Ee.Back;Ee.SteppedEase;Ee.Bounce;Ee.Sine;Ee.Expo;Ee.Circ;/*!
 * CSSPlugin 3.11.0
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jl,zn,Hi,go,ii,Zl,_o,F_=function(){return typeof window<"u"},En={},Jn=180/Math.PI,Wi=Math.PI/180,Oi=Math.atan2,$l=1e8,xo=/([A-Z])/g,O_=/(left|right|width|margin|padding|x)/i,N_=/[\s,\(]\S/,Mn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qa=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},z_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},U_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},B_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},gu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_u=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},k_=function(e,t,n){return e.style[t]=n},G_=function(e,t,n){return e.style.setProperty(t,n)},V_=function(e,t,n){return e._gsap[t]=n},H_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},W_=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},q_=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},He="transform",on=He+"Origin",X_=function(e){var t=this,n=this.target,i=n.style;if(e in En){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Mn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return t.tfm[r]=vn(n,r)}):this.tfm[e]=n._gsap.x?n._gsap[e]:vn(n,e)),n._gsap.svg&&(this.svg=n.getAttribute(e)||""),this.props.indexOf(He)>=0)return;e=He}i&&this.props.push(e,i[e])},xu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Y_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=2)e[r+1]?n[e[r]]=e[r+1]:n.removeProperty(e[r].replace(xo,"-$1").toLowerCase());if(this.tfm){i.svg&&t.setAttribute("transform",this.svg||"");for(a in this.tfm)i[a]=this.tfm[a];r=_o(),r&&!r.isStart&&!n[He]&&(xu(n),i.uncache=1)}},vu=function(e,t){var n={target:e,props:[],revert:Y_,save:X_};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},yu,Xa=function(e,t){var n=zn.createElementNS?zn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zn.createElement(e);return n.style?n:zn.createElement(e)},ln=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(xo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,ir(t)||t,1)||""},Kl="O,Moz,ms,Ms,Webkit".split(","),ir=function(e,t,n){var i=t||ii,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Kl[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Kl[a]:"")+e},Ya=function(){F_()&&window.document&&(jl=window,zn=jl.document,Hi=zn.documentElement,ii=Xa("div")||{style:{}},Xa("div"),He=ir(He),on=He+"Origin",ii.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yu=!!ir("perspective"),_o=Pt.core.reverting,go=1)},Ma=function o(e){var t=Xa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Hi.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Hi.removeChild(t),this.style.cssText=r,a},Jl=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Mu=function(e){var t;try{t=e.getBBox()}catch{t=Ma.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ma||(t=Ma.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Jl(e,["x","cx","x1"])||0,y:+Jl(e,["y","cy","y1"])||0,width:0,height:0}:t},Su=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mu(e))},Lr=function(e,t){if(t){var n=e.style;t in En&&t!==on&&(t=He),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(xo,"-$1").toLowerCase())):n.removeAttribute(t)}},Un=function(e,t,n,i,r,a){var s=new yt(e._pt,t,n,0,1,a?_u:gu);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Ql={deg:1,rad:1,turn:1},j_={grid:1,flex:1},Vn=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ii.style,c=O_.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===a||!r||Ql[i]||Ql[a]?r:(a!=="px"&&!f&&(r=o(e,t,n,"px")),_=e.getCTM&&Su(e),(m||a==="%")&&(En[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[c?"width":"height"]:e[u],Xe(m?r/g*h:r/100*g)):(s[c?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===zn||!d.appendChild)&&(d=zn.body),p=d._gsap,p&&m&&p.width&&c&&p.time===At.time&&!p.uncache?Xe(r/p.width*h):((m||a==="%")&&!j_[ln(d,"display")]&&(s.position=ln(e,"position")),d===e&&(s.position="static"),d.appendChild(ii),g=ii[u],d.removeChild(ii),s.position="absolute",c&&m&&(p=ai(d),p.time=At.time,p.width=d[u]),Xe(f?g*r/h:g&&r?h/g*r:0))))},vn=function(e,t,n,i){var r;return go||Ya(),t in Mn&&t!=="transform"&&(t=Mn[t],~t.indexOf(",")&&(t=t.split(",")[0])),En[t]&&t!=="transform"?(r=Dr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:vs(ln(e,on))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=xs[t]&&xs[t](e,t,n)||ln(e,t)||kc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Vn(e,t,r,n)+n:r},Z_=function(e,t,n,i){if(!n||n==="none"){var r=ir(t,e,1),a=r&&ln(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=ln(e,"borderTopColor"))}var s=new yt(this._pt,e.style,t,0,1,du),c=0,l=0,u,h,f,m,g,d,p,_,y,S,M,v;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ln(e,t)||i,e.style[t]=n),u=[n,i],iu(u),n=u[0],i=u[1],f=n.match(Ui)||[],v=i.match(Ui)||[],v.length){for(;h=Ui.exec(i);)p=h[0],y=i.substring(c,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(d=f[l++]||"")&&(m=parseFloat(d)||0,M=d.substr((m+"").length),p.charAt(1)==="="&&(p=Vi(m,p)+M),_=parseFloat(p),S=p.substr((_+"").length),c=Ui.lastIndex-S.length,S||(S=S||Ct.units[t]||M,c===i.length&&(i+=S,s.e+=S)),M!==S&&(m=Vn(e,t,d,S)||0),s._pt={_next:s._pt,p:y||l===1?y:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=c<i.length?i.substring(c,i.length):""}else s.r=t==="display"&&i==="none"?_u:gu;return Fc.test(i)&&(s.e=0),this._pt=s,s},ec={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ec[n]||n,t[1]=ec[i]||i,t.join(" ")},K_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)s=r[l],En[s]&&(c=1,s=s==="transformOrigin"?on:He),Lr(n,s);c&&(Lr(n,He),a&&(a.svg&&n.removeAttribute("transform"),Dr(n,1),a.uncache=1,xu(i)))}},xs={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new yt(e._pt,t,n,0,0,K_);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Pr=[1,0,0,1,0,0],bu={},wu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},tc=function(e){var t=ln(e,He);return wu(t)?Pr:t.substr(7).match(Ic).map(Xe)},vo=function(e,t){var n=e._gsap||ai(e),i=e.style,r=tc(e),a,s,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Pr:r):(r===Pr&&!e.offsetParent&&e!==Hi&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,s=e.nextElementSibling,Hi.appendChild(e)),r=tc(e),c?i.display=c:Lr(e,"display"),l&&(s?a.insertBefore(e,s):a?a.appendChild(e):Hi.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ja=function(e,t,n,i,r,a){var s=e._gsap,c=r||vo(e,!0),l=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=c[0],g=c[1],d=c[2],p=c[3],_=c[4],y=c[5],S=t.split(" "),M=parseFloat(S[0])||0,v=parseFloat(S[1])||0,A,L,x,T;n?c!==Pr&&(L=m*p-g*d)&&(x=M*(p/L)+v*(-d/L)+(d*y-p*_)/L,T=M*(-g/L)+v*(m/L)-(m*y-g*_)/L,M=x,v=T):(A=Mu(e),M=A.x+(~S[0].indexOf("%")?M/100*A.width:M),v=A.y+(~(S[1]||S[0]).indexOf("%")?v/100*A.height:v)),i||i!==!1&&s.smooth?(_=M-l,y=v-u,s.xOffset=h+(_*m+y*d)-_,s.yOffset=f+(_*g+y*p)-y):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=v,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[on]="0px 0px",a&&(Un(a,s,"xOrigin",l,M),Un(a,s,"yOrigin",u,v),Un(a,s,"xOffset",h,s.xOffset),Un(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",M+" "+v)},Dr=function(e,t){var n=e._gsap||new ou(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",c=getComputedStyle(e),l=ln(e,on)||"0",u,h,f,m,g,d,p,_,y,S,M,v,A,L,x,T,R,I,K,X,D,G,z,k,q,U,H,Q,$,J,ae,fe;return u=h=f=d=p=_=y=S=M=0,m=g=1,n.svg=!!(e.getCTM&&Su(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[He]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+c[He]),i.scale=i.rotate=i.translate="none"),L=vo(e,n.svg),n.svg&&(k=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),ja(e,k||l,!!k||n.originIsAbsolute,n.smooth!==!1,L)),v=n.xOrigin||0,A=n.yOrigin||0,L!==Pr&&(I=L[0],K=L[1],X=L[2],D=L[3],u=G=L[4],h=z=L[5],L.length===6?(m=Math.sqrt(I*I+K*K),g=Math.sqrt(D*D+X*X),d=I||K?Oi(K,I)*Jn:0,y=X||D?Oi(X,D)*Jn+d:0,y&&(g*=Math.abs(Math.cos(y*Wi))),n.svg&&(u-=v-(v*I+A*X),h-=A-(v*K+A*D))):(fe=L[6],J=L[7],H=L[8],Q=L[9],$=L[10],ae=L[11],u=L[12],h=L[13],f=L[14],x=Oi(fe,$),p=x*Jn,x&&(T=Math.cos(-x),R=Math.sin(-x),k=G*T+H*R,q=z*T+Q*R,U=fe*T+$*R,H=G*-R+H*T,Q=z*-R+Q*T,$=fe*-R+$*T,ae=J*-R+ae*T,G=k,z=q,fe=U),x=Oi(-X,$),_=x*Jn,x&&(T=Math.cos(-x),R=Math.sin(-x),k=I*T-H*R,q=K*T-Q*R,U=X*T-$*R,ae=D*R+ae*T,I=k,K=q,X=U),x=Oi(K,I),d=x*Jn,x&&(T=Math.cos(x),R=Math.sin(x),k=I*T+K*R,q=G*T+z*R,K=K*T-I*R,z=z*T-G*R,I=k,G=q),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=Xe(Math.sqrt(I*I+K*K+X*X)),g=Xe(Math.sqrt(z*z+fe*fe)),x=Oi(G,z),y=Math.abs(x)>2e-4?x*Jn:0,M=ae?1/(ae<0?-ae:ae):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!wu(ln(e,He)),k&&e.setAttribute("transform",k))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(m*=-1,y+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Xe(m),n.scaleY=Xe(g),n.rotation=Xe(d)+s,n.rotationX=Xe(p)+s,n.rotationY=Xe(_)+s,n.skewX=y+s,n.skewY=S+s,n.transformPerspective=M+a,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[on]=vs(l)),n.xOffset=n.yOffset=0,n.force3D=Ct.force3D,n.renderTransform=n.svg?Q_:yu?Tu:J_,n.uncache=0,n},vs=function(e){return(e=e.split(" "))[0]+" "+e[1]},Sa=function(e,t,n){var i=ut(t);return Xe(parseFloat(t)+parseFloat(Vn(e,"x",n+"px",i)))+i},J_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tu(e,t)},jn="0deg",fr="0px",Zn=") ",Tu=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,y=n.target,S=n.zOrigin,M="",v=_==="auto"&&e&&e!==1||_===!0;if(S&&(h!==jn||u!==jn)){var A=parseFloat(u)*Wi,L=Math.sin(A),x=Math.cos(A),T;A=parseFloat(h)*Wi,T=Math.cos(A),a=Sa(y,a,L*T*-S),s=Sa(y,s,-Math.sin(A)*-S),c=Sa(y,c,x*T*-S+S)}p!==fr&&(M+="perspective("+p+Zn),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(v||a!==fr||s!==fr||c!==fr)&&(M+=c!==fr||v?"translate3d("+a+", "+s+", "+c+") ":"translate("+a+", "+s+Zn),l!==jn&&(M+="rotate("+l+Zn),u!==jn&&(M+="rotateY("+u+Zn),h!==jn&&(M+="rotateX("+h+Zn),(f!==jn||m!==jn)&&(M+="skew("+f+", "+m+Zn),(g!==1||d!==1)&&(M+="scale("+g+", "+d+Zn),y.style[He]=M||"translate(0, 0)"},Q_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,y=n.forceCSS,S=parseFloat(a),M=parseFloat(s),v,A,L,x,T;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Wi,l*=Wi,v=Math.cos(c)*h,A=Math.sin(c)*h,L=Math.sin(c-l)*-f,x=Math.cos(c-l)*f,l&&(u*=Wi,T=Math.tan(l-u),T=Math.sqrt(1+T*T),L*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),v*=T,A*=T)),v=Xe(v),A=Xe(A),L=Xe(L),x=Xe(x)):(v=h,x=f,A=L=0),(S&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(S=Vn(m,"x",a,"px"),M=Vn(m,"y",s,"px")),(g||d||p||_)&&(S=Xe(S+g-(g*v+d*L)+p),M=Xe(M+d-(g*A+d*x)+_)),(i||r)&&(T=m.getBBox(),S=Xe(S+i/100*T.width),M=Xe(M+r/100*T.height)),T="matrix("+v+","+A+","+L+","+x+","+S+","+M+")",m.setAttribute("transform",T),y&&(m.style[He]=T)},e0=function(e,t,n,i,r){var a=360,s=st(r),c=parseFloat(r)*(s&&~r.indexOf("rad")?Jn:1),l=c-i,u=i+l+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*$l)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*$l)%a-~~(l/a)*a)),e._pt=f=new yt(e._pt,t,n,i,l,z_),f.e=u,f.u="deg",e._props.push(n),f},nc=function(e,t){for(var n in t)e[n]=t[n];return e},t0=function(e,t,n){var i=nc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,c,l,u,h,f,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[He]=t,s=Dr(n,1),Lr(n,He),n.setAttribute("transform",l)):(l=getComputedStyle(n)[He],a[He]=t,s=Dr(n,1),a[He]=l);for(c in En)l=i[c],u=s[c],l!==u&&r.indexOf(c)<0&&(m=ut(l),g=ut(u),h=m!==g?Vn(n,c,l,g):parseFloat(l),f=parseFloat(u),e._pt=new yt(e._pt,s,c,h,f-h,qa),e._pt.u=g||0,e._props.push(c));nc(s,i)};vt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});xs[e>1?"border"+o:o]=function(s,c,l,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return vn(s,g,l)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(c,m,h)}});var Eu={name:"css",register:Ya,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,c=n.vars.startAt,l,u,h,f,m,g,d,p,_,y,S,M,v,A,L,x;go||Ya(),this.styles=this.styles||vu(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Et[d]&&lu(d,t,n,i,e,r)))){if(m=typeof u,g=xs[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ar(u)),g)g(this,e,d,u,n)&&(L=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Gn.lastIndex=0,Gn.test(l)||(p=ut(l),_=ut(u)),_?p!==_&&(l=Vn(e,d,l,_)+_):p&&(u+=p),this.add(s,"setProperty",l,u,i,r,0,0,d),a.push(d),x.push(d,s[d]);else if(m!=="undefined"){if(c&&d in c?(l=typeof c[d]=="function"?c[d].call(n,i,e,r):c[d],st(l)&&~l.indexOf("random(")&&(l=Ar(l)),ut(l+"")||(l+=Ct.units[d]||ut(vn(e,d))||""),(l+"").charAt(1)==="="&&(l=vn(e,d))):l=vn(e,d),f=parseFloat(l),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),d in Mn&&(d==="autoAlpha"&&(f===1&&vn(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",s.visibility),Un(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Mn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),S=d in En,S){if(this.styles.save(d),M||(v=e._gsap,v.renderTransform&&!t.parseTransform||Dr(e,t.parseTransform),A=t.smoothOrigin!==!1&&v.smooth,M=this._pt=new yt(this._pt,s,He,0,1,v.renderTransform,v,0,-1),M.dep=1),d==="scale")this._pt=new yt(this._pt,v,"scaleY",v.scaleY,(y?Vi(v.scaleY,y+h):h)-v.scaleY||0,qa),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(on,s[on]),u=$_(u),v.svg?ja(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&Un(this,v,"zOrigin",v.zOrigin,_),Un(this,s,d,vs(l),vs(u)));continue}else if(d==="svgOrigin"){ja(e,u,1,A,0,this);continue}else if(d in bu){e0(this,v,d,f,y?Vi(f,y+u):u);continue}else if(d==="smoothOrigin"){Un(this,v,"smooth",v.smooth,u);continue}else if(d==="force3D"){v[d]=u;continue}else if(d==="transform"){t0(this,u,e);continue}}else d in s||(d=ir(d)||d);if(S||(h||h===0)&&(f||f===0)&&!N_.test(u)&&d in s)p=(l+"").substr((f+"").length),h||(h=0),_=ut(u)||(d in Ct.units?Ct.units[d]:p),p!==_&&(f=Vn(e,d,l,_)),this._pt=new yt(this._pt,S?v:s,d,f,(y?Vi(f,y+h):h)-f,!S&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?B_:qa),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=U_);else if(d in s)Z_.call(this,e,d,l,y?y+u:u);else if(d in e)this.add(e,d,l||e[d],y?y+u:u,i,r);else{ao(d,u);continue}S||x.push(d,s[d]),a.push(d)}}L&&pu(this)},render:function(e,t){if(t.tween._time||!_o())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vn,aliases:Mn,getSetter:function(e,t,n){var i=Mn[t];return i&&i.indexOf(",")<0&&(t=i),t in En&&t!==on&&(e._gsap.x||vn(e,"x"))?n&&Zl===n?t==="scale"?H_:V_:(Zl=n||{})&&(t==="scale"?W_:q_):e.style&&!ro(e.style[t])?k_:~t.indexOf("-")?G_:po(e,t)},core:{_removeProperty:Lr,_getMatrix:vo}};Pt.utils.checkPrefix=ir;Pt.core.getStyleSaver=vu;(function(o,e,t,n){var i=vt(o+","+e+","+t,function(r){En[r]=1});vt(e,function(r){Ct.units[r]="deg",bu[r]=1}),Mn[i[13]]=o+","+e,vt(n,function(r){var a=r.split(":");Mn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ct.units[o]="px"});Pt.registerPlugin(Eu);var Rr=Pt.registerPlugin(Eu)||Pt;Rr.core.Tween;const n0="varying vec2 vertexUV;varying vec3 vertexNormal;void main(){vertexUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",i0="uniform sampler2D globeTexture;varying vec2 vertexUV;varying vec3 vertexNormal;void main(){float intensity=1.05-dot(vertexNormal,vec3(0.0,0.0,1.0));vec3 atmosphere=vec3(0.3,0.6,1.0)*pow(intensity,1.5);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz,1.0);}",r0="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",s0="varying vec3 vertexNormal;void main(){float intensity=pow(0.65-dot(vertexNormal,vec3(0,0,1.0)),2.0);gl_FragColor=vec4(0.3,0.6,1.0,1.0)*intensity;}";const ys=document.querySelector("#canvasContainer"),rr=new Og,Sr=new Ut(75,ys.offsetWidth/ys.offsetHeight,.1,1e3),Ir=new Ec({antialias:!0,canvas:document.querySelector("canvas")});Ir.setSize(ys.offsetWidth,ys.offsetHeight);Ir.setPixelRatio(window.devicePixelRatio);const Au=new Vg(Sr,Ir.domElement);Au.maxDistance=20.5;Au.minDistance=10.5;const yo=new Jt(new Ts(5,50,50),new bn({vertexShader:n0,fragmentShader:i0,uniforms:{globeTexture:{value:new kg().load("./globe.jpg")}}}));rr.add(yo);const Cu=new Jt(new Ts(5,50,50),new bn({vertexShader:r0,fragmentShader:s0,blending:ba,side:Ht}));Cu.scale.set(1.2,1.2,1.2);rr.add(Cu);const qi=new mr;qi.add(yo);rr.add(qi);const Lu=new un,a0=new Ac({color:16777215}),Pu=[];for(let o=0;o<1e4;o++){const e=(Math.random()-.5)*2e3,t=(Math.random()-.5)*2e3,n=-(Math.random()-.5)*2e3;Pu.push(e,t,n)}Lu.setAttribute("position",new Qt(Pu,3));const Du=new Ng(Lu,a0);rr.add(Du);Sr.position.z=15;function Ls({lat:o,lng:e,country:t,population:n}){const i=new Jt(new sr(.2,.2,.8),new eo({color:"#FF10F0",opacity:.4,transparent:!0})),r=o/180*Math.PI,a=e/180*Math.PI,s=5,c=s*Math.cos(r)*Math.sin(a),l=s*Math.sin(r),u=s*Math.cos(r)*Math.cos(a);i.position.x=c,i.position.y=l,i.position.z=u,i.lookAt(0,0,0),i.geometry.applyMatrix4(new tt().makeTranslation(0,0,-.4)),qi.add(i),Rr.to(i.scale,{z:0,duration:5.5,yoyo:!0,repeat:-1,ease:"linear",delay:Math.random()}),i.country=t,i.population=n}Ls({lat:23.6345,lng:-102.5528,country:"Mexico",population:"128.9 million"});Ls({lat:-14.235,lng:-51.9253,country:"Brazil",population:"212.6 million"});Ls({lat:20.5937,lng:78.9629,country:"India",population:"1.38 Billion"});Ls({lat:-30.5595,lng:22.9375,country:"South Africa",population:"59.31 million"});yo.rotation.y=-Math.PI/2;const Za={x:void 0,y:void 0},ic=new Gg,$a=document.querySelector("#popUpEl"),o0=document.querySelector("#populationEl"),l0=document.querySelector("#populationValueEl");function Ru(){requestAnimationFrame(Ru),Ir.render(rr,Sr),qi.rotation.y+=.002,ic.setFromCamera(Za,Sr);const o=ic.intersectObjects(qi.children.filter(e=>e.geometry.type==="BoxGeometry"));qi.children.forEach(e=>{e.material.opacity=.4}),Rr.set($a,{display:"none"});for(let e=0;e<o.length;e++){const t=o[e].object;t.material.opacity=1,Rr.set($a,{display:"block"}),o0.innerHTML=t.country,l0.innerHTML=t.population}Ir.render(rr,Sr),Du.rotation.x+=3e-5}Ru();addEventListener("mousemove",o=>{Za.x=(o.clientX-innerWidth/2)/(innerWidth/2)*2-1,Za.y=-(o.clientY/innerHeight)*2+1,Rr.set($a,{x:o.clientX,y:o.clientY})});
