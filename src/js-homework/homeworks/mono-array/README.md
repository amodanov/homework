# Моно-массив

---

### Описание

Моно-массивом называется массив который либо не изменяется,
либо только возрастает, либо только убывает.
Элементы в возрастающих или убывающих массивах могут повторяться.

Напишите алгоритм, который будет возвращать true на моно-массивы.

### Дополнительные вводные

```javascript
isMonoArray([1, 2, 3]); // -> true
isMonoArray([3, 2, 1]); // -> true
isMonoArray([1, 1, 1]); // -> true
isMonoArray([1, 1, 2, 2, 3, 3]); // -> true
isMonoArray([3, 3, 2, 2, 1, 1]); // -> true

isMonoArray([3, 2, 1, 3, 2, 1]); // -> false
isMonoArray([1, 2, 1]); // -> false
```
