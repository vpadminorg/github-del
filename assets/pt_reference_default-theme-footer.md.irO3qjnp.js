import{_ as s,c as a,o as i,aT as e}from"./chunks/framework.yOiU1ggP.js";const E=JSON.parse('{"title":"Rodapé","description":"","frontmatter":{},"headers":[],"relativePath":"pt/reference/default-theme-footer.md","filePath":"pt/reference/default-theme-footer.md","lastUpdated":1728887833000}'),t={name:"pt/reference/default-theme-footer.md"},n=e(`<h1 id="footer" tabindex="-1">Rodapé <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;Rodapé {#footer}&quot;">​</a></h1><p>VitePress irá mostrar o rodapé global na parte inferior da página quando <code>themeConfig.footer</code> está presente.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Lançado sob Licença MIT.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      copyright: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Direitos Reservados © 2019-present Evan You&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // A mensagem mostrada logo antes do copyright.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // O próprio texto de copyright.</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  copyright</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>A configuração acima também suporta strings HTML. Então, por exemplo, se você quiser configurar o texto de rodapé para ter alguns links, você pode ajustar a configuração como o seguinte:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Lançado sob &lt;a href=&quot;https://github.com/vuejs/vitepress/blob/main/LICENSE&quot;&gt;Licença MIT&lt;/a&gt;.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      copyright: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Direitos Reservados © 2019-present &lt;a href=&quot;https://github.com/yyx990803&quot;&gt;Evan You&lt;/a&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Apenas elementos <em>inline</em> serão usados em <code>message</code> e <code>copyright</code> conforme eles são apresentados dentro do elemento <code>&lt;p&gt;</code>. Se você quiser adicionar elementos de tipo <em>block</em>, considere usar o <em>slot</em> <a href="./../guide/extending-default-theme#layout-slots"><code>layout-bottom</code></a>.</p></div><p>Note que o rodapé não será mostrado quando a <a href="./default-theme-sidebar">Barra Lateral</a> estiver visível.</p><h2 id="frontmatter-config" tabindex="-1">Configuração Frontmatter <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Configuração Frontmatter {#frontmatter-config}&quot;">​</a></h2><p>Isso pode ser desabilitado por página usando a opção <code>footer</code> em frontmatter:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div>`,11),p=[n];function l(o,h,r,d,k,c){return i(),a("div",null,p)}const m=s(t,[["render",l]]);export{E as __pageData,m as default};
