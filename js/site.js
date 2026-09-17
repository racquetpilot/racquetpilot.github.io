// 최소 스크립트 — 모바일 메뉴 토글 + 언어 안내. 분석 도구 없음(처리방침 §1).
(function(){
  var b=document.querySelector('.nav .burger'),u=document.querySelector('.nav ul');
  if(b&&u){
    b.addEventListener('click',function(){var o=u.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
    document.addEventListener('click',function(e){if(!e.target.closest('.nav')){u.classList.remove('open');b.setAttribute('aria-expanded','false')}});
  }
  // 언어: 정적 사이트라 서버가 못 고른다. 첫 방문에만 브라우저 언어로 안내하고, 스위치를 누르면 그 선택을 기억한다.
  // 검색 로봇과 미리보기 봇은 건드리지 않는다. 짝이 있는 페이지에서만 움직인다.
  try{
    var PAIRS=['/','/lab/','/strings/','/beta/','/support/','/privacy/'];
    var lang=document.documentElement.lang||'ko';
    var path=location.pathname.replace(/index\.html$/,'');
    var base=path.replace(/^\/en\//,'/');
    if(PAIRS.indexOf(base)<0)return;
    var target=function(l){return l==='en'?('/en'+base).replace('//','/'):base};
    document.querySelectorAll('[data-lang-switch]').forEach(function(a){a.addEventListener('click',function(){try{localStorage.setItem('rp.lang',a.getAttribute('data-lang-switch'))}catch(e){}})});
    var pref=null;try{pref=localStorage.getItem('rp.lang')}catch(e){}
    if(pref){if(pref!==lang)location.replace(target(pref)+location.hash);return}
    if(/bot|crawl|spider|slurp|preview|yeti|daum|facebookexternalhit|kakaotalk-scrap|Twitterbot/i.test(navigator.userAgent))return;
    var nav=(navigator.languages&&navigator.languages[0])||navigator.language||'';
    var wantKo=/^ko/i.test(nav);
    if(lang==='ko'&&!wantKo)location.replace(target('en')+location.hash);
    else if(lang==='en'&&wantKo)location.replace(target('ko')+location.hash);
  }catch(e){}
})();
