/* Pingr landing — integration logo fallback + pricing period toggle.
   i18n is handled at build time by Astro; this script is purely interactive. */

function igFallback(img){
  var s = document.createElement('span');
  s.className = 'ig-mono';
  s.textContent = img.getAttribute('data-mono') || '';
  var c = img.getAttribute('data-color');
  if (c) s.style.setProperty('--m', c);
  img.replaceWith(s);
}

// bind logo fallback without inline onerror (CSP-friendly)
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.ig-logo img').forEach(function(img){
    img.addEventListener('error', function(){ igFallback(img); });
    // if it already failed before the listener attached
    if (img.complete && img.naturalWidth === 0) igFallback(img);
  });
});

// pricing monthly / yearly toggle — amounts + per-card billing labels flip in place.
// Billing strings come localized from data-bill-m / data-bill-y on each .pr-bill.
(function(){
  var seg = document.querySelectorAll('.pr-toggle button');
  if (!seg.length) return;
  var amts = document.querySelectorAll('.pr-price .amt');
  var bills = document.querySelectorAll('.pr-bill');
  function apply(mode){
    seg.forEach(function(b){ b.classList.toggle('on', b.dataset.mode === mode); });
    amts.forEach(function(a){ a.textContent = mode === 'y' ? a.dataset.y : a.dataset.m; });
    bills.forEach(function(b){
      var label = mode === 'y' ? b.dataset.billY : b.dataset.billM;
      if (label != null) b.textContent = label;
    });
  }
  seg.forEach(function(b){ b.addEventListener('click', function(){ apply(b.dataset.mode); }); });
  apply('m');
})();

// channel request form — channel name required; email/notes optional.
// No backend yet: on submit we validate the name and show a thank-you state.
// TODO: POST { channel, email, description } to the channel-request endpoint once it exists.
(function(){
  var form = document.querySelector('.cr-form');
  if (!form) return;
  var status = form.querySelector('.cr-status');
  var nameInput = form.querySelector('input[name="channel"]');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = (nameInput.value || '').trim();
    if (!name){
      nameInput.focus();
      nameInput.setCustomValidity('');
      nameInput.reportValidity();
      return;
    }
    // TODO: replace with a real request to the backend.
    form.classList.add('sent');
    if (status){
      status.textContent = status.getAttribute('data-thanks') || 'Thanks.';
      status.classList.add('ok');
    }
    form.reset();
  });
})();

// scroll-spy — reflect the section in view into the URL hash (via replaceState, so it
// doesn't spam history or hijack the back button). On reload the browser lands on that
// section. Cleared back to the base URL when the hero (above the first section) is in view.
// Uses a scroll-position line instead of intersection ratios, which is reliable for
// sections/mocks of any height (tall sections never reach a high ratio).
//
// Dispatches a `hashchange` event on change so the per-section mock animations
// (Hero live feed, Features inbox/search/snooze cycles) start/stop with the hash —
// replaceState alone is silent and would leave them stuck on the previous section.
(function(){
  // explicit id whitelist in visual order — includes the <header> hero and the
  // <div class="lp-mock"> entries inside #features, which a generic `section[id]`
  // selector would miss. Keep in sync with section order in Landing.astro.
  // NOTE: #privacy is not rendered on the landing page (Footer has no id), so
  // it is intentionally absent here.
  var IDS = ['hero', 'inbox', 'search', 'snooze', 'brief', 'ask', 'integrations', 'request', 'pricing'];
  var targets = [];
  for (var i = 0; i < IDS.length; i++){
    var el = document.getElementById(IDS[i]);
    if (el) targets.push(el);
  }
  if (!targets.length) return;

  var current = null;
  function setHash(hash){
    if (hash === current) return;
    current = hash;
    var base = location.pathname + location.search;
    try { history.replaceState(null, '', hash ? base + '#' + hash : base); } catch (e) {}
    // mock animations listen for this; replaceState is otherwise silent.
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }

  function update(){
    // At the very bottom of the page → the last target is active. Without this,
    // a short final section (pricing) can sit below the midline and never win,
    // leaving the hash stuck on the previous section.
    var docH = document.documentElement.scrollHeight;
    if (window.scrollY + window.innerHeight >= docH - 4) {
      setHash(targets[targets.length - 1].id); return;
    }

    // A target is active if the viewport's midline falls inside it; fall back
    // to the "last target whose top is above the 35% line" rule so short
    // sections / gaps between sections still track.
    var mid = window.innerHeight * 0.5;
    var active = null;
    for (var i = 0; i < targets.length; i++){
      var r = targets[i].getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) { active = targets[i].id; break; }
    }
    if (active === null) {
      var line = window.scrollY + window.innerHeight * 0.35;
      for (var j = 0; j < targets.length; j++){
        var top = targets[j].getBoundingClientRect().top + window.scrollY;
        if (top <= line) active = targets[j].id; else break;
      }
    }
    // near the very top (hero area, above the first target) → clear the hash
    if (window.scrollY < 120) { setHash(''); return; }
    setHash(active);
  }

  var ticking = false;
  function onScroll(){
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function(){ update(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
