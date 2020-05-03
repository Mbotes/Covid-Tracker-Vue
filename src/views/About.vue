<template>
  <div class="about uk-container uk-margin">
    <h1 id="news-agent-app-in-vue">News Agent App in Vue</h1>
<h2 id="description">Description</h2>
<p>This website was built in <a href="https://vuejs.org/">Vue.js</a> which reads from the <a href="https://github.com/javieraviles/covidAPI">github.com/javieraviles/covidAPI</a> open source API.</p>
<p>This site is using Vuex and Vue Router to handle state and routing.</p>
<p>The key features of the website is that users can view an overall view of Covid stats from all countries in the world and then view indivudual stats per country.</p>
<p>On load the website hits the GET <a href="https://coronavirus-19-api.herokuapp.com/countries">&quot;https://coronavirus-19-api.herokuapp.com/countries&quot;</a> endpoint which gets the latest countries stats on corona, and on selecting a country it hits the GET <a href="https://coronavirus-19-api.herokuapp.com/countries/{countryName}">&quot;https://coronavirus-19-api.herokuapp.com/countries/{countryName} &quot;</a> one to view all stats on an indivudual country.</p>
<p>Something I&#39;m still working on is to get Google GEO Charts running to view all stats in an easy to understand manner.</p>
<p>The site is also a PWA so you can install this website as a dedicated app on your mobile device or browser. </p>
<h2 id="installation">Installation</h2>
<h3 id="project-setup">Project setup</h3>
<pre><code>npm <span class="hljs-keyword">install</span>
</code></pre><h3 id="compiles-and-hot-reloads-for-development">Compiles and hot-reloads for development</h3>
<pre><code>npm <span class="hljs-keyword">run</span> serve

<span class="hljs-keyword">Output</span>:
 DONE  Compiled successfully in <span class="hljs-number">3706</span>ms                                                                                                                                                        <span class="hljs-number">15</span>:<span class="hljs-number">12</span>:<span class="hljs-number">47</span>

  App running at:
  - <span class="hljs-keyword">Local</span>:   http:<span class="hljs-comment">//localhost:8080/</span>
  - Network: http:<span class="hljs-comment">//192.168.0.119:8080/</span>

  Note that the development build is <span class="hljs-keyword">not</span> optimized.
  To <span class="hljs-keyword">create</span> a production build, <span class="hljs-keyword">run</span> npm <span class="hljs-keyword">run</span> build.
</code></pre><h3 id="compiles-and-minifies-for-production">Compiles and minifies for production</h3>
<pre><code>npm <span class="hljs-keyword">run</span><span class="bash"> build</span>
</code></pre><h3 id="lint-s-and-fixes-files">Lint&#39;s and fixes files</h3>
<pre><code>npm <span class="hljs-keyword">run</span><span class="bash"> lint</span>
</code></pre><h3 id="customize-configuration">Customize configuration</h3>
<p>See <a href="https://cli.vuejs.org/config/">Configuration Reference</a>.</p>
<h3 id="build-devops">Build/Devops</h3>
<p>This project has been connected to <a href="https://cloud.google.com/cloud-build">Cloud Build</a> which has a deployment trigger connected to the master branch on the repository, once this trigger has been hit it will deploy the project to a <a href="https://cloud.google.com/appengine">App engine</a> instance.</p>
<h2 id="known-issues">Known Issues</h2>
<ul>
<li>I have too many ideas and too little time to get it all done :D :&#39;&lt;</li>
</ul>
<h2 id="improvements">Improvements</h2>
<ul>
<li>Implement the Google Geo charts page (WIP)</li>
<li>Improve the UI/UX.</li>
</ul>
<h2 id="author">Author</h2>
<p>Built By me <a href="https://mbotes.github.io/">Michael Botes</a> and you can find my github over <a href="https://github.com/Mbotes">here</a></p>
  </div>
</template>