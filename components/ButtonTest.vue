<template>
    <div>
        <button class="app-button">
        <slot></slot>
        </button>
    </div>
</template>

<style lang="scss">
  .app-button {
    position: relative;
    display: inline-flex;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    text-decoration: none;
    outline: none;

    // variant
    &--primary {
        background-color: $primary;
        color: $white;
    }
}
</style>
