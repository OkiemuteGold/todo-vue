<template>
    <div class="alert-container">
        <button class="alert" :class="mode" role="alert">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    props: ["mode"],
};
</script>

<style lang="scss" scoped>
.alert-container {
    max-width: 300px;
    margin: auto;

    .alert {
        padding: 10px 20px;
        margin: 10px;
        min-width: 130px;
        border: 2px solid transparent;
        border-radius: 5px;

        color: #fff;
        outline: none;
        appearance: none;
        cursor: pointer;
        transition: 0.4s ease;

        &.primary {
            background: rgb(13, 99, 133);
        }
        &.success {
            background: rgb(14, 126, 14);
        }
        &.danger {
            background: rgb(196, 24, 24);
        }
    }

    .alert:hover {
        background: transparent;
        font-weight: 600;

        &.primary:hover {
            border-color: rgb(13, 99, 133);
            color: rgb(13, 99, 133);
        }
        &.success:hover {
            border-color: rgb(14, 126, 14);
            color: rgb(14, 126, 14);
        }
        &.danger:hover {
            border-color: rgb(196, 24, 24);
            color: rgb(196, 24, 24);
        }
    }
}
</style>