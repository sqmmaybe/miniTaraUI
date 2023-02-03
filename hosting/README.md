# CI / CD 流程（自动化打包部署流程）

```pre
    - packages 
        - examples(测试页面)
        - tara(组件库)
```

## 1: tara 

```pre
    部署drone - build - test - publish
```

## 2: examples

```pre
    部署nignx - lerna bootstrap - build - test - publish
```