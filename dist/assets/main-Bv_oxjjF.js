(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var hc=1e3,ki=1001,fc=1002,bn=1003,Rp=1004,Cp=1005,Wn=1006,Pp=1007,qc=1008,Pr=1009,Lp=1010,Dp=1011,df=1012,Ip=1013,Br=1014,cl=1015,zr=1016,pf=1017,mf=1018,_f=1020,Np=35902,Up=35899,Op=1021,Fp=1022,Ma=1023,ya=1026,gf=1027,Bp=1028,vf=1029,Wo=1030,Sf=1031,xf=1033,zp=33776,kp=33777,Vp=33778,Gp=33779,Hp=35840,Wp=35841,Xp=35842,Yp=35843,qp=36196,Kp=37492,$p=37496,Zp=37488,jp=37489,Jp=37490,Qp=37491,em=37808,tm=37809,nm=37810,im=37811,rm=37812,sm=37813,am=37814,om=37815,lm=37816,cm=37817,um=37818,hm=37819,fm=37820,dm=37821,pm=36492,mm=36494,_m=36495,gm=36283,vm=36284,Sm=36285,xm=36286,Xo=2300,dc=2301,_l=2302,bu=2303,wu=2400,Au=2401,Ru=2402,Mm=3200;var di="srgb",pc="srgb-linear",Yo="linear",qo="srgb",gl=7680;var ym=35044;var As=2e3;function Em(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Tm(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Ko(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bm(){const t=Ko("canvas");return t.style.display="block",t}var Cu={},Rs=null;function Pu(...t){const e="THREE."+t.shift();Rs?Rs("log",e,...t):console.log(e,...t)}function Mf(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=Mf(t);const e="THREE."+t.shift();if(Rs)Rs("warn",e,...t);else{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ve(...t){t=Mf(t);const e="THREE."+t.shift();if(Rs)Rs("error",e,...t);else{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function mc(...t){const e=t.join(" ");e in Cu||(Cu[e]=!0,ze(...t))}function wm(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var Am={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Hr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=Math.PI/180,_c=180/Math.PI;function Na(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function at(t,e,n){return Math.max(e,Math.min(n,t))}function Rm(t,e){return(t%e+e)%e}function Sl(t,e,n){return(1-n)*t+n*e}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function An(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var bt=class yf{static{yf.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=r[s+0],h=r[s+1],f=r[s+2],g=r[s+3];if(u!==g||o!==d||l!==h||c!==f){let _=o*d+l*h+c*f+u*g;_<0&&(d=-d,h=-h,f=-f,g=-g,_=-_);let m=1-a;if(_<.9995){const p=Math.acos(_),S=Math.sin(p);m=Math.sin(m*p)/S,a=Math.sin(a*p)/S,o=o*m+d*a,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a}else{o=o*m+d*a,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a;const p=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=p,l*=p,c*=p,u*=p}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=r[s],d=r[s+1],h=r[s+2],f=r[s+3];return t[e]=a*f+c*u+o*h-l*d,t[e+1]=o*f+c*d+l*u-a*h,t[e+2]=l*f+c*h+a*d-o*u,t[e+3]=c*f-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),u=a(r/2),d=o(n/2),h=o(i/2),f=o(r/2);switch(s){case"XYZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"YXZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"ZXY":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"ZYX":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"YZX":this._x=d*c*u+l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u-d*h*f;break;case"XZY":this._x=d*c*u-l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u+d*h*f;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-o)*h,this._y=(r-l)*h,this._z=(s-i)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(r+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-l)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(o+c)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(s-i)/h,this._x=(r+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(at(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,s=-s,a=-a);let o=1-e;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class Ef{static{Ef.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xl=new W,Lu=new Wr,$e=class Tf{static{Tf.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],S=r[1],T=r[4],M=r[7],b=r[2],A=r[5],w=r[8];return s[0]=a*_+o*S+l*b,s[3]=a*m+o*T+l*A,s[6]=a*p+o*M+l*w,s[1]=c*_+u*S+d*b,s[4]=c*m+u*T+d*A,s[7]=c*p+u*M+d*w,s[2]=h*_+f*S+g*b,s[5]=h*m+f*T+g*A,s[8]=h*p+f*M+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=n*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=f*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ml.makeScale(e,n)),this}rotate(e){return this.premultiply(Ml.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ml.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ml=new $e,Du=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Iu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cm(){const t={enabled:!0,workingColorSpace:pc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Yo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[pc]:{primaries:e,whitePoint:i,transfer:Yo,toXYZ:Du,fromXYZ:Iu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:i,transfer:qo,toXYZ:Du,fromXYZ:Iu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),t}var st=Cm();function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ss(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var $r,Pm=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$r===void 0&&($r=Ko("canvas")),$r.width=t.width,$r.height=t.height;const i=$r.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=$r}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ko("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Gi(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gi(e[n]/255)*255):e[n]=Gi(e[n]);return{data:e,width:t.width,height:t.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lm=0,Kc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=Na(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(yl(i[s].image)):r.push(yl(i[s]))}else r=yl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function yl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Pm.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var Dm=0,El=new W,mi=class Lo extends Hr{constructor(e=Lo.DEFAULT_IMAGE,n=Lo.DEFAULT_MAPPING,i=ki,r=ki,s=Wn,a=qc,o=Ma,l=Pr,c=Lo.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Na(),this.name="",this.source=new Kc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=300;mi.DEFAULT_ANISOTROPY=1;var $t=class bf{static{bf.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,M=(f+1)/2,b=(p+1)/2,A=(u+h)/4,w=(d+_)/4,v=(g+m)/4;return T>M&&T>b?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=A/i,s=w/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=v/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=v/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this.w=at(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this.w=at(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Im=class extends Hr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e),this.textures=[];const i=new mi({width:t,height:e,depth:n.depth}),r=n.count;for(let s=0;s<r;s++)this.textures[s]=i.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Kc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},wi=class extends Im{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wf=class extends mi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Nm=class extends mi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zt=class gc{static{gc.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,f,g,_,m)}set(e,n,i,r,s,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=f+g*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=g+f*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;n[0]=h+_*o,n[4]=g*o-f,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=f*o-g,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;n[0]=h-_*o,n[4]=-a*d,n[8]=g+f*o,n[1]=f+g*o,n[5]=a*u,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;n[0]=l*u,n[4]=g*c-f,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=f*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=_-h*d,n[8]=g*d+f,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=f*d+g,n[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+_,n[5]=a*u,n[9]=f*d-g,n[2]=g*d-f,n[6]=o*u,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Um,e,Om)}lookAt(e,n,i){const r=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),$i.crossVectors(i,On),$i.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),$i.crossVectors(i,On)),$i.normalize(),Va.crossVectors(On,$i),r[0]=$i.x,r[4]=Va.x,r[8]=On.x,r[1]=$i.y,r[5]=Va.y,r[9]=On.y,r[2]=$i.z,r[6]=Va.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],T=i[7],M=i[11],b=i[15],A=r[0],w=r[4],v=r[8],E=r[12],L=r[1],C=r[5],N=r[9],X=r[13],z=r[2],F=r[6],G=r[10],D=r[14],Z=r[3],J=r[7],P=r[11],he=r[15];return s[0]=a*A+o*L+l*z+c*Z,s[4]=a*w+o*C+l*F+c*J,s[8]=a*v+o*N+l*G+c*P,s[12]=a*E+o*X+l*D+c*he,s[1]=u*A+d*L+h*z+f*Z,s[5]=u*w+d*C+h*F+f*J,s[9]=u*v+d*N+h*G+f*P,s[13]=u*E+d*X+h*D+f*he,s[2]=g*A+_*L+m*z+p*Z,s[6]=g*w+_*C+m*F+p*J,s[10]=g*v+_*N+m*G+p*P,s[14]=g*E+_*X+m*D+p*he,s[3]=S*A+T*L+M*z+b*Z,s[7]=S*w+T*C+M*F+b*J,s[11]=S*v+T*N+M*G+b*P,s[15]=S*E+T*X+M*D+b*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],S=l*f-c*h,T=o*f-c*d,M=o*h-l*d,b=a*f-c*u,A=a*h-l*u,w=a*d-o*u;return n*(_*S-m*T+p*M)-i*(g*S-m*b+p*A)+r*(g*T-_*b+p*w)-s*(g*M-_*A+m*w)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=n*o-i*a,T=n*l-r*a,M=n*c-s*a,b=i*l-r*o,A=i*c-s*o,w=r*c-s*l,v=u*_-d*g,E=u*m-h*g,L=u*p-f*g,C=d*m-h*_,N=d*p-f*_,X=h*p-f*m,z=S*X-T*N+M*C+b*L-A*E+w*v;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=(o*X-l*N+c*C)*F,e[1]=(r*N-i*X-s*C)*F,e[2]=(_*w-m*A+p*b)*F,e[3]=(h*A-d*w-f*b)*F,e[4]=(l*L-a*X-c*E)*F,e[5]=(n*X-r*L+s*E)*F,e[6]=(m*M-g*w-p*T)*F,e[7]=(u*w-h*M+f*T)*F,e[8]=(a*N-o*L+c*v)*F,e[9]=(i*L-n*N-s*v)*F,e[10]=(g*A-_*M+p*S)*F,e[11]=(d*M-u*A-f*S)*F,e[12]=(o*E-a*C-l*v)*F,e[13]=(n*C-i*E+r*v)*F,e[14]=(_*T-g*b-m*S)*F,e[15]=(u*b-d*T+h*S)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,m=a*d,p=o*d,S=l*c,T=l*u,M=l*d,b=i.x,A=i.y,w=i.z;return r[0]=(1-(_+p))*b,r[1]=(f+M)*b,r[2]=(g-T)*b,r[3]=0,r[4]=(f-M)*A,r[5]=(1-(h+p))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(g+T)*w,r[9]=(m-S)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),l=Zr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),li.copy(this);const c=1/a,u=1/o,d=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,n.setFromRotationMatrix(li),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=As,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===2e3)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===2001)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=As,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),f=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===2e3)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===2001)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Zr=new W,li=new Zt,Um=new W(0,0,0),Om=new W(1,1,1),$i=new W,Va=new W,On=new W,Nu=new Zt,Uu=new Wr,Ea=class Af{constructor(e=0,n=0,i=0,r=Af.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ea.DEFAULT_ORDER="XYZ";var Rf=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fm=0,Ou=new W,jr=new Wr,Di=new Zt,Ga=new W,Hs=new W,Bm=new W,zm=new Wr,Fu=new W(1,0,0),Bu=new W(0,1,0),zu=new W(0,0,1),ku={type:"added"},km={type:"removed"},Jr={type:"childadded",child:null},Tl={type:"childremoved",child:null},_i=class Do extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Do.DEFAULT_UP.clone();const e=new W,n=new Ea,i=new Wr,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new $e}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Do.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Do.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,n){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ga.copy(e):Ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Hs,Ga,this.up):Di.lookAt(Ga,Hs,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(Di),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ku),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(km),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ku),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,Bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,zm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};_i.DEFAULT_UP=new W(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ha=class extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vm={type:"move"},bl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,n),m=this._getHandJoint(l,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position);l.inputState.pinching&&d>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=.02-.005&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vm)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ha;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function wl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,st.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=st.workingColorSpace){return this.r=t,this.g=e,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=st.workingColorSpace){if(t=Rm(t,1),e=at(e,0,1),n=at(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=wl(s,r,t+1/3),this.g=wl(s,r,t),this.b=wl(s,r,t-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(t,e=di){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ze("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);ze("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=di){const n=Cf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ze("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return st.workingToColorSpace(fn.copy(this),t),Math.round(at(fn.r*255,0,255))*65536+Math.round(at(fn.g*255,0,255))*256+Math.round(at(fn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=st.workingColorSpace){st.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,r=fn.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=st.workingColorSpace){return st.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=di){st.workingToColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,i=fn.b;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(Wa);const n=Sl(Zi.h,Wa.h,e),i=Sl(Zi.s,Wa.s,e),r=Sl(Zi.l,Wa.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new ht;ht.NAMES=Cf;var Gm=class extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ea,this.environmentIntensity=1,this.environmentRotation=new Ea,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ci=new W,Ii=new W,Al=new W,Ni=new W,Qr=new W,es=new W,Vu=new W,Rl=new W,Cl=new W,Pl=new W,Ll=new $t,Dl=new $t,Il=new $t,Ws=class fs{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ci.subVectors(e,n),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ci.subVectors(r,n),Ii.subVectors(i,n),Al.subVectors(e,n);const a=ci.dot(ci),o=ci.dot(Ii),l=ci.dot(Al),c=Ii.dot(Ii),u=Ii.dot(Al),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ll.setScalar(0),Dl.setScalar(0),Il.setScalar(0),Ll.fromBufferAttribute(e,n),Dl.fromBufferAttribute(e,i),Il.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ll,s.x),a.addScaledVector(Dl,s.y),a.addScaledVector(Il,s.z),a}static isFrontFacing(e,n,i,r){return ci.subVectors(i,n),Ii.subVectors(e,n),ci.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ci.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fs.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fs.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return fs.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return fs.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fs.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),es.subVectors(s,i),Rl.subVectors(e,i);const l=Qr.dot(Rl),c=es.dot(Rl);if(l<=0&&c<=0)return n.copy(i);Cl.subVectors(e,r);const u=Qr.dot(Cl),d=es.dot(Cl);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Qr,a);Pl.subVectors(e,s);const f=Qr.dot(Pl),g=es.dot(Pl);if(g>=0&&f<=g)return n.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(es,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Vu.subVectors(s,r),o=(d-u)/(d-u+(f-g)),n.copy(r).addScaledVector(Vu,o);const p=1/(m+_+h);return a=_*p,o=h*p,n.copy(i).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ua=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,ui):ui.fromBufferAttribute(r,s),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(t.matrixWorld),this.union(Xa)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),Ya.subVectors(this.max,Xs),ts.subVectors(t.a,Xs),ns.subVectors(t.b,Xs),is.subVectors(t.c,Xs),ji.subVectors(ns,ts),Ji.subVectors(is,ns),gr.subVectors(ts,is);let e=[0,-ji.z,ji.y,0,-Ji.z,Ji.y,0,-gr.z,gr.y,ji.z,0,-ji.x,Ji.z,0,-Ji.x,gr.z,0,-gr.x,-ji.y,ji.x,0,-Ji.y,Ji.x,0,-gr.y,gr.x,0];return!Nl(e,ts,ns,is,Ya)||(e=[1,0,0,0,1,0,0,0,1],!Nl(e,ts,ns,is,Ya))?!1:(qa.crossVectors(ji,Ji),e=[qa.x,qa.y,qa.z],Nl(e,ts,ns,is,Ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ui=[new W,new W,new W,new W,new W,new W,new W,new W],ui=new W,Xa=new Ua,ts=new W,ns=new W,is=new W,ji=new W,Ji=new W,gr=new W,Xs=new W,Ya=new W,qa=new W,vr=new W;function Nl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){vr.fromArray(t,s);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Gt=new W,Ka=new bt,Hm=0,ri=class extends Hr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ym,this.updateRanges=[],this.gpuType=cl,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ka.fromBufferAttribute(this,e),Ka.applyMatrix3(t),this.setXY(e,Ka.x,Ka.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Gt.fromBufferAttribute(this,e),Gt.applyMatrix3(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Gt.fromBufferAttribute(this,e),Gt.applyMatrix4(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Gt.fromBufferAttribute(this,e),Gt.applyNormalMatrix(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Gt.fromBufferAttribute(this,e),Gt.transformDirection(t),this.setXYZ(e,Gt.x,Gt.y,Gt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),i=An(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},Pf=class extends ri{constructor(t,e,n){super(new Uint16Array(t),e,n)}},Lf=class extends ri{constructor(t,e,n){super(new Uint32Array(t),e,n)}},si=class extends ri{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wm=new Ua,Ys=new W,Ul=new W,Oa=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(Ul)),this.expandByPoint(Ys.copy(t.center).sub(Ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xm=0,jn=new Zt,Ol=new _i,rs=new W,Fn=new Ua,qs=new Ua,tn=new W,pi=class Df extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Em(e)?Lf:Pf)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new si(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Fn.min,qs.min),Fn.expandByPoint(tn),tn.addVectors(Fn.max,qs.max),Fn.expandByPoint(tn)):(Fn.expandByPoint(qs.min),Fn.expandByPoint(qs.max))}Fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(tn));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)tn.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),tn.add(rs)),r=Math.max(r,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new W,l[v]=new W;const c=new W,u=new W,d=new W,h=new bt,f=new bt,g=new bt,_=new W,m=new W;function p(v,E,L){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,L),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,L),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),o[v].add(_),o[E].add(_),o[L].add(_),l[v].add(m),l[E].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,E=S.length;v<E;++v){const L=S[v],C=L.start,N=L.count;for(let X=C,z=C+N;X<z;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const T=new W,M=new W,b=new W,A=new W;function w(v){b.fromBufferAttribute(r,v),A.copy(b);const E=o[v];T.copy(E),T.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(A,E);const L=M.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,E=S.length;v<E;++v){const L=S[v],C=L.start,N=L.count;for(let X=C,z=C+N;X<z;X+=3)w(e.getX(X+0)),w(e.getX(X+1)),w(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=n.count;h<f;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new ri(h,u,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Df,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ym=0,zs=class extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gl,this.stencilZFail=gl,this.stencilZPass=gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ze(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){ze(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oi=new W,Fl=new W,$a=new W,Qi=new W,Bl=new W,Za=new W,zl=new W,$c=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fl.copy(t).add(e).multiplyScalar(.5),$a.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(Fl);const r=t.distanceTo(e)*.5,s=-this.direction.dot($a),a=Qi.dot(this.direction),o=-Qi.dot($a),l=Qi.lengthSq(),c=Math.abs(1-s*s);let u,d,h,f;if(c>0)if(u=s*o-a,d=s*a-o,f=r*c,u>=0)if(d>=-f)if(d<=f){const g=1/c;u*=g,d*=g,h=u*(u+s*d+2*a)+d*(s*u+d+2*o)+l}else d=r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d=-r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d<=-f?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l):d<=f?(u=0,d=Math.min(Math.max(-r,-o),r),h=d*(d+2*o)+l):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fl).addScaledVector($a,d),h}intersectSphere(t,e){Oi.subVectors(t.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,n,i,r){Bl.subVectors(e,t),Za.subVectors(n,t),zl.crossVectors(Bl,Za);let s=this.direction.dot(zl),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Qi.subVectors(this.origin,t);const o=a*this.direction.dot(Za.crossVectors(Qi,Za));if(o<0)return null;const l=a*this.direction.dot(Bl.cross(Qi));if(l<0||o+l>s)return null;const c=-a*Qi.dot(zl);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},If=class extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ea,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gu=new Zt,Sr=new $c,ja=new Oa,Hu=new W,Ja=new W,Qa=new W,eo=new W,kl=new W,to=new W,Wu=new W,no=new W,Wi=class extends _i{constructor(t=new pi,e=new If){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(kl.fromBufferAttribute(u,t),s?to.addScaledVector(kl,c):to.addScaledVector(kl.sub(e),c))}e.add(to)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),Sr.copy(t.ray).recast(t.near),!(ja.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(ja,Hu)===null||Sr.origin.distanceToSquared(Hu)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),Sr.copy(t.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const _=d[f],m=s[_.materialIndex],p=Math.max(_.start,h.start),S=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let T=p,M=S;T<M;T+=3){const b=a.getX(T),A=a.getX(T+1),w=a.getX(T+2);i=io(this,m,t,n,l,c,u,b,A,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const f=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let _=f,m=g;_<m;_+=3){const p=a.getX(_),S=a.getX(_+1),T=a.getX(_+2);i=io(this,s,t,n,l,c,u,p,S,T),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const _=d[f],m=s[_.materialIndex],p=Math.max(_.start,h.start),S=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let T=p,M=S;T<M;T+=3){const b=T,A=T+1,w=T+2;i=io(this,m,t,n,l,c,u,b,A,w),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const f=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let _=f,m=g;_<m;_+=3){const p=_,S=_+1,T=_+2;i=io(this,s,t,n,l,c,u,p,S,T),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}};function qm(t,e,n,i,r,s,a,o){let l;if(e.side===1?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;no.copy(o),no.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(no);return c<n.near||c>n.far?null:{distance:c,point:no.clone(),object:t}}function io(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ja),t.getVertexPosition(l,Qa),t.getVertexPosition(c,eo);const u=qm(t,e,n,i,Ja,Qa,eo,Wu);if(u){const d=new W;Ws.getBarycoord(Wu,Ja,Qa,eo,d),r&&(u.uv=Ws.getInterpolatedAttribute(r,o,l,c,d,new bt)),s&&(u.uv1=Ws.getInterpolatedAttribute(s,o,l,c,d,new bt)),a&&(u.normal=Ws.getInterpolatedAttribute(a,o,l,c,d,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new W,materialIndex:0};Ws.getNormal(Ja,Qa,eo,h.normal),u.face=h,u.barycoord=d}return u}var Km=class extends mi{constructor(t=null,e=1,n=1,i,r,s,a,o,l=bn,c=bn,u,d){super(null,s,a,o,l,c,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vl=new W,$m=new W,Zm=new $e,Er=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Vl.subVectors(n,e).cross($m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Vl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zm.getNormalMatrix(t),i=this.coplanarPoint(Vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xr=new Oa,jm=new bt(.5,.5),ro=new W,Nf=class{constructor(t=new Er,e=new Er,n=new Er,i=new Er,r=new Er,s=new Er){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=As,n=!1){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],T=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-f,M-p).normalize(),i[1].setComponents(l+s,h+c,m+f,M+p).normalize(),i[2].setComponents(l+a,h+u,m+g,M+S).normalize(),i[3].setComponents(l-a,h-u,m-g,M-S).normalize(),n)i[4].setComponents(o,d,_,T).normalize(),i[5].setComponents(l-o,h-d,m-_,M-T).normalize();else if(i[4].setComponents(l-o,h-d,m-_,M-T).normalize(),e===2e3)i[5].setComponents(l+o,h+d,m+_,M+T).normalize();else if(e===2001)i[5].setComponents(o,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){return xr.center.set(0,0,0),xr.radius=.7071067811865476+jm.distanceTo(t.center),xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ro.x=i.normal.x>0?t.max.x:t.min.x,ro.y=i.normal.y>0?t.max.y:t.min.y,ro.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Uf=class extends zs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$o=new W,Zo=new W,Xu=new Zt,Ks=new $c,so=new Oa,Gl=new W,Yu=new W,Jm=class extends _i{constructor(t=new pi,e=new Uf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)$o.fromBufferAttribute(e,i-1),Zo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=$o.distanceTo(Zo);t.setAttribute("lineDistance",new si(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;Xu.copy(i).invert(),Ks.copy(t.ray).applyMatrix4(Xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let f=d,g=h-1;f<g;f+=l){const _=c.getX(f),m=c.getX(f+1),p=ao(this,t,Ks,o,_,m,f);p&&e.push(p)}if(this.isLineLoop){const f=c.getX(h-1),g=c.getX(d),_=ao(this,t,Ks,o,f,g,h-1);_&&e.push(_)}}else{const d=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let f=d,g=h-1;f<g;f+=l){const _=ao(this,t,Ks,o,f,f+1,f);_&&e.push(_)}if(this.isLineLoop){const f=ao(this,t,Ks,o,h-1,d,h-1);f&&e.push(f)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function ao(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if($o.fromBufferAttribute(o,r),Zo.fromBufferAttribute(o,s),n.distanceSqToSegment($o,Zo,Gl,Yu)>i)return;Gl.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Gl);if(!(l<e.near||l>e.far))return{distance:l,point:Yu.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var qu=new W,Ku=new W,Qm=class extends Jm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)qu.fromBufferAttribute(e,i),Ku.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qu.distanceTo(Ku);t.setAttribute("lineDistance",new si(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Of=class extends zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$u=new Zt,vc=new $c,oo=new Oa,lo=new W,e_=class extends _i{constructor(t=new pi,e=new Of){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(i),oo.radius+=r,t.ray.intersectsSphere(oo)===!1)return;$u.copy(i).invert(),vc.copy(t.ray).applyMatrix4($u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(l!==null){const u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let h=u,f=d;h<f;h++){const g=l.getX(h);lo.fromBufferAttribute(c,g),Zu(lo,g,o,i,t,e,this)}}else{const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let h=u,f=d;h<f;h++)lo.fromBufferAttribute(c,h),Zu(lo,h,o,i,t,e,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function Zu(t,e,n,i,r,s,a){const o=vc.distanceSqToPoint(t);if(o<n){const l=new W;vc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ff=class extends mi{constructor(t=[],e=301,n,i,r,s,a,o,l,c){super(t,e,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cs=class extends mi{constructor(t,e,n=Br,i,r,s,a=bn,o=bn,l,c=ya,u=1){if(c!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:u},i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Kc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},t_=class extends Cs{constructor(t,e=Br,n=301,i,r,s=bn,a=bn,o,l=ya){const c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,r,s,a,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Bf=class extends mi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zc=class zf extends pi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(d,2));function g(_,m,p,S,T,M,b,A,w,v,E){const L=M/w,C=b/v,N=M/2,X=b/2,z=A/2,F=w+1,G=v+1;let D=0,Z=0;const J=new W;for(let P=0;P<G;P++){const he=P*C-X;for(let Te=0;Te<F;Te++)J[_]=(Te*L-N)*S,J[m]=he*T,J[p]=z,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=A>0?1:-1,u.push(J.x,J.y,J.z),d.push(Te/w),d.push(1-P/v),D+=1}for(let P=0;P<v;P++)for(let he=0;he<w;he++){const Te=h+he+F*P,Ye=h+he+F*(P+1),De=h+(he+1)+F*(P+1),K=h+(he+1)+F*P;l.push(Te,Ye,K),l.push(Ye,De,K),Z+=6}o.addGroup(f,Z,E),f+=Z,h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},kf=class Vf extends pi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let T=0;T<c;T++){const M=T*d-s;g.push(M,-S,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const T=S+c*p,M=S+c*(p+1),b=S+1+c*(p+1),A=S+1+c*p;f.push(T,M,A),f.push(M,b,A)}this.setIndex(f),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(_,3)),this.setAttribute("uv",new si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.width,e.height,e.widthSegments,e.heightSegments)}};function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(ju(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(ju(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function xn(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const r in i)e[r]=i[r]}return e}function ju(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function n_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gf(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var i_={clone:Ps,merge:xn},r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ri=class extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=s_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=n_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},a_=class extends Ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},o_=class extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},l_=class extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function co(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Fa=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{e:{let s;t:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break t}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},c_=class extends Fa{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Au:r=t,a=2*e-n;break;case Ru:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Au:s=t,o=2*n-e;break;case Ru:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}const l=(n-e)*.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(n-e)/(i-e),g=f*f,_=g*f,m=-d*_+2*d*g-d*f,p=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*f+1,S=(-1-h)*_+(1.5+h)*g+.5*f,T=h*_-h*g;for(let M=0;M!==a;++M)r[M]=m*s[c+M]+p*s[l+M]+S*s[o+M]+T*s[u+M];return r}},u_=class extends Fa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*u+s[o+d]*c;return r}},h_=class extends Fa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},f_=class extends Fa{interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.settings||this.DefaultSettings_,u=c.inTangents,d=c.outTangents;if(!u||!d){const g=(n-e)/(i-e),_=1-g;for(let m=0;m!==a;++m)r[m]=s[l+m]*_+s[o+m]*g;return r}const h=a*2,f=t-1;for(let g=0;g!==a;++g){const _=s[l+g],m=s[o+g],p=f*h+g*2,S=d[p],T=d[p+1],M=t*h+g*2,b=u[M],A=u[M+1];let w=(n-e)/(i-e),v,E,L,C,N;for(let X=0;X<8;X++){v=w*w,E=v*w,L=1-w,C=L*L,N=C*L;const z=N*e+3*C*w*S+3*L*v*b+E*i-n;if(Math.abs(z)<1e-10)break;const F=3*C*(S-e)+6*L*w*(b-S)+3*v*(i-b);if(Math.abs(F)<1e-10)break;w=w-z/F,w=Math.max(0,Math.min(1,w))}r[g]=N*_+3*C*w*T+3*L*v*A+E*m}return r}},Pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=co(e,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:co(t.times,Array),values:co(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new h_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new u_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new c_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new f_(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Xo:e=this.InterpolantFactoryMethodDiscrete;break;case dc:e=this.InterpolantFactoryMethodLinear;break;case _l:e=this.InterpolantFactoryMethodSmooth;break;case bu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return _l;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const o=n[a];if(typeof o=="number"&&isNaN(o)){Ve("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){Ve("KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&Tm(i))for(let a=0,o=i.length;a!==o;++a){const l=i[a];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_l,r=t.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{const c=a*n,u=c-n,d=c+n;for(let h=0;h!==n;++h){const f=e[c+h];if(f!==e[u+h]||f!==e[d+h]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];const c=a*n,u=s*n;for(let d=0;d!==n;++d)e[u+d]=e[c+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Pi.prototype.ValueTypeName="";Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=dc;var Ba=class extends Pi{constructor(t,e,n){super(t,e,n)}};Ba.prototype.ValueTypeName="bool";Ba.prototype.ValueBufferType=Array;Ba.prototype.DefaultInterpolation=Xo;Ba.prototype.InterpolantFactoryMethodLinear=void 0;Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var d_=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}};d_.prototype.ValueTypeName="color";var p_=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}};p_.prototype.ValueTypeName="number";var m_=class extends Fa{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let l=t*a;for(let c=l+a;l!==c;l+=4)Wr.slerpFlat(r,0,s,l-a,s,l,o);return r}},Hf=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new m_(this.times,this.values,this.getValueSize(),t)}};Hf.prototype.ValueTypeName="quaternion";Hf.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Pi{constructor(t,e,n){super(t,e,n)}};za.prototype.ValueTypeName="string";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=Xo;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;var __=class extends Pi{constructor(t,e,n,i){super(t,e,n,i)}};__.prototype.ValueTypeName="vector";var g_=class{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){const h=l[u],f=l[u+1];if(h.global&&(h.lastIndex=0),h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},v_=new g_,S_=class{constructor(t){this.manager=t!==void 0?t:v_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};S_.DEFAULT_MATERIAL_NAME="__DEFAULT";var uo=new W,ho=new Wr,vi=new W,Wf=class extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=As,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uo,ho,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,ho,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(uo,ho,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,ho,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},er=new W,Ju=new bt,Qu=new bt,Qn=class extends Wf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_c*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,Qu),e.subVectors(Qu,Ju)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xf=class extends Wf{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ss=-90,as=1,x_=class extends _i{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Qn(ss,as,t,e);i.layers=this.layers,this.add(i);const r=new Qn(ss,as,t,e);r.layers=this.layers,this.add(r);const s=new Qn(ss,as,t,e);s.layers=this.layers,this.add(s);const a=new Qn(ss,as,t,e);a.layers=this.layers,this.add(a);const o=new Qn(ss,as,t,e);o.layers=this.layers,this.add(o);const l=new Qn(ss,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},M_=class extends Qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},y_="\\[\\]\\.:\\/",E_=new RegExp("[\\[\\]\\.:\\/]","g"),jc="[^\\[\\]\\.:\\/]",T_="[^"+y_.replace("\\.","")+"]",b_=/((?:WC+[\/:])*)/.source.replace("WC",jc),w_=/(WCOD+)?/.source.replace("WCOD",T_),A_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jc),R_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jc),C_=new RegExp("^"+b_+w_+A_+R_+"$"),P_=["material","materials","bones","map"],L_=class{constructor(t,e,n){const i=n||Nt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Nt=class ds{constructor(e,n,i){this.path=n,this.parsedPath=i||ds.parseTrackName(n),this.node=ds.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new ds.Composite(e,n,i):new ds(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(E_,"")}static parseTrackName(e){const n=C_.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);P_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=ds.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=n.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=L_;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $S=class Yf{static{Yf.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};function eh(t,e,n,i){const r=D_(i);switch(n){case Op:return t*e;case Bp:return t*e/r.components*r.byteLength;case vf:return t*e/r.components*r.byteLength;case Wo:return t*e*2/r.components*r.byteLength;case Sf:return t*e*2/r.components*r.byteLength;case Fp:return t*e*3/r.components*r.byteLength;case Ma:return t*e*4/r.components*r.byteLength;case xf:return t*e*4/r.components*r.byteLength;case zp:case kp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vp:case Gp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wp:case Yp:return Math.max(t,16)*Math.max(e,8)/4;case Hp:case Xp:return Math.max(t,8)*Math.max(e,8)/2;case qp:case Kp:case Zp:case jp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $p:case Jp:case Qp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case em:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tm:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nm:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case im:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rm:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case am:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case om:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lm:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case um:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case hm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pm:case mm:case _m:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gm:case vm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Sm:case xm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function D_(t){switch(t){case Pr:case Lp:return{byteLength:1,components:1};case df:case Dp:case zr:return{byteLength:2,components:1};case pf:case mf:return{byteLength:2,components:4};case Br:case Ip:case cl:return{byteLength:4,components:1};case Np:case Up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function qf(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function I_(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},xe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},yi={basic:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:xn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:xn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ht(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:xn([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:xn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:xn([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:xn([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:xn([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:xn([xe.lights,xe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};yi.physical={uniforms:xn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var fo={r:0,b:0,g:0},N_=new Zt,Kf=new $e;Kf.set(-1,0,0,0,1,0,0,0,1);function U_(t,e,n,i,r,s){const a=new ht(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const M=S.backgroundBlurriness>0;T=e.get(T,M)}return T}function g(S){let T=!1;const M=f(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),T=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(S,T){const M=f(T);M&&(M.isCubeTexture||M.mapping===306)?(c===void 0&&(c=new Wi(new Zc(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ps(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(N_.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kf),c.material.toneMapped=st.getTransfer(M.colorSpace)!==qo,(u!==M||d!==M.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Wi(new kf(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ps(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=st.getTransfer(M.colorSpace)!==qo,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,T){S.getRGB(fo,Gf(t)),n.buffers.color.setClear(fo.r,fo.g,fo.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:p}}function O_(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(C,N,X,z,F){let G=!1;const D=d(C,z,X,N);s!==D&&(s=D,c(s.object)),G=f(C,z,X,F),G&&g(C,z,X,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(C,N,X,z),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function u(C){return t.deleteVertexArray(C)}function d(C,N,X,z){const F=z.wireframe===!0;let G=i[N.id];G===void 0&&(G={},i[N.id]=G);const D=C.isInstancedMesh===!0?C.id:0;let Z=G[D];Z===void 0&&(Z={},G[D]=Z);let J=Z[X.id];J===void 0&&(J={},Z[X.id]=J);let P=J[F];return P===void 0&&(P=h(l()),J[F]=P),P}function h(C){const N=[],X=[],z=[];for(let F=0;F<n;F++)N[F]=0,X[F]=0,z[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:z,object:C,attributes:{},index:null}}function f(C,N,X,z){const F=s.attributes,G=N.attributes;let D=0;const Z=X.getAttributes();for(const J in Z)if(Z[J].location>=0){const P=F[J];let he=G[J];if(he===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),P===void 0||P.attribute!==he||he&&P.data!==he.data)return!0;D++}return s.attributesNum!==D||s.index!==z}function g(C,N,X,z){const F={},G=N.attributes;let D=0;const Z=X.getAttributes();for(const J in Z)if(Z[J].location>=0){let P=G[J];P===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(P=C.instanceColor));const he={};he.attribute=P,P&&P.data&&(he.data=P.data),F[J]=he,D++}s.attributes=F,s.attributesNum=D,s.index=z}function _(){const C=s.newAttributes;for(let N=0,X=C.length;N<X;N++)C[N]=0}function m(C){p(C,0)}function p(C,N){const X=s.newAttributes,z=s.enabledAttributes,F=s.attributeDivisors;X[C]=1,z[C]===0&&(t.enableVertexAttribArray(C),z[C]=1),F[C]!==N&&(t.vertexAttribDivisor(C,N),F[C]=N)}function S(){const C=s.newAttributes,N=s.enabledAttributes;for(let X=0,z=N.length;X<z;X++)N[X]!==C[X]&&(t.disableVertexAttribArray(X),N[X]=0)}function T(C,N,X,z,F,G,D){D===!0?t.vertexAttribIPointer(C,N,X,F,G):t.vertexAttribPointer(C,N,X,z,F,G)}function M(C,N,X,z){_();const F=z.attributes,G=X.getAttributes(),D=N.defaultAttributeValues;for(const Z in G){const J=G[Z];if(J.location>=0){let P=F[Z];if(P===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),P!==void 0){const he=P.normalized,Te=P.itemSize,Ye=e.get(P);if(Ye===void 0)continue;const De=Ye.buffer,K=Ye.type,le=Ye.bytesPerElement,ge=K===t.INT||K===t.UNSIGNED_INT||P.gpuType===1013;if(P.isInterleavedBufferAttribute){const fe=P.data,be=fe.stride,Ue=P.offset;if(fe.isInstancedInterleavedBuffer){for(let Re=0;Re<J.locationSize;Re++)p(J.location+Re,fe.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Re=0;Re<J.locationSize;Re++)m(J.location+Re);t.bindBuffer(t.ARRAY_BUFFER,De);for(let Re=0;Re<J.locationSize;Re++)T(J.location+Re,Te/J.locationSize,K,he,be*le,(Ue+Te/J.locationSize*Re)*le,ge)}else{if(P.isInstancedBufferAttribute){for(let fe=0;fe<J.locationSize;fe++)p(J.location+fe,P.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let fe=0;fe<J.locationSize;fe++)m(J.location+fe);t.bindBuffer(t.ARRAY_BUFFER,De);for(let fe=0;fe<J.locationSize;fe++)T(J.location+fe,Te/J.locationSize,K,he,Te*le,Te/J.locationSize*fe*le,ge)}}else if(D!==void 0){const he=D[Z];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(J.location,he);break;case 3:t.vertexAttrib3fv(J.location,he);break;case 4:t.vertexAttrib4fv(J.location,he);break;default:t.vertexAttrib1fv(J.location,he)}}}}S()}function b(){E();for(const C in i){const N=i[C];for(const X in N){const z=N[X];for(const F in z){const G=z[F];for(const D in G)u(G[D].object),delete G[D];delete z[F]}}delete i[C]}}function A(C){if(i[C.id]===void 0)return;const N=i[C.id];for(const X in N){const z=N[X];for(const F in z){const G=z[F];for(const D in G)u(G[D].object),delete G[D];delete z[F]}}delete i[C.id]}function w(C){for(const N in i){const X=i[N];for(const z in X){const F=X[z];if(F[C.id]===void 0)continue;const G=F[C.id];for(const D in G)u(G[D].object),delete G[D];delete F[C.id]}}}function v(C){for(const N in i){const X=i[N],z=C.isInstancedMesh===!0?C.id:0,F=X[z];if(F!==void 0){for(const G in F){const D=F[G];for(const Z in D)u(D[Z].object),delete D[Z];delete F[G]}delete X[z],Object.keys(X).length===0&&delete i[N]}}}function E(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function F_(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function B_(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==1023&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const v=w===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==1009&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==1015&&!v)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:M,maxSamples:b,samples:A}}function z_(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Er,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,T=S*4;let M=p.clippingState||null;l.value=M,M=u(g,h,T,f);for(let b=0;b!==T;++b)M[b]=n[b];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==_;++T,M+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var ir=4,th=[.125,.215,.35,.446,.526,.582],Ar=20,k_=256,$s=new Xf,nh=new ht,Hl=null,Wl=0,Xl=0,Yl=!1,V_=new W,ih=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:s=256,position:a=V_}=r;Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Hl,Wl,Xl),this._renderer.xr.enabled=Yl,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:zr,format:Ma,colorSpace:pc,depthBuffer:!1},i=rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G_(r)),this._blurMaterial=W_(r,t,e),this._ggxMaterial=H_(r,t,e)}return i}_compileMaterial(t){const e=new Wi(new pi,t);this._renderer.compile(e,$s)}_sceneToCubeUV(t,e,n,i,r){const s=new Qn(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(nh),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new Zc,new If({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,h=d.material;let f=!1;const g=t.background;g?g.isColor&&(h.color.copy(g),t.background=null,f=!0):(h.color.copy(nh),f=!0);for(let _=0;_<6;_++){const m=_%3;m===0?(s.up.set(0,a[_],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[_],r.y,r.z)):m===1?(s.up.set(0,0,a[_]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[_],r.z)):(s.up.set(0,a[_],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[_]));const p=this._cubeSize;os(i,m*p,_>2?p:0,p,p),l.setRenderTarget(i),f&&l.render(d,s),l.render(t,s)}l.toneMapping=u,l.autoClear=c,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=t;const o=this._cubeSize;os(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(s,$s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;const o=s.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:d}=this,h=this._sizeLods[n],f=3*h*(n>d-ir?n-d+ir:0),g=4*(this._cubeSize-h);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=d-e,os(r,f,g,3*h,2*h),i.setRenderTarget(r),i.render(a,$s),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=d-n,os(t,f,g,3*h,2*h),i.setRenderTarget(t),i.render(a,$s)}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,h=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ar-1),g=r/f,_=isFinite(r)?1+Math.floor(c*g):Ar;_>Ar&&ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ar}`);const m=[];let p=0;for(let M=0;M<Ar;++M){const b=M/g,A=Math.exp(-b*b/2);m.push(A),M===0?p+=A:M<_&&(p+=2*A)}for(let M=0;M<m.length;M++)m[M]=m[M]/p;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=f,d.mipInt.value=S-n;const T=this._sizeLods[i];os(e,3*T*(i>S-ir?i-S+ir:0),4*(this._cubeSize-T),3*T,2*T),o.setRenderTarget(e),o.render(u,$s)}};function G_(t){const e=[],n=[],i=[];let r=t;const s=t-ir+1+th.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ir?l=th[a-t+ir-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),T=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,v=A>2?0:-1,E=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];S.set(E,_*g*A),T.set(h,m*g*A);const L=[A,A,A,A,A,A];M.set(L,p*g*A)}const b=new pi;b.setAttribute("position",new ri(S,_)),b.setAttribute("uv",new ri(T,m)),b.setAttribute("faceIndex",new ri(M,p)),i.push(new Wi(b,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function rh(t,e,n){const i=new wi(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function H_(t,e,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function W_(t,e,n){const i=new Float32Array(Ar),r=new W(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ul(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function sh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ah(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}var $f=class extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ff(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zc(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new Wi(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=Wn),new x_(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}};function X_(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===303||f===304)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new $f(g.height);return _.fromEquirectangularTexture(t,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===303||f===304,_=f===301||f===302;if(g||_){let m=n.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new ih(t)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new ih(t)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===303?h.mapping=301:f===304&&(h.mapping=302),h}function l(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Y_(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&mc("WebGLRenderer: "+i+" extension not supported."),r}}}function q_(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const S=f.array;_=f.version;for(let T=0,M=S.length;T<M;T+=3){const b=S[T+0],A=S[T+1],w=S[T+2];h.push(b,A,A,w,w,b)}}else{const S=g.array;_=g.version;for(let T=0,M=S.length/3-1;T<M;T+=3){const b=T+0,A=T+1,w=T+2;h.push(b,A,A,w,w,b)}}const m=new(g.count>=65535?Lf:Pf)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function K_(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function c(d,h,f){f!==0&&(t.drawElementsInstanced(i,h,s,d*a,f),n.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];n.update(g,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function $_(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Z_(t,e,n){const i=new WeakMap,r=new $t;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let L=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var f=L;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let b=o.attributes.position.count*M,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*A*4*d),v=new wf(w,b,A,d);v.type=cl,v.needsUpdate=!0;const E=M*4;for(let C=0;C<d;C++){const N=p[C],X=S[C],z=T[C],F=b*A*4*C;for(let G=0;G<N.count;G++){const D=G*E;g===!0&&(r.fromBufferAttribute(N,G),w[F+D+0]=r.x,w[F+D+1]=r.y,w[F+D+2]=r.z,w[F+D+3]=0),_===!0&&(r.fromBufferAttribute(X,G),w[F+D+4]=r.x,w[F+D+5]=r.y,w[F+D+6]=r.z,w[F+D+7]=0),m===!0&&(r.fromBufferAttribute(z,G),w[F+D+8]=r.x,w[F+D+9]=r.y,w[F+D+10]=r.z,w[F+D+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:v,size:new bt(b,A)},i.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function j_(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}var J_={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Q_(t,e,n,i,r){const s=new wi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Cs(e,n):void 0}),a=new wi(e,n,{type:zr,depthBuffer:!1,stencilBuffer:!1}),o=new pi;o.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new si([0,2,0,0,2,0],2));const l=new a_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Wi(o,l),u=new Xf(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(S,T){s.setSize(S,T),a.setSize(S,T);for(let M=0;M<m.length;M++){const b=m[M];b.setSize&&b.setSize(S,T)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const T=s.width,M=s.height;for(let b=0;b<m.length;b++){const A=m[b];A.setSize&&A.setSize(T,M)}},this.begin=function(S,T){if(f||S.toneMapping===0&&m.length===0)return!1;if(_=T,T!==null){const M=T.width,b=T.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return p===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=0,!0},this.hasRenderPass=function(){return p},this.end=function(S,T){S.toneMapping=g,f=!0;let M=s,b=a;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(S,b,M,T),w.needsSwap!==!1)){const v=M;M=b,b=v}}if(d!==S.outputColorSpace||h!==S.toneMapping){d=S.outputColorSpace,h=S.toneMapping,l.defines={},st.getTransfer(d)==="srgb"&&(l.defines.SRGB_TRANSFER="");const A=J_[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(_),S.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Zf=new mi,Sc=new Cs(1,1),jf=new wf,Jf=new Nm,Qf=new Ff,oh=[],lh=[],ch=new Float32Array(16),uh=new Float32Array(9),hh=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=oh[r];if(s===void 0&&(s=new Float32Array(r),oh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hl(t,e){let n=lh[e];n===void 0&&(n=new Int32Array(e),lh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function eg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function tg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Jt(n,e)}}function ng(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Jt(n,e)}}function ig(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Jt(n,e)}}function rg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(jt(n,i))return;hh.set(i),t.uniformMatrix2fv(this.addr,!1,hh),Jt(n,i)}}function sg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(jt(n,i))return;uh.set(i),t.uniformMatrix3fv(this.addr,!1,uh),Jt(n,i)}}function ag(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(jt(n,i))return;ch.set(i),t.uniformMatrix4fv(this.addr,!1,ch),Jt(n,i)}}function og(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function lg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Jt(n,e)}}function cg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Jt(n,e)}}function ug(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Jt(n,e)}}function hg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Jt(n,e)}}function dg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Jt(n,e)}}function pg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Jt(n,e)}}function mg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Sc.compareFunction=n.isReversedDepthBuffer()?518:515,s=Sc):s=Zf,n.setTexture2D(e||s,r)}function _g(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jf,r)}function gg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Qf,r)}function vg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||jf,r)}function Sg(t){switch(t){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return sg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return ug;case 5125:return hg;case 36294:return fg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return vg}}function xg(t,e){t.uniform1fv(this.addr,e)}function Mg(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function yg(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function Eg(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function Tg(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bg(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wg(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ag(t,e){t.uniform1iv(this.addr,e)}function Rg(t,e){t.uniform2iv(this.addr,e)}function Cg(t,e){t.uniform3iv(this.addr,e)}function Pg(t,e){t.uniform4iv(this.addr,e)}function Lg(t,e){t.uniform1uiv(this.addr,e)}function Dg(t,e){t.uniform2uiv(this.addr,e)}function Ig(t,e){t.uniform3uiv(this.addr,e)}function Ng(t,e){t.uniform4uiv(this.addr,e)}function Ug(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Sc:a=Zf;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Og(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Jf,s[a])}function Fg(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Qf,s[a])}function Bg(t,e,n){const i=this.cache,r=e.length,s=hl(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||jf,s[a])}function zg(t){switch(t){case 5126:return xg;case 35664:return Mg;case 35665:return yg;case 35666:return Eg;case 35674:return Tg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Dg;case 36295:return Ig;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Bg}}var kg=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}},Vg=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}},Gg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}},ql=/(\w+)(\])?(\[|\.)?/g;function fh(t,e){t.seq.push(e),t.map[e.id]=e}function Hg(t,e,n){const i=t.name,r=i.length;for(ql.lastIndex=0;;){const s=ql.exec(i),a=ql.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){fh(n,c===void 0?new kg(o,t,e):new Vg(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new Gg(o),fh(n,u)),n=u}}}var Io=class{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s);Hg(a,t.getUniformLocation(e,a.name),this)}const i=[],r=[];for(const s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}};function dh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Wg=37297,Xg=0;function Yg(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var ph=new $e;function qg(t){st._getMatrix(ph,st.workingColorSpace,t);const e=`mat3( ${ph.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Yo:return[e,"LinearTransferOETF"];case qo:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function mh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Yg(t.getShaderSource(e),a)}else return r}function Kg(t,e){const n=qg(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var $g={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Zg(t,e){const n=$g[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var po=new W;function jg(){return st.getLuminanceCoefficients(po),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${po.x.toFixed(4)}, ${po.y.toFixed(4)}, ${po.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function Qg(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ev(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ta(t){return t!==""}function _h(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(t){return t.replace(tv,iv)}var nv=new Map;function iv(t,e){let n=Ze[e];if(n===void 0){const i=nv.get(e);if(i!==void 0)n=Ze[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xc(n)}var rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(t){return t.replace(rv,sv)}function sv(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var av={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function ov(t){return av[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var lv={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function cv(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":lv[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var uv={302:"ENVMAP_MODE_REFRACTION"};function hv(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":uv[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fv={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function dv(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":fv[t.combine]||"ENVMAP_BLENDING_NONE"}function pv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function mv(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ov(n),c=cv(n),u=hv(n),d=dv(n),h=pv(n),f=Jg(n),g=Qg(s),_=r.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(m=[Sh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[Sh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?Ze.tonemapping_pars_fragment:"",n.toneMapping!==0?Zg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Kg("linearToOutputTexel",n.outputColorSpace),jg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),a=xc(a),a=_h(a,n),a=gh(a,n),o=xc(o),o=_h(o,n),o=gh(o,n),a=vh(a),o=vh(o),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=S+m+a,M=S+p+o,b=dh(r,r.VERTEX_SHADER,T),A=dh(r,r.FRAGMENT_SHADER,M);r.attachShader(_,b),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(C){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",X=r.getShaderInfoLog(b)||"",z=r.getShaderInfoLog(A)||"",F=N.trim(),G=X.trim(),D=z.trim();let Z=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,A);else{const P=mh(r,b,"vertex"),he=mh(r,A,"fragment");Ve("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+P+`
`+he)}else F!==""?ze("WebGLProgram: Program Info Log:",F):(G===""||D==="")&&(J=!1);J&&(C.diagnostics={runnable:Z,programLog:F,vertexShader:{log:G,prefix:m},fragmentShader:{log:D,prefix:p}})}r.deleteShader(b),r.deleteShader(A),v=new Io(r,_),E=ev(r,_)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(_,Wg)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}var _v=0,gv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vv(t),e.set(t,n)),n}},vv=class{constructor(t){this.id=_v++,this.code=t,this.usedTimes=0}};function Sv(t){return t===1030||t===37490||t===36285}function xv(t,e,n,i,r,s){const a=new Rf,o=new gv,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,E,L,C,N,X){const z=C.fog,F=N.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,D=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||G,D),J=Z&&Z.mapping===306?Z.image.height:null,P=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const he=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Te=he!==void 0?he.length:0;let Ye=0;F.morphAttributes.position!==void 0&&(Ye=1),F.morphAttributes.normal!==void 0&&(Ye=2),F.morphAttributes.color!==void 0&&(Ye=3);let De,K,le,ge;if(P){const se=yi[P];De=se.vertexShader,K=se.fragmentShader}else De=v.vertexShader,K=v.fragmentShader,o.update(v),le=o.getVertexShaderID(v),ge=o.getFragmentShaderID(v);const fe=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,Re=N.isBatchedMesh===!0,Ge=!!v.map,ye=!!v.matcap,Ke=!!Z,rt=!!v.aoMap,St=!!v.lightMap,Y=!!v.bumpMap,lt=!!v.normalMap,U=!!v.displacementMap,At=!!v.emissiveMap,Ie=!!v.metalnessMap,qe=!!v.roughnessMap,pe=v.anisotropy>0,ft=v.clearcoat>0,Ee=v.dispersion>0,R=v.iridescence>0,x=v.sheen>0,k=v.transmission>0,j=pe&&!!v.anisotropyMap,Q=ft&&!!v.clearcoatMap,oe=ft&&!!v.clearcoatNormalMap,ae=ft&&!!v.clearcoatRoughnessMap,O=R&&!!v.iridescenceMap,ce=R&&!!v.iridescenceThicknessMap,me=x&&!!v.sheenColorMap,Se=x&&!!v.sheenRoughnessMap,ee=!!v.specularMap,Ne=!!v.specularColorMap,_e=!!v.specularIntensityMap,Xe=k&&!!v.transmissionMap,Fe=k&&!!v.thicknessMap,I=!!v.gradientMap,$=!!v.alphaMap,re=v.alphaTest>0,de=!!v.alphaHash,we=!!v.extensions;let te=0;v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(te=t.toneMapping);const ne={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:K,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Re,batchingColor:Re&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:ye,envMap:Ke,envMapMode:Ke&&Z.mapping,envMapCubeUVHeight:J,aoMap:rt,lightMap:St,bumpMap:Y,normalMap:lt,displacementMap:U,emissiveMap:At,normalMapObjectSpace:lt&&v.normalMapType===1,normalMapTangentSpace:lt&&v.normalMapType===0,packedNormalMap:lt&&v.normalMapType===0&&Sv(v.normalMap.format),metalnessMap:Ie,roughnessMap:qe,anisotropy:pe,anisotropyMap:j,clearcoat:ft,clearcoatMap:Q,clearcoatNormalMap:oe,clearcoatRoughnessMap:ae,dispersion:Ee,iridescence:R,iridescenceMap:O,iridescenceThicknessMap:ce,sheen:x,sheenColorMap:me,sheenRoughnessMap:Se,specularMap:ee,specularColorMap:Ne,specularIntensityMap:_e,transmission:k,transmissionMap:Xe,thicknessMap:Fe,gradientMap:I,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:$,alphaTest:re,alphaHash:de,combine:v.combine,mapUv:Ge&&g(v.map.channel),aoMapUv:rt&&g(v.aoMap.channel),lightMapUv:St&&g(v.lightMap.channel),bumpMapUv:Y&&g(v.bumpMap.channel),normalMapUv:lt&&g(v.normalMap.channel),displacementMapUv:U&&g(v.displacementMap.channel),emissiveMapUv:At&&g(v.emissiveMap.channel),metalnessMapUv:Ie&&g(v.metalnessMap.channel),roughnessMapUv:qe&&g(v.roughnessMap.channel),anisotropyMapUv:j&&g(v.anisotropyMap.channel),clearcoatMapUv:Q&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(v.sheenRoughnessMap.channel),specularMapUv:ee&&g(v.specularMap.channel),specularColorMapUv:Ne&&g(v.specularColorMap.channel),specularIntensityMapUv:_e&&g(v.specularIntensityMap.channel),transmissionMapUv:Xe&&g(v.transmissionMap.channel),thicknessMapUv:Fe&&g(v.thicknessMap.channel),alphaMapUv:$&&g(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(lt||pe),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Ge||$),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&st.getTransfer(v.map.colorSpace)==="srgb",decodeVideoTextureEmissive:At&&v.emissiveMap.isVideoTexture===!0&&st.getTransfer(v.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:we&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&v.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)E.push(L),E.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(E,v),S(E,v),E.push(t.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function T(v){const E=f[v.type];let L;if(E){const C=yi[E];L=i_.clone(C.uniforms)}else L=v.uniforms;return L}function M(v,E){let L=u.get(E);return L!==void 0?++L.usedTimes:(L=new mv(t,E,v,r),c.push(L),u.set(E,L)),L}function b(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:w}}function Mv(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function yv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function xh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Mh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let S=t[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},t[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function l(h,f,g,_,m,p){const S=o(h,f,g,_,m,p);g.transmission>0?i.push(S):g.transparent===!0?r.push(S):n.push(S)}function c(h,f,g,_,m,p){const S=o(h,f,g,_,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?r.unshift(S):n.unshift(S)}function u(h,f){n.length>1&&n.sort(h||yv),i.length>1&&i.sort(f||xh),r.length>1&&r.sort(f||xh)}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function Ev(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Mh,t.set(i,[a])):r>=s.length?(a=new Mh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Tv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new ht};break;case"SpotLight":n={position:new W,direction:new W,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function bv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var wv=0;function Av(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Rv(t){const e=new Tv,n=bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Zt,a=new Zt;function o(c){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,T=0,M=0,b=0,A=0,w=0;c.sort(Av);for(let E=0,L=c.length;E<L;E++){const C=c[E],N=C.color,X=C.intensity,z=C.distance;let F=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===1030?F=C.shadow.map.texture:F=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=N.r*X,d+=N.g*X,h+=N.b*X;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],X);w++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const D=C.shadow,Z=n.get(C);Z.shadowIntensity=D.intensity,Z.shadowBias=D.bias,Z.shadowNormalBias=D.normalBias,Z.shadowRadius=D.radius,Z.shadowMapSize=D.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=C.shadow.matrix,S++}i.directional[f]=G,f++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(N).multiplyScalar(X),G.distance=z,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[_]=G;const D=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,D.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=D.matrix,C.castShadow){const Z=n.get(C);Z.shadowIntensity=D.intensity,Z.shadowBias=D.bias,Z.shadowNormalBias=D.normalBias,Z.shadowRadius=D.radius,Z.shadowMapSize=D.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=F,M++}_++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(N).multiplyScalar(X),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const D=C.shadow,Z=n.get(C);Z.shadowIntensity=D.intensity,Z.shadowBias=D.bias,Z.shadowNormalBias=D.normalBias,Z.shadowRadius=D.radius,Z.shadowMapSize=D.mapSize,Z.shadowCameraNear=D.camera.near,Z.shadowCameraFar=D.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=C.shadow.matrix,T++}i.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(X),G.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[p]=G,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==_||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==T||v.numSpotShadows!==M||v.numSpotMaps!==b||v.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,v.directionalLength=f,v.pointLength=g,v.spotLength=_,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=T,v.numSpotShadows=M,v.numSpotMaps=b,v.numLightProbes=w,i.version=wv++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const T=c[p];if(T.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(T.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function yh(t){const e=new Rv(t),n=[],i=[],r=[];function s(h){d.camera=h,n.length=0,i.length=0,r.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Cv(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new yh(t),e.set(r,[o])):s>=a.length?(o=new yh(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dv=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Iv=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Eh=new Zt,Zs=new W,Kl=new W;function Nv(t,e,n){let i=new Nf;const r=new bt,s=new bt,a=new $t,o=new o_,l=new l_,c={},u=n.maxTextureSize,d={0:1,1:0,2:2},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Pv,fragmentShader:Lv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new pi;g.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(A,w,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===2&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const E=t.getRenderTarget(),L=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),N=t.state;N.setBlending(0),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const X=p!==this.type;X&&w.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(F=>F.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,F=A.length;z<F;z++){const G=A[z],D=G.shadow;if(D===void 0){ze("WebGLShadowMap:",G,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Z=D.getFrameExtents();r.multiply(Z),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,D.mapSize.y=s.y));const J=t.state.buffers.depth.getReversed();if(D.camera._reversedDepth=J,D.map===null||X===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===3){if(G.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new wi(r.x,r.y,{format:Wo,type:zr,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),D.map.texture.name=G.name+".shadowMap",D.map.depthTexture=new Cs(r.x,r.y,cl),D.map.depthTexture.name=G.name+".shadowMapDepth",D.map.depthTexture.format=ya,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=bn,D.map.depthTexture.magFilter=bn}else G.isPointLight?(D.map=new $f(r.x),D.map.depthTexture=new t_(r.x,Br)):(D.map=new wi(r.x,r.y),D.map.depthTexture=new Cs(r.x,r.y,Br)),D.map.depthTexture.name=G.name+".shadowMap",D.map.depthTexture.format=ya,this.type===1?(D.map.depthTexture.compareFunction=J?518:515,D.map.depthTexture.minFilter=Wn,D.map.depthTexture.magFilter=Wn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=bn,D.map.depthTexture.magFilter=bn);D.camera.updateProjectionMatrix()}const P=D.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<P;he++){if(D.map.isWebGLCubeRenderTarget)t.setRenderTarget(D.map,he),t.clear();else{he===0&&(t.setRenderTarget(D.map),t.clear());const Te=D.getViewport(he);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),N.viewport(a)}if(G.isPointLight){const Te=D.camera,Ye=D.matrix,De=G.distance||Te.far;De!==Te.far&&(Te.far=De,Te.updateProjectionMatrix()),Zs.setFromMatrixPosition(G.matrixWorld),Te.position.copy(Zs),Kl.copy(Te.position),Kl.add(Dv[he]),Te.up.copy(Iv[he]),Te.lookAt(Kl),Te.updateMatrixWorld(),Ye.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Eh.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),D._frustum.setFromProjectionMatrix(Eh,Te.coordinateSystem,Te.reversedDepth)}else D.updateMatrices(G);i=D.getFrustum(),M(w,v,D.camera,G,this.type)}D.isPointLightShadow!==!0&&this.type===3&&S(D,v),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(E,L,C)};function S(A,w){const v=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wi(r.x,r.y,{format:Wo,type:zr})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,v,h,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,v,f,_,null)}function T(A,w,v,E){let L=null;const C=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)L=C;else if(L=v.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=L.uuid,X=w.uuid;let z=c[N];z===void 0&&(z={},c[N]=z);let F=z[X];F===void 0&&(F=L.clone(),z[X]=F,w.addEventListener("dispose",b)),L=F}if(L.visible=w.visible,L.wireframe=w.wireframe,E===3?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:d[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const N=t.properties.get(L);N.light=v}return L}function M(A,w,v,E,L){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===3)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const N=e.update(A),X=A.material;if(Array.isArray(X)){const z=N.groups;for(let F=0,G=z.length;F<G;F++){const D=z[F],Z=X[D.materialIndex];if(Z&&Z.visible){const J=T(A,Z,E,L);A.onBeforeShadow(t,A,w,v,N,J,D),t.renderBufferDirect(v,null,N,J,A,D),A.onAfterShadow(t,A,w,v,N,J,D)}}}else if(X.visible){const z=T(A,X,E,L);A.onBeforeShadow(t,A,w,v,N,z,null),t.renderBufferDirect(v,null,N,z,A,null),A.onAfterShadow(t,A,w,v,N,z,null)}}const C=A.children;for(let N=0,X=C.length;N<X;N++)M(C[N],w,v,E,L)}function b(A){A.target.removeEventListener("dispose",b);for(const w in c){const v=c[w],E=A.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function Uv(t,e){function n(){let I=!1;const $=new $t;let re=null;const de=new $t(0,0,0,0);return{setMask:function(we){re!==we&&!I&&(t.colorMask(we,we,we,we),re=we)},setLocked:function(we){I=we},setClear:function(we,te,ne,se,He){He===!0&&(we*=se,te*=se,ne*=se),$.set(we,te,ne,se),de.equals($)===!1&&(t.clearColor(we,te,ne,se),de.copy($))},reset:function(){I=!1,re=null,de.set(-1,0,0,0)}}}function i(){let I=!1,$=!1,re=null,de=null,we=null;return{setReversed:function(te){if($!==te){const ne=e.get("EXT_clip_control");te?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),$=te;const se=we;we=null,this.setClear(se)}},getReversed:function(){return $},setTest:function(te){te?fe(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(te){re!==te&&!I&&(t.depthMask(te),re=te)},setFunc:function(te){if($&&(te=Am[te]),de!==te){switch(te){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=te}},setLocked:function(te){I=te},setClear:function(te){we!==te&&(we=te,$&&(te=1-te),t.clearDepth(te))},reset:function(){I=!1,re=null,de=null,we=null,$=!1}}}function r(){let I=!1,$=null,re=null,de=null,we=null,te=null,ne=null,se=null,He=null;return{setTest:function(ie){I||(ie?fe(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(ie){$!==ie&&!I&&(t.stencilMask(ie),$=ie)},setFunc:function(ie,Oe,Ce){(re!==ie||de!==Oe||we!==Ce)&&(t.stencilFunc(ie,Oe,Ce),re=ie,de=Oe,we=Ce)},setOp:function(ie,Oe,Ce){(te!==ie||ne!==Oe||se!==Ce)&&(t.stencilOp(ie,Oe,Ce),te=ie,ne=Oe,se=Ce)},setLocked:function(ie){I=ie},setClear:function(ie){He!==ie&&(t.clearStencil(ie),He=ie)},reset:function(){I=!1,$=null,re=null,de=null,we=null,te=null,ne=null,se=null,He=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,T=null,M=null,b=null,A=null,w=null,v=new ht(0,0,0),E=0,L=!1,C=null,N=null,X=null,z=null,F=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,Z=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),D=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),D=Z>=2);let P=null,he={};const Te=t.getParameter(t.SCISSOR_BOX),Ye=t.getParameter(t.VIEWPORT),De=new $t().fromArray(Te),K=new $t().fromArray(Ye);function le(I,$,re,de){const we=new Uint8Array(4),te=t.createTexture();t.bindTexture(I,te),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ne=0;ne<re;ne++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D($,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D($+ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return te}const ge={};ge[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),a.setFunc(3),Y(!1),lt(1),fe(t.CULL_FACE),rt(0);function fe(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function be(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Ue(I,$){return h[I]!==$?(t.bindFramebuffer(I,$),h[I]=$,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=$),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=$),!0):!1}function Re(I,$){let re=g,de=!1;if(I){re=f.get($),re===void 0&&(re=[],f.set($,re));const we=I.textures;if(re.length!==we.length||re[0]!==t.COLOR_ATTACHMENT0){for(let te=0,ne=we.length;te<ne;te++)re[te]=t.COLOR_ATTACHMENT0+te;re.length=we.length,de=!0}}else re[0]!==t.BACK&&(re[0]=t.BACK,de=!0);de&&t.drawBuffers(re)}function Ge(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const ye={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};ye[103]=t.MIN,ye[104]=t.MAX;const Ke={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function rt(I,$,re,de,we,te,ne,se,He,ie){if(I===0){m===!0&&(be(t.BLEND),m=!1);return}if(m===!1&&(fe(t.BLEND),m=!0),I!==5){if(I!==p||ie!==L){if((S!==100||b!==100)&&(t.blendEquation(t.FUNC_ADD),S=100,b=100),ie)switch(I){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ve("WebGLState: Invalid blending: ",I);break}else switch(I){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 3:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",I);break}T=null,M=null,A=null,w=null,v.set(0,0,0),E=0,p=I,L=ie}return}we=we||$,te=te||re,ne=ne||de,($!==S||we!==b)&&(t.blendEquationSeparate(ye[$],ye[we]),S=$,b=we),(re!==T||de!==M||te!==A||ne!==w)&&(t.blendFuncSeparate(Ke[re],Ke[de],Ke[te],Ke[ne]),T=re,M=de,A=te,w=ne),(se.equals(v)===!1||He!==E)&&(t.blendColor(se.r,se.g,se.b,He),v.copy(se),E=He),p=I,L=!1}function St(I,$){I.side===2?be(t.CULL_FACE):fe(t.CULL_FACE);let re=I.side===1;$&&(re=!re),Y(re),I.blending===1&&I.transparent===!1?rt(0):rt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),At(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Y(I){C!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),C=I)}function lt(I){I!==0?(fe(t.CULL_FACE),I!==N&&(I===1?t.cullFace(t.BACK):I===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),N=I}function U(I){I!==X&&(D&&t.lineWidth(I),X=I)}function At(I,$,re){I?(fe(t.POLYGON_OFFSET_FILL),(z!==$||F!==re)&&(z=$,F=re,a.getReversed()&&($=-$),t.polygonOffset($,re))):be(t.POLYGON_OFFSET_FILL)}function Ie(I){I?fe(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function qe(I){I===void 0&&(I=t.TEXTURE0+G-1),P!==I&&(t.activeTexture(I),P=I)}function pe(I,$,re){re===void 0&&(P===null?re=t.TEXTURE0+G-1:re=P);let de=he[re];de===void 0&&(de={type:void 0,texture:void 0},he[re]=de),(de.type!==I||de.texture!==$)&&(P!==re&&(t.activeTexture(re),P=re),t.bindTexture(I,$||ge[I]),de.type=I,de.texture=$)}function ft(){const I=he[P];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ee(){try{t.compressedTexImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function x(){try{t.texSubImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function k(){try{t.texSubImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function oe(){try{t.texStorage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function ae(){try{t.texStorage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function O(){try{t.texImage2D(...arguments)}catch(I){Ve("WebGLState:",I)}}function ce(){try{t.texImage3D(...arguments)}catch(I){Ve("WebGLState:",I)}}function me(I){return d[I]!==void 0?d[I]:t.getParameter(I)}function Se(I,$){d[I]!==$&&(t.pixelStorei(I,$),d[I]=$)}function ee(I){De.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),De.copy(I))}function Ne(I){K.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function _e(I,$){let re=c.get($);re===void 0&&(re=new WeakMap,c.set($,re));let de=re.get(I);de===void 0&&(de=t.getUniformBlockIndex($,I.name),re.set(I,de))}function Xe(I,$){const re=c.get($).get(I);l.get($)!==re&&(t.uniformBlockBinding($,re,I.__bindingPointIndex),l.set($,re))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,he={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,T=null,M=null,b=null,A=null,w=null,v=new ht(0,0,0),E=0,L=!1,C=null,N=null,X=null,z=null,F=null,De.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:be,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Ge,setBlending:rt,setMaterial:St,setFlipSided:Y,setCullFace:lt,setLineWidth:U,setPolygonOffset:At,setScissorTest:Ie,activeTexture:qe,bindTexture:pe,unbindTexture:ft,compressedTexImage2D:Ee,compressedTexImage3D:R,texImage2D:O,texImage3D:ce,pixelStorei:Se,getParameter:me,updateUBOMapping:_e,uniformBlockBinding:Xe,texStorage2D:oe,texStorage3D:ae,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:j,compressedTexSubImage3D:Q,scissor:ee,viewport:Ne,reset:Fe}}function Ov(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,x){return g?new OffscreenCanvas(R,x):Ko("canvas")}function m(R,x,k){let j=1;const Q=Ee(R);if((Q.width>k||Q.height>k)&&(j=k/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(j*Q.width),ae=Math.floor(j*Q.height);h===void 0&&(h=_(oe,ae));const O=x?_(oe,ae):h;return O.width=oe,O.height=ae,O.getContext("2d").drawImage(R,0,0,oe,ae),ze("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+oe+"x"+ae+")."),O}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function S(R){t.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(R,x,k,j,Q,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;j&&(ae=e.get("EXT_texture_norm16"),ae||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=x;if(x===t.RED&&(k===t.FLOAT&&(O=t.R32F),k===t.HALF_FLOAT&&(O=t.R16F),k===t.UNSIGNED_BYTE&&(O=t.R8),k===t.UNSIGNED_SHORT&&ae&&(O=ae.R16_EXT),k===t.SHORT&&ae&&(O=ae.R16_SNORM_EXT)),x===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(O=t.R8UI),k===t.UNSIGNED_SHORT&&(O=t.R16UI),k===t.UNSIGNED_INT&&(O=t.R32UI),k===t.BYTE&&(O=t.R8I),k===t.SHORT&&(O=t.R16I),k===t.INT&&(O=t.R32I)),x===t.RG&&(k===t.FLOAT&&(O=t.RG32F),k===t.HALF_FLOAT&&(O=t.RG16F),k===t.UNSIGNED_BYTE&&(O=t.RG8),k===t.UNSIGNED_SHORT&&ae&&(O=ae.RG16_EXT),k===t.SHORT&&ae&&(O=ae.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(O=t.RG8UI),k===t.UNSIGNED_SHORT&&(O=t.RG16UI),k===t.UNSIGNED_INT&&(O=t.RG32UI),k===t.BYTE&&(O=t.RG8I),k===t.SHORT&&(O=t.RG16I),k===t.INT&&(O=t.RG32I)),x===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(O=t.RGB8UI),k===t.UNSIGNED_SHORT&&(O=t.RGB16UI),k===t.UNSIGNED_INT&&(O=t.RGB32UI),k===t.BYTE&&(O=t.RGB8I),k===t.SHORT&&(O=t.RGB16I),k===t.INT&&(O=t.RGB32I)),x===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(O=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(O=t.RGBA16UI),k===t.UNSIGNED_INT&&(O=t.RGBA32UI),k===t.BYTE&&(O=t.RGBA8I),k===t.SHORT&&(O=t.RGBA16I),k===t.INT&&(O=t.RGBA32I)),x===t.RGB&&(k===t.UNSIGNED_SHORT&&ae&&(O=ae.RGB16_EXT),k===t.SHORT&&ae&&(O=ae.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(O=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(O=t.R11F_G11F_B10F)),x===t.RGBA){const ce=oe?Yo:st.getTransfer(Q);k===t.FLOAT&&(O=t.RGBA32F),k===t.HALF_FLOAT&&(O=t.RGBA16F),k===t.UNSIGNED_BYTE&&(O=ce==="srgb"?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ae&&(O=ae.RGBA16_EXT),k===t.SHORT&&ae&&(O=ae.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(O=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(O=t.RGB5_A1)}return(O===t.R16F||O===t.R32F||O===t.RG16F||O===t.RG32F||O===t.RGBA16F||O===t.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function b(R,x){let k;return R?x===null||x===1014||x===1020?k=t.DEPTH24_STENCIL8:x===1015?k=t.DEPTH32F_STENCIL8:x===1012&&(k=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===1014||x===1020?k=t.DEPTH_COMPONENT24:x===1015?k=t.DEPTH_COMPONENT32F:x===1012&&(k=t.DEPTH_COMPONENT16),k}function A(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==1003&&R.minFilter!==1006?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function w(R){const x=R.target;x.removeEventListener("dispose",w),E(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function v(R){const x=R.target;x.removeEventListener("dispose",v),C(x)}function E(R){const x=i.get(R);if(x.__webglInit===void 0)return;const k=R.source,j=f.get(k);if(j){const Q=j[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(R),Object.keys(j).length===0&&f.delete(k)}i.remove(R)}function L(R){const x=i.get(R);t.deleteTexture(x.__webglTexture);const k=R.source,j=f.get(k);delete j[x.__cacheKey],a.memory.textures--}function C(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let Q=0;Q<x.__webglFramebuffer[j].length;Q++)t.deleteFramebuffer(x.__webglFramebuffer[j][Q]);else t.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)t.deleteFramebuffer(x.__webglFramebuffer[j]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=R.textures;for(let j=0,Q=k.length;j<Q;j++){const oe=i.get(k[j]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(k[j])}i.remove(R)}let N=0;function X(){N=0}function z(){return N}function F(R){N=R}function G(){const R=N;return R>=r.maxTextures&&ze("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function D(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Z(R,x){const k=i.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const j=R.image;if(j===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{be(k,R,x);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+x)}function J(R,x){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){be(k,R,x);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+x)}function P(R,x){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){be(k,R,x);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+x)}function he(R,x){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Ue(k,R,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+x)}const Te={[hc]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[fc]:t.MIRRORED_REPEAT},Ye={[bn]:t.NEAREST,[Rp]:t.NEAREST_MIPMAP_NEAREST,[Cp]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[Pp]:t.LINEAR_MIPMAP_NEAREST,[qc]:t.LINEAR_MIPMAP_LINEAR},De={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function K(R,x){if(x.type===1015&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===1006||x.magFilter===1007||x.magFilter===1005||x.magFilter===1008||x.minFilter===1006||x.minFilter===1007||x.minFilter===1005||x.minFilter===1008)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Te[x.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Te[x.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Te[x.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ye[x.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ye[x.minFilter]),x.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,De[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===1003||x.minFilter!==1005&&x.minFilter!==1008||x.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function le(R,x){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",w));const j=x.source;let Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));const oe=D(x);if(oe!==R.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[oe].usedTimes++;const ae=Q[R.__cacheKey];ae!==void 0&&(Q[R.__cacheKey].usedTimes--,ae.usedTimes===0&&L(x)),R.__cacheKey=oe,R.__webglTexture=Q[oe].texture}return k}function ge(R,x,k){return Math.floor(Math.floor(R/k)/x)}function fe(R,x,k,j){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,k,j,x.data);else{oe.sort((Se,ee)=>Se.start-ee.start);let ae=0;for(let Se=1;Se<oe.length;Se++){const ee=oe[ae],Ne=oe[Se],_e=ee.start+ee.count,Xe=ge(Ne.start,x.width,4),Fe=ge(ee.start,x.width,4);Ne.start<=_e+1&&Xe===Fe&&ge(Ne.start+Ne.count-1,x.width,4)===Xe?ee.count=Math.max(ee.count,Ne.start+Ne.count-ee.start):(++ae,oe[ae]=Ne)}oe.length=ae+1;const O=n.getParameter(t.UNPACK_ROW_LENGTH),ce=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Se=0,ee=oe.length;Se<ee;Se++){const Ne=oe[Se],_e=Math.floor(Ne.start/4),Xe=Math.ceil(Ne.count/4),Fe=_e%x.width,I=Math.floor(_e/x.width),$=Xe,re=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Fe,I,$,re,k,j,x.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,O),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function be(R,x,k){let j=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=t.TEXTURE_3D);const Q=le(R,x),oe=x.source;n.bindTexture(j,R.__webglTexture,t.TEXTURE0+k);const ae=i.get(oe);if(oe.version!==ae.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+k),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){const $=st.getPrimaries(st.workingColorSpace),re=x.colorSpace===""?null:st.getPrimaries(x.colorSpace),de=x.colorSpace===""||$===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let O=m(x.image,!1,r.maxTextureSize);O=ft(x,O);const ce=s.convert(x.format,x.colorSpace),me=s.convert(x.type);let Se=M(x.internalFormat,ce,me,x.normalized,x.colorSpace,x.isVideoTexture);K(j,x);let ee;const Ne=x.mipmaps,_e=x.isVideoTexture!==!0,Xe=ae.__version===void 0||Q===!0,Fe=oe.dataReady,I=A(x,O);if(x.isDepthTexture)Se=b(x.format===gf,x.type),Xe&&(_e?n.texStorage2D(t.TEXTURE_2D,1,Se,O.width,O.height):n.texImage2D(t.TEXTURE_2D,0,Se,O.width,O.height,0,ce,me,null));else if(x.isDataTexture)if(Ne.length>0){_e&&Xe&&n.texStorage2D(t.TEXTURE_2D,I,Se,Ne[0].width,Ne[0].height);for(let $=0,re=Ne.length;$<re;$++)ee=Ne[$],_e?Fe&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ee.width,ee.height,ce,me,ee.data):n.texImage2D(t.TEXTURE_2D,$,Se,ee.width,ee.height,0,ce,me,ee.data);x.generateMipmaps=!1}else _e?(Xe&&n.texStorage2D(t.TEXTURE_2D,I,Se,O.width,O.height),Fe&&fe(x,O,ce,me)):n.texImage2D(t.TEXTURE_2D,0,Se,O.width,O.height,0,ce,me,O.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){_e&&Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,I,Se,Ne[0].width,Ne[0].height,O.depth);for(let $=0,re=Ne.length;$<re;$++)if(ee=Ne[$],x.format!==1023)if(ce!==null)if(_e){if(Fe)if(x.layerUpdates.size>0){const de=eh(ee.width,ee.height,x.format,x.type);for(const we of x.layerUpdates){const te=ee.data.subarray(we*de/ee.data.BYTES_PER_ELEMENT,(we+1)*de/ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,we,ee.width,ee.height,1,ce,te)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ee.width,ee.height,O.depth,ce,ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Se,ee.width,ee.height,O.depth,0,ee.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?Fe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ee.width,ee.height,O.depth,ce,me,ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Se,ee.width,ee.height,O.depth,0,ce,me,ee.data)}else{_e&&Xe&&n.texStorage2D(t.TEXTURE_2D,I,Se,Ne[0].width,Ne[0].height);for(let $=0,re=Ne.length;$<re;$++)ee=Ne[$],x.format!==1023?ce!==null?_e?Fe&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ee.width,ee.height,ce,ee.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Se,ee.width,ee.height,0,ee.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?Fe&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ee.width,ee.height,ce,me,ee.data):n.texImage2D(t.TEXTURE_2D,$,Se,ee.width,ee.height,0,ce,me,ee.data)}else if(x.isDataArrayTexture)if(_e){if(Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,I,Se,O.width,O.height,O.depth),Fe)if(x.layerUpdates.size>0){const $=eh(O.width,O.height,x.format,x.type);for(const re of x.layerUpdates){const de=O.data.subarray(re*$/O.data.BYTES_PER_ELEMENT,(re+1)*$/O.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,O.width,O.height,1,ce,me,de)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,ce,me,O.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,O.width,O.height,O.depth,0,ce,me,O.data);else if(x.isData3DTexture)_e?(Xe&&n.texStorage3D(t.TEXTURE_3D,I,Se,O.width,O.height,O.depth),Fe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,ce,me,O.data)):n.texImage3D(t.TEXTURE_3D,0,Se,O.width,O.height,O.depth,0,ce,me,O.data);else if(x.isFramebufferTexture){if(Xe)if(_e)n.texStorage2D(t.TEXTURE_2D,I,Se,O.width,O.height);else{let $=O.width,re=O.height;for(let de=0;de<I;de++)n.texImage2D(t.TEXTURE_2D,de,Se,$,re,0,ce,me,null),$>>=1,re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),O.parentNode!==$){$.appendChild(O),d.add(x),$.onpaint=ne=>{const se=ne.changedElements;for(const He of d)se.includes(He.image)&&(He.needsUpdate=!0)},$.requestPaint();return}const re=0,de=t.RGBA,we=t.RGBA,te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,re,de,we,te,O),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(_e&&Xe){const $=Ee(Ne[0]);n.texStorage2D(t.TEXTURE_2D,I,Se,$.width,$.height)}for(let $=0,re=Ne.length;$<re;$++)ee=Ne[$],_e?Fe&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ce,me,ee):n.texImage2D(t.TEXTURE_2D,$,Se,ce,me,ee);x.generateMipmaps=!1}else if(_e){if(Xe){const $=Ee(O);n.texStorage2D(t.TEXTURE_2D,I,Se,$.width,$.height)}Fe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,me,O)}else n.texImage2D(t.TEXTURE_2D,0,Se,ce,me,O);p(x)&&S(j),ae.__version=oe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ue(R,x,k){if(x.image.length!==6)return;const j=le(R,x),Q=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const oe=i.get(Q);if(Q.version!==oe.__version||j===!0){n.activeTexture(t.TEXTURE0+k);const ae=st.getPrimaries(st.workingColorSpace),O=x.colorSpace===""?null:st.getPrimaries(x.colorSpace),ce=x.colorSpace===""||ae===O?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const me=x.isCompressedTexture||x.image[0].isCompressedTexture,Se=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let te=0;te<6;te++)!me&&!Se?ee[te]=m(x.image[te],!0,r.maxCubemapSize):ee[te]=Se?x.image[te].image:x.image[te],ee[te]=ft(x,ee[te]);const Ne=ee[0],_e=s.convert(x.format,x.colorSpace),Xe=s.convert(x.type),Fe=M(x.internalFormat,_e,Xe,x.normalized,x.colorSpace),I=x.isVideoTexture!==!0,$=oe.__version===void 0||j===!0,re=Q.dataReady;let de=A(x,Ne);K(t.TEXTURE_CUBE_MAP,x);let we;if(me){I&&$&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Fe,Ne.width,Ne.height);for(let te=0;te<6;te++){we=ee[te].mipmaps;for(let ne=0;ne<we.length;ne++){const se=we[ne];x.format!==1023?_e!==null?I?re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne,0,0,se.width,se.height,_e,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne,Fe,se.width,se.height,0,se.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne,0,0,se.width,se.height,_e,Xe,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne,Fe,se.width,se.height,0,_e,Xe,se.data)}}}else{if(we=x.mipmaps,I&&$){we.length>0&&de++;const te=Ee(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Fe,te.width,te.height)}for(let te=0;te<6;te++)if(Se){I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ee[te].width,ee[te].height,_e,Xe,ee[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,ee[te].width,ee[te].height,0,_e,Xe,ee[te].data);for(let ne=0;ne<we.length;ne++){const se=we[ne].image[te].image;I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne+1,0,0,se.width,se.height,_e,Xe,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne+1,Fe,se.width,se.height,0,_e,Xe,se.data)}}else{I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e,Xe,ee[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Fe,_e,Xe,ee[te]);for(let ne=0;ne<we.length;ne++){const se=we[ne];I?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne+1,0,0,_e,Xe,se.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ne+1,Fe,_e,Xe,se.image[te])}}}p(x)&&S(t.TEXTURE_CUBE_MAP),oe.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Re(R,x,k,j,Q,oe){const ae=s.convert(k.format,k.colorSpace),O=s.convert(k.type),ce=M(k.internalFormat,ae,O,k.normalized,k.colorSpace),me=i.get(x),Se=i.get(k);if(Se.__renderTarget=x,!me.__hasExternalTextures){const ee=Math.max(1,x.width>>oe),Ne=Math.max(1,x.height>>oe);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,oe,ce,ee,Ne,x.depth,0,ae,O,null):n.texImage2D(Q,oe,ce,ee,Ne,0,ae,O,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),qe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,Q,Se.__webglTexture,0,Ie(x)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,Q,Se.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(R,x,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),x.depthBuffer){const j=x.depthTexture,Q=j&&j.isDepthTexture?j.type:null,oe=b(x.stencilBuffer,Q),ae=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;qe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie(x),oe,x.width,x.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie(x),oe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,oe,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,R)}else{const j=x.textures;for(let Q=0;Q<j.length;Q++){const oe=j[Q],ae=s.convert(oe.format,oe.colorSpace),O=s.convert(oe.type),ce=M(oe.internalFormat,ae,O,oe.normalized,oe.colorSpace);qe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie(x),ce,x.width,x.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie(x),ce,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ce,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(R,x,k){const j=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),K(t.TEXTURE_CUBE_MAP,x.depthTexture);const me=s.convert(x.depthTexture.format),Se=s.convert(x.depthTexture.type);let ee;x.depthTexture.format===1026?ee=t.DEPTH_COMPONENT24:x.depthTexture.format===1027&&(ee=t.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ee,x.width,x.height,0,me,Se,null)}}else Z(x.depthTexture,0);const oe=Q.__webglTexture,ae=Ie(x),O=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,ce=x.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===1026)qe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,O,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ce,O,oe,0);else if(x.depthTexture.format===1027)qe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,O,oe,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,ce,O,oe,0);else throw new Error("Unknown depthTexture format")}function Ke(R){const x=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=j}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let j=0;j<6;j++)ye(x.__webglFramebuffer[j],R,j);else{const j=R.texture.mipmaps;j&&j.length>0?ye(x.__webglFramebuffer[0],R,0):ye(x.__webglFramebuffer,R,0)}else if(k){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=t.createRenderbuffer(),Ge(x.__webglDepthbuffer[j],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,oe)}}else{const j=R.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Ge(x.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function rt(R,x,k){const j=i.get(R);x!==void 0&&Re(j.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ke(R)}function St(R){const x=R.texture,k=i.get(R),j=i.get(x);R.addEventListener("dispose",v);const Q=R.textures,oe=R.isWebGLCubeRenderTarget===!0,ae=Q.length>1;if(ae||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=x.version,a.memory.textures++),oe){k.__webglFramebuffer=[];for(let O=0;O<6;O++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[O]=[];for(let ce=0;ce<x.mipmaps.length;ce++)k.__webglFramebuffer[O][ce]=t.createFramebuffer()}else k.__webglFramebuffer[O]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let O=0;O<x.mipmaps.length;O++)k.__webglFramebuffer[O]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ae)for(let O=0,ce=Q.length;O<ce;O++){const me=i.get(Q[O]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&qe(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let O=0;O<Q.length;O++){const ce=Q[O];k.__webglColorRenderbuffer[O]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[O]);const me=s.convert(ce.format,ce.colorSpace),Se=s.convert(ce.type),ee=M(ce.internalFormat,me,Se,ce.normalized,ce.colorSpace,R.isXRRenderTarget===!0),Ne=Ie(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ee,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+O,t.RENDERBUFFER,k.__webglColorRenderbuffer[O])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Ge(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),K(t.TEXTURE_CUBE_MAP,x);for(let O=0;O<6;O++)if(x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)Re(k.__webglFramebuffer[O][ce],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+O,ce);else Re(k.__webglFramebuffer[O],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);p(x)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let O=0,ce=Q.length;O<ce;O++){const me=Q[O],Se=i.get(me);let ee=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,Se.__webglTexture),K(ee,me),Re(k.__webglFramebuffer,R,me,t.COLOR_ATTACHMENT0+O,ee,0),p(me)&&S(ee)}n.unbindTexture()}else{let O=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(O=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(O,j.__webglTexture),K(O,x),x.mipmaps&&x.mipmaps.length>0)for(let ce=0;ce<x.mipmaps.length;ce++)Re(k.__webglFramebuffer[ce],R,x,t.COLOR_ATTACHMENT0,O,ce);else Re(k.__webglFramebuffer,R,x,t.COLOR_ATTACHMENT0,O,0);p(x)&&S(O),n.unbindTexture()}R.depthBuffer&&Ke(R)}function Y(R){const x=R.textures;for(let k=0,j=x.length;k<j;k++){const Q=x[k];if(p(Q)){const oe=T(R),ae=i.get(Q).__webglTexture;n.bindTexture(oe,ae),S(oe),n.unbindTexture()}}}const lt=[],U=[];function At(R){if(R.samples>0){if(qe(R)===!1){const x=R.textures,k=R.width,j=R.height;let Q=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(R),O=x.length>1;if(O)for(let me=0;me<x.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ce=R.texture.mipmaps;ce&&ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let me=0;me<x.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),O){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[me]);const Se=i.get(x[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,k,j,0,0,k,j,Q,t.NEAREST),l===!0&&(lt.length=0,U.length=0,lt.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(lt.push(oe),U.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),O)for(let me=0;me<x.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ae.__webglColorRenderbuffer[me]);const Se=i.get(x[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Ie(R){return Math.min(r.maxSamples,R.samples)}function qe(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pe(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function ft(R,x){const k=R.colorSpace,j=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!=="srgb-linear"&&k!==""&&(st.getTransfer(k)==="srgb"?(j!==1023||Q!==1009)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",k)),x}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.getTextureUnits=z,this.setTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=J,this.setTexture3D=P,this.setTextureCube=he,this.rebindTextures=rt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Fv(t,e){function n(i,r=""){let s;const a=st.getTransfer(r);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ri({vertexShader:Bv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wi(new kf(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vv=class extends Hr{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,f=null;const g=typeof XRWebGLBinding<"u",_=new kv,m={},p=e.getContextAttributes();let S=null,T=null;const M=[],b=[],A=new bt;let w=null;const v=new Qn;v.viewport=new $t;const E=new Qn;E.viewport=new $t;const L=[v,E],C=new M_;let N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let le=M[K];return le===void 0&&(le=new bl,M[K]=le),le.getTargetRaySpace()},this.getControllerGrip=function(K){let le=M[K];return le===void 0&&(le=new bl,M[K]=le),le.getGripSpace()},this.getHand=function(K){let le=M[K];return le===void 0&&(le=new bl,M[K]=le),le.getHandSpace()};function z(K){const le=b.indexOf(K.inputSource);if(le===-1)return;const ge=M[le];ge!==void 0&&(ge.update(K.inputSource,K.frame,l||s),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",G);for(let K=0;K<M.length;K++){const le=b[K];le!==null&&(b[K]=null,M[K].disconnect(le))}N=null,X=null,_.reset();for(const K in m)delete m[K];t.setRenderTarget(S),h=null,d=null,u=null,i=null,T=null,De.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",F),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ge=null,fe=null;p.depth&&(fe=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,le=p.stencil?gf:ya,ge=p.stencil?_f:Br);const be={colorFormat:e.RGBA8,depthFormat:fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(be),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new wi(d.textureWidth,d.textureHeight,{format:Ma,type:Pr,depthTexture:new Cs(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,le),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new wi(h.framebufferWidth,h.framebufferHeight,{format:Ma,type:Pr,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),De.setContext(i),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(K){for(let le=0;le<K.removed.length;le++){const ge=K.removed[le],fe=b.indexOf(ge);fe>=0&&(b[fe]=null,M[fe].disconnect(ge))}for(let le=0;le<K.added.length;le++){const ge=K.added[le];let fe=b.indexOf(ge);if(fe===-1){for(let Ue=0;Ue<M.length;Ue++)if(Ue>=b.length){b.push(ge),fe=Ue;break}else if(b[Ue]===null){b[Ue]=ge,fe=Ue;break}if(fe===-1)break}const be=M[fe];be&&be.connect(ge)}}const D=new W,Z=new W;function J(K,le,ge){D.setFromMatrixPosition(le.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const fe=D.distanceTo(Z),be=le.projectionMatrix.elements,Ue=ge.projectionMatrix.elements,Re=be[14]/(be[10]-1),Ge=be[14]/(be[10]+1),ye=(be[9]+1)/be[5],Ke=(be[9]-1)/be[5],rt=(be[8]-1)/be[0],St=(Ue[8]+1)/Ue[0],Y=Re*rt,lt=Re*St,U=fe/(-rt+St),At=U*-rt;if(le.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(At),K.translateZ(U),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ie=Re+U,qe=Ge+U,pe=Y-At,ft=lt+(fe-At),Ee=ye*Ge/qe*Ie,R=Ke*Ge/qe*Ie;K.projectionMatrix.makePerspective(pe,ft,Ee,R,Ie,qe),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function P(K,le){le===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(le.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let le=K.near,ge=K.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),C.near=E.near=v.near=le,C.far=E.far=v.far=ge,(N!==C.near||X!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,X=C.far),C.layers.mask=K.layers.mask|6,v.layers.mask=C.layers.mask&-5,E.layers.mask=C.layers.mask&-3;const fe=K.parent,be=C.cameras;P(C,fe);for(let Ue=0;Ue<be.length;Ue++)P(be[Ue],fe);be.length===2?J(C,v,E):C.projectionMatrix.copy(v.projectionMatrix),he(K,C,fe)};function he(K,le,ge){ge===null?K.matrix.copy(le.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(le.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(le.projectionMatrix),K.projectionMatrixInverse.copy(le.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_c*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(K){o=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function(K){return m[K]};let Te=null;function Ye(K,le){if(c=le.getViewerPose(l||s),f=le,c!==null){const ge=c.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let fe=!1;ge.length!==C.cameras.length&&(C.cameras.length=0,fe=!0);for(let Ue=0;Ue<ge.length;Ue++){const Re=ge[Ue];let Ge=null;if(h!==null)Ge=h.getViewport(Re);else{const Ke=u.getViewSubImage(d,Re);Ge=Ke.viewport,Ue===0&&(t.setRenderTargetTextures(T,Ke.colorTexture,Ke.depthStencilTexture),t.setRenderTarget(T))}let ye=L[Ue];ye===void 0&&(ye=new Qn,ye.layers.enable(Ue),ye.viewport=new $t,L[Ue]=ye),ye.matrix.fromArray(Re.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Re.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ue===0&&(C.matrix.copy(ye.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),fe===!0&&C.cameras.push(ye)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Ue=u.getDepthInformation(ge[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(Ue,i.renderState)}if(be&&be.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let Ue=0;Ue<ge.length;Ue++){const Re=ge[Ue].camera;if(Re){let Ge=m[Re];Ge||(Ge=new Bf,m[Re]=Ge);const ye=u.getCameraImage(Re);Ge.sourceTexture=ye}}}}for(let ge=0;ge<M.length;ge++){const fe=b[ge],be=M[ge];fe!==null&&be!==void 0&&be.update(fe,le,l||s)}Te&&Te(K,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),f=null}const De=new qf;De.setAnimationLoop(Ye),this.setAnimationLoop=function(K){Te=K},this.dispose=function(){}}},Gv=new Zt,ed=new $e;ed.set(-1,0,0,0,1,0,0,0,1);function Hv(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gf(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),T=S.envMap,M=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ed),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Wv(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const M=T.program;i.uniformBlockBinding(S,M)}function c(S,T){let M=r[S.id];M===void 0&&(g(S),M=u(S),r[S.id]=M,S.addEventListener("dispose",m));const b=T.program;i.updateUBOMapping(S,b);const A=e.render.frame;s[S.id]!==A&&(h(S),s[S.id]=A)}function u(S){const T=d();S.__bindingPointIndex=T;const M=t.createBuffer(),b=S.__size,A=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,M),M}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const T=r[S.id],M=S.uniforms,b=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let A=0,w=M.length;A<w;A++){const v=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,L=v.length;E<L;E++){const C=v[E];if(f(C,A,E,b)===!0){const N=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let F=0;F<X.length;F++){const G=X[F],D=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,N+z,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):ArrayBuffer.isView(G)?C.__data.set(new G.constructor(G.buffer,G.byteOffset,C.__data.length)):(G.toArray(C.__data,z),z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(S,T,M,b){const A=S.value,w=T+"_"+M;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:ArrayBuffer.isView(A)?b[w]=A.slice():b[w]=A.clone(),!0;{const v=b[w];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return b[w]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(v.equals(A)===!1)return v.copy(A),!0}}return!1}function g(S){const T=S.uniforms;let M=0;const b=16;for(let w=0,v=T.length;w<v;w++){const E=Array.isArray(T[w])?T[w]:[T[w]];for(let L=0,C=E.length;L<C;L++){const N=E[L],X=Array.isArray(N.value)?N.value:[N.value];for(let z=0,F=X.length;z<F;z++){const G=X[z],D=_(G),Z=M%b,J=Z%D.boundary,P=Z+J;M+=J,P!==0&&b-P<D.storage&&(M+=b-P),N.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=D.storage}}}const A=M%b;return A>0&&(M+=b-A),S.__size=M,S.__cache={},this}function _(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),T}function m(S){const T=S.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var Xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Si=null;function Yv(){return Si===null&&(Si=new Km(Xv,16,16,Wo,zr),Si.name="DFG_LUT",Si.minFilter=Wn,Si.magFilter=Wn,Si.wrapS=ki,Si.wrapT=ki,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}var qv=class{constructor(t={}){const{canvas:e=bm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Pr}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=s;const g=h,_=new Set([xf,Sf,vf]),m=new Set([Pr,Br,df,_f,pf,mf]),p=new Uint32Array(4),S=new Int32Array(4),T=new W;let M=null,b=null;const A=[],w=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1,C=null;this._outputColorSpace=di;let N=0,X=0,z=null,F=-1,G=null;const D=new $t,Z=new $t;let J=null;const P=new ht(0);let he=0,Te=e.width,Ye=e.height,De=1,K=null,le=null;const ge=new $t(0,0,Te,Ye),fe=new $t(0,0,Te,Ye);let be=!1;const Ue=new Nf;let Re=!1,Ge=!1;const ye=new Zt,Ke=new W,rt=new $t,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function lt(){return z===null?De:1}let U=n;function At(y,B){return e.getContext(y,B)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r184"),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",ne,!1),U===null){const B="webgl2";if(U=At(B,y),U===null)throw At(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Ve("WebGLRenderer: "+y.message),y}let Ie,qe,pe,ft,Ee,R,x,k,j,Q,oe,ae,O,ce,me,Se,ee,Ne,_e,Xe,Fe,I,$;function re(){Ie=new Y_(U),Ie.init(),Fe=new Fv(U,Ie),qe=new B_(U,Ie,t,Fe),pe=new Uv(U,Ie),qe.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),ft=new $_(U),Ee=new Mv,R=new Ov(U,Ie,pe,Ee,qe,Fe,ft),x=new X_(E),k=new I_(U),I=new O_(U,k),j=new q_(U,k,ft,I),Q=new j_(U,j,k,I,ft),Ne=new Z_(U,qe,R),me=new z_(Ee),oe=new xv(E,x,Ie,qe,I,me),ae=new Hv(E,Ee),O=new Ev,ce=new Cv(Ie),ee=new U_(E,x,pe,Q,f,o),Se=new Nv(E,Q,qe),$=new Wv(U,ft,qe,pe),_e=new F_(U,Ie,ft),Xe=new K_(U,Ie,ft),ft.programs=oe.programs,E.capabilities=qe,E.extensions=Ie,E.properties=Ee,E.renderLists=O,E.shadowMap=Se,E.state=pe,E.info=ft}re(),g!==1009&&(v=new Q_(g,e.width,e.height,i,r));const de=new Vv(E,U);this.xr=de,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=Ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(y){y!==void 0&&(De=y,this.setSize(Te,Ye,!1))},this.getSize=function(y){return y.set(Te,Ye)},this.setSize=function(y,B,q=!0){if(de.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=y,Ye=B,e.width=Math.floor(y*De),e.height=Math.floor(B*De),q===!0&&(e.style.width=y+"px",e.style.height=B+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(Te*De,Ye*De).floor()},this.setDrawingBufferSize=function(y,B,q){Te=y,Ye=B,De=q,e.width=Math.floor(y*q),e.height=Math.floor(B*q),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(g===1009){Ve("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){ze("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(ge)},this.setViewport=function(y,B,q,H){y.isVector4?ge.set(y.x,y.y,y.z,y.w):ge.set(y,B,q,H),pe.viewport(D.copy(ge).multiplyScalar(De).round())},this.getScissor=function(y){return y.copy(fe)},this.setScissor=function(y,B,q,H){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,B,q,H),pe.scissor(Z.copy(fe).multiplyScalar(De).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(y){pe.setScissorTest(be=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){le=y},this.getClearColor=function(y){return y.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,q=!0){let H=0;if(y){let V=!1;if(z!==null){const ue=z.texture.format;V=_.has(ue)}if(V){const ue=z.texture.type,ve=m.has(ue),Me=ee.getClearColor(),Pe=ee.getClearAlpha(),ke=Me.r,Je=Me.g,it=Me.b;ve?(p[0]=ke,p[1]=Je,p[2]=it,p[3]=Pe,U.clearBufferuiv(U.COLOR,0,p)):(S[0]=ke,S[1]=Je,S[2]=it,S[3]=Pe,U.clearBufferiv(U.COLOR,0,S))}else H|=U.COLOR_BUFFER_BIT}B&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),C=y},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",ne,!1),ee.dispose(),O.dispose(),ce.dispose(),Ee.dispose(),x.dispose(),Q.dispose(),I.dispose(),$.dispose(),oe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ot),de.removeEventListener("sessionend",et),mt.stop()};function we(y){y.preventDefault(),Pu("WebGLRenderer: Context Lost."),L=!0}function te(){Pu("WebGLRenderer: Context Restored."),L=!1;const y=ft.autoReset,B=Se.enabled,q=Se.autoUpdate,H=Se.needsUpdate,V=Se.type;re(),ft.autoReset=y,Se.enabled=B,Se.autoUpdate=q,Se.needsUpdate=H,Se.type=V}function ne(y){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function se(y){const B=y.target;B.removeEventListener("dispose",se),He(B)}function He(y){ie(y),Ee.remove(y)}function ie(y){const B=Ee.get(y).programs;B!==void 0&&(B.forEach(function(q){oe.releaseProgram(q)}),y.isShaderMaterial&&oe.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,q,H,V,ue){B===null&&(B=St);const ve=V.isMesh&&V.matrixWorld.determinant()<0,Me=Yt(y,B,q,H,V);pe.setMaterial(H,ve);let Pe=q.index,ke=1;if(H.wireframe===!0){if(Pe=j.getWireframeAttribute(q),Pe===void 0)return;ke=2}const Je=q.drawRange,it=q.attributes.position;let Be=Je.start*ke,Tt=(Je.start+Je.count)*ke;ue!==null&&(Be=Math.max(Be,ue.start*ke),Tt=Math.min(Tt,(ue.start+ue.count)*ke)),Pe!==null?(Be=Math.max(Be,0),Tt=Math.min(Tt,Pe.count)):it!=null&&(Be=Math.max(Be,0),Tt=Math.min(Tt,it.count));const Dt=Tt-Be;if(Dt<0||Dt===1/0)return;I.setup(V,H,Me,q,Pe);let It,ut=_e;if(Pe!==null&&(It=k.get(Pe),ut=Xe,ut.setIndex(It)),V.isMesh)H.wireframe===!0?(pe.setLineWidth(H.wireframeLinewidth*lt()),ut.setMode(U.LINES)):ut.setMode(U.TRIANGLES);else if(V.isLine){let un=H.linewidth;un===void 0&&(un=1),pe.setLineWidth(un*lt()),V.isLineSegments?ut.setMode(U.LINES):V.isLineLoop?ut.setMode(U.LINE_LOOP):ut.setMode(U.LINE_STRIP)}else V.isPoints?ut.setMode(U.POINTS):V.isSprite&&ut.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const un=V._multiDrawStarts,Le=V._multiDrawCounts,oi=V._multiDrawCount,dt=Pe?k.get(Pe).bytesPerElement:1,Zn=Ee.get(H).currentProgram.getUniforms();for(let gi=0;gi<oi;gi++)Zn.setValue(U,"_gl_DrawID",gi),ut.render(un[gi]/dt,Le[gi])}else if(V.isInstancedMesh)ut.renderInstances(Be,Dt,V.count);else if(q.isInstancedBufferGeometry){const un=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Le=Math.min(q.instanceCount,un);ut.renderInstances(Be,Dt,Le)}else ut.render(Be,Dt)};function Oe(y,B,q){y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=1,y.needsUpdate=!0,gt(y,B,q),y.side=0,y.needsUpdate=!0,gt(y,B,q),y.side=2):gt(y,B,q)}this.compile=function(y,B,q=null){q===null&&(q=y),b=ce.get(q),b.init(B),w.push(b),q.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),y!==q&&y.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const H=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ue=V.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Me=ue[ve];Oe(Me,q,V),H.add(Me)}else Oe(ue,q,V),H.add(ue)}),b=w.pop(),H},this.compileAsync=function(y,B,q=null){const H=this.compile(y,B,q);return new Promise(V=>{function ue(){if(H.forEach(function(ve){Ee.get(ve).currentProgram.isReady()&&H.delete(ve)}),H.size===0){V(y);return}setTimeout(ue,10)}Ie.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ce=null;function We(y){Ce&&Ce(y)}function Ot(){mt.stop()}function et(){mt.start()}const mt=new qf;mt.setAnimationLoop(We),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(y){Ce=y,de.setAnimationLoop(y),y===null?mt.stop():mt.start()},de.addEventListener("sessionstart",Ot),de.addEventListener("sessionend",et),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;C!==null&&C.renderStart(y,B);const q=de.enabled===!0&&de.isPresenting===!0,H=v!==null&&(z===null||q)&&v.begin(E,z);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(B),B=de.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,B,z),b=ce.get(y,w.length),b.init(B),b.state.textureUnits=R.getTextureUnits(),w.push(b),ye.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ue.setFromProjectionMatrix(ye,As,B.reversedDepth),Ge=this.localClippingEnabled,Re=me.init(this.clippingPlanes,Ge),M=O.get(y,A.length),M.init(),A.push(M),de.enabled===!0&&de.isPresenting===!0){const ue=E.xr.getDepthSensingMesh();ue!==null&&Vt(ue,B,-1/0,E.sortObjects)}Vt(y,B,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(K,le),Y=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Y&&ee.addToRenderList(M,y),this.info.render.frame++,Re===!0&&me.beginShadows();const V=b.state.shadowsArray;if(Se.render(V,y,B),Re===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&v.hasRenderPass())===!1){const ue=M.opaque,ve=M.transmissive;if(b.setupLights(),B.isArrayCamera){const Me=B.cameras;if(ve.length>0)for(let Pe=0,ke=Me.length;Pe<ke;Pe++){const Je=Me[Pe];xt(ue,ve,y,Je)}Y&&ee.render(y);for(let Pe=0,ke=Me.length;Pe<ke;Pe++){const Je=Me[Pe];wt(M,y,Je,Je.viewport)}}else ve.length>0&&xt(ue,ve,y,B),Y&&ee.render(y),wt(M,y,B)}z!==null&&X===0&&(R.updateMultisampleRenderTarget(z),R.updateRenderTargetMipmap(z)),H&&v.end(E),y.isScene===!0&&y.onAfterRender(E,y,B),I.resetDefaultState(),F=-1,G=null,w.pop(),w.length>0?(b=w[w.length-1],R.setTextureUnits(b.state.textureUnits),Re===!0&&me.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,C!==null&&C.renderEnd()};function Vt(y,B,q,H){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ue.intersectsSprite(y)){H&&rt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ye);const ue=Q.update(y),ve=y.material;ve.visible&&M.push(y,ue,ve,q,rt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ue.intersectsObject(y))){const ue=Q.update(y),ve=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),rt.copy(y.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),rt.copy(ue.boundingSphere.center)),rt.applyMatrix4(y.matrixWorld).applyMatrix4(ye)),Array.isArray(ve)){const Me=ue.groups;for(let Pe=0,ke=Me.length;Pe<ke;Pe++){const Je=Me[Pe],it=ve[Je.materialIndex];it&&it.visible&&M.push(y,ue,it,q,rt.z,Je)}}else ve.visible&&M.push(y,ue,ve,q,rt.z,null)}}const V=y.children;for(let ue=0,ve=V.length;ue<ve;ue++)Vt(V[ue],B,q,H)}function wt(y,B,q,H){const{opaque:V,transmissive:ue,transparent:ve}=y;b.setupLightsView(q),Re===!0&&me.setGlobalState(E.clippingPlanes,q),H&&pe.viewport(D.copy(H)),V.length>0&&ct(V,B,q),ue.length>0&&ct(ue,B,q),ve.length>0&&ct(ve,B,q),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function xt(y,B,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const it=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new wi(1,1,{generateMipmaps:!0,type:it?zr:Pr,minFilter:qc,samples:Math.max(4,qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const V=b.state.transmissionRenderTarget[H.id],ue=H.viewport||D;V.setSize(ue.z*E.transmissionResolutionScale,ue.w*E.transmissionResolutionScale);const ve=E.getRenderTarget(),Me=E.getActiveCubeFace(),Pe=E.getActiveMipmapLevel();E.setRenderTarget(V),E.getClearColor(P),he=E.getClearAlpha(),he<1&&E.setClearColor(16777215,.5),E.clear(),Y&&ee.render(q);const ke=E.toneMapping;E.toneMapping=0;const Je=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),Re===!0&&me.setGlobalState(E.clippingPlanes,H),ct(y,q,H),R.updateMultisampleRenderTarget(V),R.updateRenderTargetMipmap(V),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Be=0,Tt=B.length;Be<Tt;Be++){const{object:Dt,geometry:It,material:ut,group:un}=B[Be];if(ut.side===2&&Dt.layers.test(H.layers)){const Le=ut.side;ut.side=1,ut.needsUpdate=!0,wn(Dt,q,H,It,ut,un),ut.side=Le,ut.needsUpdate=!0,it=!0}}it===!0&&(R.updateMultisampleRenderTarget(V),R.updateRenderTargetMipmap(V))}E.setRenderTarget(ve,Me,Pe),E.setClearColor(P,he),Je!==void 0&&(H.viewport=Je),E.toneMapping=ke}function ct(y,B,q){const H=B.isScene===!0?B.overrideMaterial:null;for(let V=0,ue=y.length;V<ue;V++){const ve=y[V],{object:Me,geometry:Pe,group:ke}=ve;let Je=ve.material;Je.allowOverride===!0&&H!==null&&(Je=H),Me.layers.test(q.layers)&&wn(Me,B,q,Pe,Je,ke)}}function wn(y,B,q,H,V,ue){y.onBeforeRender(E,B,q,H,V,ue),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(E,B,q,H,y,ue),V.transparent===!0&&V.side===2&&V.forceSinglePass===!1?(V.side=1,V.needsUpdate=!0,E.renderBufferDirect(q,B,H,V,y,ue),V.side=0,V.needsUpdate=!0,E.renderBufferDirect(q,B,H,V,y,ue),V.side=2):E.renderBufferDirect(q,B,H,V,y,ue),y.onAfterRender(E,B,q,H,V,ue)}function gt(y,B,q){B.isScene!==!0&&(B=St);const H=Ee.get(y),V=b.state.lights,ue=b.state.shadowsArray,ve=V.state.version,Me=oe.getParameters(y,V.state,ue,B,q,b.state.lightProbeGridArray),Pe=oe.getProgramCacheKey(Me);let ke=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;const Je=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=x.get(y.envMap||H.environment,Je),H.envMapRotation=H.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,ke===void 0&&(y.addEventListener("dispose",se),ke=new Map,H.programs=ke);let it=ke.get(Pe);if(it!==void 0){if(H.currentProgram===it&&H.lightsStateVersion===ve)return Un(y,Me),it}else Me.uniforms=oe.getUniforms(y),C!==null&&y.isNodeMaterial&&C.build(y,q,Me),y.onBeforeCompile(Me,E),it=oe.acquireProgram(Me,Pe),ke.set(Pe,it),H.uniforms=Me.uniforms;const Be=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Be.clippingPlanes=me.uniform),Un(y,Me),H.needsLights=Li(y),H.lightsStateVersion=ve,H.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=it,H.uniformsList=null,it}function cn(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=Io.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function Un(y,B){const q=Ee.get(y);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Xt(y,B){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;T.setFromMatrixPosition(B.matrixWorld);for(let q=0,H=y.length;q<H;q++){const V=y[q];if(V.texture!==null&&V.boundingBox.containsPoint(T))return V}return null}function Yt(y,B,q,H,V){B.isScene!==!0&&(B=St),R.resetTextureUnits();const ue=B.fog,ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,Me=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:st.workingColorSpace,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,ke=x.get(H.envMap||ve,Pe),Je=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Be=!!q.morphAttributes.position,Tt=!!q.morphAttributes.normal,Dt=!!q.morphAttributes.color;let It=0;H.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(It=E.toneMapping);const ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,un=ut!==void 0?ut.length:0,Le=Ee.get(H),oi=b.state.lights;if(Re===!0&&(Ge===!0||y!==G)){const vt=y===G&&H.id===F;me.setState(H,y,vt)}let dt=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==oi.state.version||Le.outputColorSpace!==Me||V.isBatchedMesh&&Le.batching===!1||!V.isBatchedMesh&&Le.batching===!0||V.isBatchedMesh&&Le.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Le.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Le.instancing===!1||!V.isInstancedMesh&&Le.instancing===!0||V.isSkinnedMesh&&Le.skinning===!1||!V.isSkinnedMesh&&Le.skinning===!0||V.isInstancedMesh&&Le.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Le.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Le.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Le.instancingMorph===!1&&V.morphTexture!==null||Le.envMap!==ke||H.fog===!0&&Le.fog!==ue||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==me.numPlanes||Le.numIntersection!==me.numIntersection)||Le.vertexAlphas!==Je||Le.vertexTangents!==it||Le.morphTargets!==Be||Le.morphNormals!==Tt||Le.morphColors!==Dt||Le.toneMapping!==It||Le.morphTargetsCount!==un||!!Le.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(dt=!0):(dt=!0,Le.__version=H.version);let Zn=Le.currentProgram;dt===!0&&(Zn=gt(H,B,V),C&&H.isNodeMaterial&&C.onUpdateProgram(H,Zn,Le));let gi=!1,qi=!1,qr=!1;const Mt=Zn.getUniforms(),Bt=Le.uniforms;if(pe.useProgram(Zn.program)&&(gi=!0,qi=!0,qr=!0),H.id!==F&&(F=H.id,qi=!0),Le.needsLights){const vt=Xt(b.state.lightProbeGridArray,V);Le.lightProbeGrid!==vt&&(Le.lightProbeGrid=vt,qi=!0)}if(gi||G!==y){pe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Mt.setValue(U,"projectionMatrix",y.projectionMatrix),Mt.setValue(U,"viewMatrix",y.matrixWorldInverse);const vt=Mt.map.cameraPosition;vt!==void 0&&vt.setValue(U,Ke.setFromMatrixPosition(y.matrixWorld)),qe.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),G!==y&&(G=y,qi=!0,qr=!0)}if(Le.needsLights&&(oi.state.directionalShadowMap.length>0&&Mt.setValue(U,"directionalShadowMap",oi.state.directionalShadowMap,R),oi.state.spotShadowMap.length>0&&Mt.setValue(U,"spotShadowMap",oi.state.spotShadowMap,R),oi.state.pointShadowMap.length>0&&Mt.setValue(U,"pointShadowMap",oi.state.pointShadowMap,R)),V.isSkinnedMesh){Mt.setOptional(U,V,"bindMatrix"),Mt.setOptional(U,V,"bindMatrixInverse");const vt=V.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),Mt.setValue(U,"boneTexture",vt.boneTexture,R))}V.isBatchedMesh&&(Mt.setOptional(U,V,"batchingTexture"),Mt.setValue(U,"batchingTexture",V._matricesTexture,R),Mt.setOptional(U,V,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",V._indirectTexture,R),Mt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",V._colorsTexture,R));const Ki=q.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Ne.update(V,q,Zn),(qi||Le.receiveShadow!==V.receiveShadow)&&(Le.receiveShadow=V.receiveShadow,Mt.setValue(U,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Bt.envMapIntensity.value=B.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=Yv()),qi){if(Mt.setValue(U,"toneMappingExposure",E.toneMappingExposure),Le.needsLights&&Qt(Bt,qr),ue&&H.fog===!0&&ae.refreshFogUniforms(Bt,ue),ae.refreshMaterialUniforms(Bt,H,De,Ye,b.state.transmissionRenderTarget[y.id]),Le.needsLights&&Le.lightProbeGrid){const vt=Le.lightProbeGrid;Bt.probesSH.value=vt.texture,Bt.probesMin.value.copy(vt.boundingBox.min),Bt.probesMax.value.copy(vt.boundingBox.max),Bt.probesResolution.value.copy(vt.resolution)}Io.upload(U,cn(Le),Bt,R)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Io.upload(U,cn(Le),Bt,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Mt.setValue(U,"center",V.center),Mt.setValue(U,"modelViewMatrix",V.modelViewMatrix),Mt.setValue(U,"normalMatrix",V.normalMatrix),Mt.setValue(U,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const vt=H.uniformsGroups;for(let Vs=0,Kr=vt.length;Vs<Kr;Vs++){const Tu=vt[Vs];$.update(Tu,Zn),$.bind(Tu,Zn)}}return Zn}function Qt(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function Li(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(y,B,q){const H=Ee.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ee.get(y.texture).__webglTexture=B,Ee.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const q=Ee.get(y);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const Yr=U.createFramebuffer();this.setRenderTarget=function(y,B=0,q=0){z=y,N=B,X=q;let H=null,V=!1,ue=!1;if(y){const ve=Ee.get(y);if(ve.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(U.FRAMEBUFFER,ve.__webglFramebuffer),D.copy(y.viewport),Z.copy(y.scissor),J=y.scissorTest,pe.viewport(D),pe.scissor(Z),pe.setScissorTest(J),F=-1;return}else if(ve.__webglFramebuffer===void 0)R.setupRenderTarget(y);else if(ve.__hasExternalTextures)R.rebindTextures(y,Ee.get(y.texture).__webglTexture,Ee.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ke=y.depthTexture;if(ve.__boundDepthTexture!==ke){if(ke!==null&&Ee.has(ke)&&(y.width!==ke.image.width||y.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(y)}}const Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ue=!0);const Pe=Ee.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?H=Pe[B][q]:H=Pe[B],V=!0):y.samples>0&&R.useMultisampledRTT(y)===!1?H=Ee.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?H=Pe[q]:H=Pe,D.copy(y.viewport),Z.copy(y.scissor),J=y.scissorTest}else D.copy(ge).multiplyScalar(De).floor(),Z.copy(fe).multiplyScalar(De).floor(),J=be;if(q!==0&&(H=Yr),pe.bindFramebuffer(U.FRAMEBUFFER,H)&&pe.drawBuffers(y,H),pe.viewport(D),pe.scissor(Z),pe.setScissorTest(J),V){const ve=Ee.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve.__webglTexture,q)}else if(ue){const ve=B;for(let Me=0;Me<y.textures.length;Me++){const Pe=Ee.get(y.textures[Me]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Me,Pe.__webglTexture,q,ve)}}else if(y!==null&&q!==0){const ve=Ee.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ve.__webglTexture,q)}F=-1},this.readRenderTargetPixels=function(y,B,q,H,V,ue,ve,Me=0){if(!(y&&y.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe){pe.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const ke=y.textures[Me],Je=ke.format,it=ke.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me),!qe.textureFormatReadable(Je)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(it)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-H&&q>=0&&q<=y.height-V&&U.readPixels(B,q,H,V,Fe.convert(Je),Fe.convert(it),ue)}finally{const ke=z!==null?Ee.get(z).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(y,B,q,H,V,ue,ve,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(Pe=Pe[ve]),Pe)if(B>=0&&B<=y.width-H&&q>=0&&q<=y.height-V){pe.bindFramebuffer(U.FRAMEBUFFER,Pe);const ke=y.textures[Me],Je=ke.format,it=ke.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me),!qe.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Be),U.bufferData(U.PIXEL_PACK_BUFFER,ue.byteLength,U.STREAM_READ),U.readPixels(B,q,H,V,Fe.convert(Je),Fe.convert(it),0);const Tt=z!==null?Ee.get(z).__webglFramebuffer:null;pe.bindFramebuffer(U.FRAMEBUFFER,Tt);const Dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await wm(U,Dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Be),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ue),U.deleteBuffer(Be),U.deleteSync(Dt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,q=0){const H=Math.pow(2,-q),V=Math.floor(y.image.width*H),ue=Math.floor(y.image.height*H),ve=B!==null?B.x:0,Me=B!==null?B.y:0;R.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ve,Me,V,ue),pe.unbindTexture()};const en=U.createFramebuffer(),Ft=U.createFramebuffer();this.copyTextureToTexture=function(y,B,q=null,H=null,V=0,ue=0){let ve,Me,Pe,ke,Je,it,Be,Tt,Dt;const It=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(q!==null)ve=q.max.x-q.min.x,Me=q.max.y-q.min.y,Pe=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,Je=q.min.y,it=q.isBox3?q.min.z:0;else{const Bt=Math.pow(2,-V);ve=Math.floor(It.width*Bt),Me=Math.floor(It.height*Bt),y.isDataArrayTexture?Pe=It.depth:y.isData3DTexture?Pe=Math.floor(It.depth*Bt):Pe=1,ke=0,Je=0,it=0}H!==null?(Be=H.x,Tt=H.y,Dt=H.z):(Be=0,Tt=0,Dt=0);const ut=Fe.convert(B.format),un=Fe.convert(B.type);let Le;B.isData3DTexture?(R.setTexture3D(B,0),Le=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),Le=U.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),Le=U.TEXTURE_2D),pe.activeTexture(U.TEXTURE0),pe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),pe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),pe.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const oi=pe.getParameter(U.UNPACK_ROW_LENGTH),dt=pe.getParameter(U.UNPACK_IMAGE_HEIGHT),Zn=pe.getParameter(U.UNPACK_SKIP_PIXELS),gi=pe.getParameter(U.UNPACK_SKIP_ROWS),qi=pe.getParameter(U.UNPACK_SKIP_IMAGES);pe.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),pe.pixelStorei(U.UNPACK_SKIP_ROWS,Je),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,it);const qr=y.isDataArrayTexture||y.isData3DTexture,Mt=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const Bt=Ee.get(y),Ki=Ee.get(B),vt=Ee.get(Bt.__renderTarget),Vs=Ee.get(Ki.__renderTarget);pe.bindFramebuffer(U.READ_FRAMEBUFFER,vt.__webglFramebuffer),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Vs.__webglFramebuffer);for(let Kr=0;Kr<Pe;Kr++)qr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(y).__webglTexture,V,it+Kr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(B).__webglTexture,ue,Dt+Kr)),U.blitFramebuffer(ke,Je,ve,Me,Be,Tt,ve,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||Ee.has(y)){const Bt=Ee.get(y),Ki=Ee.get(B);pe.bindFramebuffer(U.READ_FRAMEBUFFER,en),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ft);for(let vt=0;vt<Pe;vt++)qr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Bt.__webglTexture,V,it+vt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Bt.__webglTexture,V),Mt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ki.__webglTexture,ue,Dt+vt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ki.__webglTexture,ue),V!==0?U.blitFramebuffer(ke,Je,ve,Me,Be,Tt,ve,Me,U.COLOR_BUFFER_BIT,U.NEAREST):Mt?U.copyTexSubImage3D(Le,ue,Be,Tt,Dt+vt,ke,Je,ve,Me):U.copyTexSubImage2D(Le,ue,Be,Tt,ke,Je,ve,Me);pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Mt?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Le,ue,Be,Tt,Dt,ve,Me,Pe,ut,un,It.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Le,ue,Be,Tt,Dt,ve,Me,Pe,ut,It.data):U.texSubImage3D(Le,ue,Be,Tt,Dt,ve,Me,Pe,ut,un,It):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ue,Be,Tt,ve,Me,ut,un,It.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ue,Be,Tt,It.width,It.height,ut,It.data):U.texSubImage2D(U.TEXTURE_2D,ue,Be,Tt,ve,Me,ut,un,It);pe.pixelStorei(U.UNPACK_ROW_LENGTH,oi),pe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,dt),pe.pixelStorei(U.UNPACK_SKIP_PIXELS,Zn),pe.pixelStorei(U.UNPACK_SKIP_ROWS,gi),pe.pixelStorei(U.UNPACK_SKIP_IMAGES,qi),ue===0&&B.generateMipmaps&&U.generateMipmap(Le),pe.unbindTexture()},this.initRenderTarget=function(y){Ee.get(y).__webglFramebuffer===void 0&&R.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?R.setTextureCube(y,0):y.isData3DTexture?R.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?R.setTexture2DArray(y,0):R.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){N=0,X=0,z=null,pe.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=st._getDrawingBufferColorSpace(t),e.unpackColorSpace=st._getUnpackColorSpace()}},Kv=class{constructor(){this.canvas=document.getElementById("webgl-canvas"),this.canvas&&(this.scene=new Gm,this.camera=new Qn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=30,this.renderer=new qv({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.particles=[],this.particleCount=window.innerWidth<768?100:300,this.mouse={x:0,y:0,targetX:0,targetY:0},this.init(),this.animate(),this.addEvents())}init(){const t=new pi,e=new Float32Array(this.particleCount*3),n=new Float32Array(this.particleCount*3),i=new ht("#00ced1"),r=new ht("#8a2be2");for(let a=0;a<this.particleCount;a++){e[a*3]=(Math.random()-.5)*100,e[a*3+1]=(Math.random()-.5)*100,e[a*3+2]=(Math.random()-.5)*50;const o=i.clone().lerp(r,Math.random());n[a*3]=o.r,n[a*3+1]=o.g,n[a*3+2]=o.b,this.particles.push({velocity:new W((Math.random()-.5)*.05,(Math.random()-.5)*.05,(Math.random()-.5)*.05),originalPos:new W(e[a*3],e[a*3+1],e[a*3+2])})}t.setAttribute("position",new ri(e,3)),t.setAttribute("color",new ri(n,3));const s=new Of({size:.8,vertexColors:!0,transparent:!0,opacity:.8,blending:2});this.particleSystem=new e_(t,s),this.scene.add(this.particleSystem),this.lineMaterial=new Uf({color:16777215,transparent:!0,opacity:.1,blending:2}),this.lineGeometry=new pi,this.linesMesh=new Qm(this.lineGeometry,this.lineMaterial),this.scene.add(this.linesMesh)}addEvents(){window.addEventListener("resize",this.onResize.bind(this)),window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("scroll",()=>{this.camera.position.y=-(window.scrollY*.01)})}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),window.innerWidth<768&&this.particleCount>150}onMouseMove(t){this.mouse.targetX=t.clientX/window.innerWidth*2-1,this.mouse.targetY=-(t.clientY/window.innerHeight)*2+1}animate(){requestAnimationFrame(this.animate.bind(this)),this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.05,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.05,this.scene.rotation.x=this.mouse.y*.2,this.scene.rotation.y=this.mouse.x*.2;const t=this.particleSystem.geometry.attributes.position.array;for(let e=0;e<this.particleCount;e++){const n=this.particles[e];t[e*3]+=n.velocity.x,t[e*3+1]+=n.velocity.y,t[e*3+2]+=n.velocity.z,Math.abs(t[e*3])>50&&(n.velocity.x*=-1),Math.abs(t[e*3+1])>50&&(n.velocity.y*=-1),Math.abs(t[e*3+2])>25&&(n.velocity.z*=-1)}this.particleSystem.geometry.attributes.position.needsUpdate=!0,this.updateConnections(t),this.renderer.render(this.scene,this.camera)}updateConnections(t){const e=[],i=Math.min(this.particleCount,150);for(let r=0;r<i;r++)for(let s=r+1;s<i;s++){const a=t[r*3]-t[s*3],o=t[r*3+1]-t[s*3+1],l=t[r*3+2]-t[s*3+2];a*a+o*o+l*l<225&&e.push(t[r*3],t[r*3+1],t[r*3+2],t[s*3],t[s*3+1],t[s*3+2])}this.lineGeometry.setAttribute("position",new si(e,3))}};document.addEventListener("DOMContentLoaded",()=>{new Kv});function Fi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function td(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ta={duration:.5,overwrite:!1,delay:0},Jc,ln,Rt,ni=1e8,Et=1/ni,Mc=Math.PI*2,$v=Mc/4,Zv=0,nd=Math.sqrt,jv=Math.cos,Jv=Math.sin,sn=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Xi=function(e){return typeof e=="number"},Qc=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},Pn=function(e){return e!==!1},eu=function(){return typeof window<"u"},mo=function(e){return Ut(e)||sn(e)},id=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,Qv=/random\([^)]+\)/g,e0=/,\s*/g,Th=/(?:-?\.?\d|\.)+/gi,rd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$l=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sd=/[+-]=-?[.\d]+/,t0=/[^,'"\[\]\s]+/gi,n0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,xi,yc,tu,Kn={},jo={},ad,od=function(e){return(jo=Ls(e,Kn))&&Nn},nu=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},ba=function(e,n){return!n&&console.warn(e)},ld=function(e,n){return e&&(Kn[e]=n)&&jo&&(jo[e]=n)||Kn},wa=function(){return 0},i0={suppressEvents:!0,isStart:!0,kill:!1},No={suppressEvents:!0,kill:!1},r0={suppressEvents:!0},iu={},cr=[],Ec={},cd,kn={},Zl={},bh=30,Uo=[],ru="",su=function(e){var n=e[0],i,r;if(Ci(n)||Ut(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Uo.length;r--&&!Uo[r].targetTest(n););i=Uo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ld(e[r],i)))||e.splice(r,1);return e},Lr=function(e){return e._gsap||su(ii(e))[0]._gsap},ud=function(e,n,i){return(i=e[n])&&Ut(i)?e[n]():Qc(i)&&e.getAttribute&&e.getAttribute(n)||i},Ln=function(e,n){return(e=e.split(",")).forEach(n)||e},zt=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},xs=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},s0=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},Jo=function(){var e=cr.length,n=cr.slice(0),i,r;for(Ec={},cr.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},au=function(e){return!!(e._initted||e._startAt||e.add)},hd=function(e,n,i,r){cr.length&&!ln&&Jo(),e.render(n,i,r||!!(ln&&n<0&&au(e))),cr.length&&!ln&&Jo()},fd=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(t0).length<2?n:sn(e)?e.trim():e},dd=function(e){return e},$n=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},a0=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Ls=function(e,n){for(var i in n)e[i]=n[i];return e},wh=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ci(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},Qo=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},ca=function(e){var n=e.parent||Pt,i=e.keyframes?a0(gn(e.keyframes)):$n;if(Pn(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},o0=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},pd=function(e,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=a,n.parent=n._dp=e,n},fl=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:e[i]===n&&(e[i]=a),a?a._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},fr=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Dr=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},l0=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Tc=function(e,n,i,r){return e._startAt&&(ln?e._startAt.revert(No):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},c0=function t(e){return!e||e._ts&&t(e.parent)},Ah=function(e){return e._repeat?Ds(e._tTime,e=e.duration()+e._rDelay)*e:0},Ds=function(e,n){var i=Math.floor(e=Ct(e/n));return e&&i===e?i-1:i},el=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},dl=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},pl=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ct(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),dl(e),i._dirty||Dr(i,e)),e},md=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=el(e.rawTime(),n),(!n._dur||ka(0,n.totalDuration(),i)-n._tTime>Et)&&n.render(i,!0)),Dr(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Et}},Ei=function(e,n,i,r){return n.parent&&fr(n),n._start=Ct((Xi(i)?i:i||e!==Pt?Jn(e,i,n):e._time)+n._delay),n._end=Ct(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),pd(e,n,"_first","_last",e._sort?"_start":0),bc(n)||(e._recent=n),r||md(e,n),e._ts<0&&pl(e,e._tTime),e},_d=function(e,n){return(Kn.ScrollTrigger||nu("scrollTrigger",n))&&Kn.ScrollTrigger.create(n,e)},gd=function(e,n,i,r,s){if(lu(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&cd!==Gn.frame)return cr.push(e),e._lazy=[s,r],1},u0=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},bc=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},h0=function(e,n,i,r){var s=e.ratio,a=n<0||!n&&(!e._start&&u0(e)&&!(!e._initted&&bc(e))||(e._ts<0||e._dp._ts<0)&&!bc(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=ka(0,e._tDur,n),u=Ds(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ds(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||ln||r||e._zTime===Et||!n&&e._zTime){if(!e._initted&&gd(e,n,r,i,l))return;for(d=e._zTime,e._zTime=n||(i?Et:0),i||(i=n&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;n<0&&Tc(e,n,i,!0),e._onUpdate&&!i&&Xn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Xn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===a&&(a&&fr(e,1),!i&&!ln&&(Xn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},f0=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},Is=function(e,n,i,r){var s=e._repeat,a=Ct(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ct(a*(s+1)+e._rDelay*s):a,o>0&&!r&&pl(e,e._tTime=e._tDur*o),e.parent&&dl(e),i||Dr(e.parent,e),e},Rh=function(e){return e instanceof Cn?Dr(e):Is(e,e._dur)},d0={_start:0,endTime:wa,totalDuration:wa},Jn=function t(e,n,i){var r=e.labels,s=e._recent||d0,a=e.duration()>=ni?s.endTime(!1):e._dur,o,l,c;return sn(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(gn(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},ua=function(e,n,i){var r=Xi(n[1]),s=(r?2:1)+(e<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Pn(l.vars.inherit)&&l.parent;a.immediateRender=Pn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=n[s-1]}return new Wt(n[0],a,n[s+1])},_r=function(e,n){return e||e===0?n(e):n},ka=function(e,n,i){return i<e?e:i>n?n:i},mn=function(e,n){return!sn(e)||!(n=n0.exec(e))?"":n[1]},p0=function(e,n,i){return _r(i,function(r){return ka(e,n,r)})},wc=[].slice,vd=function(e,n){return e&&Ci(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==xi},m0=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return sn(r)&&!n||vd(r,1)?(s=i).push.apply(s,ii(r)):i.push(r)})||i},ii=function(e,n,i){return Rt&&!n&&Rt.selector?Rt.selector(e):sn(e)&&!i&&(yc||!Ns())?wc.call((n||tu).querySelectorAll(e),0):gn(e)?m0(e,i):vd(e)?wc.call(e,0):e?[e]:[]},Ac=function(e){return e=ii(e)[0]||ba("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return ii(n,i.querySelectorAll?i:i===e?ba("Invalid scope")||tu.createElement("div"):e)}},Sd=function(e){return e.sort(function(){return .5-Math.random()})},xd=function(e){if(Ut(e))return e;var n=Ci(e)?e:{each:e},i=Ir(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=n.axis,u=r,d=r;return sn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(h,f,g){var _=(g||n).length,m=a[_],p,S,T,M,b,A,w,v,E;if(!m){if(E=n.grid==="auto"?0:(n.grid||[1,ni])[1],!E){for(w=-ni;w<(w=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=a[_]=[],p=l?Math.min(E,_)*u-.5:r%E,S=E===ni?0:l?_*d/E-.5:r/E|0,w=0,v=ni,A=0;A<_;A++)T=A%E-p,M=S-(A/E|0),m[A]=b=c?Math.abs(c==="y"?M:T):nd(T*T+M*M),b>w&&(w=b),b<v&&(v=b);r==="random"&&Sd(m),m.max=w-v,m.min=v,m.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=mn(n.amount||n.each)||0,i=i&&_<0?R0(i):i}return _=(m[h]-m.min)/m.max||0,Ct(m.b+(i?i(_):_)*m.v)+m.u}},Rc=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ct(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(Xi(i)?0:mn(i))}},Md=function(e,n){var i=gn(e),r,s;return!i&&Ci(e)&&(r=i=e.radius||ni,e.values?(e=ii(e.values),(s=!Xi(e[0]))&&(r*=r)):e=Rc(e.increment)),_r(n,i?Ut(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ni,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:a,s||u===a||Xi(a)?u:u+mn(a)}:Rc(e))},yd=function(e,n,i,r){return _r(gn(e)?!n:i===!0?!!(i=0):!r,function(){return gn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},_0=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},g0=function(e,n){return function(i){return e(parseFloat(i))+(n||mn(i))}},v0=function(e,n,i){return Td(e,n,0,1,i)},Ed=function(e,n,i){return _r(i,function(r){return e[~~n(r)]})},S0=function t(e,n,i){var r=n-e;return gn(e)?Ed(e,t(0,e.length),n):_r(i,function(s){return(r+(s-e)%r)%r+e})},x0=function t(e,n,i){var r=n-e,s=r*2;return gn(e)?Ed(e,t(0,e.length-1),n):_r(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Aa=function(e){return e.replace(Qv,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(e0);return yd(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Td=function(e,n,i,r,s){var a=n-e,o=r-i;return _r(s,function(l){return i+((l-e)/a*o||0)})},M0=function t(e,n,i,r){var s=isNaN(e+n)?0:function(f){return(1-f)*e+f*n};if(!s){var a=sn(e),o={},l,c,u,d,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},n={p:n};else if(gn(e)&&!gn(n)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(t(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},i=n}else r||(e=Ls(gn(e)?[]:{},e));if(!u){for(l in n)ou.call(o,e,l,"get",n[l]);s=function(g){return hu(g,o)||(a?e.p:e)}}}return _r(i,s)},Ch=function(e,n,i){var r=e.labels,s=ni,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Xn=function(e,n,i){var r=e.vars,s=r[n],a=Rt,o=e._ctx,l,c,u;if(s)return l=r[n+"Params"],c=r.callbackScope||e,i&&cr.length&&Jo(),o&&(Rt=o),u=l?s.apply(c,l):s.call(c),Rt=a,u},na=function(e){return fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Xn(e,"onInterrupt"),e},gs,bd=[],wd=function(e){if(e)if(e=!e.name&&e.default||e,eu()||e.headless){var n=e.name,i=Ut(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:wa,render:hu,add:ou,kill:B0,modifier:F0,rawVars:0},a={targetTest:0,get:0,getSetter:uu,aliases:{},register:0};if(Ns(),e!==r){if(kn[n])return;$n(r,$n(Qo(e,s),a)),Ls(r.prototype,Ls(s,Qo(e,a))),kn[r.prop=n]=r,e.targetTest&&(Uo.push(r),iu[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}ld(n,r),e.register&&e.register(Nn,r,Dn)}else bd.push(e)},yt=255,ia={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},jl=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*yt+.5|0},Ad=function(e,n,i){var r=e?Xi(e)?[e>>16,e>>8&yt,e&yt]:0:ia.black,s,a,o,l,c,u,d,h,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ia[e])r=ia[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&yt,r&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Th),!n)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=jl(l+1/3,s,a),r[1]=jl(l,s,a),r[2]=jl(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(rd),i&&r.length<4&&(r[3]=1),r}else r=e.match(Th)||ia.transparent;r=r.map(Number)}return n&&!g&&(s=r[0]/yt,a=r[1]/yt,o=r[2]/yt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Rd=function(e){var n=[],i=[],r=-1;return e.split(ur).forEach(function(s){var a=s.match(_s)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},Ph=function(e,n,i){var r="",s=(e+r).match(ur),a=n?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Ad(h,n,1))&&a+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Rd(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ur,"1").split(_s),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ur),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},ur=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ia)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),y0=/hsl[a]?\(/,Cd=function(e){var n=e.join(" "),i;if(ur.lastIndex=0,ur.test(n))return i=y0.test(n),e[1]=Ph(e[1],i),e[0]=Ph(e[0],i,Rd(e[1])),!0},Ra,Gn=(function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function _(m){var p=t()-r,S=m===!0,T,M,b,A;if((p>e||p<0)&&(i+=p-n),r+=p,b=r-i,T=b-a,(T>0||S)&&(A=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,a+=T+(T>=s?4:s-T),M=1),S||(l=c(_)),M)for(f=0;f<o.length;f++)o[f](b,h,A,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ad&&(!yc&&eu()&&(xi=yc=window,tu=xi.document||{},Kn.gsap=Nn,(xi.gsapVersions||(xi.gsapVersions=[])).push(Nn.version),od(jo||xi.GreenSockGlobals||!xi.gsap&&xi||{}),bd.forEach(wd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Ra=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ra=0,c=wa},lagSmoothing:function(m,p){e=m||1/0,n=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,S){var T=p?function(M,b,A,w){m(M,b,A,w),d.remove(T)}:m;return d.remove(m),o[S?"unshift":"push"](T),Ns(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),Ns=function(){return!Ra&&Gn.wake()},ot={},E0=/^[\d.\-M][\d.\-,\s]/,T0=/["']/g,b0=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[r]=isNaN(c)?c.replace(T0,"").trim():+c,r=l.substr(o+1).trim();return n},w0=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},A0=function(e){var n=(e+"").split("("),i=ot[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[b0(n[1])]:w0(e).split(",").map(fd)):ot._CE&&E0.test(e)?ot._CE("",e):i},R0=function(e){return function(n){return 1-e(1-n)}},Ir=function(e,n){return e&&(Ut(e)?e:ot[e]||A0(e))||n},Xr=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return Ln(e,function(o){ot[o]=Kn[o]=s,ot[a=o.toLowerCase()]=i;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},Pd=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Jl=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),a=s/Mc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Jv((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Pd(o);return s=Mc/s,l.config=function(c,u){return t(e,c,u)},l},Ql=function t(e,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Pd(i);return r.config=function(s){return t(e,s)},r};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Xr(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Xr("Elastic",Jl("in"),Jl("out"),Jl());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};Xr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Xr("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Xr("Circ",function(t){return-(nd(1-t*t)-1)});Xr("Sine",function(t){return t===1?1:-jv(t*$v)+1});Xr("Back",Ql("in"),Ql("out"),Ql());ot.SteppedEase=ot.steps=Kn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,a=1-Et;return function(o){return((r*ka(0,a,o)|0)+s)*i}}};Ta.ease=ot["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ru+=t+","+t+"Params,"});var Ld=function(e,n){this.id=Zv++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:ud,this.set=n?n.getSetter:uu},Ca=(function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Is(this,+n.duration,1,1),this.data=n.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Ra||Gn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Is(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ns(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pl(this,i),!s._dp||s.parent||md(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),hd(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ah(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ah(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ds(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?el(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Et?0:this._rts,this.totalTime(ka(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),dl(this),l0(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ns(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ct(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ei(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Pn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?el(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=r0);var r=ln;return ln=i,au(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ln=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Rh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Rh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Jn(this,i),Pn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Pn(r)),this._dur||(this._zTime=-Et),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Et)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=Ut(i)?i:dd,l=function(){var u=r.then;r.then=null,s&&s(),Ut(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){na(this)},t})();$n(Ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var Cn=(function(t){td(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Pn(i.sortChildren),Pt&&Ei(i.parent||Pt,Fi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&_d(Fi(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,a){return ua(0,arguments,this),this},n.from=function(r,s,a){return ua(1,arguments,this),this},n.fromTo=function(r,s,a,o){return ua(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,ca(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(r,s,Jn(this,a),1),this},n.call=function(r,s,a){return Ei(this,Wt.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Wt(r,a,Jn(this,l)),this},n.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,ca(a).immediateRender=Pn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},n.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,ca(o).immediateRender=Pn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Ct(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,f,g,_,m,p,S,T,M,b,A,w;if(this!==Pt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,M=this._start,T=this._ts,p=!T,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(h=Ct(u%m),u===l?(_=this._repeat,h=c):(b=Ct(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=Ds(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),A&&_&1&&(h=c-h,w=1),_!==b&&!this._lock){var v=A&&b&1,E=v===(A&&_&1);if(_<b&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Ct(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=f0(this,Ct(o),Ct(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!b&&(Xn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-Et);break}}f=g}else{f=this._last;for(var L=r<0?r:h;f;){if(g=f._prev,(f._act||L<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(L-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(L-f._start)*f._ts,s,a||ln&&au(f)),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=L?-Et:Et);break}}f=g}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-Et)._zTime=h>=o?1:-1,this._ts))return this._start=M,dl(this),this.render(r,s,a);this._onUpdate&&!s&&Xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&fr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Xn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(Xi(s)||(s=Jn(this,s,r)),!(r instanceof Ca)){if(gn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(sn(r))return this.addLabel(r,s);if(Ut(r))r=Wt.delayedCall(0,r);else return this}return this!==r?Ei(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ni);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Wt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return sn(r)?this.removeLabel(r):Ut(r)?this.killTweensOf(r):(r.parent===this&&fl(this,r),r===this._recent&&(this._recent=this._last),Dr(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(Gn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=Jn(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=Wt.delayedCall(0,s||wa,a);return o.data="isPause",this._hasPause=1,Ei(this,o,Jn(this,r))},n.removePause=function(r){var s=this._first;for(r=Jn(this,r);s;)s._start===r&&s.data==="isPause"&&fr(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)rr!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=ii(r),l=this._first,c=Xi(s),u;l;)l instanceof Wt?s0(l._targets,o)&&(c?(!rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=Jn(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Wt.to(a,$n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Et,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Is(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,$n({startAt:{time:Jn(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),Ch(this,Jn(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),Ch(this,Jn(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Et)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Ct(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Dr(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Dr(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=ni,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ei(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ct(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Is(a,a===Pt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Pt._ts&&(hd(Pt,el(r,Pt)),cd=Gn.frame),Gn.frame>=bh){bh+=qn.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&qn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},e})(Ca);$n(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var C0=function(e,n,i,r,s,a,o){var l=new Dn(this._pt,e,n,0,1,Fd,null,s),c=0,u=0,d,h,f,g,_,m,p,S;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Aa(r)),a&&(S=[i,r],a(S,e,n),i=S[0],r=S[1]),h=i.match($l)||[];d=$l.exec(r);)g=d[0],_=r.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?xs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=$l.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(sd.test(r)||p)&&(l.e=0),this._pt=l,l},ou=function(e,n,i,r,s,a,o,l,c,u){Ut(r)&&(r=r(s||0,e,a));var d=e[n],h=i!=="get"?i:Ut(d)?c?e[n.indexOf("set")||!Ut(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():d,f=Ut(d)?c?N0:Ud:cu,g;if(sn(r)&&(~r.indexOf("random(")&&(r=Aa(r)),r.charAt(1)==="="&&(g=xs(h,r)+(mn(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Cc)return!isNaN(h*r)&&r!==""?(g=new Dn(this._pt,e,n,+h||0,r-(h||0),typeof d=="boolean"?O0:Od,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(n in e)&&nu(n,r),C0.call(this,e,n,h,r,f,l||qn.stringFilter,c))},P0=function(e,n,i,r,s){if(Ut(e)&&(e=ha(e,s,n,i,r)),!Ci(e)||e.style&&e.nodeType||gn(e)||id(e))return sn(e)?ha(e,s,n,i,r):e;var a={},o;for(o in e)a[o]=ha(e[o],s,n,i,r);return a},Dd=function(e,n,i,r,s,a){var o,l,c,u;if(kn[e]&&(o=new kn[e]).init(s,o.rawVars?n[e]:P0(n[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Dn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==gs))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},rr,Cc,lu=function t(e,n,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!Jc,M=e.timeline,b=r.easeReverse||d,A,w,v,E,L,C,N,X,z,F,G,D,Z;if(M&&(!h||!s)&&(s="none"),e._ease=Ir(s,Ta.ease),e._rEase=b&&(Ir(b)||e._ease),e._from=!M&&!!r.runBackwards,e._from&&(e.ratio=1),!M||h&&!r.stagger){if(X=m[0]?Lr(m[0]).harness:0,D=X&&r[X.prop],A=Qo(r,iu),_&&(_._zTime<0&&_.progress(1),n<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?No:i0),_._lazy=0),a){if(fr(e._startAt=Wt.set(m,$n({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Xn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(ln||!o&&!f)&&e._startAt.revert(No),o&&g&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(u&&g&&!_){if(n&&(o=!1),v=$n({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Pn(l),immediateRender:o,stagger:0,parent:p},A),D&&(v[X.prop]=D),fr(e._startAt=Wt.set(m,v)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(ln?e._startAt.revert(No):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,Et,Et);else if(!n)return}for(e._pt=e._ptCache=0,l=g&&Pn(l)||l&&!g,w=0;w<m.length;w++){if(L=m[w],N=L._gsap||su(m)[w]._gsap,e._ptLookup[w]=F={},Ec[N.id]&&cr.length&&Jo(),G=S===m?w:S.indexOf(L),X&&(z=new X).init(L,D||A,e,G,S)!==!1&&(e._pt=E=new Dn(e._pt,L,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(J){F[J]=E}),z.priority&&(C=1)),!X||D)for(v in A)kn[v]&&(z=Dd(v,A,e,G,L,S))?z.priority&&(C=1):F[v]=E=ou.call(e,L,v,"get",A[v],G,S,0,r.stringFilter);e._op&&e._op[w]&&e.kill(L,e._op[w]),T&&e._pt&&(rr=e,Pt.killTweensOf(L,F,e.globalTime(n)),Z=!e.parent,rr=0),e._pt&&l&&(Ec[N.id]=1)}C&&Bd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,h&&n<=0&&M.render(ni,!0,!0)},L0=function(e,n,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,d,h,f;if(!c)for(c=e._ptCache[n]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return Cc=1,e.vars[n]="+=0",lu(e,o),Cc=0,l?ba(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,d.e&&(d.e=zt(i)+mn(d.e)),d.b&&(d.b=u.s+mn(d.b))},D0=function(e,n){var i=e[0]?Lr(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=Ls({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},I0=function(e,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(gn(n))o=i[e]||(i[e]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:n[a],e:s})},ha=function(e,n,i,r,s){return Ut(e)?e.call(n,i,r,s):sn(e)&&~e.indexOf("random(")?Aa(e):e},Id=ru+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Nd={};Ln(Id+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Nd[t]=1});var Wt=(function(t){td(e,t);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:ca(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||Pt,S=(gn(i)||id(i)?Xi(i[0]):"length"in r)?[i]:ii(i),T,M,b,A,w,v,E,L;if(o._targets=S.length?su(S):ba("GSAP target "+i+" not found. https://gsap.com",!qn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||mo(c)||mo(u)){r=o.vars;var C=r.easeReverse||r.yoyoEase;if(T=o.timeline=new Cn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),T.kill(),T.parent=T._dp=Fi(o),T._start=0,h||mo(c)||mo(u)){if(A=S.length,E=h&&xd(h),Ci(h))for(w in h)~Id.indexOf(w)&&(L||(L={}),L[w]=h[w]);for(M=0;M<A;M++)b=Qo(r,Nd),b.stagger=0,C&&(b.easeReverse=C),L&&Ls(b,L),v=S[M],b.duration=+ha(c,Fi(o),M,v,S),b.delay=(+ha(u,Fi(o),M,v,S)||0)-o._delay,!h&&A===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),T.to(v,b,E?E(M,v,S):0),T._ease=ot.none;T.duration()?c=u=0:o.timeline=0}else if(g){ca($n(T.vars.defaults,{ease:"none"})),T._ease=Ir(g.ease||r.ease||"none");var N=0,X,z,F;if(gn(g))g.forEach(function(G){return T.to(S,G,">")}),T.duration();else{b={};for(w in g)w==="ease"||w==="easeEach"||I0(w,g[w],b,g.easeEach);for(w in b)for(X=b[w].sort(function(G,D){return G.t-D.t}),N=0,M=0;M<X.length;M++)z=X[M],F={ease:z.e,duration:(z.t-(M?X[M-1].t:0))/100*c},F[w]=z.v,T.to(S,F,N),N+=F.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return f===!0&&!Jc&&(rr=Fi(o),Pt.killTweensOf(S),rr=0),Ei(p,Fi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!g&&o._start===Ct(p._time)&&Pn(d)&&c0(Fi(o))&&p.data!=="nested")&&(o._tTime=-Et,o.render(Math.max(0,-u)||0)),m&&_d(Fi(o),m),o}var n=e.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Et&&!u?l:r<Et?0:r,h,f,g,_,m,p,S,T;if(!c)h0(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=Ct(d%_),d===l?(g=this._repeat,h=c):(m=Ct(d/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Ds(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Ct(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(gd(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var M=h<o;if(M!==this._inv){var b=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(M?-1:1)/b:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(Xn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;T&&T.render(r<0?r:T._dur*T._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Tc(this,r,s,a),Xn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Xn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Tc(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&fr(this,1),!s&&!(u&&!o)&&(d||o||p)&&(Xn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){Ra||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||lu(this,c),u=this._ease(c/this._dur),L0(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(pl(this,0),this.parent||pd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?na(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,rr&&rr.vars.overwrite!==!0)._first||na(this),this.parent&&a!==this.timeline.totalDuration()&&Is(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?ii(r):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,m,p;if((!s||s==="all")&&o0(o,l))return s==="all"&&(this._pt=0),na(this);for(d=this._op=this._op||[],s!=="all"&&(sn(s)&&(_={},Ln(s,function(S){return _[S]=1}),s=_),s=D0(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(d[p]=s,g=h,f={}):(f=d[p]=d[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&fl(this,m,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&na(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ua(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ua(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Pt.killTweensOf(r,s,a)},e})(Ca);$n(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(t){Wt[t]=function(){var e=new Cn,n=wc.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var cu=function(e,n,i){return e[n]=i},Ud=function(e,n,i){return e[n](i)},N0=function(e,n,i,r){return e[n](r.fp,i)},U0=function(e,n,i){return e.setAttribute(n,i)},uu=function(e,n){return Ut(e[n])?Ud:Qc(e[n])&&e.setAttribute?U0:cu},Od=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},O0=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Fd=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},hu=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},F0=function(e,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,n,i),s=a},B0=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?fl(this,n,"_pt"):n.dep||(i=1),n=r;return!i},z0=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},Bd=function(e){for(var n=e._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}e._pt=s},Dn=(function(){function t(n,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||Od,this.d=l||this,this.set=c||cu,this.pr=u||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=z0,this.m=i,this.mt=s,this.tween=r},t})();Ln(ru+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return iu[t]=1});Kn.TweenMax=Kn.TweenLite=Wt;Kn.TimelineLite=Kn.TimelineMax=Cn;Pt=new Cn({sortChildren:!1,defaults:Ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qn.stringFilter=Cd;var Nr=[],Oo={},k0=[],Lh=0,V0=0,ec=function(e){return(Oo[e]||k0).map(function(n){return n()})},Pc=function(){var e=Date.now(),n=[];e-Lh>2&&(ec("matchMediaInit"),Nr.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=xi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&n.push(i))}),ec("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Lh=e,ec("matchMedia"))},zd=(function(){function t(n,i){this.selector=i&&Ac(i),this.data=[],this._r=[],this.isReverted=!1,this.id=V0++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){Ut(i)&&(s=r,r=i,i=Ut);var a=this,o=function(){var c=Rt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ac(s)),Rt=a,d=r.apply(a,arguments),Ut(d)&&a._r.push(d),Rt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,i===Ut?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=Rt;Rt=null,i(this),Rt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Wt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Nr.length;a--;)Nr[a].id===this.id&&Nr.splice(a,1)},e.revert=function(i){this.kill(i||{})},t})(),G0=(function(){function t(n){this.contexts=[],this.scope=n,Rt&&Rt.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){Ci(i)||(i={matches:i});var a=new zd(0,s||this.scope),o=a.conditions={},l,c,u;Rt&&!a.selector&&(a.selector=Rt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=xi.matchMedia(i[c]),l&&(Nr.indexOf(a)<0&&Nr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Pc):l.addEventListener("change",Pc)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t})(),tl={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return wd(r)})},timeline:function(e){return new Cn(e)},getTweensOf:function(e,n){return Pt.getTweensOf(e,n)},getProperty:function(e,n,i,r){sn(e)&&(e=ii(e)[0]);var s=Lr(e||{}).get,a=i?dd:fd;return i==="native"&&(i=""),e&&(n?a((kn[n]&&kn[n].get||s)(e,n,i,r)):function(o,l,c){return a((kn[o]&&kn[o].get||s)(e,o,l,c))})},quickSetter:function(e,n,i){if(e=ii(e),e.length>1){var r=e.map(function(u){return Nn.quickSetter(u,n,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=kn[n],o=Lr(e),l=o.harness&&(o.harness.aliases||{})[n]||n,c=a?function(u){var d=new a;gs._pt=0,d.init(e,i?u+i:u,gs,0,[e]),d.render(1,d),gs._pt&&hu(1,gs)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,n,i){var r,s=Nn.to(e,$n((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(n,l,c,u)};return a.tween=s,a},isTweening:function(e){return Pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ir(e.ease,Ta.ease)),wh(Ta,e||{})},config:function(e){return wh(qn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!kn[o]&&!Kn[o]&&ba(n+" effect requires "+o+" plugin.")}),Zl[n]=function(o,l,c){return i(ii(o),$n(l||{},s),c)},a&&(Cn.prototype[n]=function(o,l,c){return this.add(Zl[n](o,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){ot[e]=Ir(n)},parseEase:function(e,n){return arguments.length?Ir(e,n):ot},getById:function(e){return Pt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Cn(e),r,s;for(i.smoothChildTiming=Pn(e.smoothChildTiming),Pt.remove(i),i._dp=0,i._time=i._tTime=Pt._time,r=Pt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Wt&&r.vars.onComplete===r._targets[0]))&&Ei(i,r,r._start-r._delay),r=s;return Ei(Pt,i,0),i},context:function(e,n){return e?new zd(e,n):Rt},matchMedia:function(e){return new G0(e)},matchMediaRefresh:function(){return Nr.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||Pc()},addEventListener:function(e,n){var i=Oo[e]||(Oo[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Oo[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:S0,wrapYoyo:x0,distribute:xd,random:yd,snap:Md,normalize:v0,getUnit:mn,clamp:p0,splitColor:Ad,toArray:ii,selector:Ac,mapRange:Td,pipe:_0,unitize:g0,interpolate:M0,shuffle:Sd},install:od,effects:Zl,ticker:Gn,updateRoot:Cn.updateRoot,plugins:kn,globalTimeline:Pt,core:{PropTween:Dn,globals:ld,Tween:Wt,Timeline:Cn,Animation:Ca,getCache:Lr,_removeLinkedListItem:fl,reverting:function(){return ln},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return Jc=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return tl[t]=Wt[t]});Gn.add(Cn.updateRoot);gs=tl.to({},{duration:0});var H0=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},W0=function(e,n){var i=e._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=H0(a,r)),a&&a.modifier&&a.modifier(n[r],e,i[s],r))},tc=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(sn(s)&&(l={},Ln(s,function(u){return l[u]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}W0(o,s)}}}},Nn=tl.registerPlugin({name:"attr",init:function(e,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,n){for(var i=n._pt;i;)ln?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},tc("roundProps",Rc),tc("modifiers"),tc("snap",Md))||tl;Wt.version=Cn.version=Nn.version="3.15.0";ad=1;eu()&&Ns();var ZS=ot.Power0,jS=ot.Power1,JS=ot.Power2,QS=ot.Power3,ex=ot.Power4,tx=ot.Linear,nx=ot.Quad,ix=ot.Cubic,rx=ot.Quart,sx=ot.Quint,ax=ot.Strong,ox=ot.Elastic,lx=ot.Back,cx=ot.SteppedEase,ux=ot.Bounce,hx=ot.Sine,fx=ot.Expo,dx=ot.Circ,Dh,sr,Ms,fu,Rr,Ih,du,X0=function(){return typeof window<"u"},Yi={},Tr=180/Math.PI,ys=Math.PI/180,ls=Math.atan2,Nh=1e8,pu=/([A-Z])/g,Y0=/(left|right|width|margin|padding|x)/i,q0=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lc=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},K0=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},$0=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Z0=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},j0=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},kd=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},Vd=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},J0=function(e,n,i){return e.style[n]=i},Q0=function(e,n,i){return e.style.setProperty(n,i)},eS=function(e,n,i){return e._gsap[n]=i},tS=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},nS=function(e,n,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},iS=function(e,n,i,r,s){var a=e._gsap;a[n]=i,a.renderTransform(s,a)},Lt="transform",In=Lt+"Origin",rS=function t(e,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Yi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Bi(r,o)}):this.tfm[e]=a.x?a[e]:Bi(r,e),e===In&&(this.tfm.zOrigin=a.zOrigin);else return Ti.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(Lt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(In,n,"")),e=Lt}(s||n)&&this.props.push(e,n,s[e])},Gd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sS=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(pu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=du(),(!s||!s.isStart)&&!i[Lt]&&(Gd(i),r.zOrigin&&i[In]&&(i[In]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Hd=function(e,n){var i={target:e,props:[],revert:sS,save:rS};return e._gsap||Nn.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},Wd,Dc=function(e,n){var i=sr.createElementNS?sr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):sr.createElement(e);return i&&i.style?i:sr.createElement(e)},Yn=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(pu,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,Us(n)||n,1)||""},Uh="O,Moz,ms,Ms,Webkit".split(","),Us=function(e,n,i){var r=(n||Rr).style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Uh[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Uh[s]:"")+e},Ic=function(){X0()&&window.document&&(Dh=window,sr=Dh.document,Ms=sr.documentElement,Rr=Dc("div")||{style:{}},Dc("div"),Lt=Us(Lt),In=Lt+"Origin",Rr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wd=!!Us("perspective"),du=Nn.core.reverting,fu=1)},Oh=function(e){var n=e.ownerSVGElement,i=Dc("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ms.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ms.removeChild(i),s},Fh=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},Xd=function(e){var n,i;try{n=e.getBBox()}catch{n=Oh(e),i=1}return n&&(n.width||n.height)||i||(n=Oh(e)),n&&!n.width&&!n.x&&!n.y?{x:+Fh(e,["x","cx","x1"])||0,y:+Fh(e,["y","cy","y1"])||0,width:0,height:0}:n},Yd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xd(e))},dr=function(e,n){if(n){var i=e.style,r;n in Yi&&n!==In&&(n=Lt),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(pu,"-$1").toLowerCase())):i.removeAttribute(n)}},ar=function(e,n,i,r,s,a){var o=new Dn(e._pt,n,i,0,1,a?Vd:kd);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Bh={deg:1,rad:1,turn:1},aS={grid:1,flex:1},pr=function t(e,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Rr.style,l=Y0.test(n),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",f=r==="%",g,_,m,p;if(r===a||!s||Bh[r]||Bh[a])return s;if(a!=="px"&&!h&&(s=t(e,n,i,"px")),p=e.getCTM&&Yd(e),(f||a==="%")&&(Yi[n]||~n.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],zt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:r),_=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===sr||!_.appendChild)&&(_=sr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Gn.time&&!m.uncache)return zt(s/m.width*d);if(f&&(n==="height"||n==="width")){var S=e.style[n];e.style[n]=d+r,g=e[u],S?e.style[n]=S:dr(e,n)}else(f||a==="%")&&!aS[Yn(_,"display")]&&(o.position=Yn(e,"position")),_===e&&(o.position="static"),_.appendChild(Rr),g=Rr[u],_.removeChild(Rr),o.position="absolute";return l&&f&&(m=Lr(_),m.time=Gn.time,m.width=_[u]),zt(h?g*s/d:g&&s?d/g*s:0)},Bi=function(e,n,i,r){var s;return fu||Ic(),n in Ti&&n!=="transform"&&(n=Ti[n],~n.indexOf(",")&&(n=n.split(",")[0])),Yi[n]&&n!=="transform"?(s=La(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:il(Yn(e,In))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=nl[n]&&nl[n](e,n,i)||Yn(e,n)||ud(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?pr(e,n,s,i)+i:s},oS=function(e,n,i,r){if(!i||i==="none"){var s=Us(n,e,1),a=s&&Yn(e,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=Yn(e,"borderTopColor"))}var o=new Dn(this._pt,e.style,n,0,1,Fd),l=0,c=0,u,d,h,f,g,_,m,p,S,T,M,b;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Yn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[n],e.style[n]=r,r=Yn(e,n)||r,_?e.style[n]=_:dr(e,n)),u=[i,r],Cd(u),i=u[0],r=u[1],h=i.match(_s)||[],b=r.match(_s)||[],b.length){for(;d=_s.exec(r);)m=d[0],S=r.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(f=parseFloat(_)||0,M=_.substr((f+"").length),m.charAt(1)==="="&&(m=xs(f,m)+M),p=parseFloat(m),T=m.substr((p+"").length),l=_s.lastIndex-T.length,T||(T=T||qn.units[n]||M,l===r.length&&(r+=T,o.e+=T)),M!==T&&(f=pr(e,n,_,T)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:f,c:p-f,m:g&&g<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?Vd:kd;return sd.test(r)&&(o.e=0),this._pt=o,o},zh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lS=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=zh[i]||i,n[1]=zh[r]||r,n.join(" ")},cS=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Yi[o]&&(l=1,o=o==="transformOrigin"?In:Lt),dr(i,o);l&&(dr(i,Lt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",La(i,1),a.uncache=1,Gd(r)))}},nl={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Dn(e._pt,n,i,0,0,cS);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Pa=[1,0,0,1,0,0],qd={},Kd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kh=function(e){var n=Yn(e,Lt);return Kd(n)?Pa:n.substr(7).match(rd).map(zt)},mu=function(e,n){var i=e._gsap||Lr(e),r=e.style,s=kh(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Pa:s):(s===Pa&&!e.offsetParent&&e!==Ms&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ms.appendChild(e)),s=kh(e),l?r.display=l:dr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ms.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nc=function(e,n,i,r,s,a){var o=e._gsap,l=s||mu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],T=n.split(" "),M=parseFloat(T[0])||0,b=parseFloat(T[1])||0,A,w,v,E;i?l!==Pa&&(w=f*m-g*_)&&(v=M*(m/w)+b*(-_/w)+(_*S-m*p)/w,E=M*(-g/w)+b*(f/w)-(f*S-g*p)/w,M=v,b=E):(A=Xd(e),M=A.x+(~T[0].indexOf("%")?M/100*A.width:M),b=A.y+(~(T[1]||T[0]).indexOf("%")?b/100*A.height:b)),r||r!==!1&&o.smooth?(p=M-c,S=b-u,o.xOffset=d+(p*f+S*_)-p,o.yOffset=h+(p*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=b,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[In]="0px 0px",a&&(ar(a,o,"xOrigin",c,M),ar(a,o,"yOrigin",u,b),ar(a,o,"xOffset",d,o.xOffset),ar(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+b)},La=function(e,n){var i=e._gsap||new Ld(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Yn(e,In)||"0",u=d=h=_=m=p=S=T=M=0,d,h,f=g=1,g,_,m,p,S,T,M,b,A,w,v,E,L,C,N,X,z,F,G,D,Z,J,P,he,Te,Ye,De,K;return i.svg=!!(e.getCTM&&Yd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Lt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Lt]!=="none"?l[Lt]:"")),r.scale=r.rotate=r.translate="none"),w=mu(e,i.svg),i.svg&&(i.uncache?(Z=e.getBBox(),c=i.xOrigin-Z.x+"px "+(i.yOrigin-Z.y)+"px",D=""):D=!n&&e.getAttribute("data-svg-origin"),Nc(e,D||c,!!D||i.originIsAbsolute,i.smooth!==!1,w)),b=i.xOrigin||0,A=i.yOrigin||0,w!==Pa&&(C=w[0],N=w[1],X=w[2],z=w[3],u=F=w[4],d=G=w[5],w.length===6?(f=Math.sqrt(C*C+N*N),g=Math.sqrt(z*z+X*X),_=C||N?ls(N,C)*Tr:0,S=X||z?ls(X,z)*Tr+_:0,S&&(g*=Math.abs(Math.cos(S*ys))),i.svg&&(u-=b-(b*C+A*X),d-=A-(b*N+A*z))):(K=w[6],Ye=w[7],P=w[8],he=w[9],Te=w[10],De=w[11],u=w[12],d=w[13],h=w[14],v=ls(K,Te),m=v*Tr,v&&(E=Math.cos(-v),L=Math.sin(-v),D=F*E+P*L,Z=G*E+he*L,J=K*E+Te*L,P=F*-L+P*E,he=G*-L+he*E,Te=K*-L+Te*E,De=Ye*-L+De*E,F=D,G=Z,K=J),v=ls(-X,Te),p=v*Tr,v&&(E=Math.cos(-v),L=Math.sin(-v),D=C*E-P*L,Z=N*E-he*L,J=X*E-Te*L,De=z*L+De*E,C=D,N=Z,X=J),v=ls(N,C),_=v*Tr,v&&(E=Math.cos(v),L=Math.sin(v),D=C*E+N*L,Z=F*E+G*L,N=N*E-C*L,G=G*E-F*L,C=D,F=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=zt(Math.sqrt(C*C+N*N+X*X)),g=zt(Math.sqrt(G*G+K*K)),v=ls(F,G),S=Math.abs(v)>2e-4?v*Tr:0,M=De?1/(De<0?-De:De):0),i.svg&&(D=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Kd(Yn(e,Lt)),D&&e.setAttribute("transform",D))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=zt(f),i.scaleY=zt(g),i.rotation=zt(_)+o,i.rotationX=zt(m)+o,i.rotationY=zt(p)+o,i.skewX=S+o,i.skewY=T+o,i.transformPerspective=M+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(r[In]=il(c)),i.xOffset=i.yOffset=0,i.force3D=qn.force3D,i.renderTransform=i.svg?hS:Wd?$d:uS,i.uncache=0,i},il=function(e){return(e=e.split(" "))[0]+" "+e[1]},nc=function(e,n,i){var r=mn(n);return zt(parseFloat(n)+parseFloat(pr(e,"x",i+"px",r)))+r},uS=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,$d(e,n)},Mr="0deg",js="0px",yr=") ",$d=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,f=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,S=i.target,T=i.zOrigin,M="",b=p==="auto"&&e&&e!==1||p===!0;if(T&&(d!==Mr||u!==Mr)){var A=parseFloat(u)*ys,w=Math.sin(A),v=Math.cos(A),E;A=parseFloat(d)*ys,E=Math.cos(A),a=nc(S,a,w*E*-T),o=nc(S,o,-Math.sin(A)*-T),l=nc(S,l,v*E*-T+T)}m!==js&&(M+="perspective("+m+yr),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(b||a!==js||o!==js||l!==js)&&(M+=l!==js||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+yr),c!==Mr&&(M+="rotate("+c+yr),u!==Mr&&(M+="rotateY("+u+yr),d!==Mr&&(M+="rotateX("+d+yr),(h!==Mr||f!==Mr)&&(M+="skew("+h+", "+f+yr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+yr),S.style[Lt]=M||"translate(0, 0)"},hS=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,f=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,S=i.forceCSS,T=parseFloat(a),M=parseFloat(o),b,A,w,v,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ys,c*=ys,b=Math.cos(l)*d,A=Math.sin(l)*d,w=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=ys,E=Math.tan(c-u),E=Math.sqrt(1+E*E),w*=E,v*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),b*=E,A*=E)),b=zt(b),A=zt(A),w=zt(w),v=zt(v)):(b=d,v=h,A=w=0),(T&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(T=pr(f,"x",a,"px"),M=pr(f,"y",o,"px")),(g||_||m||p)&&(T=zt(T+g-(g*b+_*w)+m),M=zt(M+_-(g*A+_*v)+p)),(r||s)&&(E=f.getBBox(),T=zt(T+r/100*E.width),M=zt(M+s/100*E.height)),E="matrix("+b+","+A+","+w+","+v+","+T+","+M+")",f.setAttribute("transform",E),S&&(f.style[Lt]=E)},fS=function(e,n,i,r,s){var a=360,o=sn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Tr:1)-r,c=r+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Nh)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Nh)%a-~~(l/a)*a)),e._pt=d=new Dn(e._pt,n,i,r,l,K0),d.e=c,d.u="deg",e._props.push(i),d},Vh=function(e,n){for(var i in n)e[i]=n[i];return e},dS=function(e,n,i){var r=Vh({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,d,h,f,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Lt]=n,o=La(i,1),dr(i,Lt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Lt],a[Lt]=n,o=La(i,1),a[Lt]=c);for(l in Yi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=mn(c),g=mn(u),d=f!==g?pr(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Dn(e._pt,o,l,d,h-d,Lc),e._pt.u=g||0,e._props.push(l));Vh(o,r)};Ln("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",a=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return e<2?t+o:"border"+o+t});nl[e>1?"border"+t:t]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return Bi(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var Zd={name:"css",register:Ic,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,d,h,f,g,_,m,p,S,T,M,b,A,w,v,E;fu||Ic(),this.styles=this.styles||Hd(e),v=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(u=n[_],!(kn[_]&&Dd(_,n,i,r,e,s)))){if(f=typeof u,g=nl[_],f==="function"&&(u=u.call(i,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Aa(u)),g)g(this,e,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ur.lastIndex=0,ur.test(c)||(m=mn(c),p=mn(u),p?m!==p&&(c=pr(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],sn(c)&&~c.indexOf("random(")&&(c=Aa(c)),mn(c+"")||c==="auto"||(c+=qn.units[_]||mn(Bi(e,_))||""),(c+"").charAt(1)==="="&&(c=Bi(e,_))):c=Bi(e,_),h=parseFloat(c),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),_ in Ti&&(_==="autoAlpha"&&(h===1&&Bi(e,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,o.visibility),ar(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Yi,T){if(this.styles.save(_),E=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Yn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var L=e.style.perspective;e.style.perspective=u,u=Yn(e,"perspective"),L?e.style.perspective=L:dr(e,"perspective")}d=parseFloat(u)}if(M||(b=e._gsap,b.renderTransform&&!n.parseTransform||La(e,n.parseTransform),A=n.smoothOrigin!==!1&&b.smooth,M=this._pt=new Dn(this._pt,o,Lt,0,1,b.renderTransform,b,0,-1),M.dep=1),_==="scale")this._pt=new Dn(this._pt,b,"scaleY",b.scaleY,(S?xs(b.scaleY,S+d):d)-b.scaleY||0,Lc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(In,0,o[In]),u=lS(u),b.svg?Nc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&ar(this,b,"zOrigin",b.zOrigin,p),ar(this,o,_,il(c),il(u)));continue}else if(_==="svgOrigin"){Nc(e,u,1,A,0,this);continue}else if(_ in qd){fS(this,b,_,h,S?xs(h,S+u):u);continue}else if(_==="smoothOrigin"){ar(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){dS(this,u,e);continue}}else _ in o||(_=Us(_)||_);if(T||(d||d===0)&&(h||h===0)&&!q0.test(u)&&_ in o)m=(c+"").substr((h+"").length),d||(d=0),p=mn(u)||(_ in qn.units?qn.units[_]:m),m!==p&&(h=pr(e,_,c,p)),this._pt=new Dn(this._pt,T?b:o,_,h,(S?xs(h,S+d):d)-h,!T&&(p==="px"||_==="zIndex")&&n.autoRound!==!1?j0:Lc),this._pt.u=p||0,T&&E!==u?(this._pt.b=c,this._pt.e=E,this._pt.r=Z0):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=$0);else if(_ in o)oS.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,r,s);else if(_!=="parseTransform"){nu(_,u);continue}T||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}w&&Bd(this)},render:function(e,n){if(n.tween._time||!du())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:Bi,aliases:Ti,getSetter:function(e,n,i){var r=Ti[n];return r&&r.indexOf(",")<0&&(n=r),n in Yi&&n!==In&&(e._gsap.x||Bi(e,"x"))?i&&Ih===i?n==="scale"?tS:eS:(Ih=i||{})&&(n==="scale"?nS:iS):e.style&&!Qc(e.style[n])?J0:~n.indexOf("-")?Q0:uu(e,n)},core:{_removeProperty:dr,_getMatrix:mu}};Nn.utils.checkPrefix=Us;Nn.core.getStyleSaver=Hd;(function(t,e,n,i){var r=Ln(t+","+e+","+n,function(s){Yi[s]=1});Ln(e,function(s){qn.units[s]="deg",qd[s]=1}),Ti[r[13]]=t+","+e,Ln(i,function(s){var a=s.split(":");Ti[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){qn.units[t]="px"});Nn.registerPlugin(Zd);var an=Nn.registerPlugin(Zd)||Nn,px=an.core.Tween;function Gh(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function pS(t,e,n){return e&&Gh(t.prototype,e),n&&Gh(t,n),t}var on,Fo,Hn,or,lr,Es,jd,br,Ts,Jd,Vi,fi,Qd,ep=function(){return on||typeof window<"u"&&(on=window.gsap)&&on.registerPlugin&&on},tp=1,vs=[],nt=[],Ai=[],fa=Date.now,Uc=function(e,n){return n},mS=function(){var e=Ts.core,n=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,nt),r.push.apply(r,Ai),nt=i,Ai=r,Uc=function(a,o){return n[a](o)}},hr=function(e,n){return~Ai.indexOf(e)&&Ai[Ai.indexOf(e)+1][n]},da=function(e){return!!~Jd.indexOf(e)},Sn=function(e,n,i,r,s){return e.addEventListener(n,i,{passive:r!==!1,capture:!!s})},vn=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},_o="scrollLeft",go="scrollTop",Oc=function(){return Vi&&Vi.isPressed||nt.cache++},rl=function(e,n){var i=function r(s){if(s||s===0){tp&&(Hn.history.scrollRestoration="manual");var a=Vi&&Vi.isPressed;s=r.v=Math.round(s)||(Vi&&Vi.iOS?1:0),e(s),r.cacheID=nt.cache,a&&Uc("ss",s)}else(n||nt.cache!==r.cacheID||Uc("ref"))&&(r.cacheID=nt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Tn={s:_o,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rl(function(t){return arguments.length?Hn.scrollTo(t,Kt.sc()):Hn.pageXOffset||or[_o]||lr[_o]||Es[_o]||0})},Kt={s:go,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Tn,sc:rl(function(t){return arguments.length?Hn.scrollTo(Tn.sc(),t):Hn.pageYOffset||or[go]||lr[go]||Es[go]||0})},Rn=function(e,n){return(n&&n._ctx&&n._ctx.selector||on.utils.toArray)(e)[0]||(typeof e=="string"&&on.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},_S=function(e,n){for(var i=n.length;i--;)if(n[i]===e||n[i].contains(e))return!0;return!1},mr=function(e,n){var i=n.s,r=n.sc;da(e)&&(e=or.scrollingElement||lr);var s=nt.indexOf(e),a=r===Kt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+a]||Sn(e,"scroll",Oc);var o=nt[s+a],l=o||(nt[s+a]=rl(hr(e,i),!0)||(da(e)?r:rl(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,o||(l.smooth=on.getProperty(e,"scrollBehavior")==="smooth"),l},Fc=function(e,n,i){var r=e,s=e,a=fa(),o=a,l=n||50,c=Math.max(500,l*3),u=function(h,f){var g=fa();f||g-a>l?(s=r,r=h,o=a,a=g):i?r+=h:r=s+(h-s)/(g-o)*(a-o)};return{update:u,reset:function(){s=r=i?0:r,o=a=0},getVelocity:function(h){var f=o,g=s,_=fa();return(h||h===0)&&h!==r&&u(h),a===o||_-o>c?0:(r+(i?g:-g))/((i?_:a)-f)*1e3}}},Js=function(e,n){return n&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Hh=function(e){var n=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(n)>=Math.abs(i)?n:i},np=function(){Ts=on.core.globals().ScrollTrigger,Ts&&Ts.core&&mS()},ip=function(e){return on=e||ep(),!Fo&&on&&typeof document<"u"&&document.body&&(Hn=window,or=document,lr=or.documentElement,Es=or.body,Jd=[Hn,or,lr,Es],on.utils.clamp,Qd=on.core.context||function(){},br="onpointerenter"in Es?"pointer":"mouse",jd=kt.isTouch=Hn.matchMedia&&Hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,fi=kt.eventTypes=("ontouchstart"in lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return tp=0},500),Fo=1),Ts||np(),Fo};Tn.op=Kt;nt.cache=0;var kt=(function(){function t(n){this.init(n)}var e=t.prototype;return e.init=function(i){Fo||ip(on)||console.warn("Please gsap.registerPlugin(Observer)"),Ts||np();var r=i.tolerance,s=i.dragMinimum,a=i.type,o=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,h=i.onStopDelay,f=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,S=i.onDrag,T=i.onPress,M=i.onRelease,b=i.onRight,A=i.onLeft,w=i.onUp,v=i.onDown,E=i.onChangeX,L=i.onChangeY,C=i.onChange,N=i.onToggleX,X=i.onToggleY,z=i.onHover,F=i.onHoverEnd,G=i.onMove,D=i.ignoreCheck,Z=i.isNormalizer,J=i.onGestureStart,P=i.onGestureEnd,he=i.onWheel,Te=i.onEnable,Ye=i.onDisable,De=i.onClick,K=i.scrollSpeed,le=i.capture,ge=i.allowClicks,fe=i.lockAxis,be=i.onLockAxis;this.target=o=Rn(o)||lr,this.vars=i,f&&(f=on.utils.toArray(f)),r=r||1e-9,s=s||0,g=g||1,K=K||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Hn.getComputedStyle(Es).lineHeight)||22);var Ue,Re,Ge,ye,Ke,rt,St,Y=this,lt=0,U=0,At=i.passive||!u&&i.passive!==!1,Ie=mr(o,Tn),qe=mr(o,Kt),pe=Ie(),ft=qe(),Ee=~a.indexOf("touch")&&!~a.indexOf("pointer")&&fi[0]==="pointerdown",R=da(o),x=o.ownerDocument||or,k=[0,0,0],j=[0,0,0],Q=0,oe=function(){return Q=fa()},ae=function(se,He){return(Y.event=se)&&f&&_S(se.target,f)||He&&Ee&&se.pointerType!=="touch"||D&&D(se,He)},O=function(){Y._vx.reset(),Y._vy.reset(),Re.pause(),d&&d(Y)},ce=function(){var se=Y.deltaX=Hh(k),He=Y.deltaY=Hh(j),ie=Math.abs(se)>=r,Oe=Math.abs(He)>=r;C&&(ie||Oe)&&C(Y,se,He,k,j),ie&&(b&&Y.deltaX>0&&b(Y),A&&Y.deltaX<0&&A(Y),E&&E(Y),N&&Y.deltaX<0!=lt<0&&N(Y),lt=Y.deltaX,k[0]=k[1]=k[2]=0),Oe&&(v&&Y.deltaY>0&&v(Y),w&&Y.deltaY<0&&w(Y),L&&L(Y),X&&Y.deltaY<0!=U<0&&X(Y),U=Y.deltaY,j[0]=j[1]=j[2]=0),(ye||Ge)&&(G&&G(Y),Ge&&(m&&Ge===1&&m(Y),S&&S(Y),Ge=0),ye=!1),rt&&!(rt=!1)&&be&&be(Y),Ke&&(he(Y),Ke=!1),Ue=0},me=function(se,He,ie){k[ie]+=se,j[ie]+=He,Y._vx.update(se),Y._vy.update(He),c?Ue||(Ue=requestAnimationFrame(ce)):ce()},Se=function(se,He){fe&&!St&&(Y.axis=St=Math.abs(se)>Math.abs(He)?"x":"y",rt=!0),St!=="y"&&(k[2]+=se,Y._vx.update(se,!0)),St!=="x"&&(j[2]+=He,Y._vy.update(He,!0)),c?Ue||(Ue=requestAnimationFrame(ce)):ce()},ee=function(se){if(!ae(se,1)){se=Js(se,u);var He=se.clientX,ie=se.clientY,Oe=He-Y.x,Ce=ie-Y.y,We=Y.isDragging;Y.x=He,Y.y=ie,(We||(Oe||Ce)&&(Math.abs(Y.startX-He)>=s||Math.abs(Y.startY-ie)>=s))&&(Ge||(Ge=We?2:1),We||(Y.isDragging=!0),Se(Oe,Ce))}},Ne=Y.onPress=function(ne){ae(ne,1)||ne&&ne.button||(Y.axis=St=null,Re.pause(),Y.isPressed=!0,ne=Js(ne),lt=U=0,Y.startX=Y.x=ne.clientX,Y.startY=Y.y=ne.clientY,Y._vx.reset(),Y._vy.reset(),Sn(Z?o:x,fi[1],ee,At,!0),Y.deltaX=Y.deltaY=0,T&&T(Y))},_e=Y.onRelease=function(ne){if(!ae(ne,1)){vn(Z?o:x,fi[1],ee,!0);var se=!isNaN(Y.y-Y.startY),He=Y.isDragging,ie=He&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),Oe=Js(ne);!ie&&se&&(Y._vx.reset(),Y._vy.reset(),u&&ge&&on.delayedCall(.08,function(){if(fa()-Q>300&&!ne.defaultPrevented){if(ne.target.click)ne.target.click();else if(x.createEvent){var Ce=x.createEvent("MouseEvents");Ce.initMouseEvent("click",!0,!0,Hn,1,Oe.screenX,Oe.screenY,Oe.clientX,Oe.clientY,!1,!1,!1,!1,0,null),ne.target.dispatchEvent(Ce)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,d&&He&&!Z&&Re.restart(!0),Ge&&ce(),p&&He&&p(Y),M&&M(Y,ie)}},Xe=function(se){return se.touches&&se.touches.length>1&&(Y.isGesturing=!0)&&J(se,Y.isDragging)},Fe=function(){return(Y.isGesturing=!1)||P(Y)},I=function(se){if(!ae(se)){var He=Ie(),ie=qe();me((He-pe)*K,(ie-ft)*K,1),pe=He,ft=ie,d&&Re.restart(!0)}},$=function(se){if(!ae(se)){se=Js(se,u),he&&(Ke=!0);var He=(se.deltaMode===1?l:se.deltaMode===2?Hn.innerHeight:1)*g;me(se.deltaX*He,se.deltaY*He,0),d&&!Z&&Re.restart(!0)}},re=function(se){if(!ae(se)){var He=se.clientX,ie=se.clientY,Oe=He-Y.x,Ce=ie-Y.y;Y.x=He,Y.y=ie,ye=!0,d&&Re.restart(!0),(Oe||Ce)&&Se(Oe,Ce)}},de=function(se){Y.event=se,z(Y)},we=function(se){Y.event=se,F(Y)},te=function(se){return ae(se)||Js(se,u)&&De(Y)};Re=Y._dc=on.delayedCall(h||.25,O).pause(),Y.deltaX=Y.deltaY=0,Y._vx=Fc(0,50,!0),Y._vy=Fc(0,50,!0),Y.scrollX=Ie,Y.scrollY=qe,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Qd(this),Y.enable=function(ne){return Y.isEnabled||(Sn(R?x:o,"scroll",Oc),a.indexOf("scroll")>=0&&Sn(R?x:o,"scroll",I,At,le),a.indexOf("wheel")>=0&&Sn(o,"wheel",$,At,le),(a.indexOf("touch")>=0&&jd||a.indexOf("pointer")>=0)&&(Sn(o,fi[0],Ne,At,le),Sn(x,fi[2],_e),Sn(x,fi[3],_e),ge&&Sn(o,"click",oe,!0,!0),De&&Sn(o,"click",te),J&&Sn(x,"gesturestart",Xe),P&&Sn(x,"gestureend",Fe),z&&Sn(o,br+"enter",de),F&&Sn(o,br+"leave",we),G&&Sn(o,br+"move",re)),Y.isEnabled=!0,Y.isDragging=Y.isGesturing=Y.isPressed=ye=Ge=!1,Y._vx.reset(),Y._vy.reset(),pe=Ie(),ft=qe(),ne&&ne.type&&Ne(ne),Te&&Te(Y)),Y},Y.disable=function(){Y.isEnabled&&(vs.filter(function(ne){return ne!==Y&&da(ne.target)}).length||vn(R?x:o,"scroll",Oc),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),vn(Z?o:x,fi[1],ee,!0)),vn(R?x:o,"scroll",I,le),vn(o,"wheel",$,le),vn(o,fi[0],Ne,le),vn(x,fi[2],_e),vn(x,fi[3],_e),vn(o,"click",oe,!0),vn(o,"click",te),vn(x,"gesturestart",Xe),vn(x,"gestureend",Fe),vn(o,br+"enter",de),vn(o,br+"leave",we),vn(o,br+"move",re),Y.isEnabled=Y.isPressed=Y.isDragging=!1,Ye&&Ye(Y))},Y.kill=Y.revert=function(){Y.disable();var ne=vs.indexOf(Y);ne>=0&&vs.splice(ne,1),Vi===Y&&(Vi=0)},vs.push(Y),Z&&da(o)&&(Vi=Y),Y.enable(_)},pS(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t})();kt.version="3.15.0";kt.create=function(t){return new kt(t)};kt.register=ip;kt.getAll=function(){return vs.slice()};kt.getById=function(t){return vs.filter(function(e){return e.vars.id===t})[0]};ep()&&on.registerPlugin(kt);var Ae,ps,tt,_t,Vn,pt,_u,sl,Da,pa,ra,vo,dn,ml,Bc,yn,Wh,Xh,ms,rp,ic,sp,Mn,zc,ap,op,nr,kc,gu,bs,vu,ma,Vc,rc,So=1,pn=Date.now,sc=pn(),ai=0,sa=0,Yh=function(e,n,i){var r=zn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+n+"Clamp"]=r,r?e.substr(6,e.length-7):e},qh=function(e,n){return n&&(!zn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gS=function t(){return sa&&requestAnimationFrame(t)},Kh=function(){return ml=1},$h=function(){return ml=0},Mi=function(e){return e},aa=function(e){return Math.round(e*1e5)/1e5||0},lp=function(){return typeof window<"u"},cp=function(){return Ae||lp()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},kr=function(e){return!!~_u.indexOf(e)},up=function(e){return(e==="Height"?vu:tt["inner"+e])||Vn["client"+e]||pt["client"+e]},hp=function(e){return hr(e,"getBoundingClientRect")||(kr(e)?function(){return Go.width=tt.innerWidth,Go.height=vu,Go}:function(){return zi(e)})},vS=function(e,n,i){var r=i.d,s=i.d2,a=i.a;return(a=hr(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(n?up(s):e["client"+s])||0}},SS=function(e,n){return!n||~Ai.indexOf(e)?hp(e):function(){return Go}},bi=function(e,n){var i=n.s,r=n.d2,s=n.d,a=n.a;return Math.max(0,(i="scroll"+r)&&(a=hr(e,i))?a()-hp(e)()[s]:kr(e)?(Vn[i]||pt[i])-up(r):e[i]-e["offset"+r])},xo=function(e,n){for(var i=0;i<ms.length;i+=3)(!n||~n.indexOf(ms[i+1]))&&e(ms[i],ms[i+1],ms[i+2])},zn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},oa=function(e){return typeof e=="number"},wr=function(e){return typeof e=="object"},Qs=function(e,n,i){return e&&e.progress(n?0:1)&&i&&e.pause()},cs=function(e,n,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return n(e,i)}):n(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},us=Math.abs,fp="left",dp="top",Su="right",xu="bottom",Ur="width",Or="height",_a="Right",ga="Left",va="Top",Sa="Bottom",Ht="padding",ei="margin",Os="Width",Mu="Height",qt="px",ti=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},xS=function(e){var n=ti(e).position;e.style.position=n==="absolute"||n==="fixed"?n:"relative"},Zh=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},zi=function(e,n){var i=n&&ti(e)[Bc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},al=function(e,n){var i=n.d2;return e["offset"+i]||e["client"+i]||0},pp=function(e){var n=[],i=e.labels,r=e.duration(),s;for(s in i)n.push(i[s]/r);return n},MS=function(e){return function(n){return Ae.utils.snap(pp(e),n)}},yu=function(e){var n=Ae.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return n(r);if(s>0){for(r-=a,o=0;o<i.length;o++)if(i[o]>=r)return i[o];return i[o-1]}else for(o=i.length,r+=a;o--;)if(i[o]<=r)return i[o];return i[0]}:function(r,s,a){a===void 0&&(a=.001);var o=n(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:n(s<0?r-e:r+e)}},yS=function(e){return function(n,i){return yu(pp(e))(n,i.direction)}},Mo=function(e,n,i,r){return i.split(",").forEach(function(s){return e(n,s,r)})},rn=function(e,n,i,r,s){return e.addEventListener(n,i,{passive:!r,capture:!!s})},nn=function(e,n,i,r){return e.removeEventListener(n,i,!!r)},yo=function(e,n,i){i=i&&i.wheelHandler,i&&(e(n,"wheel",i),e(n,"touchmove",i))},jh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Eo={toggleActions:"play",anticipatePin:0},ol={top:0,left:0,center:.5,bottom:1,right:1},Bo=function(e,n){if(zn(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=n/100),e=e.substr(0,i-1)),e=r+(e in ol?ol[e]*n:~e.indexOf("%")?parseFloat(e)*n/100:parseFloat(e)||0)}return e},To=function(e,n,i,r,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=_t.createElement("div"),_=kr(i)||hr(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?pt:i.tagName==="IFRAME"?i.contentDocument.body:i,S=e.indexOf("start")!==-1,T=S?c:u,M="border-color:"+T+";font-size:"+d+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(M+=(r===Kt?Su:xu)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(n?" marker-"+n:"")),g.style.cssText=M,g.innerText=n||n===0?e+"-"+n:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],zo(g,0,r,S),g},zo=function(e,n,i,r){var s={display:"block"},a=i[r?"os2":"p2"],o=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+a+Os]=1,s["border"+o+Os]=0,s[i.p]=n+"px",Ae.set(e,s)},Qe=[],Gc={},Ia,Jh=function(){return pn()-ai>34&&(Ia||(Ia=requestAnimationFrame(Hi)))},hs=function(){(!Mn||!Mn.isPressed||Mn.startX>pt.clientWidth)&&(nt.cache++,Mn?Ia||(Ia=requestAnimationFrame(Hi)):Hi(),ai||Gr("scrollStart"),ai=pn())},ac=function(){op=tt.innerWidth,ap=tt.innerHeight},la=function(e){nt.cache++,(e===!0||!dn&&!sp&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!zc||op!==tt.innerWidth||Math.abs(tt.innerHeight-ap)>tt.innerHeight*.25))&&sl.restart(!0)},Vr={},ES=[],mp=function t(){return nn(je,"scrollEnd",t)||Cr(!0)},Gr=function(e){return Vr[e]&&Vr[e].map(function(n){return n()})||ES},Bn=[],_p=function(e){for(var n=0;n<Bn.length;n+=5)(!e||Bn[n+4]&&Bn[n+4].query===e)&&(Bn[n].style.cssText=Bn[n+1],Bn[n].getBBox&&Bn[n].setAttribute("transform",Bn[n+2]||""),Bn[n+3].uncache=1)},gp=function(){return nt.forEach(function(e){return _n(e)&&++e.cacheID&&(e.rec=e())})},Eu=function(e,n){var i;for(yn=0;yn<Qe.length;yn++)i=Qe[yn],i&&(!n||i._ctx===n)&&(e?i.kill(1):i.revert(!0,!0));ma=!0,n&&_p(n),n||Gr("revert")},vp=function(e,n){nt.cache++,(n||!En)&&nt.forEach(function(i){return _n(i)&&i.cacheID++&&(i.rec=0)}),zn(e)&&(tt.history.scrollRestoration=gu=e)},En,Fr=0,Qh,TS=function(){if(Qh!==Fr){var e=Qh=Fr;requestAnimationFrame(function(){return e===Fr&&Cr(!0)})}},Sp=function(){pt.appendChild(bs),vu=!Mn&&bs.offsetHeight||tt.innerHeight,pt.removeChild(bs)},ef=function(e){return Da(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=e?"none":"block"})},Cr=function(e,n){if(Vn=_t.documentElement,pt=_t.body,_u=[tt,_t,Vn,pt],ai&&!e&&!ma){rn(je,"scrollEnd",mp);return}Sp(),En=je.isRefreshing=!0,ma||gp();var i=Gr("refreshInit");rp&&je.sort(),n||Eu(),nt.forEach(function(r){_n(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Qe.slice(0).forEach(function(r){return r.refresh()}),ma=!1,Qe.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),Vc=1,ef(!0),Qe.forEach(function(r){var s=bi(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),ef(!1),Vc=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),nt.forEach(function(r){_n(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),vp(gu,1),sl.pause(),Fr++,En=2,Hi(2),Qe.forEach(function(r){return _n(r.vars.onRefresh)&&r.vars.onRefresh(r)}),En=je.isRefreshing=!1,Gr("refresh")},Hc=0,ko=1,xa,Hi=function(e){if(e===2||!En&&!ma){je.isUpdating=!0,xa&&xa.update(0);var n=Qe.length,i=pn(),r=i-sc>=50,s=n&&Qe[0].scroll();if(ko=Hc>s?-1:1,En||(Hc=s),r&&(ai&&!ml&&i-ai>200&&(ai=0,Gr("scrollEnd")),ra=sc,sc=i),ko<0){for(yn=n;yn-- >0;)Qe[yn]&&Qe[yn].update(0,r);ko=1}else for(yn=0;yn<n;yn++)Qe[yn]&&Qe[yn].update(0,r);je.isUpdating=!1}Ia=0},Wc=[fp,dp,xu,Su,ei+Sa,ei+_a,ei+va,ei+ga,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vo=Wc.concat([Ur,Or,"boxSizing","max"+Os,"max"+Mu,"position",ei,Ht,Ht+va,Ht+_a,Ht+Sa,Ht+ga]),bS=function(e,n,i){ws(i);var r=e._gsap;if(r.spacerIsNative)ws(r.spacerState);else if(e._gsap.swappedIn){var s=n.parentNode;s&&(s.insertBefore(e,n),s.removeChild(n))}e._gsap.swappedIn=!1},oc=function(e,n,i,r){if(!e._gsap.swappedIn){for(var s=Wc.length,a=n.style,o=e.style,l;s--;)l=Wc[s],a[l]=i[l];a.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(a.display="inline-block"),o[xu]=o[Su]="auto",a.flexBasis=i.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ur]=al(e,Tn)+qt,a[Or]=al(e,Kt)+qt,a[Ht]=o[ei]=o[dp]=o[fp]="0",ws(r),o[Ur]=o["max"+Os]=i[Ur],o[Or]=o["max"+Mu]=i[Or],o[Ht]=i[Ht],e.parentNode!==n&&(e.parentNode.insertBefore(n,e),n.appendChild(e)),e._gsap.swappedIn=!0}},wS=/([A-Z])/g,ws=function(e){if(e){var n=e.t.style,i=e.length,r=0,s,a;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;r<i;r+=2)a=e[r+1],s=e[r],a?n[s]=a:n[s]&&n.removeProperty(s.replace(wS,"-$1").toLowerCase())}},bo=function(e){for(var n=Vo.length,i=e.style,r=[],s=0;s<n;s++)r.push(Vo[s],i[Vo[s]]);return r.t=e,r},AS=function(e,n,i){for(var r=[],s=e.length,a=i?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in n?n[o]:e[a+1]);return r.t=e.t,r},Go={left:0,top:0},tf=function(e,n,i,r,s,a,o,l,c,u,d,h,f,g){_n(e)&&(e=e(l)),zn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Bo("0"+e.substr(3),i):0));var _=f?f.time():0,m,p,S;if(f&&f.seek(0),isNaN(e)||(e=+e),oa(e))f&&(e=Ae.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&zo(o,i,r,!0);else{_n(n)&&(n=n(l));var T=(e||"0").split(" "),M,b,A,w;S=Rn(n,l)||pt,M=zi(S)||{},(!M||!M.left&&!M.top)&&ti(S).display==="none"&&(w=S.style.display,S.style.display="block",M=zi(S),w?S.style.display=w:S.style.removeProperty("display")),b=Bo(T[0],M[r.d]),A=Bo(T[1]||"0",i),e=M[r.p]-c[r.p]-u+b+s-A,o&&zo(o,A,r,i-A<20||o._isStart&&A>20),i-=i-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var v=e+i,E=a._isStart;m="scroll"+r.d2,zo(a,v,r,E&&v>20||!E&&(d?Math.max(pt[m],Vn[m]):a.parentNode[m])<=v+1),d&&(c=zi(o),d&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+qt))}return f&&S&&(m=zi(S),f.seek(h),p=zi(S),f._caScrollDist=m[r.p]-p[r.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},RS=/(webkit|moz|length|cssText|inset)/i,nf=function(e,n,i,r){if(e.parentNode!==n){var s=e.style,a,o;if(n===pt){e._stOrig=s.cssText,o=ti(e);for(a in o)!+a&&!RS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,n.appendChild(e)}},xp=function(e,n,i){var r=n,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,i&&i()),s=r,r=Math.round(a),r}},wo=function(e,n,i){var r={};r[n.p]="+="+i,Ae.set(e,r)},rf=function(e,n){var i=mr(e,n),r="_scroll"+n.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||i();var _=xp(i,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){nt.cache++,a.tween&&Hi()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Ae.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(e,"wheel",i.wheelHandler),je.isTouch&&rn(e,"touchmove",i.wheelHandler),s},je=(function(){function t(n,i){ps||t.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),kc(this),this.init(n,i)}var e=t.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!sa){this.update=this.refresh=this.kill=Mi;return}i=Zh(zn(i)||oa(i)||i.nodeType?{trigger:i}:i,Eo);var s=i,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,T=s.once,M=s.snap,b=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,v=s.fastScrollEnd,E=s.preventOverlaps,L=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Tn:Kt,C=!d&&d!==0,N=Rn(i.scroller||tt),X=Ae.core.getCache(N),z=kr(N),F=("pinType"in i?i.pinType:hr(N,"pinType")||z&&"fixed")==="fixed",G=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],D=C&&i.toggleActions.split(" "),Z="markers"in i?i.markers:Eo.markers,J=z?0:parseFloat(ti(N)["border"+L.p2+Os])||0,P=this,he=i.onRefreshInit&&function(){return i.onRefreshInit(P)},Te=vS(N,z,L),Ye=SS(N,z),De=0,K=0,le=0,ge=mr(N,L),fe,be,Ue,Re,Ge,ye,Ke,rt,St,Y,lt,U,At,Ie,qe,pe,ft,Ee,R,x,k,j,Q,oe,ae,O,ce,me,Se,ee,Ne,_e,Xe,Fe,I,$,re,de,we;if(P._startClamp=P._endClamp=!1,P._dir=L,m*=45,P.scroller=N,P.scroll=w?w.time.bind(w):ge,Re=ge(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(rp=1,i.refreshPriority===-9999&&(xa=P)),X.tweenScroll=X.tweenScroll||{top:rf(N,Kt),left:rf(N,Tn)},P.tweenTo=fe=X.tweenScroll[L.p],P.scrubDuration=function(ie){Xe=oa(ie)&&ie,Xe?_e?_e.duration(ie):_e=Ae.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Xe,paused:!0,onComplete:function(){return p&&p(P)}}):(_e&&_e.progress(1).kill(),_e=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),ee=0,l||(l=r.vars.id)),M&&((!wr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in pt.style&&Ae.set(z?[pt,Vn]:N,{scrollBehavior:"auto"}),nt.forEach(function(ie){return _n(ie)&&ie.target===(z?_t.scrollingElement||Vn:N)&&(ie.smooth=!1)}),Ue=_n(M.snapTo)?M.snapTo:M.snapTo==="labels"?MS(r):M.snapTo==="labelsDirectional"?yS(r):M.directional!==!1?function(ie,Oe){return yu(M.snapTo)(ie,pn()-K<500?0:Oe.direction)}:Ae.utils.snap(M.snapTo),Fe=M.duration||{min:.1,max:2},Fe=wr(Fe)?pa(Fe.min,Fe.max):pa(Fe,Fe),I=Ae.delayedCall(M.delay||Xe/2||.1,function(){var ie=ge(),Oe=pn()-K<500,Ce=fe.tween;if((Oe||Math.abs(P.getVelocity())<10)&&!Ce&&!ml&&De!==ie){var We=(ie-ye)/Ie,Ot=r&&!C?r.totalProgress():We,et=Oe?0:(Ot-Ne)/(pn()-ra)*1e3||0,mt=Ae.utils.clamp(-We,1-We,us(et/2)*et/.185),Vt=We+(M.inertia===!1?0:mt),wt,xt,ct=M,wn=ct.onStart,gt=ct.onInterrupt,cn=ct.onComplete;if(wt=Ue(Vt,P),oa(wt)||(wt=Vt),xt=Math.max(0,Math.round(ye+wt*Ie)),ie<=Ke&&ie>=ye&&xt!==ie){if(Ce&&!Ce._initted&&Ce.data<=us(xt-ie))return;M.inertia===!1&&(mt=wt-We),fe(xt,{duration:Fe(us(Math.max(us(Vt-Ot),us(wt-Ot))*.185/et/.05||0)),ease:M.ease||"power3",data:us(xt-ie),onInterrupt:function(){return I.restart(!0)&&gt&&cs(P,gt)},onComplete:function(){P.update(),De=ge(),r&&!C&&(_e?_e.resetTo("totalProgress",wt,r._tTime/r._tDur):r.progress(wt)),ee=Ne=r&&!C?r.totalProgress():P.progress,S&&S(P),cn&&cs(P,cn)}},ie,mt*Ie,xt-ie-mt*Ie),wn&&cs(P,wn,fe.tween)}}else P.isActive&&De!==ie&&I.restart(!0)}).pause()),l&&(Gc[l]=P),h=P.trigger=Rn(h||f!==!0&&f),we=h&&h._gsap&&h._gsap.stRevert,we&&(we=we(P)),f=f===!0?h:Rn(f),zn(o)&&(o={targets:h,className:o}),f&&(g===!1||g===ei||(g=!g&&f.parentNode&&f.parentNode.style&&ti(f.parentNode).display==="flex"?!1:Ht),P.pin=f,be=Ae.core.getCache(f),be.spacer?qe=be.pinState:(A&&(A=Rn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),be.spacerIsNative=!!A,A&&(be.spacerState=bo(A))),be.spacer=Ee=A||_t.createElement("div"),Ee.classList.add("pin-spacer"),l&&Ee.classList.add("pin-spacer-"+l),be.pinState=qe=bo(f)),i.force3D!==!1&&Ae.set(f,{force3D:!0}),P.spacer=Ee=be.spacer,Se=ti(f),oe=Se[g+L.os2],x=Ae.getProperty(f),k=Ae.quickSetter(f,L.a,qt),oc(f,Ee,Se),ft=bo(f)),Z){U=wr(Z)?Zh(Z,jh):jh,Y=To("scroller-start",l,N,L,U,0),lt=To("scroller-end",l,N,L,U,0,Y),R=Y["offset"+L.op.d2];var te=Rn(hr(N,"content")||N);rt=this.markerStart=To("start",l,te,L,U,R,0,w),St=this.markerEnd=To("end",l,te,L,U,R,0,w),w&&(de=Ae.quickSetter([rt,St],L.a,qt)),!F&&!(Ai.length&&hr(N,"fixedMarkers")===!0)&&(xS(z?pt:N),Ae.set([Y,lt],{force3D:!0}),O=Ae.quickSetter(Y,L.a,qt),me=Ae.quickSetter(lt,L.a,qt))}if(w){var ne=w.vars.onUpdate,se=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),ne&&ne.apply(w,se||[])})}if(P.previous=function(){return Qe[Qe.indexOf(P)-1]},P.next=function(){return Qe[Qe.indexOf(P)+1]},P.revert=function(ie,Oe){if(!Oe)return P.kill(!0);var Ce=ie!==!1||!P.enabled,We=dn;Ce!==P.isReverted&&(Ce&&($=Math.max(ge(),P.scroll.rec||0),le=P.progress,re=r&&r.progress()),rt&&[rt,St,Y,lt].forEach(function(Ot){return Ot.style.display=Ce?"none":"block"}),Ce&&(dn=P,P.update(Ce)),f&&(!b||!P.isActive)&&(Ce?bS(f,Ee,qe):oc(f,Ee,ti(f),ae)),Ce||P.update(Ce),dn=We,P.isReverted=Ce)},P.refresh=function(ie,Oe,Ce,We){if(!((dn||!P.enabled)&&!Oe)){if(f&&ie&&ai){rn(t,"scrollEnd",mp);return}!En&&he&&he(P),dn=P,fe.tween&&!Ce&&(fe.tween.kill(),fe.tween=0),_e&&_e.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Me){return Me.vars.immediateRender&&Me.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ot=Te(),et=Ye(),mt=w?w.duration():bi(N,L),Vt=Ie<=.01||!Ie,wt=0,xt=We||0,ct=wr(Ce)?Ce.end:i.end,wn=i.endTrigger||h,gt=wr(Ce)?Ce.start:i.start||(i.start===0||!h?0:f?"0 0":"0 100%"),cn=P.pinnedContainer=i.pinnedContainer&&Rn(i.pinnedContainer,P),Un=h&&Math.max(0,Qe.indexOf(P))||0,Xt=Un,Yt,Qt,Li,Yr,en,Ft,y,B,q,H,V,ue,ve;for(Z&&wr(Ce)&&(ue=Ae.getProperty(Y,L.p),ve=Ae.getProperty(lt,L.p));Xt-- >0;)Ft=Qe[Xt],Ft.end||Ft.refresh(0,1)||(dn=P),y=Ft.pin,y&&(y===h||y===f||y===cn)&&!Ft.isReverted&&(H||(H=[]),H.unshift(Ft),Ft.revert(!0,!0)),Ft!==Qe[Xt]&&(Un--,Xt--);for(_n(gt)&&(gt=gt(P)),gt=Yh(gt,"start",P),ye=tf(gt,h,Ot,L,ge(),rt,Y,P,et,J,F,mt,w,P._startClamp&&"_startClamp")||(f?-.001:0),_n(ct)&&(ct=ct(P)),zn(ct)&&!ct.indexOf("+=")&&(~ct.indexOf(" ")?ct=(zn(gt)?gt.split(" ")[0]:"")+ct:(wt=Bo(ct.substr(2),Ot),ct=zn(gt)?gt:(w?Ae.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,ye):ye)+wt,wn=h)),ct=Yh(ct,"end",P),Ke=Math.max(ye,tf(ct||(wn?"100% 0":mt),wn,Ot,L,ge()+wt,St,lt,P,et,J,F,mt,w,P._endClamp&&"_endClamp"))||-.001,wt=0,Xt=Un;Xt--;)Ft=Qe[Xt]||{},y=Ft.pin,y&&Ft.start-Ft._pinPush<=ye&&!w&&Ft.end>0&&(Yt=Ft.end-(P._startClamp?Math.max(0,Ft.start):Ft.start),(y===h&&Ft.start-Ft._pinPush<ye||y===cn)&&isNaN(gt)&&(wt+=Yt*(1-Ft.progress)),y===f&&(xt+=Yt));if(ye+=wt,Ke+=wt,P._startClamp&&(P._startClamp+=wt),P._endClamp&&!En&&(P._endClamp=Ke||-.001,Ke=Math.min(Ke,bi(N,L))),Ie=Ke-ye||(ye-=.01)&&.001,Vt&&(le=Ae.utils.clamp(0,1,Ae.utils.normalize(ye,Ke,$))),P._pinPush=xt,rt&&wt&&(Yt={},Yt[L.a]="+="+wt,cn&&(Yt[L.p]="-="+ge()),Ae.set([rt,St],Yt)),f&&!(Vc&&P.end>=bi(N,L)))Yt=ti(f),Yr=L===Kt,Li=ge(),j=parseFloat(x(L.a))+xt,!mt&&Ke>1&&(V=(z?_t.scrollingElement||Vn:N).style,V={style:V,value:V["overflow"+L.a.toUpperCase()]},z&&ti(pt)["overflow"+L.a.toUpperCase()]!=="scroll"&&(V.style["overflow"+L.a.toUpperCase()]="scroll")),oc(f,Ee,Yt),ft=bo(f),Qt=zi(f,!0),B=F&&mr(N,Yr?Tn:Kt)(),g?(ae=[g+L.os2,Ie+xt+qt],ae.t=Ee,Xt=g===Ht?al(f,L)+Ie+xt:0,Xt&&(ae.push(L.d,Xt+qt),Ee.style.flexBasis!=="auto"&&(Ee.style.flexBasis=Xt+qt)),ws(ae),cn&&Qe.forEach(function(Me){Me.pin===cn&&Me.vars.pinSpacing!==!1&&(Me._subPinOffset=!0)}),F&&ge($)):(Xt=al(f,L),Xt&&Ee.style.flexBasis!=="auto"&&(Ee.style.flexBasis=Xt+qt)),F&&(en={top:Qt.top+(Yr?Li-ye:B)+qt,left:Qt.left+(Yr?B:Li-ye)+qt,boxSizing:"border-box",position:"fixed"},en[Ur]=en["max"+Os]=Math.ceil(Qt.width)+qt,en[Or]=en["max"+Mu]=Math.ceil(Qt.height)+qt,en[ei]=en[ei+va]=en[ei+_a]=en[ei+Sa]=en[ei+ga]="0",en[Ht]=Yt[Ht],en[Ht+va]=Yt[Ht+va],en[Ht+_a]=Yt[Ht+_a],en[Ht+Sa]=Yt[Ht+Sa],en[Ht+ga]=Yt[Ht+ga],pe=AS(qe,en,b),En&&ge(0)),r?(q=r._initted,ic(1),r.render(r.duration(),!0,!0),Q=x(L.a)-j+Ie+xt,ce=Math.abs(Ie-Q)>1,F&&ce&&pe.splice(pe.length-2,2),r.render(0,!0,!0),q||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ic(0)):Q=Ie,V&&(V.value?V.style["overflow"+L.a.toUpperCase()]=V.value:V.style.removeProperty("overflow-"+L.a));else if(h&&ge()&&!w)for(Qt=h.parentNode;Qt&&Qt!==pt;)Qt._pinOffset&&(ye-=Qt._pinOffset,Ke-=Qt._pinOffset),Qt=Qt.parentNode;H&&H.forEach(function(Me){return Me.revert(!1,!0)}),P.start=ye,P.end=Ke,Re=Ge=En?$:ge(),!w&&!En&&(Re<$&&ge($),P.scroll.rec=0),P.revert(!1,!0),K=pn(),I&&(De=-1,I.restart(!0)),dn=0,r&&C&&(r._initted||re)&&r.progress()!==re&&r.progress(re||0,!0).render(r.time(),!0,!0),(Vt||le!==P.progress||w||_||r&&!r._initted)&&(r&&!C&&(r._initted||le||r.vars.immediateRender!==!1)&&r.totalProgress(w&&ye<-.001&&!le?Ae.utils.normalize(ye,Ke,0):le,!0),P.progress=Vt||(Re-ye)/Ie===le?0:le),f&&g&&(Ee._pinOffset=Math.round(P.progress*Q)),_e&&_e.invalidate(),isNaN(ue)||(ue-=Ae.getProperty(Y,L.p),ve-=Ae.getProperty(lt,L.p),wo(Y,L,ue),wo(rt,L,ue-(We||0)),wo(lt,L,ve),wo(St,L,ve-(We||0))),Vt&&!En&&P.update(),u&&!En&&!At&&(At=!0,u(P),At=!1)}},P.getVelocity=function(){return(ge()-Ge)/(pn()-ra)*1e3||0},P.endAnimation=function(){Qs(P.callbackAnimation),r&&(_e?_e.progress(1):r.paused()?C||Qs(r,P.direction<0,1):Qs(r,r.reversed()))},P.labelToScroll=function(ie){return r&&r.labels&&(ye||P.refresh()||ye)+r.labels[ie]/r.duration()*Ie||0},P.getTrailing=function(ie){var Oe=Qe.indexOf(P),Ce=P.direction>0?Qe.slice(0,Oe).reverse():Qe.slice(Oe+1);return(zn(ie)?Ce.filter(function(We){return We.vars.preventOverlaps===ie}):Ce).filter(function(We){return P.direction>0?We.end<=ye:We.start>=Ke})},P.update=function(ie,Oe,Ce){if(!(w&&!Ce&&!ie)){var We=En===!0?$:P.scroll(),Ot=ie?0:(We-ye)/Ie,et=Ot<0?0:Ot>1?1:Ot||0,mt=P.progress,Vt,wt,xt,ct,wn,gt,cn,Un;if(Oe&&(Ge=Re,Re=w?ge():We,M&&(Ne=ee,ee=r&&!C?r.totalProgress():et)),m&&f&&!dn&&!So&&ai&&(!et&&ye<We+(We-Ge)/(pn()-ra)*m?et=1e-4:et===1&&Ke>We+(We-Ge)/(pn()-ra)*m&&(et=.9999)),et!==mt&&P.enabled){if(Vt=P.isActive=!!et&&et<1,wt=!!mt&&mt<1,gt=Vt!==wt,wn=gt||!!et!=!!mt,P.direction=et>mt?1:-1,P.progress=et,wn&&!dn&&(xt=et&&!mt?0:et===1?1:mt===1?2:3,C&&(ct=!gt&&D[xt+1]!=="none"&&D[xt+1]||D[xt],Un=r&&(ct==="complete"||ct==="reset"||ct in r))),E&&(gt||Un)&&(Un||d||!r)&&(_n(E)?E(P):P.getTrailing(E).forEach(function(Li){return Li.endAnimation()})),C||(_e&&!dn&&!So?(_e._dp._time-_e._start!==_e._time&&_e.render(_e._dp._time-_e._start),_e.resetTo?_e.resetTo("totalProgress",et,r._tTime/r._tDur):(_e.vars.totalProgress=et,_e.invalidate().restart())):r&&r.totalProgress(et,!!(dn&&(K||ie)))),f){if(ie&&g&&(Ee.style[g+L.os2]=oe),!F)k(aa(j+Q*et));else if(wn){if(cn=!ie&&et>mt&&Ke+1>We&&We+1>=bi(N,L),b)if(!ie&&(Vt||cn)){var Xt=zi(f,!0),Yt=We-ye;nf(f,pt,Xt.top+(L===Kt?Yt:0)+qt,Xt.left+(L===Kt?0:Yt)+qt)}else nf(f,Ee);ws(Vt||cn?pe:ft),ce&&et<1&&Vt||k(j+(et===1&&!cn?Q:0))}}M&&!fe.tween&&!dn&&!So&&I.restart(!0),o&&(gt||T&&et&&(et<1||!rc))&&Da(o.targets).forEach(function(Li){return Li.classList[Vt||T?"add":"remove"](o.className)}),a&&!C&&!ie&&a(P),wn&&!dn?(C&&(Un&&(ct==="complete"?r.pause().totalProgress(1):ct==="reset"?r.restart(!0).pause():ct==="restart"?r.restart(!0):r[ct]()),a&&a(P)),(gt||!rc)&&(c&&gt&&cs(P,c),G[xt]&&cs(P,G[xt]),T&&(et===1?P.kill(!1,1):G[xt]=0),gt||(xt=et===1?1:3,G[xt]&&cs(P,G[xt]))),v&&!Vt&&Math.abs(P.getVelocity())>(oa(v)?v:2500)&&(Qs(P.callbackAnimation),_e?_e.progress(1):Qs(r,ct==="reverse"?1:!et,1))):C&&a&&!dn&&a(P)}if(me){var Qt=w?We/w.duration()*(w._caScrollDist||0):We;O(Qt+(Y._isFlipped?1:0)),me(Qt)}de&&de(-We/w.duration()*(w._caScrollDist||0))}},P.enable=function(ie,Oe){P.enabled||(P.enabled=!0,rn(N,"resize",la),z||rn(N,"scroll",hs),he&&rn(t,"refreshInit",he),ie!==!1&&(P.progress=le=0,Re=Ge=De=ge()),Oe!==!1&&P.refresh())},P.getTween=function(ie){return ie&&fe?fe.tween:_e},P.setPositions=function(ie,Oe,Ce,We){if(w){var Ot=w.scrollTrigger,et=w.duration(),mt=Ot.end-Ot.start;ie=Ot.start+mt*ie/et,Oe=Ot.start+mt*Oe/et}P.refresh(!1,!1,{start:qh(ie,Ce&&!!P._startClamp),end:qh(Oe,Ce&&!!P._endClamp)},We),P.update()},P.adjustPinSpacing=function(ie){if(ae&&ie){var Oe=ae.indexOf(L.d)+1;ae[Oe]=parseFloat(ae[Oe])+ie+qt,ae[1]=parseFloat(ae[1])+ie+qt,ws(ae)}},P.disable=function(ie,Oe){if(ie!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Oe||_e&&_e.pause(),$=0,be&&(be.uncache=1),he&&nn(t,"refreshInit",he),I&&(I.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!z)){for(var Ce=Qe.length;Ce--;)if(Qe[Ce].scroller===N&&Qe[Ce]!==P)return;nn(N,"resize",la),z||nn(N,"scroll",hs)}},P.kill=function(ie,Oe){P.disable(ie,Oe),_e&&!Oe&&_e.kill(),l&&delete Gc[l];var Ce=Qe.indexOf(P);Ce>=0&&Qe.splice(Ce,1),Ce===yn&&ko>0&&yn--,Ce=0,Qe.forEach(function(We){return We.scroller===P.scroller&&(Ce=1)}),Ce||En||(P.scroll.rec=0),r&&(r.scrollTrigger=null,ie&&r.revert({kill:!1}),Oe||r.kill()),rt&&[rt,St,Y,lt].forEach(function(We){return We.parentNode&&We.parentNode.removeChild(We)}),xa===P&&(xa=0),f&&(be&&(be.uncache=1),Ce=0,Qe.forEach(function(We){return We.pin===f&&Ce++}),Ce||(be.spacer=0)),i.onKill&&i.onKill(P)},Qe.push(P),P.enable(!1,!1),we&&we(P),r&&r.add&&!Ie){var He=P.update;P.update=function(){P.update=He,nt.cache++,ye||Ke||P.refresh()},Ae.delayedCall(.01,P.update),Ie=.01,ye=Ke=0}else P.refresh();f&&TS()},t.register=function(i){return ps||(Ae=i||cp(),lp()&&window.document&&t.enable(),ps=sa),ps},t.defaults=function(i){if(i)for(var r in i)Eo[r]=i[r];return Eo},t.disable=function(i,r){sa=0,Qe.forEach(function(a){return a[r?"kill":"disable"](i)}),nn(tt,"wheel",hs),nn(_t,"scroll",hs),clearInterval(vo),nn(_t,"touchcancel",Mi),nn(pt,"touchstart",Mi),Mo(nn,_t,"pointerdown,touchstart,mousedown",Kh),Mo(nn,_t,"pointerup,touchend,mouseup",$h),sl.kill(),xo(nn);for(var s=0;s<nt.length;s+=3)yo(nn,nt[s],nt[s+1]),yo(nn,nt[s],nt[s+2])},t.enable=function(){if(tt=window,_t=document,Vn=_t.documentElement,pt=_t.body,Ae)if(Da=Ae.utils.toArray,pa=Ae.utils.clamp,kc=Ae.core.context||Mi,ic=Ae.core.suppressOverwrites||Mi,gu=tt.history.scrollRestoration||"auto",Hc=tt.pageYOffset||0,Ae.core.globals("ScrollTrigger",t),pt){sa=1,bs=document.createElement("div"),bs.style.height="100vh",bs.style.position="absolute",Sp(),gS(),kt.register(Ae),t.isTouch=kt.isTouch,nr=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),zc=kt.isTouch===1,rn(tt,"wheel",hs),_u=[tt,_t,Vn,pt],Ae.matchMedia?(t.matchMedia=function(c){var u=Ae.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},Ae.addEventListener("matchMediaInit",function(){gp(),Eu()}),Ae.addEventListener("matchMediaRevert",function(){return _p()}),Ae.addEventListener("matchMedia",function(){Cr(0,1),Gr("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return ac(),ac})):console.warn("Requires GSAP 3.11.0 or later"),ac(),rn(_t,"scroll",hs);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,a=Ae.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",o=zi(pt),Kt.m=Math.round(o.top+Kt.sc())||0,Tn.m=Math.round(o.left+Tn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),vo=setInterval(Jh,250),Ae.delayedCall(.5,function(){return So=0}),rn(_t,"touchcancel",Mi),rn(pt,"touchstart",Mi),Mo(rn,_t,"pointerdown,touchstart,mousedown",Kh),Mo(rn,_t,"pointerup,touchend,mouseup",$h),Bc=Ae.utils.checkPrefix("transform"),Vo.push(Bc),ps=pn(),sl=Ae.delayedCall(.2,Cr).pause(),ms=[_t,"visibilitychange",function(){var c=tt.innerWidth,u=tt.innerHeight;_t.hidden?(Wh=c,Xh=u):(Wh!==c||Xh!==u)&&la()},_t,"DOMContentLoaded",Cr,tt,"load",Cr,tt,"resize",la],xo(rn),Qe.forEach(function(c){return c.enable(0,1)}),l=0;l<nt.length;l+=3)yo(nn,nt[l],nt[l+1]),yo(nn,nt[l],nt[l+2])}else _t&&_t.addEventListener("DOMContentLoaded",function c(){t.enable(),_t.removeEventListener("DOMContentLoaded",c)})},t.config=function(i){"limitCallbacks"in i&&(rc=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(vo)||(vo=r)&&setInterval(Jh,r),"ignoreMobileResize"in i&&(zc=t.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(xo(nn)||xo(rn,i.autoRefreshEvents||"none"),sp=(i.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(i,r){var s=Rn(i),a=nt.indexOf(s),o=kr(s);~a&&nt.splice(a,o?6:2),r&&(o?Ai.unshift(tt,r,pt,r,Vn,r):Ai.unshift(s,r))},t.clearMatchMedia=function(i){Qe.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},t.isInViewport=function(i,r,s){var a=(zn(i)?Rn(i):i).getBoundingClientRect(),o=a[s?Ur:Or]*r||0;return s?a.right-o>0&&a.left+o<tt.innerWidth:a.bottom-o>0&&a.top+o<tt.innerHeight},t.positionInViewport=function(i,r,s){zn(i)&&(i=Rn(i));var a=i.getBoundingClientRect(),o=a[s?Ur:Or],l=r==null?o/2:r in ol?ol[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/tt.innerWidth:(a.top+l)/tt.innerHeight},t.killAll=function(i){if(Qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Vr.killAll||[];Vr={},r.forEach(function(s){return s()})}},t})();je.version="3.15.0";je.saveStyles=function(t){return t?Da(t).forEach(function(e){if(e&&e.style){var n=Bn.indexOf(e);n>=0&&Bn.splice(n,5),Bn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),kc())}}):Bn};je.revert=function(t,e){return Eu(!t,e)};je.create=function(t,e){return new je(t,e)};je.refresh=function(t){return t?la(!0):(ps||je.register())&&Cr(!0)};je.update=function(t){return++nt.cache&&Hi(t===!0?2:0)};je.clearScrollMemory=vp;je.maxScroll=function(t,e){return bi(t,e?Tn:Kt)};je.getScrollFunc=function(t,e){return mr(Rn(t),e?Tn:Kt)};je.getById=function(t){return Gc[t]};je.getAll=function(){return Qe.filter(function(t){return t.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!ai};je.snapDirectional=yu;je.addEventListener=function(t,e){var n=Vr[t]||(Vr[t]=[]);~n.indexOf(e)||n.push(e)};je.removeEventListener=function(t,e){var n=Vr[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)};je.batch=function(t,e){var n=[],i={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Ae.delayedCall(r,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)i[o]=o.substr(0,2)==="on"&&_n(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return _n(s)&&(s=s(),rn(je,"refresh",function(){return s=e.batchMax()})),Da(t).forEach(function(l){var c={};for(o in i)c[o]=i[o];c.trigger=l,n.push(je.create(c))}),n};var sf=function(e,n,i,r){return n>r?e(r):n<0&&e(0),i>r?(r-n)/(i-n):i<0?n/(n-i):1},lc=function t(e,n){n===!0?e.style.removeProperty("touch-action"):e.style.touchAction=n===!0?"auto":n?"pan-"+n+(kt.isTouch?" pinch-zoom":""):"none",e===Vn&&t(pt,n)},Ao={auto:1,scroll:1},CS=function(e){var n=e.event,i=e.target,r=e.axis,s=(n.changedTouches?n.changedTouches[0]:n).target,a=s._gsap||Ae.core.getCache(s),o=pn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ao[(l=ti(s)).overflowY]||Ao[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==i&&!kr(s)&&(Ao[(l=ti(s)).overflowY]||Ao[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},Mp=function(e,n,i,r){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&CS,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&rn(_t,kt.eventTypes[0],of,!1,!0)},onDisable:function(){return nn(_t,kt.eventTypes[0],of,!0)}})},PS=/(input|label|select|textarea)/i,af,of=function(e){var n=PS.test(e.target.tagName);(n||af)&&(e._gsapAllow=!0,af=n)},LS=function(e){wr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n=e,i=n.normalizeScrollX,r=n.momentum,s=n.allowNestedScroll,a=n.onRelease,o,l,c=Rn(e.target)||Vn,u=Ae.core.globals().ScrollSmoother,d=u&&u.get(),h=nr&&(e.content&&Rn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=mr(c,Kt),g=mr(c,Tn),_=1,m=(kt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,p=0,S=_n(r)?function(){return r(o)}:function(){return r||2.8},T,M,b=Mp(c,e.type,!0,s),A=function(){return M=!1},w=Mi,v=Mi,E=function(){l=bi(c,Kt),v=pa(nr?1:0,l),i&&(w=pa(0,bi(c,Tn))),T=Fr},L=function(){h._gsap.y=aa(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},C=function(){if(M){requestAnimationFrame(A);var Z=aa(o.deltaY/2),J=v(f.v-Z);if(h&&J!==f.v+f.offset){f.offset=J-f.v;var P=aa((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",f.cacheID=nt.cache,Hi()}return!0}f.offset&&L(),M=!0},N,X,z,F,G=function(){E(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return h&&Ae.set(h,{y:"+=0"}),e.ignoreCheck=function(D){return nr&&D.type==="touchmove"&&C(D)||_>1.05&&D.type!=="touchstart"||o.isGesturing||D.touches&&D.touches.length>1},e.onPress=function(){M=!1;var D=_;_=aa((tt.visualViewport&&tt.visualViewport.scale||1)/m),N.pause(),D!==_&&lc(c,_>1.01?!0:i?!1:"x"),X=g(),z=f(),E(),T=Fr},e.onRelease=e.onGestureStart=function(D,Z){if(f.offset&&L(),!Z)F.restart(!0);else{nt.cache++;var J=S(),P,he;i&&(P=g(),he=P+J*.05*-D.velocityX/.227,J*=sf(g,P,he,bi(c,Tn)),N.vars.scrollX=w(he)),P=f(),he=P+J*.05*-D.velocityY/.227,J*=sf(f,P,he,bi(c,Kt)),N.vars.scrollY=v(he),N.invalidate().duration(J).play(.01),(nr&&N.vars.scrollY>=l||P>=l-1)&&Ae.to({},{onUpdate:G,duration:J})}a&&a(D)},e.onWheel=function(){N._ts&&N.pause(),pn()-p>1e3&&(T=0,p=pn())},e.onChange=function(D,Z,J,P,he){if(Fr!==T&&E(),Z&&i&&g(w(P[2]===Z?X+(D.startX-D.x):g()+Z-P[1])),J){f.offset&&L();var Te=he[2]===J,Ye=Te?z+D.startY-D.y:f()+J-he[1],De=v(Ye);Te&&Ye!==De&&(z+=De-Ye),f(De)}(J||Z)&&Hi()},e.onEnable=function(){lc(c,i?!1:"x"),je.addEventListener("refresh",G),rn(tt,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){lc(c,!0),nn(tt,"resize",G),je.removeEventListener("refresh",G),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new kt(e),o.iOS=nr,nr&&!f()&&f(1),nr&&Ae.ticker.add(Mi),F=o._dc,N=Ae.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:xp(f,f(),function(){return N.pause()})},onUpdate:Hi,onComplete:F.vars.onComplete}),o};je.sort=function(t){if(_n(t))return Qe.sort(t);var e=tt.pageYOffset||0;return je.getAll().forEach(function(n){return n._sortY=n.trigger?e+n.trigger.getBoundingClientRect().top:n.start+tt.innerHeight}),Qe.sort(t||function(n,i){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};je.observe=function(t){return new kt(t)};je.normalizeScroll=function(t){if(typeof t>"u")return Mn;if(t===!0&&Mn)return Mn.enable();if(t===!1){Mn&&Mn.kill(),Mn=t;return}var e=t instanceof kt?t:LS(t);return Mn&&Mn.target===e.target&&Mn.kill(),kr(e.target)&&(Mn=e),e};je.core={_getVelocityProp:Fc,_inputObserver:Mp,_scrollers:nt,_proxies:Ai,bridge:{ss:function(){ai||Gr("scrollStart"),ai=pn()},ref:function(){return dn}}};cp()&&Ae.registerPlugin(je);var lf="1.3.23";function yp(t,e,n){return Math.max(t,Math.min(e,n))}function DS(t,e,n){return(1-n)*t+n*e}function IS(t,e,n,i){return DS(t,e,1-Math.exp(-n*i))}function NS(t,e){return(t%e+e)%e}var US=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(t){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const n=yp(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=IS(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function OS(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var FS=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){this.wrapper=t,this.content=e,n&&(this.debouncedResize=OS(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ep=class{events={};emit(t,...e){const n=this.events[t]||[];for(let i=0,r=n.length;i<r;i++)n[i]?.(...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{this.events[t]=this.events[t]?.filter(n=>e!==n)}}off(t,e){this.events[t]=this.events[t]?.filter(n=>e!==n)}destroy(){this.events={}}},BS=100/6,tr={passive:!1};function cf(t,e){return t===1?BS:t===2?e:1}var zS=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Ep;constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,tr),this.element.addEventListener("touchstart",this.onTouchStart,tr),this.element.addEventListener("touchmove",this.onTouchMove,tr),this.element.addEventListener("touchend",this.onTouchEnd,tr)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,tr),this.element.removeEventListener("touchstart",this.onTouchStart,tr),this.element.removeEventListener("touchmove",this.onTouchMove,tr),this.element.removeEventListener("touchend",this.onTouchEnd,tr)}onTouchStart=t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})};onTouchMove=t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})};onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})};onWheel=t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=cf(i,this.window.width),s=cf(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},uf=t=>Math.min(1,1.001-2**(-10*t)),kS=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new US;emitter=new Ep;dimensions;virtualScroll;constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:T=!1,anchors:M=!1,autoToggle:b=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:v=w,stopInertiaOnNavigate:E=!1}={}){window.lenisVersion=lf,window.lenis||(window.lenis={}),window.lenis.version=lf,d==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof l!="function"?l=uf:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:S,autoRaf:T,anchors:M,autoToggle:b,allowNestedScroll:A,naiveDimensions:v,stopInertiaOnNavigate:E},this.dimensions=new FS(t,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new zS(n,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}onScrollEnd=t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=t=>{t.propertyName?.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()};setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}onClick=t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}};onPointerDown=t=>{t.button===1&&this.reset()};onVirtualScroll=t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||r&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:n}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation==="both"?d=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const h=r&&this.options.syncTouch,f=r&&i.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let h=t,f=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let g=null;if(typeof h=="string"?(g=document.querySelector(h),g||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&h?.nodeType&&(g=h),g){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?M.left:M.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),S=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);h=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(T)?0:T)}}if(typeof h=="number"){if(h+=f,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=h-this.animatedScroll;g>this.limit/2?h-=this.limit:g<-this.limit/2&&(h+=this.limit)}}else h=yp(0,h,this.limit);if(h===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=uf:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,a,o,l,c,u,d,h,f,g;if(i-(r.time??0)>2e3){r.time=Date.now();const A=window.getComputedStyle(t);if(r.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),a=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;d=t.scrollWidth,h=t.scrollHeight,f=t.clientWidth,g=t.clientHeight,o=d>f,l=h>g,r.isScrollableX=o,r.isScrollableY=l,r.scrollWidth=d,r.scrollHeight=h,r.clientWidth=f,r.clientHeight=g,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else o=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const _=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let m,p,S,T,M,b;if(_==="horizontal")m=Math.round(t.scrollLeft),p=d-f,S=e,T=s,M=o,b=c;else if(_==="vertical")m=Math.round(t.scrollTop),p=h-g,S=n,T=a,M=l,b=u;else return!1;return!b&&(m>=p||m<=0)?!0:(S>0?m<p:m>0)&&T&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?NS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};an.registerPlugin(je);var Tp=new kS({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),smoothWheel:!0,touchMultiplier:2});Tp.on("scroll",je.update);an.ticker.add(t=>{Tp.raf(t*1e3)});an.ticker.lagSmoothing(0);var Xc="https://portfoli-contact.vercel.app",ll=document.getElementById("sidebar"),Fs=document.getElementById("sidebarOverlay"),Bs=document.getElementById("mobileMenuBtn"),bp=document.querySelectorAll(".nav-link");function VS(){ll&&Bs&&(ll.classList.toggle("active"),Bs.classList.toggle("active"),Fs&&Fs.classList.toggle("active"))}function wp(){ll&&Bs&&(ll.classList.remove("active"),Bs.classList.remove("active"),Fs&&Fs.classList.remove("active"))}Bs&&Bs.addEventListener("click",VS);Fs&&Fs.addEventListener("click",wp);bp.forEach(t=>{t.addEventListener("click",wp)});var GS=document.querySelectorAll("section[id]"),cc=document.getElementById("themeToggle"),Ro=document.body,uc=!0;cc&&cc.addEventListener("click",()=>{uc=!uc,uc?(Ro.classList.add("dark"),Ro.classList.remove("light")):(Ro.classList.remove("dark"),Ro.classList.add("light")),cc.classList.toggle("active")});document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const n=document.querySelector(this.getAttribute("href"));n&&n.scrollIntoView({behavior:"smooth",block:"start"})})});window.innerWidth;window.innerWidth;var Ho=window.innerWidth<1024||window.matchMedia("(prefers-reduced-motion: reduce)").matches,hf=document.querySelector(".typing-text");hf&&(hf.style.opacity="1");window.addEventListener("load",()=>{if(typeof an>"u"||typeof je>"u"){console.warn("GSAP/ScrollTrigger not loaded yet. Waiting...");return}const t=an.timeline({defaults:{ease:"power3.out"}});Ho?t.fromTo(".hero-content-left",{autoAlpha:0},{autoAlpha:1,duration:.8}).fromTo(".hero-image-right",{autoAlpha:0},{autoAlpha:1,duration:.8},"<0.1").fromTo(".hero-title",{autoAlpha:0},{autoAlpha:1,duration:.8},"<0.1").fromTo(".typing-text",{autoAlpha:0},{autoAlpha:1,duration:.5},"<0.1").fromTo(".profile-link",{autoAlpha:0},{autoAlpha:1,stagger:.1,duration:.5},"<0.1"):t.fromTo(".hero-content-left",{x:-30,autoAlpha:0},{x:0,autoAlpha:1,duration:1}).fromTo(".hero-image-right",{x:30,autoAlpha:0},{x:0,autoAlpha:1,duration:1},"<0.1").fromTo(".hero-title",{y:30,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},"<0.2").fromTo(".typing-text",{y:20,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},"<0.1").fromTo(".profile-link",{y:20,autoAlpha:0},{y:0,autoAlpha:1,stagger:.05,duration:.5},"<0.2"),an.utils.toArray(".card").forEach(e=>{an.fromTo(e,{y:30,autoAlpha:0},{y:0,autoAlpha:1,duration:Ho?.4:.6,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 90%",toggleActions:"play none none reverse"}})}),an.fromTo(".about-photo-enhanced",{scale:.9,autoAlpha:0},{scale:1,autoAlpha:1,duration:.8,ease:"back.out(1.2)",scrollTrigger:{trigger:".about-photo-enhanced",start:"top 85%",toggleActions:"play none none reverse"}}),an.utils.toArray(".timeline-item").forEach((e,n)=>{Ho?an.fromTo(e,{autoAlpha:0},{autoAlpha:1,duration:.5,scrollTrigger:{trigger:e,start:"top 90%",toggleActions:"play none none reverse"}}):an.fromTo(e,{x:n%2===0?-60:60,autoAlpha:0},{x:0,autoAlpha:1,duration:.7,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none reverse"}})}),an.utils.toArray(".circuit-line").forEach(e=>{an.fromTo(e,{scaleX:0},{scaleX:1,duration:1,ease:"power2.inOut",scrollTrigger:{trigger:e,start:"top 85%",toggleActions:"play none none reverse"}})}),setTimeout(()=>je.refresh(),100)});Ho||document.querySelectorAll(".card-3d").forEach(t=>{t.addEventListener("mouseenter",()=>{an.to(t,{scale:1.03,duration:.2,ease:"power2.out"})}),t.addEventListener("mouseleave",()=>{an.to(t,{scale:1,duration:.2,ease:"power2.out"})})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".submit-button"),e=t?t.querySelector(".button-text"):null;t&&e&&(t.disabled=!1,e.textContent="TRANSMIT MESSAGE"),an.from("body",{opacity:0,duration:.8,ease:"power2.out"})});var Yc=!1;function Ap(){Yc=!1}function HS(){Yc||(requestAnimationFrame(Ap),Yc=!0)}var WS=new IntersectionObserver(t=>{t.forEach(e=>{if(e.isIntersecting){const n=e.target.getAttribute("id");bp.forEach(i=>{i.classList.toggle("active",i.getAttribute("data-section")===n)})}})},{threshold:.5});GS.forEach(t=>WS.observe(t));window.addEventListener("scroll",HS,{passive:!0});requestAnimationFrame(Ap);var XS=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("animate")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".card").forEach(t=>{XS.observe(t)});(function(){const t=document.querySelectorAll(".jumble-text");if(t.length===0)return;const e="!<>-_\\/[]{}=+*^?#";function n(i){if(i.dataset.animating==="true")return;i.dataset.animating="true";const r=i.dataset.text||i.textContent.trim(),s=400,a=performance.now();function o(l){let c=(l-a)/s;c>1&&(c=1);const u=Math.floor(c*r.length);let d="";for(let h=0;h<r.length;h++)h<u?d+=r[h]:d+=e[Math.floor(Math.random()*17)];i.textContent=d,c<1?requestAnimationFrame(o):(i.textContent=r.trim(),i.dataset.animating="false")}requestAnimationFrame(o)}t.forEach(i=>{i.addEventListener("mouseenter",function(){n(this)}),i.addEventListener("touchstart",function(){n(this)},{passive:!0}),i.addEventListener("click",function(){n(this)}),i.style.cursor="pointer"})})();var Co=document.getElementById("pronounce-name");Co&&Co.addEventListener("click",()=>{Co.style.color="#00CED1",setTimeout(()=>{Co.style.color="#ffffff"},1e3);const t=new SpeechSynthesisUtterance("Call me Sarshij");t.lang="en-US",t.rate=.9,t.pitch=1,t.volume=1,window.speechSynthesis.speak(t)});document.querySelectorAll("[data-copy]").forEach(t=>{t.addEventListener("click",async()=>{const e=t.getAttribute("data-copy");try{await navigator.clipboard.writeText(e),YS()}catch(n){console.error("Failed to copy:",n)}})});function YS(){const t=document.getElementById("copyToast");t.classList.add("show"),setTimeout(()=>{t.classList.remove("show")},2e3)}var hi=document.getElementById("contactForm");if(hi){let s=function(){let o=0;t.forEach(c=>{c.value.trim()!==""&&o++});const l=o/t.length*100;e.style.width=l+"%",n.textContent=Math.round(l)+"% Complete",l===100?n.style.color="#00ff88":n.style.color="#8A2BE2"},a=function(){const o=hi.querySelector("#name"),l=hi.querySelector("#email"),c=hi.querySelector("#message"),u=[],d=o?.value.trim()||"";d?d.length<2?(u.push("Name must be at least 2 characters"),o?.classList.add("error")):d.length>100?(u.push("Name must be less than 100 characters"),o?.classList.add("error")):o?.classList.remove("error"):(u.push("Name is required"),o?.classList.add("error"));const h=l?.value.trim()||"",f=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,g=["test.com","example.com","tempmail.com","mailinator.com"],_=h.split("@")[1];h?f.test(h)?g.includes(_)?(u.push("Please use a legitimate email address"),l?.classList.add("error")):h.length>255?(u.push("Email must be less than 255 characters"),l?.classList.add("error")):l?.classList.remove("error"):(u.push("Please enter a valid email address"),l?.classList.add("error")):(u.push("Email is required"),l?.classList.add("error"));const m=c?.value.trim()||"";return m?m.length<10?(u.push("Message must be at least 10 characters"),c?.classList.add("error")):m.length>500?(u.push("Message must be less than 500 characters"),c?.classList.add("error")):c?.classList.remove("error"):(u.push("Message is required"),c?.classList.add("error")),hi.querySelector('[name="cf-turnstile-response"]')?.value||u.push("Please complete the Security Check (CAPTCHA)"),hi.querySelector("#website")?.value&&(console.warn("🤖 Bot detected via honeypot field"),u.push("Validation failed")),{isValid:u.length===0,errors:u}};var mx=s,_x=a;const t=hi.querySelectorAll(".form-input"),e=document.getElementById("formProgress"),n=document.getElementById("formProgressText"),i=document.getElementById("message"),r=document.getElementById("charCount");i&&r&&i.addEventListener("input",()=>{const o=i.value.length,l=i.getAttribute("maxlength");r.textContent=o;const c=i.closest(".form-group").querySelector(".character-counter");c.classList.remove("warning","danger"),o>l*.9?c.classList.add("danger"):o>l*.7&&c.classList.add("warning"),s()}),t.forEach(o=>{o.addEventListener("input",s),o.addEventListener("blur",s)}),hi.addEventListener("submit",async o=>{o.preventDefault();const l=hi.querySelector(".submit-button");if(!l){console.error("Submit button not found!");return}const c=l.querySelector(".button-text");if(!c){console.error("Button text element not found!");return}const u=c.textContent,d=a();if(!d.isValid){c.textContent=d.errors[0],l.classList.add("error"),setTimeout(()=>{l.classList.remove("error"),c.textContent=u},3e3);return}l.classList.add("loading"),l.disabled=!0;try{const h=new FormData(hi),f=Object.fromEntries(h.entries());f.name=f.name.trim(),f.email=f.email.trim(),f.message=f.message.trim(),f["cf-turnstile-response"]=h.get("cf-turnstile-response");const g=new AbortController,_=setTimeout(()=>g.abort(),3e4);let m;try{m=await fetch(`${Xc}/api/contact`,{method:"POST",body:JSON.stringify(f),headers:{"Content-Type":"application/json",Accept:"application/json"},signal:g.signal}),clearTimeout(_)}catch(p){throw clearTimeout(_),p}try{if(m.ok){const p=await m.json();if(!p||typeof p!="object")throw new Error("Invalid response from server");l.classList.remove("loading"),l.classList.add("success"),c.textContent="Message Sent!",hi.reset(),t.forEach(S=>{S.classList.remove("has-value","error")}),s(),setTimeout(()=>{l.classList.remove("success"),c.textContent=u,l.disabled=!1},3e3)}else{let p="Form submission failed";try{const S=await m.json();p=S.message||S.error||p}catch{m&&m.status&&(p=m.statusText||`Server error (${m.status})`)}throw new Error(p)}}catch(p){throw p}}catch(h){console.error("Form submission error:",h),l.classList.remove("loading"),l.classList.add("error");let f="Error! Try Again";h.name==="AbortError"||h.message.includes("timeout")?f="Request Timeout! Try Again":h.message.includes("Failed to fetch")||h.message.includes("NetworkError")||h.message.includes("ERR_")?f="Network Error! Check Connection":h.message.includes("Rate limit")||h.message.includes("Too many requests")?f="Too Many Requests! Please wait a minute":h.message.includes("All fields are required")?f="Please fill all fields":h.message&&(f=h.message.length>50?"Error! Try Again":h.message),c.textContent=f,setTimeout(()=>{l.classList.remove("error"),c.textContent=u,l.disabled=!1},3e3)}}),s()}var Po=document.getElementById("backToTop");Po&&(window.addEventListener("scroll",()=>{window.pageYOffset>300?Po.classList.add("show"):Po.classList.remove("show")}),Po.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));var ea=document.getElementById("mobileNotice"),ff=document.getElementById("closeMobileNotice");if(ff&&ea){const t=()=>{ea.style.opacity="0",setTimeout(()=>{ea.style.display="none"},300)};ff.addEventListener("click",e=>{e.stopPropagation(),t()}),window.addEventListener("click",e=>{ea.style.display!=="none"&&!ea.contains(e.target)&&t()})}function qS(){const t=document.getElementById("toggleTerminal"),e=document.getElementById("contactTerminal"),n=document.getElementById("contactForm"),i=document.getElementById("terminalInput"),r=document.getElementById("terminalOutput"),s=document.getElementById("terminalHelp");if(!t||!e)return;const a=f=>f?f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):"";let o=0,l={a:0,b:0,answer:0};const c={name:"",email:"",message:"",isTerminal:!0};s&&s.addEventListener("click",()=>{u("---| TERMINAL USER GUIDE |---"),u("1. Type 'contact' and press ENTER to start."),u("2. Follow prompts to enter Name, Email, and Message."),u("3. Your data will be sent automatically at the end."),u("4. Commands: 'clear' to reset, 'exit' to close.")}),t.addEventListener("click",()=>{e.classList.toggle("active"),e.classList.contains("active")?(n.style.display="none",t.innerHTML='<i class="fas fa-times"></i> EXIT TERMINAL',u("SYSTEM: Establishing secure uplink..."),setTimeout(()=>u("SYSTEM: Connection stabilized. Type 'help' for commands."),1e3),i.focus()):(n.style.display="block",t.innerHTML='<i class="fas fa-terminal"></i> USE CYBER TERMINAL')}),i.addEventListener("keypress",f=>{if(f.key==="Enter"){const g=i.value.trim().toLowerCase();u(`<span class="terminal-prompt">root@sarshij:~$</span> ${a(i.value)}`),i.value="",d(g)}});function u(f,g=!1){const _=document.createElement("div");if(_.className="terminal-line",r.appendChild(_),g){let T=function(){if(p<f.length){if(f.charAt(p)==="<"){const M=f.indexOf(">",p);_.innerHTML+=f.substring(p,M+1),p=M+1}else _.innerHTML+=f.charAt(p),p++;setTimeout(T,S),e.scrollTop=e.scrollHeight}};var m=T;let p=0;const S=20;T()}else _.innerHTML=f,e.scrollTop=e.scrollHeight}async function d(f){if(f==="help"){u("---| TERMINAL USER GUIDE |---"),u("1. Type 'contact' and press ENTER to start."),u("2. Commands: 'clear', 'status', 'exit'",!0);return}if(f==="clear"){r.innerHTML="SYSTEM: Memory cleared...",setTimeout(()=>r.innerHTML="",1e3);return}if(f==="status"){u("SYSTEM: Pinging uplink server...",!0);try{(await fetch(`${Xc}/api/wake-up`)).ok?u("SYSTEM: <span style='color: #00ff88'>UPLINK ONLINE</span> (v3.0.4)",!0):u("SYSTEM: <span style='color: #ff3e3e'>UPLINK DEGRADED</span>",!0)}catch{u("SYSTEM: <span style='color: #ff3e3e'>UPLINK OFFLINE</span>",!0)}return}if(f==="exit"){t.click();return}if(o===0&&f==="contact")o=.5,l.a=Math.floor(Math.random()*10)+1,l.b=Math.floor(Math.random()*10)+1,l.answer=l.a+l.b,u(`SECURITY CHECK: What is ${l.a} + ${l.b}?`,!0);else if(o===.5)parseInt(f)===l.answer?(o=1,u("ACCESS GRANTED. Initiation sequence started. Enter your name:",!0)):(o=0,u("ACCESS DENIED. Incorrect security code. Session reset.",!0));else if(o===1)c.name=a(f),o=2,u(`SUCCESS: ID confirmed as '${a(f)}'. Enter neural-mail:`,!0);else if(o===2){const g=a(f);/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(g)?(c.email=g,o=3,u("SUCCESS: Uplink address verified. Enter your transmission data:",!0)):u("ERROR: Invalid email format. Please re-enter uplink address:",!0)}else o===3?(c.message=a(f),u("SYSTEM: Encrypting and transmitting data packet...",!0),h(),o=0):u(`ERROR: Unknown command '${a(f)}'. Try 'help'.`)}async function h(){try{(await fetch(`${Xc}/api/contact`,{method:"POST",body:JSON.stringify({...c,isTerminal:!0}),headers:{"Content-Type":"application/json"}})).ok?u("SYSTEM: <span style='color: #00ff88'>TRANSMISSION SUCCESSFUL.</span> Uplink terminated.",!0):u("ERROR: <span style='color: #ff3e3e'>TRANSMISSION REJECTED by server.</span>",!0)}catch{u("ERROR: <span style='color: #ff3e3e'>CONNECTION TIMEOUT.</span> Packet lost in transit.",!0)}}}function KS(){const t=document.querySelectorAll(".animate-wave, .animate-bounce, .animate-spin, .animate-tilt, .circuit-line, .glow-special, .neon-yellow, .neon-cyan, .neon-purple, .heading-animate, .timeline-item, .card, .card-3d"),e=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting?i.target.classList.remove("paused-animation"):i.target.classList.add("paused-animation")})},{rootMargin:"50px 0px",threshold:.01});t.forEach(n=>e.observe(n))}document.addEventListener("DOMContentLoaded",()=>{qS(),KS()});(function(){const t=document.getElementById("companion"),e=document.getElementById("companionBubble"),n=document.getElementById("bubbleText"),i=t?.querySelector(".companion-img"),r=document.getElementById("voiceToggle");if(!t)return;let s=!1,a=0,o=0,l=0,c=0,u=0,d=null;const h={greeting:["👋 Welcome!"],smart:["📄 Checking the resume?","💼 Looking for a pro?","🔗 Let's connect!","⚡ Electronics + Software","🌊 Scroll down!","📬 Want to collaborate?"],facts:["🎓 Electronics Engineer.","💻 Full-stack + AI/ML","🤖 AI Projects.","🌐 Web + Hardware.","💪 Python, JS, C++"],excited:["🎉 Glad you're here!","💫 Hi there!","🌟 Awesome!"],dragged:["🚀 Wheee!","🎯 Nice spot!","😎 Moving!"]},f=[...h.smart,...h.facts];function g(){if(!window.speechSynthesis)return;const b=window.speechSynthesis.getVoices();d=b.find(A=>A.name.includes("Female")||A.name.includes("Google UK English Female")||A.name.includes("Microsoft Zira")||A.name.includes("Samantha"))||b[0]}window.speechSynthesis&&speechSynthesis.onvoiceschanged!==void 0&&(speechSynthesis.onvoiceschanged=g),setTimeout(g,100);function _(b,A=!1){if(!window.speechSynthesis||!A)return;window.speechSynthesis.cancel();const w=b.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"").trim(),v=new SpeechSynthesisUtterance(w);d&&(v.voice=d),v.pitch=1.3,v.rate=1,e.classList.add("speaking"),v.onend=()=>e.classList.remove("speaking"),window.speechSynthesis.speak(v)}function m(){if(!r)return;const b=r.querySelector("i");b.className="fas fa-volume-up",r.style.background="#00ced1",r.title="Click to Speak (One Time)"}m();function p(b,A=!1,w=4e3){n&&(n.textContent=b,e.classList.add("show"),_(b,A),setTimeout(()=>e.classList.remove("show"),w))}r&&r.addEventListener("click",b=>{b.stopPropagation();const A=f[Math.floor(Math.random()*f.length)];p(A,!0)}),t.addEventListener("click",()=>{if(s)return;const b=Date.now();if(b-u<300)T("spin"),p(h.excited[Math.floor(Math.random()*h.excited.length)]);else{const A=f[Math.floor(Math.random()*f.length)];p(A)}u=b}),window.innerWidth>768&&setTimeout(()=>{const b=h.greeting[Math.floor(Math.random()*h.greeting.length)];p(b,!0)},2e3),setInterval(()=>{if(!e.classList.contains("show")&&!s&&window.innerWidth>768&&document.visibilityState==="visible"){const b=f[Math.floor(Math.random()*f.length)];p(b)}},45e3);const S=localStorage.getItem("companion-position");if(S&&window.innerWidth>768)try{const{x:b,y:A}=JSON.parse(S);t.style.right="auto",t.style.bottom="auto",t.style.left=b+"px",t.style.top=A+"px"}catch{}window.addEventListener("resize",()=>{window.innerWidth<=768&&(t.style.left="",t.style.top="",t.style.right="",t.style.bottom="")}),t.addEventListener("mousedown",b=>{if(b.target.closest(".companion-bubble"))return;s=!0;const A=t.getBoundingClientRect();l=b.clientX-A.left,c=b.clientY-A.top,t.style.cursor="grabbing"}),document.addEventListener("mousemove",b=>{s&&(a=Math.max(0,Math.min(b.clientX-l,window.innerWidth-t.offsetWidth)),o=Math.max(0,Math.min(b.clientY-c,window.innerHeight-t.offsetHeight)),t.style.left=a+"px",t.style.top=o+"px",t.style.right="auto",t.style.bottom="auto")}),document.addEventListener("mouseup",()=>{s&&(s=!1,t.style.cursor="pointer",localStorage.setItem("companion-position",JSON.stringify({x:a,y:o})),p(h.dragged[Math.floor(Math.random()*h.dragged.length)]))});function T(b){t.classList.remove("animate-wave","animate-bounce","animate-spin","animate-tilt"),t.offsetWidth,t.classList.add("animate-"+b)}setInterval(()=>{!s&&document.visibilityState==="visible"&&T(["wave","bounce","tilt"][Math.floor(Math.random()*3)])},2e4);let M=0;document.addEventListener("mousemove",b=>{const A=Date.now();if(A-M<200||(M=A,window.innerWidth<=768))return;const w=t.getBoundingClientRect();if(Math.hypot(b.clientX-(w.left+w.width/2),b.clientY-(w.top+w.height/2))>500)return;const v=b.clientX-(w.left+w.width/2),E=b.clientY-(w.top+w.height/2),L=Math.atan2(E,v);i&&!s&&(i.style.transform=`rotateX(${Math.cos(L)*-5}deg) rotateY(${Math.sin(L)*5}deg)`)})})();document.addEventListener("DOMContentLoaded",()=>{if("IntersectionObserver"in window){const t=new IntersectionObserver((e,n)=>{e.forEach(i=>{if(i.isIntersecting){const r=i.target;r.dataset.src&&(r.src=r.dataset.src,r.classList.add("loaded"),n.unobserve(r))}})});document.querySelectorAll('img[loading="lazy"]').forEach(e=>t.observe(e))}document.querySelectorAll(".skeleton img").forEach(t=>{t.complete?(t.parentElement.classList.add("loaded"),t.classList.add("loaded")):t.onload=()=>{t.parentElement.classList.add("loaded"),t.classList.add("loaded")}})});
