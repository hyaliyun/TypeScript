import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

const nav: ThemeConfig['nav'] = [
  {
    text: '文档',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: '指南', link: '/guide/introduction' },
      { text: '上手', link: '/guide/tutorials/typescript-in-5-minutes.html' },
      { text: '手册', link: '/guide/handbook/basic-types.html' },
      { text: '进阶', link: '/guide/hand/basics.html' },
      { text: '新增功能', link: '/guide/release/typescript-5.5.html' },
      { text: '破坏改动', link: '/guide/breaking/typescript-3.6.html' },
      { text: '加密货币', link: '/drive/team' },
    ]
  },
  {
    text: '导图',
    activeMatch: `^/drive/`,
    items: [
      { text: 'TypeScript类', link: '/drive/1' },
      { text: '控制流分析', link: '/drive/2' },
      { text: 'TypeScript接口', link: '/drive/3' },
      { text: 'TypeScript类型', link: '/drive/4' },

    ]
  },
  {
    text: '书籍',
    activeMatch: `^/api/`,
    link: '/api/'
  },
  {
    text: '游乐场',
    link: 'https://www.543x.com'
  },
  {
    text: '深入',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: '资源',
        items: [
          { text: '合作伙伴', link: '/partners/' },
          { text: '主题', link: '/ecosystem/themes' },
          { text: '474x.com', link: 'https://www.474x.com' },
          { text: '494x.com', link: 'https://www.494x.com' },
          { text: '64ii.com', link: 'https://www.64ii.com' },
          { text: '81oo.com', link: 'https://www.81oo.com' }
        ]
      },
      {
        text: '官方库',
        items: [
          { text: 'Vue Router', link: 'https://e.543x.com/' },
          { text: 'Pinia', link: 'https://f.543x.com/' },
          { text: '工具指南', link: 'https://www.82ii.com' }
        ]
      },
      {
        text: '视频课程',
        items: [
          { text: 'Vue Mastery', link: 'https://g.543x.com' },
          { text: 'Vue School', link: 'https://h.543x.com' }
        ]
      },
      {
        text: '帮助',
        items: [
          { text: 'Discord 聊天', link: 'https://i.543x.com' },
          { text: 'GitHub 讨论', link: 'https://github.com/hyaliyun/TypeScript' },
          { text: 'DEV 社区', link: 'https://www.z2.pw' }
        ]
      },
      {
        text: '新闻',
        items: [
          { text: '博客', link: 'https://c.543x.com' },
          { text: 'Twitter', link: 'https://d.543x.com' },
          { text: '活动', link: 'https://e.543x.com' },
          { text: 'CMS', link: 'https://w.z2.pw' },
          { text: 'GoogleSheets', link: 'https://a.z2.pw' },
          { text: 'Tailwind', link: 'https://a.434x.com' },
          { text: 'Three.js', link: 'https://b.434x.com' },
          { text: '纪录片', link: 'https://www.youtube.com/@543x-com' },
          { text: '新闻通讯', link: '/ecosystem/newsletters' }
        ]
      }
    ]
},

  {
    text: '展示',
    link: '/partners/',
    activeMatch: `^/partners/`
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: '快速开始',
      items: [
        { text: '开始介绍', link: '/guide/introduction' },
        {
          text: '快速上手',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: '上手',
      items: [
        {
          text: 'angular-2',
          link: '/guide/tutorials/angular-2'
        },
        {
          text: 'asp.net-4',
          link: '/guide/tutorials/asp.net-4'
        },
        {
          text: 'asp.net-core',
          link: '/guide/tutorials/asp.net-core'
        },
        {
          text: 'gulp',
          link: '/guide/tutorials/gulp'
        },
        {
          text: 'knockout',
          link: '/guide/tutorials/knockout'
        },
        {
          text: 'migrating-from-javascript',
          link: '/guide/tutorials/migrating-from-javascript'
        },
        {
          text: 'react',
          link: '/guide/tutorials/react'
        },
        {
          text: 'react-and-webpack',
          link: '/guide/tutorials/react-and-webpack'
        },
        {
          text: '5 分钟了解 TypeScript',
          link: '/guide/tutorials/typescript-in-5-minutes'
        },
      ]
    },
    {
      text: '手册',
      items: [
        {
          text: 'advanced-types',
          link: '/guide/handbook/advanced-types'
        },
        {
          text: 'basic-types',
          link: '/guide/handbook/basic-types'
        },
        {
          text: 'by-example',
          link: '/guide/handbook/by-example'
        },
        {
          text: 'classes',
          link: '/guide/handbook/classes'
        },
        {
          text: 'compiler-options',
          link: '/guide/handbook/compiler-options'
        },
        {
          text: 'compiler-options-in-msbuild',
          link: '/guide/handbook/compiler-options-in-msbuild'
        },
        {
          text: 'configuring-watch',
          link: '/guide/handbook/configuring-watch'
        },
        {
          text: 'consumption',
          link: '/guide/handbook/consumption'
        },
        {
          text: 'declaration-files',
          link: '/guide/handbook/declaration-files'
        },
        {
          text: 'declaration-merging',
          link: '/guide/handbook/declaration-merging'
        },

        {
          text: 'decorators',
          link: '/guide/handbook/decorators'
        },
        {
          text: 'deep-dive',
          link: '/guide/handbook/deep-dive'
        },
        {
          text: 'do-s-and-don-ts',
          link: '/guide/handbook/do-s-and-don-ts'
        },
        {
          text: 'enums',
          link: '/guide/handbook/enums'
        },
        {
          text: 'functions',
          link: '/guide/handbook/functions'
        },

        {
          text: 'generics',
          link: '/guide/handbook/generics'
        },
        {
          text: 'global.d.ts',
          link: '/guide/handbook/global.d.ts'
        },
        {
          text: 'global-modifying-module.d.ts',
          link: '/guide/handbook/global-modifying-module.d.ts'
        },

        {
          text: 'global-plugin.d.ts',
          link: '/guide/handbook/global-plugin.d.ts'
        },
        {
          text: 'integrating-with-build-tools',
          link: '/guide/handbook/integrating-with-build-tools'
        },

        {
          text: 'interfaces',
          link: '/guide/handbook/interfaces'
        },
        {
          text: 'introduction',
          link: '/guide/handbook/introduction'
        },
        {
          text: 'iterators-and-generators',
          link: '/guide/handbook/iterators-and-generators'
        },
        {
          text: 'javascript',
          link: '/guide/handbook/javascript'
        },
        {
          text: 'jsx',
          link: '/guide/handbook/jsx'
        },
        {
          text: 'library-structures',
          link: '/guide/handbook/library-structures'
        },
        {
          text: 'literal-types',
          link: '/guide/handbook/literal-types'
        },

        {
          text: 'mixins',
          link: '/guide/handbook/mixins'
        },

        {
          text: 'module.d.ts',
          link: '/guide/handbook/module.d.ts'
        },
        {
          text: 'module-class.d.ts',
          link: '/guide/handbook/module-class.d.ts'
        },
        {
          text: 'module-function.d.ts',
          link: '/guide/handbook/module-function.d.ts'
        },
        {
          text: 'module-plugin.d.ts',
          link: '/guide/handbook/module-plugin.d.ts'
        },
        {
          text: 'module-resolution',
          link: '/guide/handbook/module-resolution'
        },
        {
          text: 'modules',
          link: '/guide/handbook/modules'
        },
        {
          text: 'namespaces',
          link: '/guide/handbook/namespaces'
        },
        {
          text: 'namespaces-and-modules',
          link: '/guide/handbook/namespaces-and-modules'
        },

                {
          text: 'nightly-builds',
          link: '/guide/handbook/nightly-builds'
        },
        {
          text: 'project-config',
          link: '/guide/handbook/project-config'
        },

        {
          text: 'project-references',
          link: '/guide/handbook/project-references'
        },
        {
          text: 'publishing',
          link: '/guide/handbook/publishing'
        },
        {
          text: 'reference',
          link: '/guide/handbook/reference'
        },
        {
          text: 'symbols',
          link: '/guide/handbook/symbols'
        },
        {
          text: 'templates',
          link: '/guide/handbook/templates'
        },
        {
          text: 'triple-slash-directives',
          link: '/guide/handbook/triple-slash-directives'
        },
        {
          text: 'tsconfig.json',
          link: '/guide/handbook/tsconfig.json'
        },
        {
          text: 'type-checking-javascript-files',
          link: '/guide/handbook/type-checking-javascript-files'
        },
        {
          text: 'type-compatibility',
          link: '/guide/handbook/type-compatibility'
        },
        {
          text: 'type-inference',
          link: '/guide/handbook/type-inference'
        },
        {
          text: 'typings-for-npm-packages',
          link: '/guide/handbook/typings-for-npm-packages'
        },
        {
          text: 'unions-and-intersections',
          link: '/guide/handbook/unions-and-intersections'
        },
        {
          text: 'utility-types',
          link: '/guide/handbook/utility-types'
        },
        {
          text: 'variable-declarations',
          link: '/guide/handbook/variable-declarations'
        },

      ]
    },
    {
      text: '手册（进阶）',
      items: [
        {
          text: 'architectural-overview',
          link: '/guide/hand/architectural-overview'
        },
        {
          text: 'basics',
          link: '/guide/hand/basics'
        },
        {
          text: 'classes',
          link: '/guide/hand/classes'
        },
        {
          text: 'coding_guidelines',
          link: '/guide/hand/coding_guidelines'
        },
        {
          text: 'common-errors',
          link: '/guide/hand/common-errors'
        },
        {
          text: 'conditional-types',
          link: '/guide/hand/conditional-types'
        },
        {
          text: 'creating-types-from-types',
          link: '/guide/hand/creating-types-from-types'
        },
        {
          text: 'everyday-types',
          link: '/guide/hand/everyday-types'
        },
        {
          text: 'generics',
          link: '/guide/hand/generics'
        },
        {
          text: 'indexed-access-types',
          link: '/guide/hand/indexed-access-types'
        },
        {
          text: 'keyof-type-operator',
          link: '/guide/hand/keyof-type-operator'
        },
        {
          text: 'mapped-types',
          link: '/guide/hand/mapped-types'
        },
        {
          text: 'modules',
          link: '/guide/hand/modules'
        },
        {
          text: 'more-on-functions',
          link: '/guide/hand/more-on-functions'
        },
        {
          text: 'narrowing',
          link: '/guide/hand/narrowing'
        },

        {
          text: 'object-types',
          link: '/guide/hand/object-types'
        },
        {
          text: 'roadmap',
          link: '/guide/hand/roadmap'
        },
        {
          text: 'template-literal-types',
          link: '/guide/hand/template-literal-types'
        },
        {
          text: 'the-handbook',
          link: '/guide/hand/the-handbook'
        },
        {
          text: 'this-in-typescript',
          link: '/guide/hand/this-in-typescript'
        },

                {
          text: 'typeof-type-operator',
          link: '/guide/hand/typeof-type-operator'
        },
        {
          text: 'typescript-editor-support',
          link: '/guide/hand/typescript-editor-support'
        },
        {
          text: 'using-typescript-with-asp.net-5',
          link: '/guide/hand/using-typescript-with-asp.net-5'
        },
        {
          text: 'wiki',
          link: '/guide/hand/wiki'
        },
      ]
    },
    {
      text: '版本发布说明',
      items: [
        { text: 'typescript-5.5', link: '/guide/release/typescript-5.5' },
        { text: 'typescript-5.4', link: '/guide/release/typescript-5.4' },
        { text: 'typescript-5.3', link: '/guide/release/typescript-5.3' },
        { text: 'typescript-5.2', link: '/guide/release/typescript-5.2' },
        { text: 'typescript-5.1', link: '/guide/release/typescript-5.1' },
        { text: 'typescript-5.0', link: '/guide/release/typescript-5.0' },
        { text: 'typescript-4.9', link: '/guide/release/typescript-4.9' },
        { text: 'typescript-4.8', link: '/guide/release/typescript-4.8' },
        { text: 'typescript-4.7', link: '/guide/release/typescript-4.7' },
        { text: 'typescript-4.6', link: '/guide/release/typescript-4.6' },
        { text: 'typescript-4.5', link: '/guide/release/typescript-4.5' },
        { text: 'typescript-4.4', link: '/guide/release/typescript-4.4' },
        { text: 'typescript-4.3', link: '/guide/release/typescript-4.3' },
        { text: 'typescript-4.2', link: '/guide/release/typescript-4.2' },
        { text: 'typescript-4.1', link: '/guide/release/typescript-4.1' },
        { text: 'typescript-4.0', link: '/guide/release/typescript-4.0' },
        { text: 'typescript-3.9', link: '/guide/release/typescript-3.9' },
        { text: 'typescript-3.8', link: '/guide/release/typescript-3.8' },
        { text: 'typescript-3.7', link: '/guide/release/typescript-3.7' },
        { text: 'typescript-3.6', link: '/guide/release/typescript-3.6' },
        { text: 'typescript-3.5', link: '/guide/release/typescript-3.5' },
        { text: 'typescript-3.4', link: '/guide/release/typescript-3.4' },
        { text: 'typescript-3.3', link: '/guide/release/typescript-3.3' },
        { text: 'typescript-3.2', link: '/guide/release/typescript-3.2' },
        { text: 'typescript-3.1', link: '/guide/release/typescript-3.1' },
        { text: 'typescript-3.0', link: '/guide/release/typescript-3.0' },
        { text: 'typescript-2.9', link: '/guide/release/typescript-2.9' },
        { text: 'typescript-2.8', link: '/guide/release/typescript-2.8' },
        { text: 'typescript-2.7', link: '/guide/release/typescript-2.7' },
        { text: 'typescript-2.6', link: '/guide/release/typescript-2.6' },
        { text: 'typescript-2.5', link: '/guide/release/typescript-2.5' },
        { text: 'typescript-2.4', link: '/guide/release/typescript-2.4' },
        { text: 'typescript-2.3', link: '/guide/release/typescript-2.3' },
        { text: 'typescript-2.2', link: '/guide/release/typescript-2.2' },
        { text: 'typescript-2.1', link: '/guide/release/typescript-2.1' },
        { text: 'typescript-2.0', link: '/guide/release/typescript-2.0' },
        { text: 'typescript-1.8', link: '/guide/release/typescript-1.8' },
        { text: 'typescript-1.7', link: '/guide/release/typescript-1.7' },
        { text: 'typescript-1.6', link: '/guide/release/typescript-1.6' },
        { text: 'typescript-1.5', link: '/guide/release/typescript-1.5' },
        { text: 'typescript-1.4', link: '/guide/release/typescript-1.4' },
        { text: 'typescript-1.3', link: '/guide/release/typescript-1.3' },
        { text: 'typescript-1.1', link: '/guide/release/typescript-1.1' },
      ]
    },
    {
      text: '破坏性改动',
      items: [
        { text: 'typescript-3.6', link: '/guide/breaking/typescript-3.6' },
        { text: 'typescript-3.5', link: '/guide/breaking/typescript-3.5' },
        { text: 'typescript-3.4', link: '/guide/breaking/typescript-3.4' },
        { text: 'typescript-3.2', link: '/guide/breaking/typescript-3.2' },
        { text: 'typescript-3.1', link: '/guide/breaking/typescript-3.1' },
        { text: 'typescript-3.0', link: '/guide/breaking/typescript-3.0' },
        { text: 'typescript-2.9', link: '/guide/breaking/typescript-2.9' },
        { text: 'typescript-2.8', link: '/guide/breaking/typescript-2.8' },
        { text: 'typescript-2.7', link: '/guide/breaking/typescript-2.7' },
        { text: 'typescript-2.6', link: '/guide/breaking/typescript-2.6' },
        { text: 'typescript-2.4', link: '/guide/breaking/typescript-2.4' },
        { text: 'typescript-2.3', link: '/guide/breaking/typescript-2.3' },
        { text: 'typescript-2.2', link: '/guide/breaking/typescript-2.2' },
        { text: 'typescript-2.1', link: '/guide/breaking/typescript-2.1' },
        { text: 'typescript-2.0', link: '/guide/breaking/typescript-2.0' },
        { text: 'typescript-1.8', link: '/guide/breaking/typescript-1.8' },
        { text: 'typescript-1.7', link: '/guide/breaking/typescript-1.7' },
        { text: 'typescript-1.6', link: '/guide/breaking/typescript-1.6' },
        { text: 'typescript-1.5', link: '/guide/breaking/typescript-1.5' },
        { text: 'typescript-1.4', link: '/guide/breaking/typescript-1.4' },
        { text: 'typescript-1.1', link: '/guide/breaking/typescript-1.1' },
      ]
    },
  ],
  '/api/': [
    {
      text: '简介',
      items: [
        { text: 'get-typescript', link: '/api/introduction/get-typescript' },
        { text: 'hello-typescript', link: '/api/introduction/hello-typescript' },
        { text: 'what-is-typescript', link: '/api/introduction/what-is-typescript' },
        { text: 'why-typescript', link: '/api/introduction/why-typescript' },
      ]
    },
    {
      text: '基础',
      items: [
        { text: 'any', link: '/api/basics/any' },
        { text: 'built-in-objects', link: '/api/basics/built-in-objects' },
        { text: 'declaration-files', link: '/api/basics/declaration-files' },
        { text: 'primitive-data-types', link: '/api/basics/primitive-data-types' },
        { text: 'type-assertion', link: '/api/basics/type-assertion' },
        { text: 'type-inference', link: '/api/basics/type-inference' },
        { text: 'type-of-array', link: '/api/basics/type-of-array' },
        { text: 'type-of-function', link: '/api/basics/type-of-function' },
        { text: 'type-of-object-interfaces', link: '/api/basics/type-of-object-interfaces' },
        { text: 'union-types', link: '/api/basics/union-types' },

      ]
    },
    {
      text: '进阶',
      items: [
        { text: 'class', link: '/api/advanced/class' },
        { text: 'class-and-interfaces', link: '/api/advanced/class-and-interfaces' },
        { text: 'declaration-merging', link: '/api/advanced/declaration-merging' },
        { text: 'decorator', link: '/api/advanced/decorator' },
        { text: 'enum', link: '/api/advanced/enum' },
        { text: 'further-reading', link: '/api/advanced/further-reading' },
        { text: 'generics', link: '/api/advanced/generics' },
        { text: 'string-literal-types', link: '/api/advanced/string-literal-types' },
        { text: 'tuple', link: '/api/advanced/tuple' },
        { text: 'type-aliases', link: '/api/advanced/type-aliases' },
        { text: 'compiler-options', link: '/api/advanced/compiler-options' },
        { text: 'lint', link: '/api/advanced/lint' },

      ]
    },
    {
      text: '理解',
      items: [
        { text: 'ambient', link: '/api/new/ambient' },
        { text: 'ast', link: '/api/new/ast' },
        { text: 'avoidExportDefault', link: '/api/new/avoidExportDefault' },
        { text: 'barrel', link: '/api/new/barrel' },
        { text: 'bind', link: '/api/new/bind' },
        { text: 'binder', link: '/api/new/binder' },
        { text: 'buildToggles', link: '/api/new/buildToggles' },
        { text: 'callable', link: '/api/new/callable' },
        { text: 'checker', link: '/api/new/checker' },
        { text: 'class', link: '/api/new/class' },
        { text: 'classAreUseful', link: '/api/new/classAreUseful' },
        { text: 'commandline-behavior', link: '/api/new/commandline-behavior' },
        { text: 'comments', link: '/api/new/comments' },
        { text: 'common', link: '/api/new/common' },
        { text: 'common-bug-not-bugs', link: '/api/new/common-bug-not-bugs' },
        { text: 'common-feature-request', link: '/api/new/common-feature-request' },
        { text: 'compilationContext', link: '/api/new/compilationContext' },
        { text: 'covarianceAndContravariance', link: '/api/new/covarianceAndContravariance' },
        { text: 'createArrays', link: '/api/new/createArrays' },
        { text: 'curry', link: '/api/new/curry' },
        { text: 'declarationspaces', link: '/api/new/declarationspaces' },
        { text: 'decorators', link: '/api/new/decorators' },
        { text: 'discrominatedUnion', link: '/api/new/discrominatedUnion' },
        { text: 'dynamicImportExpressions', link: '/api/new/dynamicImportExpressions' },
        { text: 'emitter', link: '/api/new/emitter' },
        { text: 'enums', link: '/api/new/enums' },
        { text: 'exceptionsHanding', link: '/api/new/exceptionsHanding' },
        { text: 'freshness', link: '/api/new/freshness' },
        { text: 'function', link: '/api/new/function' },
        { text: 'functionParameters', link: '/api/new/functionParameters' },
        { text: 'functions', link: '/api/new/functions' },
        { text: 'generices', link: '/api/new/generices' },
        { text: 'generics', link: '/api/new/generics' },
        { text: 'glossary-and-terms', link: '/api/new/glossary-and-terms' },
        { text: 'indexSignatures', link: '/api/new/indexSignatures' },
        { text: 'infer', link: '/api/new/infer' },
        { text: 'interfaces', link: '/api/new/interfaces' },
        { text: 'interpreting', link: '/api/new/interpreting' },
        { text: 'jsx-and-react', link: '/api/new/jsx-and-react' },
        { text: 'lazyObjectLiteralInitialization', link: '/api/new/lazyObjectLiteralInitialization' },
        { text: 'lib', link: '/api/new/lib' },
        { text: 'limitPropertySetters', link: '/api/new/limitPropertySetters' },
        { text: 'literals', link: '/api/new/literals' },
        { text: 'metadata', link: '/api/new/metadata' },
        { text: 'migrating', link: '/api/new/migrating' },
        { text: 'mixins', link: '/api/new/mixins' },
        { text: 'modules', link: '/api/new/modules' },
        { text: 'movingTypes', link: '/api/new/movingTypes' },
        { text: 'namespaces', link: '/api/new/namespaces' },
        { text: 'neverType', link: '/api/new/neverType' },
        { text: 'nominalTyping', link: '/api/new/nominalTyping' },
        { text: 'nonReactJSX', link: '/api/new/nonReactJSX' },
        { text: 'outFileCaution', link: '/api/new/outFileCaution' },
        { text: 'overview', link: '/api/new/overview' },
        { text: 'parser', link: '/api/new/parser' },
        { text: 'program', link: '/api/new/program' },
        { text: 'reactJSX', link: '/api/new/reactJSX' },
        { text: 'readonly', link: '/api/new/readonly' },
        { text: 'scanner', link: '/api/new/scanner' },
        { text: 'singletonPatern', link: '/api/new/singletonPatern' },
        { text: 'statefulFunctions', link: '/api/new/statefulFunctions' },
        { text: 'staticConstructors', link: '/api/new/staticConstructors' },
        { text: 'stringBasedEmuns', link: '/api/new/stringBasedEmuns' },
        { text: 'support', link: '/api/new/support' },
        { text: 'thing-that-dont-work', link: '/api/new/thing-that-dont-work' },
        { text: 'thisType', link: '/api/new/thisType' },
        { text: 'truthy', link: '/api/new/truthy' },
        { text: 'tsconfig-behavior', link: '/api/new/tsconfig-behavior' },
        { text: 'typeAssertion', link: '/api/new/typeAssertion' },
        { text: 'typeCompatibility', link: '/api/new/typeCompatibility' },
        { text: 'typeGuard', link: '/api/new/typeGuard' },
        { text: 'type-guards', link: '/api/new/type-guards' },
        { text: 'typeInference', link: '/api/new/typeInference' },
        { text: 'typeInstantiation', link: '/api/new/typeInstantiation' },
        { text: 'types', link: '/api/new/types' },
        { text: 'typesafeEventEmitter', link: '/api/new/typesafeEventEmitter' },
        { text: 'typescript-3.7', link: '/api/new/typescript-3.7' },
        { text: 'typescript-3.8', link: '/api/new/typescript-3.8' },
        { text: 'typescript-3.9', link: '/api/new/typescript-3.9' },
        { text: 'type-system-behavior', link: '/api/new/type-system-behavior' },

      ]
    },
  ],

}

