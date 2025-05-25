<script setup>

</script>

<template>
    <br>
    <div>
        <div class="flex flex-column gap-xs">
                <div class="title">
                    <slot name="title"></slot>
                </div>
                <div class="description">
                    <slot name="price"></slot>
                </div>
                <div class="button-container">
                    <slot></slot>
                </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>