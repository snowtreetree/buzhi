module.exports = {
    root:true,
    parser: "babel-eslint",
    plugins:["react",'prettier'],
    extends:["react-app","eslint:recommended", "plugin:react/recommended","prettier/react",],
    rules:{
        "semi": ["error", "always"],
        "quotes":["error",'double'],
        "prettier/prettier": "error"
    },
    parserOptions:{
        sourceType:'module',
        // "env": { "es6": true } 
    },
    globals:{
        // 定义全局变量
    }
}