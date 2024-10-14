import{_ as l,D as n,c as h,j as s,a,I as e,aT as t,o as p}from"./chunks/framework.yOiU1ggP.js";const _=JSON.parse('{"title":"프론트매터 구성","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"ko/reference/frontmatter-config.md","filePath":"ko/reference/frontmatter-config.md","lastUpdated":1728887833000}'),d={name:"ko/reference/frontmatter-config.md"},k=t(`<h1 id="frontmatter-config" tabindex="-1">프론트매터 구성 <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;프론트매터 구성 {#frontmatter-config}&quot;">​</a></h1><p>프론트매터(머리말)는 페이지 기반 구성을 가능하게 합니다. 모든 마크다운 파일에서, 사이트 수준 또는 테마 수준의 구성 옵션을 재정의하기 위해 프론트매터 구성을 사용할 수 있습니다. 또한, 프론트매터에서만 정의할 수 있는 구성 옵션이 있습니다.</p><p>사용 예시:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress로 문서화</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>Vue 표현식에서 <code>$frontmatter</code> 전역을 통해 프론트매터 데이터에 접근할 수 있습니다:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ $frontmatter.title }}</span></span></code></pre></div><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h2><ul><li>유형: <code>string</code></li></ul><p>페이지의 제목입니다. <a href="./site-config#title">config.title</a>과 동일하며, 사이트 수준의 구성을 재정의합니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="titletemplate" tabindex="-1">titleTemplate <a class="header-anchor" href="#titletemplate" aria-label="Permalink to &quot;titleTemplate&quot;">​</a></h2><ul><li>유형: <code>string | boolean</code></li></ul><p>제목의 접미사입니다. <a href="./site-config#titletemplate">config.titleTemplate</a>와 동일하며, 사이트 수준의 구성을 재정의합니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">titleTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Vite &amp; Vue로 구동되는 정적 사이트 생성기</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h2><ul><li>유형: <code>string</code></li></ul><p>페이지의 설명입니다. <a href="./site-config#description">config.description</a>과 동일하며, 사이트 수준의 구성을 재정의합니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-label="Permalink to &quot;head&quot;">​</a></h2><ul><li>유형: <code>HeadConfig[]</code></li></ul><p>현재 페이지에 삽입할 추가 head 태그를 지정합니다. 사이트 수준 구성에 의해 삽입된 head 태그들 이후에 추가됩니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">meta</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">description</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">안녕하세요</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">meta</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">keywords</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">슈퍼 두퍼 SEO</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HeadConfig</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="default-theme-only" tabindex="-1">기본 테마 전용 <a class="header-anchor" href="#default-theme-only" aria-label="Permalink to &quot;기본 테마 전용 {#default-theme-only}&quot;">​</a></h2><p>다음 프론트매터 옵션은 기본 테마를 사용할 때만 적용됩니다.</p><h3 id="layout" tabindex="-1">layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;layout&quot;">​</a></h3><ul><li>유형: <code>doc | home | page</code></li><li>기본값: <code>doc</code></li></ul><p>페이지의 레이아웃을 결정합니다.</p><ul><li><code>doc</code> - 마크다운 콘텐츠에 기본 문서 스타일을 적용합니다.</li><li><code>home</code> - &quot;홈 페이지&quot;를 위한 특별한 레이아웃입니다. <code>hero</code> 및 <code>features</code>와 같은 추가 옵션을 추가하여 아름다운 랜딩 페이지를 빠르게 만들 수 있습니다.</li><li><code>page</code> - <code>doc</code>과 비슷하게 동작하지만 콘텐츠에 스타일을 적용하지 않습니다. 완전히 사용자 정의된 페이지를 만들고 싶을 때 유용합니다.</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">doc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div>`,30),o={id:"hero",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#hero","aria-label":'Permalink to "hero <Badge type="info" text="홈 페이지 전용" />"'},"​",-1),c=s("p",null,[s("code",null,"layout"),a("이 "),s("code",null,"home"),a("으로 설정될 때 홈 히어로 섹션의 내용을 정의합니다. "),s("a",{href:"./default-theme-home-page"},"기본 테마: 홈 페이지"),a("에서 자세한 내용을 확인할 수 있습니다.")],-1),g={id:"features",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#features","aria-label":'Permalink to "features <Badge type="info" text="홈 페이지 전용" />"'},"​",-1),E=t(`<p><code>layout</code>이 <code>home</code>으로 설정될 때 기능 섹션에 표시할 항목을 정의합니다. <a href="./default-theme-home-page">기본 테마: 홈 페이지</a>에서 자세한 내용을 확인할 수 있습니다.</p><h3 id="navbar" tabindex="-1">navbar <a class="header-anchor" href="#navbar" aria-label="Permalink to &quot;navbar&quot;">​</a></h3><ul><li>유형: <code>boolean</code></li><li>기본값: <code>true</code></li></ul><p><a href="./default-theme-nav">navbar</a>를 표시할지 여부입니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">navbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="sidebar" tabindex="-1">sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;sidebar&quot;">​</a></h3><ul><li>유형: <code>boolean</code></li><li>기본값: <code>true</code></li></ul><p><a href="./default-theme-sidebar">sidebar</a>를 표시할지 여부입니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="aside" tabindex="-1">aside <a class="header-anchor" href="#aside" aria-label="Permalink to &quot;aside&quot;">​</a></h3><ul><li>유형: <code>boolean | &#39;left&#39;</code></li><li>기본값: <code>true</code></li></ul><p><code>doc</code> 레이아웃에서 aside 컴포넌트의 위치를 정의합니다.</p><p>이 값을 <code>false</code>로 설정하면 aside 컨테이너가 렌더링되지 않습니다.<br> 이 값을 <code>true</code>로 설정하면 aside가 오른쪽에 렌더링됩니다.<br> 이 값을 <code>&#39;left&#39;</code>로 설정하면 aside가 왼쪽에 렌더링됩니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">aside</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="outline" tabindex="-1">outline <a class="header-anchor" href="#outline" aria-label="Permalink to &quot;outline&quot;">​</a></h3><ul><li>유형: <code>number | [number, number] | &#39;deep&#39; | false</code></li><li>기본값: <code>2</code></li></ul><p>페이지에 표시할 개요의 헤더 레벨입니다. <a href="./default-theme-config#outline">config.themeConfig.outline.level</a>과 동일하며, 사이트 수준 구성에서 설정한 값을 재정의합니다.</p><h3 id="lastupdated" tabindex="-1">lastUpdated <a class="header-anchor" href="#lastupdated" aria-label="Permalink to &quot;lastUpdated&quot;">​</a></h3><ul><li>유형: <code>boolean | Date</code></li><li>기본값: <code>true</code></li></ul><p>현재 페이지의 바닥글에 <a href="./default-theme-last-updated">마지막 업데이트</a> 텍스트를 표시할지 여부입니다. 날짜와 시간이 지정되면 마지막 git 수정 타임스탬프 대신 표시됩니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="editlink" tabindex="-1">editLink <a class="header-anchor" href="#editlink" aria-label="Permalink to &quot;editLink&quot;">​</a></h3><ul><li>유형: <code>boolean</code></li><li>기본값: <code>true</code></li></ul><p>현재 페이지의 바닥글에 <a href="./default-theme-edit-link">편집 링크</a>를 표시할지 여부입니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="footer" tabindex="-1">footer <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;footer&quot;">​</a></h3><ul><li>유형: <code>boolean</code></li><li>기본값: <code>true</code></li></ul><p><a href="./default-theme-footer">footer</a>를 표시할지 여부입니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h3 id="pageclass" tabindex="-1">pageClass <a class="header-anchor" href="#pageclass" aria-label="Permalink to &quot;pageClass&quot;">​</a></h3><ul><li>유형: <code>string</code></li></ul><p>특정 페이지에 추가 클래스 이름을 추가합니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pageClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom-page-class</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>그런 다음 <code>.vitepress/theme/custom.css</code> 파일에서 이 특정 페이지의 스타일을 사용자 정의할 수 있습니다:</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.custom-page-class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* 페이지별 스타일 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,35);function y(b,m,F,C,f,v){const i=n("Badge");return p(),h("div",null,[k,s("h3",o,[a("hero "),e(i,{type:"info",text:"홈 페이지 전용"}),a(),r]),c,s("h3",g,[a("features "),e(i,{type:"info",text:"홈 페이지 전용"}),a(),u]),E])}const x=l(d,[["render",y]]);export{_ as __pageData,x as default};
