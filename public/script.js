// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const mobile = document.getElementById('navMobile');
if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    const isHidden = mobile.hasAttribute('hidden');
    if (isHidden) mobile.removeAttribute('hidden'); else mobile.setAttribute('hidden','');
    toggle.textContent = isHidden ? '✕' : '☰';
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobile.setAttribute('hidden','');
    toggle.textContent = '☰';
  }));
}

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Origem do lead.
//
// O site não guarda leads: o formulário abre uma conversa no WhatsApp. Então o
// único lugar onde a origem do clique sobrevive até a recepção é dentro da
// própria mensagem. Guardamos aqui o último clique pago que trouxe a pessoa e
// anexamos uma linha ao texto, para responder duas perguntas que hoje ninguém
// consegue responder: de qual campanha veio este paciente, e ele está dentro
// do raio que anunciamos? O gclid vai inteiro porque é ele que permite
// importar de volta no Google Ads a conversão que só acontece offline —
// o agendamento confirmado.
const ATTR_KEY = 'clinicat_attr';
const ATTR_TTL_MS = 90 * 24 * 60 * 60 * 1000; // mesma janela do relatório

function readAttribution() {
  try {
    const raw = localStorage.getItem(ATTR_KEY);
    if (!raw) return null;
    const attr = JSON.parse(raw);
    if (!attr || !attr.ts || Date.now() - attr.ts > ATTR_TTL_MS) return null;
    return attr;
  } catch (e) {
    // Navegação anônima ou storage bloqueado: seguimos sem origem.
    return null;
  }
}

function captureAttribution() {
  let params;
  try {
    params = new URLSearchParams(window.location.search);
  } catch (e) {
    return;
  }

  const attr = { ts: Date.now() };
  // wbraid/gbraid substituem o gclid quando o usuário não deu consentimento
  // de cookies no iOS; para a importação offline valem o mesmo.
  const googleClick = params.get('gclid') || params.get('wbraid') || params.get('gbraid');
  if (googleClick) attr.gclid = googleClick;
  const metaClick = params.get('fbclid');
  if (metaClick) attr.fbclid = metaClick;
  ['source', 'medium', 'campaign', 'term', 'content'].forEach(key => {
    const value = params.get('utm_' + key);
    if (value) attr[key] = value;
  });

  // Visita sem nenhum parâmetro é navegação direta ou orgânica: não apaga a
  // origem paga que já estava guardada. Com parâmetro, o clique mais recente
  // vence — é assim que Google e Meta atribuem a conversão.
  if (!attr.gclid && !attr.fbclid && !attr.source) return;
  try {
    localStorage.setItem(ATTR_KEY, JSON.stringify(attr));
  } catch (e) {
    // Sem storage o lead ainda é enviado, só sem a linha de origem.
  }
}

function attributionLine() {
  const attr = readAttribution();
  if (!attr) return null;
  const trilha =
    [attr.source, attr.medium, attr.campaign].filter(Boolean).join(' / ') ||
    (attr.gclid ? 'google / cpc' : 'meta');
  const clickId = attr.gclid
    ? 'gclid:' + attr.gclid
    : attr.fbclid
      ? 'fbclid:' + attr.fbclid
      : '';
  return '_origem: ' + trilha + (clickId ? ' · ' + clickId : '') + '_';
}

captureAttribution();

// Formulários: enviam via WhatsApp (site estático, sem backend).
// Delegação no document: o listener sobrevive à navegação client-side do Next
// (o document persiste), então formulários montados depois também funcionam.
document.addEventListener('submit', e => {
  const form = e.target.closest && e.target.closest('[data-wpp-form]');
  if (!form) return;
  e.preventDefault();
  const fd = new FormData(form);
  const lines = ['Olá, Clinicat! 🐾', ''];
  const labels = { nome:'Nome', telefone:'WhatsApp', email:'E-mail', pet:'Pet', bairro:'Bairro/CEP', assunto:'Assunto', mensagem:'Mensagem' };
  Object.keys(labels).forEach(k => {
    const v = fd.get(k);
    if (v) lines.push('*' + labels[k] + ':* ' + v);
  });
  const origem = attributionLine();
  if (origem) lines.push('', origem);
  const phone = form.getAttribute('data-wpp-phone') || '5511932565663';
  const url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank', 'noopener');
});
