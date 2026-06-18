/* =========================================================================
   Ancient Medical KnowBridge — interactive explorer
   Builds the seven access-form cards and the detail panel from KB_DATA,
   and wires up selection (click / keyboard) and the close control.
   ========================================================================= */
(function () {
  "use strict";
  if (!window.KB_DATA) return;
  var FORMS = KB_DATA.forms;

  var cardsEl  = document.getElementById("cards");
  var mountEl  = document.getElementById("detail-mount");
  if (!cardsEl || !mountEl) return;

  function icon(id, cls) {
    return '<svg class="' + (cls || "") + '" aria-hidden="true"><use href="#i-' + id + '"/></svg>';
  }

  /* ---- cards ------------------------------------------------------- */
  function renderCards() {
    cardsEl.innerHTML = FORMS.map(function (f, i) {
      var lines = f.cardLines.map(function (t, j) {
        return '<p class="' + (j ? "sub" : "") + '">' + t + "</p>";
      }).join("");
      return (
        '<div class="card' + (f.wide ? " wide" : "") + '" role="tab" tabindex="0" ' +
        'data-id="' + f.id + '" aria-selected="false" id="tab-' + f.id + '">' +
          icon(f.icon, "icon") +
          "<h3>" + f.title + "</h3>" +
          lines +
          icon("check", "badge") +
        "</div>"
      );
    }).join("");
  }

  /* ---- example surface (Greek / Arabic) ---------------------------- */
  function renderExample(ex, side) {
    var label = side === "greek" ? "Greek example" : "Arabic example";
    var inner;
    if (ex.kind === "image") {
      inner = '<div class="surface" style="padding:0;min-height:132px;display:grid;place-items:center;background:#f3ead2">' +
              '<img src="' + ex.src + '" alt="' + label + '" style="max-height:128px;width:auto;mix-blend-mode:multiply">' +
              "</div>";
    } else {
      var cls = "surface " + (ex.rtl ? "arabic" : "greek");
      var body = ex.lines.map(function (ln, idx) {
        var red = (ex.rubricFirst && idx === 0) ||
                  (ex.rubricQuestions && /;\s*$/.test(ln));
        return red ? '<span class="red">' + ln + "</span>" : ln;
      }).join("<br>");
      inner = '<div class="' + cls + '">' + body + "</div>";
    }
    return (
      '<div class="example">' +
        '<div class="label">' + label + "</div>" +
        inner +
        '<div class="label" style="border-top:1px solid var(--line-soft);border-bottom:0;background:transparent;font-size:12.5px;padding:7px 8px">' +
          ex.caption +
        "</div>" +
      "</div>"
    );
  }

  var PROP_ICON = {
    "Ancient form": "list",
    "Function": "quill",
    "Modern analogy": "branch",
    "Traditions": "people",
    "Example": "mortar"
  };

  /* ---- detail panel ------------------------------------------------ */
  function renderDetail(f) {
    var props = Object.keys(f.props).map(function (k) {
      var ic = PROP_ICON[k] || "list";
      return (
        '<div class="prop-row">' +
          '<div class="k">' + icon(ic) + k + "</div>" +
          '<div class="v">' + f.props[k] + "</div>" +
        "</div>"
      );
    }).join("");

    mountEl.innerHTML =
      '<div class="detail" role="tabpanel" aria-labelledby="tab-' + f.id + '">' +
        '<div class="detail-head">' +
          '<div class="seal">' + icon(f.icon) + "</div>" +
          "<div><h2>" + f.title + "</h2>" +
            '<div class="tagline">' + f.fn + "</div></div>" +
          '<button class="close" id="detail-close" aria-label="Close panel">✕</button>' +
        "</div>" +
        '<div class="detail-body">' +
          '<div class="examples">' +
            renderExample(f.greek, "greek") +
            renderExample(f.arabic, "arabic") +
          "</div>" +
          '<div class="props">' + props + "</div>" +
        "</div>" +
        '<div class="detail-foot">' +
          '<div class="foot-item">' + icon("book") +
            '<div><div class="ft-k">Source</div><div class="ft-v">' + f.source + "</div></div></div>" +
          '<div class="foot-item">' + icon("calendar") +
            '<div><div class="ft-k">Date</div><div class="ft-v">' + f.date + "</div></div></div>" +
          '<div class="foot-item">' + icon("people") +
            '<div><div class="ft-k">Tradition</div><div class="ft-v">' + f.tradition + "</div></div></div>" +
          '<a class="btn-source" href="' + f.link + '">' + icon("external") + "Open source</a>" +
        "</div>" +
      "</div>";

    var close = document.getElementById("detail-close");
    if (close) close.addEventListener("click", showPlaceholder);
  }

  function showPlaceholder() {
    mountEl.innerHTML =
      '<div class="detail"><div class="detail-body" style="text-align:center;padding:60px 28px;color:var(--ink-faint)">' +
        icon("medallion", "") +
        '<p style="font-family:var(--display);font-size:24px;color:var(--ink-soft);margin:14px 0 4px">Select an access form</p>' +
        '<p>Choose one of the seven cards to see how premodern scholars stored and retrieved that kind of knowledge — with a Greek and an Arabic witness side by side.</p>' +
      "</div></div>";
    cardsEl.querySelectorAll(".card").forEach(function (c) {
      c.classList.remove("active");
      c.setAttribute("aria-selected", "false");
    });
  }

  /* ---- selection --------------------------------------------------- */
  function select(id) {
    var f = FORMS.filter(function (x) { return x.id === id; })[0];
    if (!f) return;
    cardsEl.querySelectorAll(".card").forEach(function (c) {
      var on = c.getAttribute("data-id") === id;
      c.classList.toggle("active", on);
      c.setAttribute("aria-selected", on ? "true" : "false");
    });
    renderDetail(f);
  }

  /* ---- wire up ----------------------------------------------------- */
  renderCards();
  cardsEl.addEventListener("click", function (e) {
    var card = e.target.closest(".card");
    if (card) select(card.getAttribute("data-id"));
  });
  cardsEl.addEventListener("keydown", function (e) {
    var card = e.target.closest(".card");
    if (!card) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(card.getAttribute("data-id")); }
  });

  /* default selection: honour ?form= in the URL, else the flagged default */
  var params = new URLSearchParams(location.search);
  var want = params.get("form");
  var initial = (want && FORMS.some(function (f) { return f.id === want; }))
    ? want
    : (FORMS.filter(function (f) { return f.default; })[0] || FORMS[0]).id;
  select(initial);
})();
