import { describe, expect, it, jest, beforeEach, afterAll, afterEach } from '@jest/globals';
import mongoose from "mongoose";
import app from '../../app';
import request from "supertest";

/*
  .get("/usuarios", AuthMidleware, UsuarioController.listarUsuarios)
  .get("/usuarios/:id", AuthMidleware, UsuarioController.listarUsuarioPorId)
  .post("/usuarios", AuthMidleware, UsuarioController.cadastrarUsuario)
  .put("/usuarios/:id", AuthMidleware, UsuarioController.atualizarUsuario)
  .patch("/usuarios/:id", AuthMidleware, UsuarioController.atualizarUsuario)
  .delete("/usuarios/:id", AuthMidleware, UsuarioController.excluirUsuario)
*/

let server 
let token = false;
let idPessoa = false;

beforeEach(() => {
    const port = 3000;
    server =  app.listen(port);
} );

afterEach(() => {
    server.close();
  });

afterAll(() => {
    mongoose.connection.close();
  });


  
describe ('Autenticação', () => {
      it("Deve receber um token de um usario válido", async () => {
        const dados = await request(app)
        .post('/login')
        .send({
            email: "4190451Rynaldo.Carvalho@live.com",
            senha:"123"
        })
        .set('Accept', 'aplication/json')
        .expect(200);
        expect(dados._body.user.email).toEqual("4190451Rynaldo.Carvalho@live.com")
        token = dados._body.token;
    });
});

describe ('/GET em pessoas', () => {
    it("Deve retornar uma lista de Pessoas", async () => {
        const dados = await request(app)
        .get('/pessoas')
        .set('Authorization', `Bearer ${token}`)
        .set('Accept', 'aplication/json')
        .expect('content-type', /json/)
        .expect(200);
        //console.log(dados._body)
        expect(dados._body.docs[1].nome).toContain('Tarsila Reis');
    });
});
