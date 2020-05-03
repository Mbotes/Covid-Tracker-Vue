<template>
  <div id="app">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-center">

          <div class="uk-navbar-center-left">
            <div>
              <ul class="uk-navbar-nav">
                  <li class="uk-active"><a href="/">Covid Tracker</a></li>
                  <li>
                      <a href="#">Menu</a>
                      <div class="uk-navbar-dropdown">
                          <ul class="uk-nav uk-navbar-dropdown-nav">
                              <li class="uk-active"><a href="/">Countries</a></li>
                              <li><a href="/about">About</a></li>
                          </ul>
                      </div>
                  </li>
              </ul>
            </div>
          </div>
          <a class="uk-navbar-item uk-logo" href="#">Logo</a>
          <div class="uk-navbar-center-right">
          </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>