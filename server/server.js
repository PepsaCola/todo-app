require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

// Секретний ключ (бере значення з .env файлу)
const SECRET_KEY = process.env.JWT_SECRET || "super_secret_key";

// Middleware
app.use(cors());
app.use(bodyParser.json());

const getData = () => JSON.parse(fs.readFileSync("db.json", "utf8"));
const saveData = (data) => fs.writeFileSync("db.json", JSON.stringify(data, null, 2));

app.post("/users/add", async (req, res) => {
    try {
        const data = getData();
        const { username, email, password, userId, tasks } = req.body;

        // Проверяем, существует ли уже пользователь с таким email
        const existingUser = data.users.find(user => user.email === email);
        if (existingUser) {
            return res.status(400).json({ message: "Користувач з таким email вже існує" });
        }

        // Хешируем пароль перед сохранением
        const hashedPassword = await bcrypt.hash(password, 10);

        // Добавляем пользователя в базу
        const newUser = {
            username,
            email,
            password: hashedPassword, // Сохраняем зашифрованный пароль
            userId: userId , // Если ID нет, генерируем новый
            tasks: tasks || []
        };

        data.users.push(newUser);
        saveData(data);

        res.status(201).json({ message: "Користувача додано успішно" });
    } catch (error) {
        res.status(500).json({ message: "Помилка сервера", error: error.message });
    }
});

// Отримати користувача за email
app.get("/users/:email", (req, res) => {
    const users = getData().users;
    const user = users.find((u) => u.email === req.params.email);
    user ? res.json(user) : res.status(404).json({ message: "Користувача не знайдено" });
});

// 🔹 1. Ендпоінт для логіна (створення токена)
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const users = getData().users;

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

    res.json({ accessToken: token });
});

app.post("/users/:email/tasks", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.params.email);
    if (!user) return res.status(404).json({ message: "Користувача не знайдено" });
    user.tasks.push(req.body);
    saveData(data);
    res.json({ message: "Контакт додано успішно" });
});

// 🔹 2. Middleware для перевірки токена
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Access denied" });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user; // Зберігаємо декодовані дані

        next();
    });
};

// 🔹 3. Захищений маршрут (доступний лише з токеном)
app.get("/get-user", authenticateToken, (req, res) => {
    const users = getData().users;
    const user = users.find((u) => u.email === req.user.email);
    user ? res.json(user) : res.status(404).json({ message: "Користувача не знайдено" });
});

app.post("/board", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    user.boards.push({...req.body.board,columns:[]});

    saveData(data);
    res.json({ message: "Дошку додано успішно" });
})

app.put("/board/:id", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const board = user.boards.find((b) => b.id === req.params.id);

    if (!board) {
        return res.status(404).json({ message: "Board not found" });
    }

    // Обновляем доску
    board.name = req.body.board.name;
    board.icon = req.body.board.icon;
    board.img = req.body.board.img;

    saveData(data); // Сохраняем изменения
    res.json({ message: "Board updated successfully", board });
})

app.delete("/board/:id", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const boardIndex = user.boards.findIndex((b) => b.id === req.params.id);
    if (boardIndex === -1) {
        return res.status(404).json({ message: "Board not found" });
    }
    user.boards.splice(boardIndex,1)
    saveData(data);

    res.status(200).json({ message: "Board deleted successfully" });
})

app.post("/add-column/:boardId", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    const board = user.boards.find((b) => b.id === req.params.boardId);
    if (!board) {
        return res.status(404).json({ message: "Board not found" });
    }
    const column = {...req.body.column,tasks:[]}
    board.columns.push(column);
    saveData(data);
    res.json({message: "Column was added successfully"});
})

app.put("/column/:columnId", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    const board = user.boards.find((b) => b.id === req.body.boardId);
    if (!board) {
        return res.status(404).json({ message: "Board not found" });
    }
    const column = board.columns.find((b) => b.id === req.params.columnId);
    if (!column) {
        return res.status(404).json({ message: "Column not found" });
    }
    column.name = req.body.title;
    saveData(data);
    res.json({message: "Column updated successfully", column});
})

app.delete("/column/:columnId", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    const board = user.boards.find((b) => b.id === req.body.boardId);
    if (!board) {
        return res.status(404).json({ message: "Board not found" });
    }
    const columnIndex = board.columns.findIndex((b) => b.id === req.params.columnId);
    if (columnIndex === -1) {
        return res.status(404).json({ message: "Column not found" });
    }
    board.columns.splice(columnIndex, 1);
    saveData(data);

    res.status(200).json({ message: "Column deleted successfully" });
})

app.post("/task/:boardId/:columnId/", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const board = user.boards.find((b) => b.id === req.params.boardId);
    if (!board) {
        return res.status(404).json({ message: "Board not found" });
    }
    const column = board.columns.find((b) => b.id === req.params.columnId);
    if (!column) {
        return res.status(404).json({ message: "Column not found" });
    }
    column.tasks.push(req.body.task);
    saveData(data);
    res.json({message: "Task created successfully"});
})

app.put("/task/:boardId/:columnId/", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const board = user.boards.find((b) => b.id === req.params.boardId);
    if (!board) {
        return res.status(404).json({ message: "Board not found" });
    }
    const column = board.columns.find((b) => b.id === req.params.columnId);
    if (!column) {
        return res.status(404).json({ message: "Column not found" });
    }
    const task = column.tasks.find((t)=>t.id === req.body.task.id);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    task.title = req.body.task.title;
    task.description = req.body.task.description;
    task.deadline = req.body.task.deadline;
    task.date = req.body.task.date;
    task.priority = req.body.task.priority;

    saveData(data);
    res.json({message: "Task updated successfully"});
})

app.delete("/task/:boardId/:columnId/:taskId", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const board = user.boards.find((b) => b.id === req.params.boardId);
    if (!board) {
        return res.status(404).json({ message: "Board not found" });
    }
    const column = board.columns.find((b) => b.id === req.params.columnId);
    if (!column) {
        return res.status(404).json({ message: "Column not found" });
    }
    const taskIndex = column.tasks.findIndex((t)=>t.id === req.params.taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }
    column.tasks.splice(taskIndex, 1);
    saveData(data);
    res.json({message: "Task deleted successfully"});
})

app.put("/task/:boardId/:columnId/:toColumnId/:taskId", (req, res) => {
    const data = getData();
    const user = data.users.find((u) => u.email === req.body.email);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const board = user.boards.find((b) => b.id === req.params.boardId);
    if (!board) {
        return res.status(404).json({ message: "Board not found" });
    }

    const column = board.columns.find((c) => c.id === req.params.columnId);
    if (!column) {
        return res.status(404).json({ message: "Column not found" });
    }

    const taskIndex = column.tasks.findIndex((t) => t.id === req.params.taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    const toColumn = board.columns.find((c) => c.id === req.params.toColumnId);
    if (!toColumn) {
        return res.status(404).json({ message: "Target column not found" });
    }

    const [task] = column.tasks.splice(taskIndex, 1); // Удаляем задачу и получаем ее в `task`
    toColumn.tasks.push(task); // Перемещаем в новую колонку

    saveData(data);
    res.json({ message: "Task replaced successfully" });
});


// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
