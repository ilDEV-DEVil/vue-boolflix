<template>
  <div class="background d-flex justify-content-between align-items-center pt-3 pb-3">
    <h1 class="ms-3">BOOLFLIX</h1>
    
    <div class="input-group w-25 me-4">
        <input type="text" class="form-control" placeholder="Cerca Film o Serie Tv..." aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-danger" type="button" id="button-addon2">Button</button>
    </div>
  </div>
</template>

<script>


export default {
name: "Header",

}
</script>

<style lang="scss" scoped>
    .background{
        background-color: black;
        color: red;
    }
</style>