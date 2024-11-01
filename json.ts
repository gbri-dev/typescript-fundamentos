import {
  createApp,
  createRouter,
  defineEventHandler,
  eventHandler,
  getRouterParam,
  readBody,
} from "h3";
import fs from "node:fs";
import path from "node:path";

interface Menu {
  id: number;
  nome: string;
}

const filePath = path.join(process.cwd(), "menuList.json");

let nextId = 1;

// Função para ler os dados do arquivo JSON
const readMenuList = (): Menu[] => {
  if (!fs.existsSync(filePath)) {
    return []; // Retorna uma lista vazia se o arquivo não existir
  }
  const data = fs.readFileSync(filePath, "utf8");
  const menuList = JSON.parse(data);

  if (menuList.length > 0) {
    nextId = Math.max(...menuList.map((item: { id: any }) => item.id)) + 1;
  }
  return JSON.parse(data);
};

// Função para salvar os dados no arquivo JSON
const saveMenuList = (menuList: Menu[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(menuList, null, 2), "utf8");
};

const menuList: Menu[] = readMenuList();

export const app = createApp();

const router = createRouter()
  .get(
    "/items",
    defineEventHandler(async () => {
      return { statusCode: 200, items: menuList };
    })
  )
  .get(
    "/items/:id",
    defineEventHandler(async (event) => {
      const id = Number(getRouterParam(event, "id"));
      if (id <= 0) return { statusCode: 400, message: "ID inválido." };

      if (id) {
        const item = menuList.find((item) => item.id === id);
        return item
          ? { statusCode: 200, item }
          : { statusCode: 404, message: "Item não encontrado." };
      }
    })
  )
  .post(
    "/create/",
    eventHandler(async (event) => {
      try {
        const body = await readBody(event);
        const nome = body.nome;

        if (!nome) {
          return { statusCode: 400, message: "Nome é obrigatório." };
        }

        const newMenuItem: Menu = {
          id: nextId++,
          nome,
        };

        menuList.push(newMenuItem);
        saveMenuList(menuList); // Salva a lista atualizada no arquivo

        return {
          statusCode: 201,
          message: "Cadastrado com sucesso!",
          item: newMenuItem,
        };
      } catch (error) {
        console.error("Erro ao cadastrar item:", error);
        return { statusCode: 500, message: "Erro ao cadastrar item." };
      }
    })
  )
  .put(
    "/update/:id",
    defineEventHandler(async (event) => {
      try {
        const id = getRouterParam(event, "id");
        const body = await readBody(event);
        const nome = body.nome;

        if (!id) {
          return { statusCode: 400, message: "ID inválido." };
        }

        if (!nome) {
          return { statusCode: 400, message: "Nome é obrigatório." };
        }

        const itemIndex = menuList.findIndex((item) => item.id === Number(id));
        if (itemIndex === -1) {
          return { statusCode: 404, message: "Item não encontrado." };
        }

        menuList[itemIndex].nome = nome;
        saveMenuList(menuList);

        return {
          statusCode: 200,
          message: "Item atualizado com sucesso!",
          item: menuList[itemIndex],
        };
      } catch (error) {
        console.error("Erro ao atualizar item:", error);
        return { statusCode: 500, message: "Erro ao atualizar item." };
      }
    })
  )
  .delete(
    "/delete/:id",
    defineEventHandler(async (event) => {
      try {
        const id = Number(getRouterParam(event, "id"));
        if (!id) return { statusCode: 400, message: "ID inválido." };

        const itemIndex = menuList.findIndex((item) => item.id === id);
        if (itemIndex === -1) {
          return { statusCode: 404, message: "Item não encontrado." };
        }
        menuList.splice(itemIndex, 1);
        saveMenuList(menuList);
        return { statusCode: 200, message: "Item deletado com sucesso." };
      } catch (error) {
        return { statusCode: 500, message: `Erro ao deletar item. ${error}` };
      }
    })
  )
  .patch("/", () => "PATCH: hello world")
  .head("/", () => "HEAD: hello world");

app.use(router);