// Placeholder of the i18n config for @TypeScript-translations.
// const i18n: ThemeConfig['i18n'] = {
// }

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://www.82oo.com'
  },

  lang: 'zh',
  title: 'TypeScript',
  description: 'TypeScript是具有类型语法的JavaScript',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:url', content: 'https://www.252x.com' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'TypeScript' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'TypeScript是具有类型语法的JavaScript'
      }
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: '/images/logo.png'
      }
    ],
    ['meta', { name: 'twitter:site', content: '@TypeScript' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://f.543x.com'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/uwu.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=TypeScript&type=top',
        async: 'true'
      }
    ]
  ],

  themeConfig: {
    logo: '/images/logo.png',
    nav,
    sidebar,
    // Placeholder of the i18n config for @TypeScript-translations.
    // i18n,

    localeLinks: [
      {
        link: 'https://g.543x.com',
        text: '简体中文',
        repo: 'https://github.com/hyaliyun/TypeScript'
      },
      {
        link: '/translations/',
        text: 'Help Us Translate!',
        isTranslationsDesc: true
      }
    ],

    algolia: {
      indexName: 'TypeScript',
      appId: 'ML0LEBN7FQ',
      apiKey: '21cf9df0734770a2448a9da64a700c22',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/hyaliyun/TypeScript/' },
    ],

    editLink: {
      repo: 'hyaliyun/TypeScript',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://www.543x.com'
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} TypeScript`
    }
  },

  markdown: {
    theme: 'github-dark',
    config(md) {
      md.use(headerPlugin)
      // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  root: 'src',
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true
  }
});
