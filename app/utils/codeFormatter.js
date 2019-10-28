export function getVueCode (payload) {
  const {
    formSettings = {},
    layout = {},
    model = {},
    schema = [],
    options = {}
  } = payload

  const {
    labelWidth = '80px',
    labelPosition = 'left',
    size = 'small'
  } = formSettings

  const formatCode = code => {
    const stringifyCode = JSON.stringify(code)
    return stringifyCode.replace(/"/g, '\'')
  }

  let codeTemplate = `<template>
  <el-form size="${size}" label-position="${labelPosition}" label-width="${labelWidth}" :model="model">
    <schema-form
      :layout="layout"
      :model="model"
      :schema="schema"
      :options="options"
    >
    </schema-form>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      // 表单布局
      layout: ${formatCode(layout)},
      // 表单绑定模型
      model: ${formatCode(model)},
      // 表单 schema
      schema: ${formatCode(schema)},
      // 表单 options
      options: ${formatCode(options)}
    }
  }
}
</script>
`
  return codeTemplate
}
