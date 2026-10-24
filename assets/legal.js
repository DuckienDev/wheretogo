(function(){
  var LANGS = ['en','vi','ko'];
  var saved = null; try{ saved = localStorage.getItem('wtg_lang'); }catch(_){}
  var nav = (navigator.language || 'en').toLowerCase();
  var lang = saved || (nav.indexOf('vi')===0 ? 'vi' : (nav.indexOf('ko')===0 ? 'ko' : 'en'));
  if (LANGS.indexOf(lang) < 0) lang = 'en';

  function apply(l){
    document.querySelectorAll('[data-lang-block]').forEach(function(b){
      b.classList.toggle('active', b.getAttribute('data-lang-block') === l);
    });
    document.querySelectorAll('.lang button').forEach(function(btn){
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === l ? 'true' : 'false');
    });
    document.documentElement.lang = l;
    try{ localStorage.setItem('wtg_lang', l); }catch(_){}
  }

  apply(lang);
  document.querySelectorAll('.lang button').forEach(function(btn){
    btn.addEventListener('click', function(){ apply(btn.getAttribute('data-lang')); });
  });
})();
