# Реализация compose

---

### Описание

Реализовать собственную реализацию compose метода.

Метод должен принимать в себя произвольное количество функций

### Дополнительные вводные

```javascript
compose(getMaxNumberByLength)(2); // -> 99

compose((number) => number + 1, getMaxNumberByLength)(2); // -> 100

compose(
    (number) => number / 2,
    (number) => number + 1,
    getMaxNumberByLength,
)(2); // -> 50
```
