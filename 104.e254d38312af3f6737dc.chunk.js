(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{385:function(n,s,a){"use strict";a.r(s),s.default='<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev json-loader</code></pre>\n<blockquote>\n<p>⚠️ <strong>Since <code>webpack >= v2.0.0</code>, importing of JSON files will work by default. You might still want to use this if you use a custom file extension. See the <a href="/migrate/3/#json-loader-is-not-required-anymore">v1.0.0 -> v2.0.0 Migration Guide</a> for more information</strong></p>\n</blockquote>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="inline"><code>Inline</code><a href="#inline" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'json-loader!./file.json\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3 id="configuration-recommended"><code>Configuration</code> (recommended)<a href="#configuration-recommended" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./file.json\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    loaders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.json$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'json-loader\'</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="maintainer">Maintainer<a href="#maintainer" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150" src="https://avatars.githubusercontent.com/sokra?v=3">\n        </br>\n        <a href="https://github.com/sokra">Tobias Koppers</a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n'}}]);