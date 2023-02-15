# Свой промис

---

### Описание

Реализовать собственный полифил функционала Promise

### Дополнительные вводные

```javascript
new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        if (isFailure) {
            reject(Error('упс'));
        } else {
            resolve(props.resultData);
        }
    }, requestExecutionTime);
});
```
