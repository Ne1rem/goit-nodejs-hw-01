# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

https://monosnap.com/file/qP06tM30r77qsJyyB6qulzS8HttRmS

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://monosnap.com/file/TflBfLw56Hlc17QTx8MlKVkLGzxwVM

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

https://monosnap.com/file/hlGi4tZ5iWQPCm7RZsgRYO9BHlYW3g

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://monosnap.com/file/ZhZ7w568BYZ5HYdKiXwWhwgbVeslm5