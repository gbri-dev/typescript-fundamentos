// import {
//   createApp,
//   createRouter,
//   defineEventHandler,
//   eventHandler,
//   getRouterParam,
//   readBody,
// } from "h3";
// import { Pool } from "pg";

// const pool = new Pool({
//   user: "seu_usuario",
//   host: "localhost",
//   database: "menu_db",
//   password: "sua_senha",
//   port: 5432,
// });

// export const app = createApp();

// const router = createRouter()
//   .get(
//     "/items",
//     defineEventHandler(async () => {
//       const result = await pool.query("SELECT * FROM menu_items");
//       return { statusCode: 200, items: result };
//     })
//   )
//   .get(
//     "/items/:id",
//     defineEventHandler(async (event) => {
//       const id = Number(getRouterParam(event, "id"));
//       if (id <= 0) return { statusCode: 400, message: "ID inválido." };

//       if (id) {
//         const result = await pool.query(
//           "SELECT * FROM menu_items WHERE id = $1",
//           [id]
//         );
//         return result
//           ? { statusCode: 200, result }
//           : { statusCode: 404, message: "Item não encontrado." };
//       }
//     })
//   )
//   .post(
//     "/create/",
//     eventHandler(async (event) => {
//       try {
//         const body = await readBody(event);
//         const nome = body.nome;

//         if (!nome) {
//           return { statusCode: 400, message: "Nome é obrigatório." };
//         }

//         const result = await pool.query(
//           "INSERT INTO menu_items (nome) VALUES ($1) RETURNING *",
//           [nome]
//         );

//         return {
//           statusCode: 201,
//           message: "Cadastrado com sucesso!",
//           item: result.rows[0],
//         };
//       } catch (error) {
//         console.error("Erro ao cadastrar item:", error);
//         return { statusCode: 500, message: "Erro ao cadastrar item." };
//       }
//     })
//   )
//   .put(
//     "/update/:id",
//     defineEventHandler(async (event) => {
//       try {
//         const id = getRouterParam(event, "id");
//         const body = await readBody(event);
//         const nome = body.nome;

//         if (!id) {
//           return { statusCode: 400, message: "ID inválido." };
//         }

//         if (!nome) {
//           return { statusCode: 400, message: "Nome é obrigatório." };
//         }

//         const result = await pool.query(
//           "UPDATE menu_items SET nome = $1 WHERE id = $2 RETURNING *",
//           [nome, id]
//         );
//         const updatedItem = result.rows[0];

//         if (!updatedItem) {
//           return { statusCode: 404, message: "Item não encontrado." };
//         }

//         return {
//           statusCode: 200,
//           message: "Item atualizado com sucesso!",
//           item: updatedItem,
//         };
//       } catch (error) {
//         console.error("Erro ao atualizar item:", error);
//         return { statusCode: 500, message: "Erro ao atualizar item." };
//       }
//     })
//   )
//   .delete(
//     "/delete/:id",
//     defineEventHandler(async (event) => {
//       try {
//         const id = Number(getRouterParam(event, "id"));
//         if (!id) return { statusCode: 400, message: "ID inválido." };

//         const result = await pool.query(
//           "DELETE FROM menu_items WHERE id = $1 RETURNING *",
//           [id]
//         );
//         const deletedItem = result.rows[0];

//         if (!deletedItem) {
//           return { statusCode: 404, message: "Item não encontrado." };
//         }

//         return { statusCode: 200, message: "Item deletado com sucesso." };
//       } catch (error) {
//         return { statusCode: 500, message: `Erro ao deletar item. ${error}` };
//       }
//     })
//   )
//   .patch("/", () => "PATCH: hello world")
//   .head("/", () => "HEAD: hello world");

// app.use(router);
