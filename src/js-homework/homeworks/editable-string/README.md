# Является ли строка производной подстроки

---

### Описание

Реализовать метод, принимающий в себя две строки, и проверяющий возможность
получения первой строки из второй не более чем за одно исправление
(удаление, добавление, изменение символа).

### Дополнительные вводные

```javascript
editable('', 't'); // true
editable('cat', 'catss'); // false
editable('cat', 'dog'); // false
editable('cat', 'cats'); // true
editable('cat', 'cut'); // true
editable('cat', 'cast'); // true
editable('cat', 'at'); // true
editable('cat', 'acts'); // false
```
