---
title: 代码、输出与数学公式
date: 2026-11-05
description: 用一篇简短示例检查代码和公式的阅读体验。
categories: [CTF, Crypto]
tags: [Python, SageMath, Mathematics]
minutes: 4
demo: true
---

## Python 与 SageMath

请准确标注代码语言；主题只负责展示，不会执行代码。

```python
def modular_power(base, exponent, modulus):
    return pow(base, exponent, modulus)

print(modular_power(7, 5, 19))
```

```sage
R = IntegerModRing(19)
R(7)^5
```

## 输出是输出

日志、Flag 和密文可以用 `text`、`output` 或 `log`，避免误当作程序代码上色。

```output
[+] Demo computation finished
11
```

## 数学排版

行内公式：$a^{p-1}\equiv 1\pmod p$。

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}
$$

## 记录推导

先写明假设，再记录验证过程与适用边界。示例不代表真实比赛记录。
