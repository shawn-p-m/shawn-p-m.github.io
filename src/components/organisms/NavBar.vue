<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://reddit.com">
        <img
          alt="DevPost"
          width="60"
          height="28"
          src="@/assets/Random-Brand-logos.jpeg"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <div class="navbar-item">
          <span class="icon-text">
            <span class="icon">
              <i class="mdi mdi-sun-wireless"></i>
            </span>
            <h1><strong>Shawn's Weather App </strong></h1>
            <a href="https://shawnm.dev">
              <figure class="image px-2">
                <img
                  class="is-rounded"
                  src="@/assets/shawn.png"
                  style="width: 28px !important; height: 28px !important"
                />
              </figure>
            </a>
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>
