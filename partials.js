/* =========================================================================
   Ancient Medical KnowBridge — shared chrome (icon sprite, top bar, footer)
   Secondary pages include this so the header/footer stay in one place.
   Set the active nav item with <body data-page="about"> etc.
   ========================================================================= */
(function () {
  "use strict";

  var SPRITE =
'<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
'<symbol id="i-medallion" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="24" cy="24" r="21"/><circle cx="24" cy="24" r="6.5" fill="currentColor" stroke="none"/><g stroke-width="1.3"><path d="M24 3.5v8M24 36.5v8M3.5 24h8M36.5 24h8"/><path d="M9.5 9.5l5.6 5.6M32.9 32.9l5.6 5.6M38.5 9.5l-5.6 5.6M15.1 32.9l-5.6 5.6"/></g><circle cx="24" cy="24" r="13" stroke-dasharray="2 3"/></g></symbol>' +
'<symbol id="i-list" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="4.5" cy="6" r="1.4" fill="currentColor"/><circle cx="4.5" cy="12" r="1.4" fill="currentColor"/><circle cx="4.5" cy="18" r="1.4" fill="currentColor"/><path d="M9 6h11M9 12h11M9 18h11"/></g></symbol>' +
'<symbol id="i-quill" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 3c-7 1-12 6-14 13l3 3c7-2 12-7 13-14z"/><path d="M5 19l5-5"/><path d="M14 9l-3 3"/></g></symbol>' +
'<symbol id="i-tree" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.2"/><circle cx="5.5" cy="14" r="2.2"/><circle cx="18.5" cy="14" r="2.2"/><path d="M12 6.7v3.3M12 10l-6.5 1.8M12 10l6.5 1.8M5.5 16.2v1.3a2 2 0 0 0 2 2h4M18.5 16.2v1.3a2 2 0 0 1-2 2h-4"/></g></symbol>' +
'<symbol id="i-table" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><path d="M3.5 9.5h17M3.5 14.5h17M12 4.5v15"/></g></symbol>' +
'<symbol id="i-qa" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8l-4 3z"/><path d="M9 9.2a1.6 1.6 0 1 1 2 1.5c-.6.3-.9.6-.9 1.1"/><circle cx="10.1" cy="13.4" r=".2" fill="currentColor" stroke-width=".6"/></g></symbol>' +
'<symbol id="i-mortar" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 11h15M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v3M8 20.5h8M14 4l4.5 4.5M12.5 6.5l3 3"/></g></symbol>' +
'<symbol id="i-branch" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.2"/><circle cx="18" cy="5.5" r="2.2"/><circle cx="18" cy="18.5" r="2.2"/><path d="M8.2 11l7.6-4.4M8.2 13l7.6 4.4"/></g></symbol>' +
'<symbol id="i-check" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none" opacity=".18"/><path d="M7.5 12.5l3 3 6-6.5" stroke-linecap="round" stroke-linejoin="round"/></g></symbol>' +
'<symbol id="i-book" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z"/><path d="M20 4.5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z"/></g></symbol>' +
'<symbol id="i-calendar" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/></g></symbol>' +
'<symbol id="i-people" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 5.5a3 3 0 0 1 0 5.8M17 14.5a5.5 5.5 0 0 1 3.5 4.5"/></g></symbol>' +
'<symbol id="i-external" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/></g></symbol>' +
'<symbol id="i-flask" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 8.5A2 2 0 0 0 6.7 21h10.6a2 2 0 0 0 1.7-3.5L14 9V3M7.5 15h9"/></g></symbol>' +
'<symbol id="i-shield" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 5-3 7.5-7 9-4-1.5-7-4-7-9V6z"/><path d="M9 12l2 2 4-4.5"/></g></symbol>' +
'<symbol id="i-link" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M9.5 14.5l5-5"/><path d="M8 11l-2 2a3.5 3.5 0 0 0 5 5l2-2M16 13l2-2a3.5 3.5 0 0 0-5-5l-2 2"/></g></symbol>' +
'</defs></svg>';

  var NAV = [
    ["index.html", "Home", "home"],
    ["explore.html", "Explore", "explore"],
    ["about.html", "About", "about"],
    ["resources.html", "Resources", "resources"],
    ["project.html", "Project", "project"]
  ];

  function navHtml(active) {
    return NAV.map(function (n) {
      if (n[2] === "explore") {
        return '<span class="menu"><a class="has-menu' + (active === "explore" ? " active" : "") +
          '" href="explore.html">Explore <span class="caret">▾</span></a>' +
          '<span class="dropdown">' +
          '<a href="explore.html#qa">Q–A &amp; the catechism<small>the flagship form</small></a>' +
          '<a href="explore.html#papyri">The five papyri<small>catalogue of sources</small></a>' +
          '<a href="explore.html#forms">All seven access forms<small>lists, tables, diagrams…</small></a>' +
          '</span></span>';
      }
      return '<a href="' + n[0] + '"' + (active === n[2] ? ' class="active"' : "") + ">" + n[1] + "</a>";
    }).join("");
  }

  function header(active) {
    return '<header class="topbar"><div class="wrap">' +
      '<a class="brand" href="index.html"><svg class="medallion"><use href="#i-medallion"/></svg>' +
      '<span class="name">Ancient Medical KnowBridge</span></a>' +
      '<nav class="nav">' + navHtml(active) + "</nav>" +
      '<span class="spacer"></span>' +
      '<a class="about-link" href="about.html"><svg><use href="#i-flask"/></svg> About this project</a>' +
      '<a class="topbar-btn" href="https://fariselshammouty.github.io/knowbridge/"><svg><use href="#i-medallion"/></svg> KnowBridge</a>' +
      "</div></header>";
  }

  function footer() {
    return '<footer class="site-foot"><hr class="divider-rule"><div class="wrap">' +
      '<div class="lead">Pilot interface for collecting and linking Greek and Arabic medical access forms.</div>' +
      '<div class="foot-tags">' +
      '<span><svg><use href="#i-shield"/></svg> Evidence-based</span>' +
      '<span><svg><use href="#i-book"/></svg> Source-grounded</span>' +
      '<span><svg><use href="#i-link"/></svg> Interoperable</span>' +
      '<span><svg><use href="#i-people"/></svg> Open &amp; collaborative</span>' +
      "</div>" +
      '<div class="right"><b>Pilot digital-humanities prototype</b>Research use only</div>' +
      "</div></footer>";
  }

  var active = document.body.getAttribute("data-page") || "";
  document.body.insertAdjacentHTML("afterbegin", SPRITE + header(active));
  document.body.insertAdjacentHTML("beforeend", footer());
})();
