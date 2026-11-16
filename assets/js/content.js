(()=>{
const cfg=window.SITE_CONTENT||{};
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=url=>{if(!url)return '';try{const u=new URL(url,location.href);return ['http:','https:'].includes(u.protocol)?url:''}catch{return ''}};
Object.entries(cfg.modules||{}).forEach(([key,enabled])=>{if(!enabled)document.querySelectorAll(`[data-module="${key}"]`).forEach(el=>el.hidden=true)});
document.querySelectorAll('[data-collection]').forEach(container=>{
const key=container.dataset.collection;
if(cfg.modules?.[key]===false)return;
const entries=(cfg[key]||[]).filter(x=>x.enabled!==false);
container.innerHTML=entries.map((x,i)=>{
const shape=['square','portrait','landscape'].includes(x.shape)?x.shape:'landscape';
const url=safeUrl(x.url),external=url.startsWith('http');
const tag=url?'a':'article';const attrs=url?` href="${escapeHtml(url)}"${external?' target="_blank" rel="noopener noreferrer"':''}`:'';
const visual=x.image?`<img loading="lazy" src="${escapeHtml(x.image)}" alt="${escapeHtml(x.imageAlt||x.title)}">`:`<span class="tile-image-placeholder">IMAGE OPTIONAL</span>`;
return `<${tag}${attrs} class="content-tile reveal visible ${url?'tile-linked':''}"><div class="tile-media shape-${shape}">${visual}</div><div class="tile-copy"><span class="tile-meta">${escapeHtml(x.meta||'')}</span><h3>${escapeHtml(x.title)}</h3>${x.description?`<p>${escapeHtml(x.description)}</p>`:''}${url?'<span class="tile-arrow" aria-hidden="true">↗</span>':''}</div></${tag}>`;
}).join('');
if(!entries.length)container.innerHTML='<p class="empty-state">Content coming soon.</p>';
});
})();
