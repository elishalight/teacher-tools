/* Tiny English/Hebrew switcher shared by every tool.
   Pages keep their English text; this swaps it for Hebrew using a dictionary (exact strings + patterns),
   so adding a new tool only means adding its strings to he.js. Only the language choice is remembered. */
(function(){
'use strict';
var exact={},rx=[],lang='en',KEY='teacher-tools-lang',listeners=[];
var txt=new WeakMap(),att=new WeakMap();
var ATTRS=['title','placeholder','aria-label'];
function has(o,k){return Object.prototype.hasOwnProperty.call(o,k);}
function tr1(s){
  if(has(exact,s))return exact[s];
  for(var i=0;i<rx.length;i++){var m=rx[i][0].exec(s);if(m)return rx[i][1](m);}
  return s;
}
function trStr(s){
  var m=/^(\s*)([\s\S]*?)(\s*)$/.exec(s);
  if(!m[2])return s;
  return m[1]+tr1(m[2])+m[3];
}
function trAttr(s){return s.split('\n').map(trStr).join('\n');}
function skip(el){
  for(;el&&el.nodeType===1;el=el.parentNode){
    var t=el.tagName;
    if(t==='SCRIPT'||t==='STYLE'||t==='NOSCRIPT'||t==='TEXTAREA'||el.hasAttribute('data-notr'))return true;
  }
  return false;
}
function doText(n){
  if(skip(n.parentNode))return;
  var rec=txt.get(n);
  if(lang==='he'){
    var src=rec&&n.data===rec.out?rec.src:n.data,out=trStr(src);
    if(out!==src){txt.set(n,{src:src,out:out});if(n.data!==out)n.data=out;}
    else if(rec)txt.delete(n);
  }else if(rec&&n.data===rec.out){n.data=rec.src;txt.delete(n);}
}
function doAttr(el,a){
  var v=el.getAttribute(a);
  if(v==null)return;
  var m=att.get(el);if(!m){m={};att.set(el,m);}
  var rec=m[a];
  if(lang==='he'){
    var src=rec&&v===rec.out?rec.src:v,out=trAttr(src);
    if(out!==src){m[a]={src:src,out:out};if(v!==out)el.setAttribute(a,out);}
    else if(rec)delete m[a];
  }else if(rec&&v===rec.out){el.setAttribute(a,rec.src);delete m[a];}
}
function walk(root){
  if(root.nodeType===3){doText(root);return;}
  if(root.nodeType!==1&&root.nodeType!==9)return;
  var w=document.createTreeWalker(root,4),n;
  while((n=w.nextNode()))doText(n);
  var els=root.nodeType===1?[root].concat([].slice.call(root.querySelectorAll('[title],[placeholder],[aria-label]'))):[].slice.call(root.querySelectorAll('[title],[placeholder],[aria-label]'));
  els.forEach(function(el){if(skip(el))return;ATTRS.forEach(function(a){doAttr(el,a);});});
}
var obs=null;
function observe(){
  if(obs||!window.MutationObserver)return;
  obs=new MutationObserver(function(list){
    list.forEach(function(m){
      if(m.type==='childList')m.addedNodes.forEach(walk);
      else if(m.type==='characterData')doText(m.target);
      else if(m.type==='attributes')doAttr(m.target,m.attributeName);
    });
  });
  obs.observe(document.documentElement,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS});
}
function syncToggles(){
  [].forEach.call(document.querySelectorAll('[data-lang-toggle]'),function(b){
    b.textContent=lang==='he'?'English':'עברית';
    b.setAttribute('lang',lang==='he'?'en':'he');
    b.setAttribute('aria-label',lang==='he'?'Switch to English':'החלפה לעברית');
  });
}
function set(l,quiet){
  lang=l==='he'?'he':'en';
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='he'?'rtl':'ltr';
  walk(document.documentElement);
  syncToggles();
  if(!quiet){try{localStorage.setItem(KEY,lang);}catch(e){}}
  listeners.forEach(function(f){try{f(lang);}catch(e){}});
}
window.I18N={
  add:function(map,list){for(var k in map)if(has(map,k))exact[k]=map[k];if(list)rx=rx.concat(list);},
  t:function(s){return lang==='he'?trStr(s):s;},
  get:function(){return lang;},
  set:set,
  onChange:function(f){listeners.push(f);},
  start:function(){
    var l=null;try{l=localStorage.getItem(KEY);}catch(e){}
    if(!l)l=/^he|^iw/i.test(navigator.language||'')?'he':'en';
    document.addEventListener('click',function(e){
      var b=e.target.closest&&e.target.closest('[data-lang-toggle]');
      if(b)set(lang==='he'?'en':'he');
    });
    observe();
    set(l,true);
  }
};
})();
