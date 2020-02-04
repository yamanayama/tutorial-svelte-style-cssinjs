<script>
  export let value = "";
</script>

<style>
  .is-act {
    font-weight: bold;
  }
</style>

<!-- classの当て方は変えてもOKです。今はvalueの値があればis-actが当たります。 -->
<label class:is-act={value}>{value ? value : '指定しない'} ></label>
