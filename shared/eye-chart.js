/* A printable 9-line eye chart (same lines as the common 20/200 to 20/20 home chart).
   Drawn here so it prints at an exact size: at 100% the big E is 4.4 cm tall, which is what the planner assumes. */
(function(){
'use strict';
var LINES=[['E',200],['FP',100],['TOZ',80],['LPED',63],['PECFD',50],['EDFCZP',40],['FELOPZD',32],['DEFPOTEC',25],['LEFODPCT',20]];
var CENTERS=[4.59,8.75,11.82,14.36,16.58,18.59,20.46,22.16,23.67];
var BIG=4.4;
function glyph(ch){
  var R=function(x,y,w,h){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'"/>';};
  switch(ch){
    case 'E':return R(0,0,1,5)+R(0,0,5,1)+R(0,2,4,1)+R(0,4,5,1);
    case 'F':return R(0,0,1,5)+R(0,0,5,1)+R(0,2,4,1);
    case 'P':return R(0,0,1,5)+R(0,0,5,1)+R(0,2.5,5,1)+R(4,0,1,3.5);
    case 'T':return R(0,0,5,1)+R(2,0,1,5);
    case 'L':return R(0,0,1,5)+R(0,4,5,1);
    case 'Z':return R(0,0,5,1)+R(0,4,5,1)+'<polygon points="4,1 5,1 1,4 0,4"/>';
    case 'O':return '<circle cx="2.5" cy="2.5" r="2" fill="none" stroke="#000" stroke-width="1"/>';
    case 'C':return '<path d="M4.03,1.21 A2,2 0 1 0 4.03,3.79" fill="none" stroke="#000" stroke-width="1"/>';
    case 'D':return '<path d="M0.5,0.5 H2.5 A2,2 0 0 1 2.5,4.5 H0.5 Z" fill="none" stroke="#000" stroke-width="1" stroke-linejoin="miter"/>';
  }
  return '';
}
function svg(){
  var W=21.59,H=27.94,o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" width="'+W+'cm" height="'+H+'cm" style="max-width:100%;height:auto;background:#fff" role="img" aria-label="Eye chart with nine lines, 20/200 at the top to 20/20 at the bottom"><g fill="#000">';
  LINES.forEach(function(L,i){
    var Y=L[1],h=BIG*Y/200,u=h/5,n=L[0].length,cy=CENTERS[i];
    // letter pitch = 5 units of letter + 2.5 units of space
    var pitch=7.5*u,total=(n-1)*pitch+5*u,sx=(W-total)/2;
    for(var k=0;k<n;k++)o+='<g transform="translate('+(sx+k*pitch).toFixed(3)+','+(cy-h/2).toFixed(3)+') scale('+u.toFixed(4)+')">'+glyph(L[0][k])+'</g>';
    o+='<text x="1.6" y="'+(cy+0.15).toFixed(2)+'" font-family="Arial,Helvetica,sans-serif" font-size="0.5" fill="#333">20/'+Y+'</text>';
    o+='<text x="19.6" y="'+(cy+0.3).toFixed(2)+'" font-family="Arial,Helvetica,sans-serif" font-size="0.85" font-weight="700" text-anchor="middle">'+(i+1)+'</text>';
  });
  return o+'</g></svg>';
}
function printDoc(){
  var t=window.I18N?I18N.t('Place chart 10 feet (3 meters) away. Print at 100% size.'):'Place chart 10 feet (3 meters) away. Print at 100% size.';
  var dir=window.I18N&&I18N.get()==='he'?'rtl':'ltr';
  return '<!doctype html><html dir="'+dir+'"><head><meta charset="utf-8"><title>Eye chart</title><style>@page{size:letter;margin:0}html,body{margin:0;background:#fff}.t{position:absolute;top:0.9cm;left:0;right:0;text-align:center;font:14px Arial,sans-serif}svg{display:block;width:21.59cm;height:27.94cm;max-width:none}</style></head><body><div class="t">'+t+'</div>'+svg()+'</body></html>';
}
function printChart(){
  var f=document.createElement('iframe');
  f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0';
  document.body.appendChild(f);
  var d=f.contentWindow.document;d.open();d.write(printDoc());d.close();
  setTimeout(function(){try{f.contentWindow.focus();f.contentWindow.print();}catch(e){}setTimeout(function(){f.remove();},2000);},250);
}
function save(){
  var blob=new Blob([printDoc()],{type:'text/html'}),a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download='eye-chart.html';document.body.appendChild(a);a.click();a.remove();
  setTimeout(function(){URL.revokeObjectURL(a.href);},4000);
}
var open=false;
window.EyeChart={
  html:function(){
    return '<details class="chartbox" id="chartBox"'+(open?' open':'')+'><summary>Show the eye chart</summary>'+
      '<div class="muted" style="margin:8px 0">This is the chart to put up for the test: 9 lines from 20/200 (top) to 20/20. Print it at 100% size on a letter page, or project it. Put it 10 feet (3 meters) from the kid. If you project it, measure the big E on the wall and enter that below.</div>'+
      '<div class="row" style="margin-bottom:8px"><button type="button" class="btn primary" data-chart="print">Print chart</button><button type="button" class="btn" data-chart="save">Download chart</button></div>'+
      '<div class="chartpage"><div class="chartttl">Place chart 10 feet (3 meters) away.</div>'+svg()+'</div>'+
      '<div class="muted" style="margin-top:6px">Cover one eye, read each line out loud, and stop at the line where they miss more than half the letters. Pick that line below. Test with and without glasses if they wear them.</div></details>';
  }
};
document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('[data-chart]');if(!b)return;
  e.preventDefault();if(b.dataset.chart==='print')printChart();else save();
});
document.addEventListener('toggle',function(e){if(e.target&&e.target.id==='chartBox')open=e.target.open;},true);
})();
