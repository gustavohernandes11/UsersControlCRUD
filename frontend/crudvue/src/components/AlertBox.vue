<template>
    <div class="alertbox" >
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "AlertBox",
    props: {
        message: String,
        backgroundColor: String
    }

}
</script>

<style>
    .alertbox {
        margin: 15px 0px;
        border: 1px solid rgb(167, 167, 167);
        padding: 5px;
        color: rgb(255, 255, 255);

    }
    .alertbox p {
        margin: 0px
    }
</style>