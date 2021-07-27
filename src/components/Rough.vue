<template>
    <div class="home">
        <h1>Playground</h1>

        <div>
            <alert mode="primary">Primary Alert</alert>
            <alert mode="success">Success Alert</alert>
            <alert mode="danger">Failed Alert</alert>
        </div>
    </div>
</template>

<script>
import Alert from "../components/Alert.vue";

export default {
    components: { Alert },
};
</script>

<style>
</style>