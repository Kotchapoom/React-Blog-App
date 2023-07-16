# Simple Blog App with React
เป็นโปรเจกต์แสดงบทความ ค้นหาบทความ

### สร้างโปรเจก React
```
npx create-reac-app <Project name>
```
####  Run Project
```
cd Project name
npm start
```
ในโปรเจกต์นี้จะมีการนำ React Router เข้ามาช่วย โดยทำการติดตั้งด้วยคำสั่ง
```
npm install react-router-dom@6 (version 6)
```
โครงสร้างคำสั่ง ของ React Router
```
<BrowserRouter>
	<Routes>
		<Route path="/" element="component"></Route>
	</Routes>
</BrowserRouter>
```
ทำการ Import router
```
import { BrowserRouter, Routes, Route } from "react-router-dom"
