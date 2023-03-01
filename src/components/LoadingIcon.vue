<template>
  <div class="LoadingIcon">
    <div class="body">
      <div class="arm behind"></div>
      <div class="arm"></div>
      <div class="leg behind"></div>
      <div class="leg"></div>

    </div>
  </div>
</template>

<style scoped lang="less">
.LoadingIcon {
  --bg-color: gray;
  --speed-fast: .8s;

  .body {
    display: inline-block;
    position: relative;
    height: 15px;
    width: 8px;
    border-radius: 4px;
    transform: rotate(32deg);
    // transform-origin:4px 11px;
    background: var(--bg-color);
    animation: shark var(--speed-fast) linear infinite;

    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      bottom: 16px;
      left: 0;
      background: var(--bg-color);
    }

    .arm,
    .arm::before,
    .leg,
    .leg::before {
      position: absolute;
      content: '';
      width: var(--w,11px);
      height: var(--h,4px);
      left: var(--l, 0);
      border-radius: 2px;
      // transform-origin: 2px 2px;
      background: var(--bg-color);
      transform: rotate(var(--r, 0deg));
      // &.behind {
      //   --r:164deg;
      //   --r-to:24deg;
      // }
    }

    .arm {
      &:before {
        --l: 7px;
      }

      &.front {
        --r: 24deg;
        --t-to: 164deg;

        &:before {
          --r: -48deg;
          --t-to: -36deg;
        }
      }

      &.behind {
        --r: 164deg;
        --r-to: 24deg;

        &:before {
          --r: -36deg;
          --r-to: -48deg;
        }
      }
    }

    .leg {
      --w: 12px;
      --t: 11px;

      &:after {
        --t: 0;
        --l: 8px;

        &.front {
          --r: -246deg;
        }
      }
    }
  }


  @keyframes shark {
    50% {
      transform: rotate(16deg);
    }

    25%,
    75% {
      transform: rotate(24deg);
    }
  }
}
</style>
