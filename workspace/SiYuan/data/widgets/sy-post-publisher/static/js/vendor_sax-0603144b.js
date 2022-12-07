import{r as ct,B as U,a as ut}from"./vendor_rollup-plugin-node-polyfills-2747d496.js";var st={};(function(W){(function(u){u.parser=function(e,t){return new g(e,t)},u.SAXParser=g,u.SAXStream=N,u.createStream=k,u.MAX_BUFFER_LENGTH=64*1024;var I=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];u.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function g(e,t){if(!(this instanceof g))return new g(e,t);var n=this;H(n),n.q=n.c="",n.bufferCheckPosition=u.MAX_BUFFER_LENGTH,n.opt=t||{},n.opt.lowercase=n.opt.lowercase||n.opt.lowercasetags,n.looseCase=n.opt.lowercase?"toLowerCase":"toUpperCase",n.tags=[],n.closed=n.closedRoot=n.sawRoot=!1,n.tag=n.error=null,n.strict=!!e,n.noscript=!!(e||n.opt.noscript),n.state=a.BEGIN,n.strictEntities=n.opt.strictEntities,n.ENTITIES=n.strictEntities?Object.create(u.XML_ENTITIES):Object.create(u.ENTITIES),n.attribList=[],n.opt.xmlns&&(n.ns=Object.create(K)),n.trackPosition=n.opt.position!==!1,n.trackPosition&&(n.position=n.line=n.column=0),h(n,"onready")}Object.create||(Object.create=function(e){function t(){}t.prototype=e;var n=new t;return n}),Object.keys||(Object.keys=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t});function Q(e){for(var t=Math.max(u.MAX_BUFFER_LENGTH,10),n=0,i=0,o=I.length;i<o;i++){var l=e[I[i]].length;if(l>t)switch(I[i]){case"textNode":O(e);break;case"cdata":s(e,"oncdata",e.cdata),e.cdata="";break;case"script":s(e,"onscript",e.script),e.script="";break;default:S(e,"Max buffer length exceeded: "+I[i])}n=Math.max(n,l)}var r=u.MAX_BUFFER_LENGTH-n;e.bufferCheckPosition=r+e.position}function H(e){for(var t=0,n=I.length;t<n;t++)e[I[t]]=""}function j(e){O(e),e.cdata!==""&&(s(e,"oncdata",e.cdata),e.cdata=""),e.script!==""&&(s(e,"onscript",e.script),e.script="")}g.prototype={end:function(){x(this)},write:nt,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){j(this)}};var C;try{C=ct.Stream}catch{C=function(){}}var M=u.EVENTS.filter(function(e){return e!=="error"&&e!=="end"});function k(e,t){return new N(e,t)}function N(e,t){if(!(this instanceof N))return new N(e,t);C.apply(this),this._parser=new g(e,t),this.writable=!0,this.readable=!0;var n=this;this._parser.onend=function(){n.emit("end")},this._parser.onerror=function(i){n.emit("error",i),n._parser.error=null},this._decoder=null,M.forEach(function(i){Object.defineProperty(n,"on"+i,{get:function(){return n._parser["on"+i]},set:function(o){if(!o)return n.removeAllListeners(i),n._parser["on"+i]=o,o;n.on(i,o)},enumerable:!0,configurable:!1})})}N.prototype=Object.create(C.prototype,{constructor:{value:N}}),N.prototype.write=function(e){if(typeof U=="function"&&typeof U.isBuffer=="function"&&U.isBuffer(e)){if(!this._decoder){var t=ut.StringDecoder;this._decoder=new t("utf8")}e=this._decoder.write(e)}return this._parser.write(e.toString()),this.emit("data",e),!0},N.prototype.end=function(e){return e&&e.length&&this.write(e),this._parser.end(),!0},N.prototype.on=function(e,t){var n=this;return!n._parser["on"+e]&&M.indexOf(e)!==-1&&(n._parser["on"+e]=function(){var i=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);i.splice(0,0,e),n.emit.apply(n,i)}),C.prototype.on.call(n,e,t)};var z="[CDATA[",Z="DOCTYPE",v="http://www.w3.org/XML/1998/namespace",y="http://www.w3.org/2000/xmlns/",K={xml:v,xmlns:y},b=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,R=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,$=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,J=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function f(e){return e===" "||e===`
`||e==="\r"||e==="	"}function F(e){return e==='"'||e==="'"}function tt(e){return e===">"||f(e)}function _(e,t){return e.test(t)}function et(e,t){return!_(e,t)}var a=0;u.STATE={BEGIN:a++,BEGIN_WHITESPACE:a++,TEXT:a++,TEXT_ENTITY:a++,OPEN_WAKA:a++,SGML_DECL:a++,SGML_DECL_QUOTED:a++,DOCTYPE:a++,DOCTYPE_QUOTED:a++,DOCTYPE_DTD:a++,DOCTYPE_DTD_QUOTED:a++,COMMENT_STARTING:a++,COMMENT:a++,COMMENT_ENDING:a++,COMMENT_ENDED:a++,CDATA:a++,CDATA_ENDING:a++,CDATA_ENDING_2:a++,PROC_INST:a++,PROC_INST_BODY:a++,PROC_INST_ENDING:a++,OPEN_TAG:a++,OPEN_TAG_SLASH:a++,ATTRIB:a++,ATTRIB_NAME:a++,ATTRIB_NAME_SAW_WHITE:a++,ATTRIB_VALUE:a++,ATTRIB_VALUE_QUOTED:a++,ATTRIB_VALUE_CLOSED:a++,ATTRIB_VALUE_UNQUOTED:a++,ATTRIB_VALUE_ENTITY_Q:a++,ATTRIB_VALUE_ENTITY_U:a++,CLOSE_TAG:a++,CLOSE_TAG_SAW_WHITE:a++,SCRIPT:a++,SCRIPT_ENDING:a++},u.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},u.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(u.ENTITIES).forEach(function(e){var t=u.ENTITIES[e],n=typeof t=="number"?String.fromCharCode(t):t;u.ENTITIES[e]=n});for(var p in u.STATE)u.STATE[u.STATE[p]]=p;a=u.STATE;function h(e,t,n){e[t]&&e[t](n)}function s(e,t,n){e.textNode&&O(e),h(e,t,n)}function O(e){e.textNode=G(e.opt,e.textNode),e.textNode&&h(e,"ontext",e.textNode),e.textNode=""}function G(e,t){return e.trim&&(t=t.trim()),e.normalize&&(t=t.replace(/\s+/g," ")),t}function S(e,t){return O(e),e.trackPosition&&(t+=`
Line: `+e.line+`
Column: `+e.column+`
Char: `+e.c),t=new Error(t),e.error=t,h(e,"onerror",t),e}function x(e){return e.sawRoot&&!e.closedRoot&&c(e,"Unclosed root tag"),e.state!==a.BEGIN&&e.state!==a.BEGIN_WHITESPACE&&e.state!==a.TEXT&&S(e,"Unexpected end"),O(e),e.c="",e.closed=!0,h(e,"onend"),g.call(e,e.strict,e.opt),e}function c(e,t){if(typeof e!="object"||!(e instanceof g))throw new Error("bad call to strictFail");e.strict&&S(e,t)}function it(e){e.strict||(e.tagName=e.tagName[e.looseCase]());var t=e.tags[e.tags.length-1]||e,n=e.tag={name:e.tagName,attributes:{}};e.opt.xmlns&&(n.ns=t.ns),e.attribList.length=0,s(e,"onopentagstart",n)}function L(e,t){var n=e.indexOf(":"),i=n<0?["",e]:e.split(":"),o=i[0],l=i[1];return t&&e==="xmlns"&&(o="xmlns",l=""),{prefix:o,local:l}}function w(e){if(e.strict||(e.attribName=e.attribName[e.looseCase]()),e.attribList.indexOf(e.attribName)!==-1||e.tag.attributes.hasOwnProperty(e.attribName)){e.attribName=e.attribValue="";return}if(e.opt.xmlns){var t=L(e.attribName,!0),n=t.prefix,i=t.local;if(n==="xmlns")if(i==="xml"&&e.attribValue!==v)c(e,"xml: prefix must be bound to "+v+`
Actual: `+e.attribValue);else if(i==="xmlns"&&e.attribValue!==y)c(e,"xmlns: prefix must be bound to "+y+`
Actual: `+e.attribValue);else{var o=e.tag,l=e.tags[e.tags.length-1]||e;o.ns===l.ns&&(o.ns=Object.create(l.ns)),o.ns[i]=e.attribValue}e.attribList.push([e.attribName,e.attribValue])}else e.tag.attributes[e.attribName]=e.attribValue,s(e,"onattribute",{name:e.attribName,value:e.attribValue});e.attribName=e.attribValue=""}function d(e,t){if(e.opt.xmlns){var n=e.tag,i=L(e.tagName);n.prefix=i.prefix,n.local=i.local,n.uri=n.ns[i.prefix]||"",n.prefix&&!n.uri&&(c(e,"Unbound namespace prefix: "+JSON.stringify(e.tagName)),n.uri=i.prefix);var o=e.tags[e.tags.length-1]||e;n.ns&&o.ns!==n.ns&&Object.keys(n.ns).forEach(function(q){s(e,"onopennamespace",{prefix:q,uri:n.ns[q]})});for(var l=0,r=e.attribList.length;l<r;l++){var E=e.attribList[l],m=E[0],D=E[1],T=L(m,!0),A=T.prefix,ot=T.local,X=A===""?"":n.ns[A]||"",B={name:m,value:D,prefix:A,local:ot,uri:X};A&&A!=="xmlns"&&!X&&(c(e,"Unbound namespace prefix: "+JSON.stringify(A)),B.uri=A),e.tag.attributes[m]=B,s(e,"onattribute",B)}e.attribList.length=0}e.tag.isSelfClosing=!!t,e.sawRoot=!0,e.tags.push(e.tag),s(e,"onopentag",e.tag),t||(!e.noscript&&e.tagName.toLowerCase()==="script"?e.state=a.SCRIPT:e.state=a.TEXT,e.tag=null,e.tagName=""),e.attribName=e.attribValue="",e.attribList.length=0}function P(e){if(!e.tagName){c(e,"Weird empty close tag."),e.textNode+="</>",e.state=a.TEXT;return}if(e.script){if(e.tagName!=="script"){e.script+="</"+e.tagName+">",e.tagName="",e.state=a.SCRIPT;return}s(e,"onscript",e.script),e.script=""}var t=e.tags.length,n=e.tagName;e.strict||(n=n[e.looseCase]());for(var i=n;t--;){var o=e.tags[t];if(o.name!==i)c(e,"Unexpected close tag");else break}if(t<0){c(e,"Unmatched closing tag: "+e.tagName),e.textNode+="</"+e.tagName+">",e.state=a.TEXT;return}e.tagName=n;for(var l=e.tags.length;l-- >t;){var r=e.tag=e.tags.pop();e.tagName=e.tag.name,s(e,"onclosetag",e.tagName);var E={};for(var m in r.ns)E[m]=r.ns[m];var D=e.tags[e.tags.length-1]||e;e.opt.xmlns&&r.ns!==D.ns&&Object.keys(r.ns).forEach(function(T){var A=r.ns[T];s(e,"onclosenamespace",{prefix:T,uri:A})})}t===0&&(e.closedRoot=!0),e.tagName=e.attribValue=e.attribName="",e.attribList.length=0,e.state=a.TEXT}function at(e){var t=e.entity,n=t.toLowerCase(),i,o="";return e.ENTITIES[t]?e.ENTITIES[t]:e.ENTITIES[n]?e.ENTITIES[n]:(t=n,t.charAt(0)==="#"&&(t.charAt(1)==="x"?(t=t.slice(2),i=parseInt(t,16),o=i.toString(16)):(t=t.slice(1),i=parseInt(t,10),o=i.toString(10))),t=t.replace(/^0+/,""),isNaN(i)||o.toLowerCase()!==t?(c(e,"Invalid character entity"),"&"+e.entity+";"):String.fromCodePoint(i))}function V(e,t){t==="<"?(e.state=a.OPEN_WAKA,e.startTagPosition=e.position):f(t)||(c(e,"Non-whitespace before first tag."),e.textNode=t,e.state=a.TEXT)}function Y(e,t){var n="";return t<e.length&&(n=e.charAt(t)),n}function nt(e){var t=this;if(this.error)throw this.error;if(t.closed)return S(t,"Cannot write after close. Assign an onready handler.");if(e===null)return x(t);typeof e=="object"&&(e=e.toString());for(var n=0,i="";i=Y(e,n++),t.c=i,!!i;)switch(t.trackPosition&&(t.position++,i===`
`?(t.line++,t.column=0):t.column++),t.state){case a.BEGIN:if(t.state=a.BEGIN_WHITESPACE,i==="\uFEFF")continue;V(t,i);continue;case a.BEGIN_WHITESPACE:V(t,i);continue;case a.TEXT:if(t.sawRoot&&!t.closedRoot){for(var o=n-1;i&&i!=="<"&&i!=="&";)i=Y(e,n++),i&&t.trackPosition&&(t.position++,i===`
`?(t.line++,t.column=0):t.column++);t.textNode+=e.substring(o,n-1)}i==="<"&&!(t.sawRoot&&t.closedRoot&&!t.strict)?(t.state=a.OPEN_WAKA,t.startTagPosition=t.position):(!f(i)&&(!t.sawRoot||t.closedRoot)&&c(t,"Text data outside of root node."),i==="&"?t.state=a.TEXT_ENTITY:t.textNode+=i);continue;case a.SCRIPT:i==="<"?t.state=a.SCRIPT_ENDING:t.script+=i;continue;case a.SCRIPT_ENDING:i==="/"?t.state=a.CLOSE_TAG:(t.script+="<"+i,t.state=a.SCRIPT);continue;case a.OPEN_WAKA:if(i==="!")t.state=a.SGML_DECL,t.sgmlDecl="";else if(!f(i))if(_(b,i))t.state=a.OPEN_TAG,t.tagName=i;else if(i==="/")t.state=a.CLOSE_TAG,t.tagName="";else if(i==="?")t.state=a.PROC_INST,t.procInstName=t.procInstBody="";else{if(c(t,"Unencoded <"),t.startTagPosition+1<t.position){var l=t.position-t.startTagPosition;i=new Array(l).join(" ")+i}t.textNode+="<"+i,t.state=a.TEXT}continue;case a.SGML_DECL:(t.sgmlDecl+i).toUpperCase()===z?(s(t,"onopencdata"),t.state=a.CDATA,t.sgmlDecl="",t.cdata=""):t.sgmlDecl+i==="--"?(t.state=a.COMMENT,t.comment="",t.sgmlDecl=""):(t.sgmlDecl+i).toUpperCase()===Z?(t.state=a.DOCTYPE,(t.doctype||t.sawRoot)&&c(t,"Inappropriately located doctype declaration"),t.doctype="",t.sgmlDecl=""):i===">"?(s(t,"onsgmldeclaration",t.sgmlDecl),t.sgmlDecl="",t.state=a.TEXT):(F(i)&&(t.state=a.SGML_DECL_QUOTED),t.sgmlDecl+=i);continue;case a.SGML_DECL_QUOTED:i===t.q&&(t.state=a.SGML_DECL,t.q=""),t.sgmlDecl+=i;continue;case a.DOCTYPE:i===">"?(t.state=a.TEXT,s(t,"ondoctype",t.doctype),t.doctype=!0):(t.doctype+=i,i==="["?t.state=a.DOCTYPE_DTD:F(i)&&(t.state=a.DOCTYPE_QUOTED,t.q=i));continue;case a.DOCTYPE_QUOTED:t.doctype+=i,i===t.q&&(t.q="",t.state=a.DOCTYPE);continue;case a.DOCTYPE_DTD:t.doctype+=i,i==="]"?t.state=a.DOCTYPE:F(i)&&(t.state=a.DOCTYPE_DTD_QUOTED,t.q=i);continue;case a.DOCTYPE_DTD_QUOTED:t.doctype+=i,i===t.q&&(t.state=a.DOCTYPE_DTD,t.q="");continue;case a.COMMENT:i==="-"?t.state=a.COMMENT_ENDING:t.comment+=i;continue;case a.COMMENT_ENDING:i==="-"?(t.state=a.COMMENT_ENDED,t.comment=G(t.opt,t.comment),t.comment&&s(t,"oncomment",t.comment),t.comment=""):(t.comment+="-"+i,t.state=a.COMMENT);continue;case a.COMMENT_ENDED:i!==">"?(c(t,"Malformed comment"),t.comment+="--"+i,t.state=a.COMMENT):t.state=a.TEXT;continue;case a.CDATA:i==="]"?t.state=a.CDATA_ENDING:t.cdata+=i;continue;case a.CDATA_ENDING:i==="]"?t.state=a.CDATA_ENDING_2:(t.cdata+="]"+i,t.state=a.CDATA);continue;case a.CDATA_ENDING_2:i===">"?(t.cdata&&s(t,"oncdata",t.cdata),s(t,"onclosecdata"),t.cdata="",t.state=a.TEXT):i==="]"?t.cdata+="]":(t.cdata+="]]"+i,t.state=a.CDATA);continue;case a.PROC_INST:i==="?"?t.state=a.PROC_INST_ENDING:f(i)?t.state=a.PROC_INST_BODY:t.procInstName+=i;continue;case a.PROC_INST_BODY:if(!t.procInstBody&&f(i))continue;i==="?"?t.state=a.PROC_INST_ENDING:t.procInstBody+=i;continue;case a.PROC_INST_ENDING:i===">"?(s(t,"onprocessinginstruction",{name:t.procInstName,body:t.procInstBody}),t.procInstName=t.procInstBody="",t.state=a.TEXT):(t.procInstBody+="?"+i,t.state=a.PROC_INST_BODY);continue;case a.OPEN_TAG:_(R,i)?t.tagName+=i:(it(t),i===">"?d(t):i==="/"?t.state=a.OPEN_TAG_SLASH:(f(i)||c(t,"Invalid character in tag name"),t.state=a.ATTRIB));continue;case a.OPEN_TAG_SLASH:i===">"?(d(t,!0),P(t)):(c(t,"Forward-slash in opening tag not followed by >"),t.state=a.ATTRIB);continue;case a.ATTRIB:if(f(i))continue;i===">"?d(t):i==="/"?t.state=a.OPEN_TAG_SLASH:_(b,i)?(t.attribName=i,t.attribValue="",t.state=a.ATTRIB_NAME):c(t,"Invalid attribute name");continue;case a.ATTRIB_NAME:i==="="?t.state=a.ATTRIB_VALUE:i===">"?(c(t,"Attribute without value"),t.attribValue=t.attribName,w(t),d(t)):f(i)?t.state=a.ATTRIB_NAME_SAW_WHITE:_(R,i)?t.attribName+=i:c(t,"Invalid attribute name");continue;case a.ATTRIB_NAME_SAW_WHITE:if(i==="=")t.state=a.ATTRIB_VALUE;else{if(f(i))continue;c(t,"Attribute without value"),t.tag.attributes[t.attribName]="",t.attribValue="",s(t,"onattribute",{name:t.attribName,value:""}),t.attribName="",i===">"?d(t):_(b,i)?(t.attribName=i,t.state=a.ATTRIB_NAME):(c(t,"Invalid attribute name"),t.state=a.ATTRIB)}continue;case a.ATTRIB_VALUE:if(f(i))continue;F(i)?(t.q=i,t.state=a.ATTRIB_VALUE_QUOTED):(c(t,"Unquoted attribute value"),t.state=a.ATTRIB_VALUE_UNQUOTED,t.attribValue=i);continue;case a.ATTRIB_VALUE_QUOTED:if(i!==t.q){i==="&"?t.state=a.ATTRIB_VALUE_ENTITY_Q:t.attribValue+=i;continue}w(t),t.q="",t.state=a.ATTRIB_VALUE_CLOSED;continue;case a.ATTRIB_VALUE_CLOSED:f(i)?t.state=a.ATTRIB:i===">"?d(t):i==="/"?t.state=a.OPEN_TAG_SLASH:_(b,i)?(c(t,"No whitespace between attributes"),t.attribName=i,t.attribValue="",t.state=a.ATTRIB_NAME):c(t,"Invalid attribute name");continue;case a.ATTRIB_VALUE_UNQUOTED:if(!tt(i)){i==="&"?t.state=a.ATTRIB_VALUE_ENTITY_U:t.attribValue+=i;continue}w(t),i===">"?d(t):t.state=a.ATTRIB;continue;case a.CLOSE_TAG:if(t.tagName)i===">"?P(t):_(R,i)?t.tagName+=i:t.script?(t.script+="</"+t.tagName,t.tagName="",t.state=a.SCRIPT):(f(i)||c(t,"Invalid tagname in closing tag"),t.state=a.CLOSE_TAG_SAW_WHITE);else{if(f(i))continue;et(b,i)?t.script?(t.script+="</"+i,t.state=a.SCRIPT):c(t,"Invalid tagname in closing tag."):t.tagName=i}continue;case a.CLOSE_TAG_SAW_WHITE:if(f(i))continue;i===">"?P(t):c(t,"Invalid characters in closing tag");continue;case a.TEXT_ENTITY:case a.ATTRIB_VALUE_ENTITY_Q:case a.ATTRIB_VALUE_ENTITY_U:var r,E;switch(t.state){case a.TEXT_ENTITY:r=a.TEXT,E="textNode";break;case a.ATTRIB_VALUE_ENTITY_Q:r=a.ATTRIB_VALUE_QUOTED,E="attribValue";break;case a.ATTRIB_VALUE_ENTITY_U:r=a.ATTRIB_VALUE_UNQUOTED,E="attribValue";break}i===";"?(t[E]+=at(t),t.entity="",t.state=r):_(t.entity.length?J:$,i)?t.entity+=i:(c(t,"Invalid character in entity name"),t[E]+="&"+t.entity+i,t.entity="",t.state=r);continue;default:throw new Error(t,"Unknown state: "+t.state)}return t.position>=t.bufferCheckPosition&&Q(t),t}/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */String.fromCodePoint||function(){var e=String.fromCharCode,t=Math.floor,n=function(){var i=16384,o=[],l,r,E=-1,m=arguments.length;if(!m)return"";for(var D="";++E<m;){var T=Number(arguments[E]);if(!isFinite(T)||T<0||T>1114111||t(T)!==T)throw RangeError("Invalid code point: "+T);T<=65535?o.push(T):(T-=65536,l=(T>>10)+55296,r=T%1024+56320,o.push(l,r)),(E+1===m||o.length>i)&&(D+=e.apply(null,o),o.length=0)}return D};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:n,configurable:!0,writable:!0}):String.fromCodePoint=n}()})(W)})(st);export{st as s};